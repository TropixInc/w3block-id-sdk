import {
  W3blockIdSDKOptions,
  isUserCredential,
  isTenantCredential,
  UserCredential,
  TenantCredential,
  TokenCredential,
  isTokenCredential,
  Credential,
} from '../interfaces';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { default as jwt_decode, JwtPayload } from 'jwt-decode';
import * as datefns from 'date-fns';
import { Api } from '../id/api/api';
import { CredentialType } from '../enums';

export type ApiSecurityDataType = { bearer: string };

export class W3blockIdSDK {
  public api: Api<ApiSecurityDataType>;
  protected authToken = '';
  protected authTokenDecoded: JwtPayload | undefined;
  protected refreshToken = '';
  protected options: W3blockIdSDKOptions;
  protected timer: NodeJS.Timer | undefined;

  protected defaultOptions: Partial<W3blockIdSDKOptions> = {
    autoRefresh: false,
  };

  constructor(options: W3blockIdSDKOptions) {
    this.options = Object.assign({}, this.defaultOptions, options);

    this.api = new Api<ApiSecurityDataType>({
      baseURL: options.baseURL || 'https://api.w3block.io',
      securityWorker: (securityData): AxiosRequestConfig => {
        if (!securityData?.bearer) {
          return {};
        }

        return {
          headers: {
            Authorization: `Bearer ${securityData?.bearer}`,
          },
        };
      },
      secure: true,
    });

    this.hookInterceptors();
  }

  /**
   * It enables the auto refresh timer.
   * @param force - If true, it will force the refresh of the timer.
   */
  public enableAutoRefresh(force?: boolean): void {
    if (this.options.autoRefresh && !force) return;

    this.options.autoRefresh = true;
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.triggerRefreshToken().catch((error) => console.error(error?.response?.data || error));
      }, 60_000);
    }
  }

  /**
   * It stops the auto refresh timer.
   */
  public disableAutoRefresh(): void {
    if (!this.options.autoRefresh) return;

    this.options.autoRefresh = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  /**
   * It hooks the auto refresh timer if `autoRefresh` is enable.
   */
  private hookTimer() {
    if (!this.options.autoRefresh) return;
    if (!this.timer) {
      this.enableAutoRefresh();
    }
  }

  private hookInterceptors() {
    const refreshTokenUsed = new Set<string>();

    this.api.instance.interceptors.request.use((config) => {
      if (this.isTokenExpired()) {
        this.clearTokens();
      }
      return config;
    });

    this.api.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        if (
          error?.response?.status === 401 &&
          this.authToken &&
          this.refreshToken &&
          !refreshTokenUsed.has(this.refreshToken)
        ) {
          refreshTokenUsed.add(this.refreshToken);

          try {
            await this.refreshTokens();
          } catch (error) {
            console.error('Refresh token failed', error?.response?.data || error);
            this.clearTokens();
          }
        }
        return Promise.reject(error);
      },
    );
  }

  /**
   * It clears the tokens from the class properties
   */
  public clearTokens(): void {
    this.authToken = '';
    this.authTokenDecoded = undefined;
    this.refreshToken = '';
  }

  /**
   * If the credential is a user credential, authenticate as a user. If the credential is an tenant
   * credential, authenticate as an tenant. If the credential is neither, throw an error
   */
  public async authenticate(credential: Credential): Promise<void> {
    if (isUserCredential(credential)) {
      await this.authenticateAsUser(credential);
    } else if (isTokenCredential(credential)) {
      await this.authenticateAsUserWithToken(credential);
    } else if (isTenantCredential(credential)) {
      await this.authenticateAsTenant(credential);
    } else {
      throw new Error('Invalid credentials');
    }
    this.hookTimer();
  }

  /**
   * Return the credential type.
   * @param {Credential} credential - Credential - The credential object that you want to check the
   * type of.
   * @returns CredentialType or null
   */
  public getCredentialType(credential: Credential): CredentialType | null {
    if (isUserCredential(credential)) {
      return CredentialType.User;
    } else if (isTenantCredential(credential)) {
      return CredentialType.Tenant;
    } else if (isTokenCredential(credential)) {
      return CredentialType.Token;
    }

    return null;
  }

  /**
   * If the length of the authToken is greater than 0, then the user is authenticated
   * @returns A boolean value.
   */
  public isAuthenticated(): boolean {
    return this.authToken.length > 0;
  }

  /**
   * If the token is valid, set the token and the decoded token
   * @param {string} token - The token to set.
   * @returns The token is being returned.
   */
  protected setAuthToken(token: string): void {
    if (!token || token?.length === 0) throw new Error('Invalid token');
    if (this.authToken === token) return;

    const decoded = jwt_decode<JwtPayload>(token);

    if (!decoded.exp) throw new Error('Invalid decoded token');

    this.authTokenDecoded = decoded;
    this.authToken = token;
    this.api.setSecurityData({ bearer: token });
  }

  /**
   * If the auth token is expired, refresh it
   * @returns a promise that resolves to void.
   */
  public async triggerRefreshToken(): Promise<void> {
    if (!this.authToken || !this.refreshToken) {
      return this.clearTokens();
    }

    if (!this.authTokenDecoded?.exp) {
      return;
    }

    if (this.isTokenExpired(5)) {
      await this.refreshTokens();
    }
  }

  /**
   * If the auth token is expired, return true
   * @param [offset=0] - The number of minutes before the token expires that we want to consider it
   * expired.
   * @returns A boolean value.
   */
  public isTokenExpired(offset = 0): boolean {
    if (!this.authTokenDecoded?.exp) {
      return true;
    }

    const expiresAt = this.authTokenDecoded.exp * 1000;
    return datefns.isPast(datefns.subMinutes(expiresAt, offset));
  }

  /**
   * It returns the value of the authToken property
   * @returns The authToken
   */
  public getAuthToken(): string {
    return this.authToken;
  }

  /**
   * If the new token is the same as the old token, do nothing. Otherwise, set the new token
   * @param {string} token - The token to be set.
   * @returns The refresh token is being returned.
   */
  protected setRefreshToken(token: string): void {
    if (this.refreshToken === token) return;
    this.refreshToken = token;
  }

  /**
   * This function returns the refresh token
   * @returns The refresh token.
   */
  public getRefreshToken(): string {
    return this.refreshToken;
  }

  /**
   * It sends a request to the API to refresh the access token, and if the response is successful, it
   * updates the access token and refresh token in the local storage
   */
  public async refreshTokens(): Promise<void> {
    const { data } = await this.api.auth.refreshToken({
      refreshToken: this.refreshToken,
    });

    if (!data.token) {
      this.clearTokens();
      throw new Error('Invalid response');
    }
  }

  /**
   * It takes a user credential, sends it to the API, and if the API returns a token, it sets the token
   * and refresh token in the SDK instance.
   * @param {UserCredential} credential - UserCredential
   */
  private async authenticateAsUser(credential: UserCredential): Promise<void> {
    const { data } = await this.api.auth.signIn(credential);

    if (!data.token) {
      throw new Error('Authentication failed. Please check your credentials.');
    }

    this.setAuthToken(data.token);
    this.setRefreshToken(data.refreshToken);
  }

  /**
   * It sets the token and refresh token in the SDK instance.
   * @param {TokenCredential} credential - TokenCredential
   */
  private async authenticateAsUserWithToken(credential: TokenCredential): Promise<void> {
    if (!credential.authToken) {
      throw new Error('Authentication failed. Auth token is missing.');
    }

    this.setAuthToken(credential.authToken);
    this.setRefreshToken(credential.refreshToken);
  }

  /**
   * It takes a tenant credential, sends it to the API, and if the API returns a token, it sets the token
   * and refresh token in the SDK instance.
   * @param {TenantCredential} credential - TenantCredential
   */
  private async authenticateAsTenant(credential: TenantCredential): Promise<void> {
    const { data } = await this.api.auth.signInTenant(credential);

    if (!data.token) {
      throw new Error('Authentication failed. Please check your credentials.');
    }

    this.setAuthToken(data.token);
    this.setRefreshToken(data.refreshToken);
  }

  /**
   * Get decoded token if exists.
   * @returns The decoded token.
   */
  getDecodedToken(): JwtPayload | undefined {
    return this.authTokenDecoded;
  }

  /**
   * Decode the JWT payload
   * @param {string} token - The token to decode.
   * @returns The decoded token.
   */
  static decodeToken(token: string): JwtPayload | undefined {
    return jwt_decode<JwtPayload>(token, {});
  }
}
