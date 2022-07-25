/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum UserRoleEnum {
  SuperAdmin = 'superAdmin',
  Admin = 'admin',
  User = 'user',
}

export enum I18NLocaleEnum {
  PtBr = 'pt-br',
  En = 'en',
}

export interface CreateAddressDto {
  street?: string;
  number?: string;
  district?: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
  coordinates?: string;
}

export interface CreateUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;

  /** @example 00000000-0000-0000-0000-000000000000 */
  tenantId?: string;

  /** @example user */
  role: UserRoleEnum;
  name: string;

  /** @example user@example.com */
  email: string;

  /** @example en */
  i18nLocale?: I18NLocaleEnum;
  address?: CreateAddressDto;

  /** @example true */
  sendEmail?: boolean;
}

export interface AddressResponseDto {
  /** @format uuid */
  id: string;

  /** @example Street */
  street?: string;

  /** @example 123 */
  number?: string;

  /** @example null */
  district?: string;

  /** @example null */
  complement?: string;

  /** @example Sao Paulo */
  city?: string;

  /** @example Sao Paulo */
  state?: string;

  /** @example Brazil */
  country?: string;

  /** @example null */
  postalCode?: string;

  /** @example null */
  coordinates?: string;
}

export type UserEntity = object;

export enum WalletTypes {
  Vault = 'vault',
  Metamask = 'metamask',
}

export enum WalletStatus {
  Unverified = 'unverified',
  Ready = 'ready',
  Blocked = 'blocked',
}

export interface WalletResponseDto {
  /** @format uuid */
  id: string;

  /** @format uuid */
  tenantId?: string;

  /** @example 0x0000000000000000000000000000000000000000 */
  address: string;

  /** @format uuid */
  ownerId?: string;
  owner: UserEntity;

  /** @example vault */
  type: WalletTypes;

  /** @example ready */
  status: WalletStatus;
}

export interface UserPublicResponseDto {
  /** @format uuid */
  id: string;

  /** @example email@example.com */
  email: string;

  /** @example true */
  verified: boolean;

  /** @example true */
  role: string;

  /** @example John Doe */
  name?: string;

  /** @format uuid */
  tenantId?: string;

  /** @format uuid */
  mainWalletId?: string;

  /** @format uuid */
  addressId?: string;
  address?: AddressResponseDto;
  mainWallet?: WalletResponseDto;
  wallets?: WalletResponseDto[];
}

export interface HttpExceptionDto {
  timestamp: string;
  path: string;
  error: string;
  statusCode: number;
  message: string;
  data?: object;
}

export interface UpdateAddressDto {
  street?: string;
  number?: string;
  district?: string;
  complement?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  coordinates?: string;
}

export interface UpdateProfileUserDto {
  name?: string;

  /** @example en */
  i18nLocale?: I18NLocaleEnum;
  address?: UpdateAddressDto;
}

export interface UpdateUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password?: string;

  /** @example user */
  role?: UserRoleEnum;
  name?: string;

  /** @example user@example.com */
  email?: string;

  /** @example en */
  i18nLocale?: I18NLocaleEnum;

  /** @example true */
  sendEmail?: boolean;
  address?: UpdateAddressDto;
}

export interface ChangePasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;
  oldPassword: string;
}

export interface MainWalletDto {
  walletId: string;
}

export interface UserTokenResponseDto {
  /** @example email@example.com */
  email?: string;

  /** @example b8ee934f8d9c6704b982c14b95ba3266fef9bba7798ed4885a05c70dbb4545435517cdd25f851e7522ad503e04ccb691a18f507b792866c3282d13abc2a09cb2;1654178219308 */
  token?: string;
}

export interface AccountCompleteRetryDto {
  email: string;
  tenantId: string;
}

export enum CountryCodeEnum {
  BGD = 'BGD',
  BEL = 'BEL',
  BFA = 'BFA',
  BGR = 'BGR',
  BIH = 'BIH',
  BRB = 'BRB',
  WLF = 'WLF',
  BLM = 'BLM',
  BMU = 'BMU',
  BRN = 'BRN',
  BOL = 'BOL',
  BHR = 'BHR',
  BDI = 'BDI',
  BEN = 'BEN',
  BTN = 'BTN',
  JAM = 'JAM',
  BVT = 'BVT',
  BWA = 'BWA',
  WSM = 'WSM',
  BES = 'BES',
  BRA = 'BRA',
  BHS = 'BHS',
  JEY = 'JEY',
  BLR = 'BLR',
  BLZ = 'BLZ',
  RUS = 'RUS',
  RWA = 'RWA',
  SRB = 'SRB',
  TLS = 'TLS',
  REU = 'REU',
  TKM = 'TKM',
  TJK = 'TJK',
  ROU = 'ROU',
  TKL = 'TKL',
  GNB = 'GNB',
  GUM = 'GUM',
  GTM = 'GTM',
  SGS = 'SGS',
  GRC = 'GRC',
  GNQ = 'GNQ',
  GLP = 'GLP',
  JPN = 'JPN',
  GUY = 'GUY',
  GGY = 'GGY',
  GUF = 'GUF',
  GEO = 'GEO',
  GRD = 'GRD',
  GBR = 'GBR',
  GAB = 'GAB',
  SLV = 'SLV',
  GIN = 'GIN',
  GMB = 'GMB',
  GRL = 'GRL',
  GIB = 'GIB',
  GHA = 'GHA',
  OMN = 'OMN',
  TUN = 'TUN',
  JOR = 'JOR',
  HRV = 'HRV',
  HTI = 'HTI',
  HUN = 'HUN',
  HKG = 'HKG',
  HND = 'HND',
  HMD = 'HMD',
  VEN = 'VEN',
  PRI = 'PRI',
  PSE = 'PSE',
  PLW = 'PLW',
  PRT = 'PRT',
  SJM = 'SJM',
  PRY = 'PRY',
  IRQ = 'IRQ',
  PAN = 'PAN',
  PYF = 'PYF',
  PNG = 'PNG',
  PER = 'PER',
  PAK = 'PAK',
  PHL = 'PHL',
  PCN = 'PCN',
  POL = 'POL',
  SPM = 'SPM',
  ZMB = 'ZMB',
  ESH = 'ESH',
  EST = 'EST',
  EGY = 'EGY',
  ZAF = 'ZAF',
  ECU = 'ECU',
  ITA = 'ITA',
  VNM = 'VNM',
  SLB = 'SLB',
  ETH = 'ETH',
  SOM = 'SOM',
  ZWE = 'ZWE',
  SAU = 'SAU',
  ESP = 'ESP',
  ERI = 'ERI',
  MNE = 'MNE',
  MDA = 'MDA',
  MDG = 'MDG',
  MAF = 'MAF',
  MAR = 'MAR',
  MCO = 'MCO',
  UZB = 'UZB',
  MMR = 'MMR',
  MLI = 'MLI',
  MAC = 'MAC',
  MNG = 'MNG',
  MHL = 'MHL',
  MKD = 'MKD',
  MUS = 'MUS',
  MLT = 'MLT',
  MWI = 'MWI',
  MDV = 'MDV',
  MTQ = 'MTQ',
  MNP = 'MNP',
  MSR = 'MSR',
  MRT = 'MRT',
  IMN = 'IMN',
  UGA = 'UGA',
  TZA = 'TZA',
  MYS = 'MYS',
  MEX = 'MEX',
  ISR = 'ISR',
  FRA = 'FRA',
  IOT = 'IOT',
  SHN = 'SHN',
  FIN = 'FIN',
  FJI = 'FJI',
  FLK = 'FLK',
  FSM = 'FSM',
  FRO = 'FRO',
  NIC = 'NIC',
  NLD = 'NLD',
  NOR = 'NOR',
  NAM = 'NAM',
  VUT = 'VUT',
  NCL = 'NCL',
  NER = 'NER',
  NFK = 'NFK',
  NGA = 'NGA',
  NZL = 'NZL',
  NPL = 'NPL',
  NRU = 'NRU',
  NIU = 'NIU',
  COK = 'COK',
  XKX = 'XKX',
  CIV = 'CIV',
  CHE = 'CHE',
  COL = 'COL',
  CHN = 'CHN',
  CMR = 'CMR',
  CHL = 'CHL',
  CCK = 'CCK',
  CAN = 'CAN',
  COG = 'COG',
  CAF = 'CAF',
  COD = 'COD',
  CZE = 'CZE',
  CYP = 'CYP',
  CXR = 'CXR',
  CRI = 'CRI',
  CUW = 'CUW',
  CPV = 'CPV',
  CUB = 'CUB',
  SWZ = 'SWZ',
  SYR = 'SYR',
  SXM = 'SXM',
  KGZ = 'KGZ',
  KEN = 'KEN',
  SSD = 'SSD',
  SUR = 'SUR',
  KIR = 'KIR',
  KHM = 'KHM',
  KNA = 'KNA',
  COM = 'COM',
  STP = 'STP',
  SVK = 'SVK',
  KOR = 'KOR',
  SVN = 'SVN',
  PRK = 'PRK',
  KWT = 'KWT',
  SEN = 'SEN',
  SMR = 'SMR',
  SLE = 'SLE',
  SYC = 'SYC',
  KAZ = 'KAZ',
  CYM = 'CYM',
  SGP = 'SGP',
  SWE = 'SWE',
  SDN = 'SDN',
  DOM = 'DOM',
  DMA = 'DMA',
  DJI = 'DJI',
  DNK = 'DNK',
  VGB = 'VGB',
  DEU = 'DEU',
  YEM = 'YEM',
  DZA = 'DZA',
  USA = 'USA',
  URY = 'URY',
  MYT = 'MYT',
  UMI = 'UMI',
  LBN = 'LBN',
  LCA = 'LCA',
  LAO = 'LAO',
  TUV = 'TUV',
  TWN = 'TWN',
  TTO = 'TTO',
  TUR = 'TUR',
  LKA = 'LKA',
  LIE = 'LIE',
  LVA = 'LVA',
  TON = 'TON',
  LTU = 'LTU',
  LUX = 'LUX',
  LBR = 'LBR',
  LSO = 'LSO',
  THA = 'THA',
  ATF = 'ATF',
  TGO = 'TGO',
  TCD = 'TCD',
  TCA = 'TCA',
  LBY = 'LBY',
  VAT = 'VAT',
  VCT = 'VCT',
  ARE = 'ARE',
  AND = 'AND',
  ATG = 'ATG',
  AFG = 'AFG',
  AIA = 'AIA',
  VIR = 'VIR',
  ISL = 'ISL',
  IRN = 'IRN',
  ARM = 'ARM',
  ALB = 'ALB',
  AGO = 'AGO',
  ATA = 'ATA',
  ASM = 'ASM',
  ARG = 'ARG',
  AUS = 'AUS',
  AUT = 'AUT',
  ABW = 'ABW',
  IND = 'IND',
  ALA = 'ALA',
  AZE = 'AZE',
  IRL = 'IRL',
  IDN = 'IDN',
  UKR = 'UKR',
  QAT = 'QAT',
  MOZ = 'MOZ',
}

export interface CreateTenantDto {
  name: string;
  document: string;

  /** @example BRA */
  countryCode: CountryCodeEnum;
}

export interface TenantEntityDto {
  id: string;
  name: string;
  document: string;

  /** @example BRA */
  countryCode: CountryCodeEnum;
  wallets: string[];
  client?: object;
  clientId?: object;
  info: object;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  deletedAt?: string;
}

export enum OrderByEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface PaginationMetaDto {
  /** @example 1 */
  itemCount: number;

  /** @example 1 */
  totalItems?: number;

  /** @example 1 */
  itemsPerPage: number;

  /** @example 1 */
  totalPages?: number;

  /** @example 1 */
  currentPage: number;
}

export interface PaginationLinksDto {
  /** @example http://example.com?page=1 */
  first?: string;

  /** @example http://example.com?page=1 */
  prev?: string;

  /** @example http://example.com?page=2 */
  next?: string;

  /** @example http://example.com?page=3 */
  last?: string;
}

export interface AbstractBase {
  items: TenantEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface UpdateTenantProfileDto {
  name?: string;
}

export interface UpdateTenantDto {
  name?: string;
  document?: string;

  /** @example BRA */
  countryCode?: CountryCodeEnum;
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

export interface SignInResponseDto {
  token: string;
  refreshToken: string;
  data: object;
}

export interface LoginUserDto {
  /** @example user@example.com */
  email: string;

  /** @example P@ssw0rd */
  password: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
}

export interface RefreshTokenDto {
  /** @example eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiI4NGViM2Q2NC01OTk4LTRjM2UtODliMS0yZTgyZmQ2NDRjMDciLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJjb21wYW55SWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJ0b2tlbkhhc2giOiI5NGFkMzFjMjcwMWI0NzQxNjk5ZjI1YTA4NWM0NmQyNDE4ZTk2MjNhYTcyYjM3MGZhZWZkNWJhYWYzYzM3YzgzIiwiaWF0IjoxNjU3MzEwMzQwLCJleHAiOjE2NTc0ODMxNDB9.epg4Grc6LkJMMxNlFbsdEc5Rq2nupXZTsFQeD-JgKZMWg4ey_ialD-mmSBehHD_xFF4Ho_BbWG1ld9aCuQBQcft4zxDfMdxogM5fMfdhAnAccM7a4J0NyKECzYHhIDe_jnrpT4QVHs4x78NIookQiKguANuSa7dNViFphpC9K5LRcxVwS6sEqT8 */
  refreshToken: string;
}

export interface RefreshTokenResponseDto {
  token: string;
  refreshToken: string;
}

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name Create
   * @request POST:/users
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetUserByOrFail
   * @request GET:/users/find-user-by-email
   * @secure
   */
  export namespace GetUserByOrFail {
    export type RequestParams = {};
    export type RequestQuery = { email: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetProfileByUserLogged
   * @request GET:/users/profile
   * @secure
   */
  export namespace GetProfileByUserLogged {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name UpdateProfileByUserLogged
   * @request PATCH:/users/profile
   * @secure
   */
  export namespace UpdateProfileByUserLogged {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateProfileUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name Update
   * @request PATCH:/users/{id}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name ChangePassword
   * @request PATCH:/users/{id}/change-password
   * @secure
   */
  export namespace ChangePassword {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = ChangePasswordDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name SetWalletDefault
   * @request PATCH:/users/{id}/main-wallet
   * @secure
   */
  export namespace SetWalletDefault {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = MainWalletDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name UpdateTokenAndReturn
   * @request PATCH:/users/{id}/token
   * @secure
   */
  export namespace UpdateTokenAndReturn {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserTokenResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name AccountCompleteRetry
   * @request POST:/users/account-complete/retry
   * @secure
   */
  export namespace AccountCompleteRetry {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AccountCompleteRetryDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Tenant {
  /**
   * No description
   * @tags Tenant
   * @name Create
   * @request POST:/tenant
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantEntityDto;
  }
  /**
   * No description
   * @tags Tenant
   * @name FindAll
   * @request GET:/tenant
   * @secure
   */
  export namespace FindAll {
    export type RequestParams = {};
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags Tenant
   * @name FindOne
   * @request GET:/tenant/{id}
   * @secure
   */
  export namespace FindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name Update
   * @request PUT:/tenant/{id}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name Remove
   * @request DELETE:/tenant/{id}
   * @secure
   */
  export namespace Remove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name UpdateProfile
   * @request PUT:/tenant/profile/{id}
   * @secure
   */
  export namespace UpdateProfile {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Auth {
  /**
   * No description
   * @tags Authentication
   * @name VerifySignUp
   * @request GET:/auth/verify-sign-up
   */
  export namespace VerifySignUp {
    export type RequestParams = {};
    export type RequestQuery = { email: string; token: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Authentication
   * @name RequestConfirmationEmail
   * @request POST:/auth/request-confirmation-email
   */
  export namespace RequestConfirmationEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestConfirmationEmailDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Authentication
   * @name RequestPasswordReset
   * @request POST:/auth/request-password-reset
   */
  export namespace RequestPasswordReset {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestPasswordResetDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Authentication
   * @name ResetPassword
   * @request POST:/auth/reset-password
   */
  export namespace ResetPassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResetPasswordDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name SignIn
   * @request POST:/auth/signin
   */
  export namespace SignIn {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name RefreshToken
   * @request POST:/auth/refresh-token
   */
  export namespace RefreshToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RefreshTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = RefreshTokenResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name LogOut
   * @request POST:/auth/logout
   */
  export namespace LogOut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Authentication
   * @name GetJwks
   * @request GET:/auth/jwks.json
   */
  export namespace GetJwks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
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
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name Create
     * @request POST:/users
     * @secure
     */
    create: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUserByOrFail
     * @request GET:/users/find-user-by-email
     * @secure
     */
    getUserByOrFail: (query: { email: string }, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/find-user-by-email`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetProfileByUserLogged
     * @request GET:/users/profile
     * @secure
     */
    getProfileByUserLogged: (params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/profile`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateProfileByUserLogged
     * @request PATCH:/users/profile
     * @secure
     */
    updateProfileByUserLogged: (data: UpdateProfileUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/profile`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Update
     * @request PATCH:/users/{id}
     * @secure
     */
    update: (id: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ChangePassword
     * @request PATCH:/users/{id}/change-password
     * @secure
     */
    changePassword: (id: string, data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/${id}/change-password`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name SetWalletDefault
     * @request PATCH:/users/{id}/main-wallet
     * @secure
     */
    setWalletDefault: (id: string, data: MainWalletDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}/main-wallet`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateTokenAndReturn
     * @request PATCH:/users/{id}/token
     * @secure
     */
    updateTokenAndReturn: (id: string, params: RequestParams = {}) =>
      this.request<UserTokenResponseDto, HttpExceptionDto>({
        path: `/users/${id}/token`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AccountCompleteRetry
     * @request POST:/users/account-complete/retry
     * @secure
     */
    accountCompleteRetry: (data: AccountCompleteRetryDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/account-complete/retry`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tenant = {
    /**
     * No description
     *
     * @tags Tenant
     * @name Create
     * @request POST:/tenant
     * @secure
     */
    create: (data: CreateTenantDto, params: RequestParams = {}) =>
      this.request<TenantEntityDto, HttpExceptionDto>({
        path: `/tenant`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name FindAll
     * @request GET:/tenant
     * @secure
     */
    findAll: (
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<AbstractBase, HttpExceptionDto>({
        path: `/tenant`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name FindOne
     * @request GET:/tenant/{id}
     * @secure
     */
    findOne: (id: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name Update
     * @request PUT:/tenant/{id}
     * @secure
     */
    update: (id: string, data: UpdateTenantDto, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name Remove
     * @request DELETE:/tenant/{id}
     * @secure
     */
    remove: (id: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name UpdateProfile
     * @request PUT:/tenant/profile/{id}
     * @secure
     */
    updateProfile: (id: string, data: UpdateTenantProfileDto, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/profile/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
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
      this.request<SignInResponseDto, HttpExceptionDto>({
        path: `/auth/reset-password`,
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
