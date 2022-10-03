import axios from "axios";
import { W3blockIdSDK } from '../../src/index';

import MockAdapter from "axios-mock-adapter";

import { AUTH_REFRESH, AUTH_REFRESH2, AUTH_TOKEN, AUTH_TOKEN2, JWKS, TENANT_CREDENTIAL, TOKEN_CREDENTIAL, USER_CREDENTIAL, USER_JWT_PAYLOAD } from "../fixtures/auth";
import { RefreshTokenResponseDto, SignInResponseDto } from "../../src/id/api/api";

const mock = new MockAdapter(axios);

const signInResponse: SignInResponseDto = {
  token: AUTH_TOKEN,
  refreshToken: AUTH_REFRESH,
  data: USER_JWT_PAYLOAD,
}

const refreshTokenResponse: RefreshTokenResponseDto = {
  token: AUTH_TOKEN2,
  refreshToken: AUTH_REFRESH2,
}

const getJwksResponse = JWKS;

// This sets the mock adapter on the default instance
mock.onPost("/auth/signin").reply(201, signInResponse);
mock.onPost("/auth/signin/tenant").reply(201, signInResponse);
mock.onPost("/auth/refresh-token").reply(201, refreshTokenResponse);
mock.onGet("/auth/jwks.json").reply(200, getJwksResponse);

describe("SDK", () => {
  const baseURL = process.env.API_BASE_URL || 'http://localhost:6007'
  let sdk: W3blockIdSDK;

  beforeEach(() => {
    sdk = new W3blockIdSDK({ baseURL, autoRefresh: false });
  });

  it("should be able to create the sdk instance", async () => {
    expect(sdk).toBeDefined();
  });

  it("should be able to request public endpoints", async () => {
    expect(sdk).toBeDefined();
    const resp = await sdk.api.auth.getJwks();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  describe("authentication", () => {
    it("should be able to authenticate with user credential", async () => {
      expect(sdk.emitter).toBeDefined();
      const authChangedSpy = jest.spyOn(sdk.emitter, 'emit');

      await sdk.authenticate(USER_CREDENTIAL);
      expect(authChangedSpy).toBeCalledWith("connecting");
      expect(authChangedSpy).toBeCalledWith("authChanged", {"authToken": "", "refreshToken": ""});
      expect(authChangedSpy).toBeCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
      expect(authChangedSpy).toBeCalledWith("connected")
      expect(sdk.isAuthenticated()).toBeTruthy();
    });

    it("should be able to authenticate with user token", async () => {
      expect(sdk.emitter).toBeDefined();
      const authChangedSpy = jest.spyOn(sdk.emitter, 'emit');

      await sdk.authenticate(TOKEN_CREDENTIAL);
      expect(authChangedSpy).toBeCalledWith("connecting");
      expect(authChangedSpy).toBeCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
      expect(authChangedSpy).toBeCalledWith("connected")
      expect(sdk.isAuthenticated()).toBeTruthy();
    });

    it("should be able to authenticate with tenant credential", async () => {
      expect(sdk.emitter).toBeDefined();
      const authChangedSpy = jest.spyOn(sdk.emitter, 'emit');

      await sdk.authenticate(TENANT_CREDENTIAL);
      expect(authChangedSpy).toBeCalledWith("connecting");
      expect(authChangedSpy).toBeCalledWith("authChanged", {"authToken": "", "refreshToken": ""});
      expect(authChangedSpy).toBeCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
      expect(authChangedSpy).toBeCalledWith("connected")
      expect(sdk.isAuthenticated()).toBeTruthy();
    });
  })

  describe("re-authentication", () => {
    it("should be able to re-authenticate with user credential", async () => {
      expect(sdk).toBeDefined();
      expect(sdk.emitter).toBeDefined();
      const authChangedSpy = jest.spyOn(sdk.emitter, 'emit');

      await sdk.authenticate(USER_CREDENTIAL);
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
      sdk.clearTokens();
      expect(sdk.isAuthenticated()).toBeFalsy();
      expect(sdk.getAuthToken()).toBe('');
      expect(sdk.getRefreshToken()).toBe('');
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": "", "refreshToken": ""});
      await sdk.reAuthenticate();
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
    });

    it("should be able to re-authenticate with user token", async () => {
      expect(sdk).toBeDefined();
      expect(sdk.emitter).toBeDefined();
      const authChangedSpy = jest.spyOn(sdk.emitter, 'emit');

      await sdk.authenticate(TOKEN_CREDENTIAL);
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
      sdk.clearTokens();
      expect(sdk.isAuthenticated()).toBeFalsy();
      expect(sdk.getAuthToken()).toBe('');
      expect(sdk.getRefreshToken()).toBe('');
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": "", "refreshToken": ""});
      await sdk.reAuthenticate();
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
    });

    it("should be able to re-authenticate with tenant credential", async () => {
      expect(sdk).toBeDefined();
      expect(sdk.emitter).toBeDefined();
      const authChangedSpy = jest.spyOn(sdk.emitter, 'emit');

      await sdk.authenticate(TENANT_CREDENTIAL);
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
      sdk.clearTokens();
      expect(sdk.isAuthenticated()).toBeFalsy();
      expect(sdk.getAuthToken()).toBe('');
      expect(sdk.getRefreshToken()).toBe('');
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": "", "refreshToken": ""});
      await sdk.reAuthenticate();
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
    });

    it("should be able to refresh token", async () => {
      sdk = new W3blockIdSDK({
        baseURL,
        autoRefresh: true,
        tokenExpireOffset: -1
      });
      expect(sdk).toBeDefined();
      expect(sdk.emitter).toBeDefined();
      const authChangedSpy = jest.spyOn(sdk.emitter, 'emit');


      await sdk.authenticate(USER_CREDENTIAL);
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});

      const authToken = sdk.getAuthToken();
      const refreshToken = sdk.getRefreshToken();
      await sdk.triggerRefreshToken();
      expect(sdk.getAuthToken()).not.toBe(authToken);
      expect(sdk.getRefreshToken()).not.toBe(refreshToken);
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).toHaveBeenCalledWith("connecting");
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": "", "refreshToken": ""});
      expect(authChangedSpy).toHaveBeenCalledWith("authChanged", {"authToken": AUTH_TOKEN2, "refreshToken": AUTH_REFRESH2});
      expect(authChangedSpy).toHaveBeenCalledWith("connected");

      sdk.disableAutoRefresh();
    });
  })
});
