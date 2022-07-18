import { Api } from './api';
import { ClientOptions, isUserCredential, isAppCredential, UserCredential, AppCredential } from '../interfaces';

export class Client {
  api: Api<any>;
  authToken = '';
  refreshToken = '';
  options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;

    this.api = new Api({
      baseURL: options.baseURL || 'https://api.pixwayid.io',
    });

    this.hookInterceptors();
  }

  private hookInterceptors() {
    this.api.instance.interceptors.request.use((config) => {
      // TODO hook token refresh
      return config;
    });

    this.api.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 && this.authToken) {
          try {
            await this.refreshTokens();
          } catch (error) {
            this.clearTokens();
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public clearTokens(): void {
    this.authToken = '';
    this.refreshToken = '';
  }

  public async init(): Promise<void> {
    // TODO hook token refresh
    if (isUserCredential(this.options.credential)) {
      await this.authenticateAsUser(this.options.credential);
    } else if (isAppCredential(this.options.credential)) {
      await this.authenticateAsApp(this.options.credential);
    } else {
      throw new Error('Invalid credentials');
    }
  }

  public isAuthenticated(): boolean {
    return this.authToken !== '';
  }

  public getAuthToken(): string {
    return this.authToken;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }

  public async refreshTokens(): Promise<void> {
    const { data } = await this.api.auth.refreshToken({
      refreshToken: this.refreshToken,
    });

    if (!data.token) {
      this.authToken = '';
      this.refreshToken = '';
      throw new Error('Invalid response');
    }
  }

  private async authenticateAsUser(credential: UserCredential): Promise<string> {
    const { data } = await this.api.auth.signIn(credential);

    if (!data.token) {
      throw new Error('Authentication failed. Please check your credentials.');
    }

    this.authToken = data.token;
    this.api.setSecurityData({ token: this.authToken });

    return data.token;
  }

  private async authenticateAsApp(credential: AppCredential): Promise<string> {
    throw new Error('Not implemented');

    return 'NOT IMPLEMENTED';
  }
}
