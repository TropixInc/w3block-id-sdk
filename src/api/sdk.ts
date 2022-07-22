import { Api } from './api';
import { PixwayIdSDKOptions, isUserCredential, isAppCredential, UserCredential, AppCredential } from '../interfaces';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { default as jwt_decode, JwtPayload } from 'jwt-decode';
import * as datefns from 'date-fns';

export type ApiSecurityDataType = { bearer: string };

export class PixwayIdSDK {
  public api: Api<ApiSecurityDataType>;
  protected authToken = '';
  protected authTokenDecoded: JwtPayload | undefined;
  protected refreshToken = '';
  protected options: PixwayIdSDKOptions;
  protected timer: NodeJS.Timer | undefined;

  protected defaultOptions: Partial<PixwayIdSDKOptions> = {
    autoRefresh: true,
  };

  constructor(options: PixwayIdSDKOptions) {
    this.options = Object.assign({}, this.defaultOptions, options);

    this.api = new Api<ApiSecurityDataType>({
      baseURL: options.baseURL || 'https://api.pixwayid.io',
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

    if (options.tokens) {
      this.setAuthToken(options.tokens.authToken);
      this.setRefreshToken(options.tokens.refreshToken);
    }

    this.hookInterceptors();
  }

  private hookTimer() {
    if (!this.options.autoRefresh) return;
    if (this.timer) {
      clearInterval(this.timer);
    }

    // TODO change to a timeout approach
    this.timer = setInterval(() => {
      this.triggerRefreshToken().catch((error) => console.error(error?.response?.data || error));
    }, 60_000);
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
   * If the credential is a user credential, authenticate as a user. If the credential is an app
   * credential, authenticate as an app. If the credential is neither, throw an error
   */
  public async connect(): Promise<void> {
    if (isUserCredential(this.options.credential)) {
      await this.authenticateAsUser(this.options.credential);
    } else if (isAppCredential(this.options.credential)) {
      await this.authenticateAsApp(this.options.credential);
    } else {
      throw new Error('Invalid credentials');
    }
    this.hookTimer();
  }

  /**
   * If the length of the authToken is greater than 0, then the user is connected
   * @returns A boolean value.
   */
  public isConnected(): boolean {
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
   * and refresh token in the local storage
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
   * This function is not implemented.
   * @param {AppCredential} credential - The credential to use for authentication.
   */
  private async authenticateAsApp(credential: AppCredential): Promise<void> {
    throw new Error('Not implemented');
  }
}
