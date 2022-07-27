import axios from "axios";
import { W3blockIdSDK } from '../../src/index';

import MockAdapter from "axios-mock-adapter";

import { AUTH_REFRESH, AUTH_TOKEN } from "../fixtures/token";
import { SignInResponseDto } from "../../src/id/api/api";
const mock = new MockAdapter(axios);


const signInResponse: SignInResponseDto = {
  token: AUTH_TOKEN,
  refreshToken: AUTH_REFRESH,
  data: {
    id: "00000000-0000-0000-0000-000000000001",
    name: "John Doe",
  },
}

// This sets the mock adapter on the default instance
mock.onPost("/auth/signin").reply(201, signInResponse);
mock.onPost("/auth/signin/tenant").reply(201, signInResponse);

describe("SDK", () => {
  const baseURL = process.env.API_BASE_URL || 'http://localhost:6007'

  describe("connect user credential", () => {
    it("should be able to instantiate", async () => {
      const sdk = new W3blockIdSDK({
        credential: {
          email: 'pixway@w3block.io',
          password: 'ABC123def456',
          tenantId: '5bd96aaf-1888-493e-b84e-7c54a4731868',
        },
        baseURL,
        autoRefresh: false
      });
      expect(sdk).toBeDefined();
    });


    it("should be able to connect", async () => {
      const sdk = new W3blockIdSDK({
        credential: {
          email: 'pixway@w3block.io',
          password: 'ABC123def456',
          tenantId: '5bd96aaf-1888-493e-b84e-7c54a4731868',
        },
        baseURL,
        autoRefresh: false
      });
      expect(sdk).toBeDefined();

      await sdk.connect();
      expect(sdk.isConnected()).toBeTruthy();
    });
  })

  describe("connect app credential", () => {
    it("should be able to instantiate", async () => {
      const sdk = new W3blockIdSDK({
        credential: {
          key: 'app-key',
          secret: 'app-secret',
          tenantId: '5bd96aaf-1888-493e-b84e-7c54a4731868',
        },
        baseURL,
        autoRefresh: false
      });
      expect(sdk).toBeDefined();
    }
    );

    it("should be able to connect", async () => {
      const sdk = new W3blockIdSDK({
        credential: {
          key: 'app-key',
          secret: 'app-secret',
          tenantId: '5bd96aaf-1888-493e-b84e-7c54a4731868',
        },
        baseURL,
        autoRefresh: false
      });
      expect(sdk).toBeDefined();
      await sdk.connect();
      expect(sdk.isConnected()).toBeTruthy();
    });
  });











});
