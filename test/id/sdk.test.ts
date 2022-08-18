import axios from "axios";
import { W3blockIdSDK } from '../../src/index';

import MockAdapter from "axios-mock-adapter";

import { AUTH_REFRESH, AUTH_TOKEN, JWKS, TENANT_CREDENTIAL, TOKEN_CREDENTIAL, USER_CREDENTIAL, USER_JWT_PAYLOAD } from "../fixtures/auth";
import { SignInResponseDto } from "../../src/id/api/api";

const mock = new MockAdapter(axios);


const signInResponse: SignInResponseDto = {
  token: AUTH_TOKEN,
  refreshToken: AUTH_REFRESH,
  data: USER_JWT_PAYLOAD,
}

const getJwksResponse = JWKS;

// This sets the mock adapter on the default instance
mock.onPost("/auth/signin").reply(201, signInResponse);
mock.onPost("/auth/signin/tenant").reply(201, signInResponse);
mock.onGet("/auth/jwks.json").reply(200, getJwksResponse);

describe("SDK", () => {
  const baseURL = process.env.API_BASE_URL || 'http://localhost:6007'

  it("should be able to create the sdk instance", async () => {
    const sdk = new W3blockIdSDK({
      baseURL,
      autoRefresh: false
    });
    expect(sdk).toBeDefined();
  });

  it("should be able to request public endpoints", async () => {
    const sdk = new W3blockIdSDK({
      baseURL,
      autoRefresh: false
    });
    expect(sdk).toBeDefined();
    const resp = await sdk.api.auth.getJwks();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });

  describe("authentication", () => {
    it("should be able to authenticate with user credential", async () => {
      const sdk = new W3blockIdSDK({
        baseURL,
        autoRefresh: false
      });
      expect(sdk).toBeDefined();

      await sdk.authenticate(USER_CREDENTIAL);
      expect(sdk.isAuthenticated()).toBeTruthy();
    });

    it("should be able to authenticate with user token", async () => {
      const sdk = new W3blockIdSDK({
        baseURL,
        autoRefresh: false
      });
      expect(sdk).toBeDefined();

      await sdk.authenticate(TOKEN_CREDENTIAL);
      expect(sdk.isAuthenticated()).toBeTruthy();
    });

    it("should be able to authenticate with tenant credential", async () => {
      const sdk = new W3blockIdSDK({
        baseURL,
        autoRefresh: false
      });
      expect(sdk).toBeDefined();

      await sdk.authenticate(TENANT_CREDENTIAL);
      expect(sdk.isAuthenticated()).toBeTruthy();
    });
  })
});
