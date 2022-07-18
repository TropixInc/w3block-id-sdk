/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface HttpExceptionDto {
  timestamp: string;
  path: string;
  error: string;
  statusCode: number;
  message: string;
  data?: object;
}

export interface RequestConfirmationEmailDto {
  email: string;
  tenantId?: string;
}

export interface RequestPasswordResetDto {
  email: string;
  tenantId?: string;
}

export interface ResetPasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;

  /** @example user@example.com */
  email: string;
  token: string;
}

export interface LoginUserDto {
  /** @example user@example.com */
  email: string;

  /** @example P@ssw0rd */
  password: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
}

export interface SignInResponseDto {
  token: string;
  refreshToken: string;
  data: object;
}

export interface RefreshTokenDto {
  /** @example eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiI4NGViM2Q2NC01OTk4LTRjM2UtODliMS0yZTgyZmQ2NDRjMDciLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJjb21wYW55SWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJ0b2tlbkhhc2giOiI5NGFkMzFjMjcwMWI0NzQxNjk5ZjI1YTA4NWM0NmQyNDE4ZTk2MjNhYTcyYjM3MGZhZWZkNWJhYWYzYzM3YzgzIiwiaWF0IjoxNjU3MzEwMzQwLCJleHAiOjE2NTc0ODMxNDB9.epg4Grc6LkJMMxNlFbsdEc5Rq2nupXZTsFQeD-JgKZMWg4ey_ialD-mmSBehHD_xFF4Ho_BbWG1ld9aCuQBQcft4zxDfMdxogM5fMfdhAnAccM7a4J0NyKECzYHhIDe_jnrpT4QVHs4x78NIookQiKguANuSa7dNViFphpC9K5LRcxVwS6sEqT8 */
  refreshToken: string;
}

export interface RefreshTokenResponseDto {
  token: string;
  refreshToken: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'http://localhost:6007' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Pixway ID
 * @version 0.1.3
 * @baseUrl http://localhost:6007
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Authentication
     * @name VerifySignUp
     * @request GET:/auth/verify-sign-up
     */
    verifySignUp: (query: { email: string; token: string }, params: RequestParams = {}) =>
      this.request<any, void | HttpExceptionDto>({
        path: `/auth/verify-sign-up`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name RequestConfirmationEmail
     * @request POST:/auth/request-confirmation-email
     */
    requestConfirmationEmail: (data: RequestConfirmationEmailDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/auth/request-confirmation-email`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name RequestPasswordReset
     * @request POST:/auth/request-password-reset
     */
    requestPasswordReset: (data: RequestPasswordResetDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/auth/request-password-reset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name ResetPassword
     * @request POST:/auth/reset-password
     */
    resetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/auth/reset-password`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name SignIn
     * @request POST:/auth/signin
     */
    signIn: (data: LoginUserDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, HttpExceptionDto>({
        path: `/auth/signin`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name RefreshToken
     * @request POST:/auth/refresh-token
     */
    refreshToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<RefreshTokenResponseDto, HttpExceptionDto>({
        path: `/auth/refresh-token`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name LogOut
     * @request POST:/auth/logout
     */
    logOut: (params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/auth/logout`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetJwks
     * @request GET:/auth/jwks.json
     */
    getJwks: (params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/auth/jwks.json`,
        method: 'GET',
        ...params,
      }),
  };
}
