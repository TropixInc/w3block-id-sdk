/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserPasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password: string;
  /** @example "P@ssw0rd" */
  confirmation: string;
}

export enum UserRoleEnum {
  SuperAdmin = 'superAdmin',
  Admin = 'admin',
  Operator = 'operator',
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

export enum VerificationType {
  Numeric = 'numeric',
  Invisible = 'invisible',
}

export interface CreateUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password: string;
  /** @example "P@ssw0rd" */
  confirmation: string;
  /** @example "00000000-0000-0000-0000-000000000000" */
  tenantId: string;
  /** @example "user" */
  role: UserRoleEnum;
  phone?: string;
  name?: string;
  /** @example "user@example.com" */
  email: string;
  /** @example "pt-br" */
  i18nLocale: I18NLocaleEnum;
  address?: CreateAddressDto;
  /** @example true */
  sendEmail?: object;
  callbackUrl?: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
}

export interface AddressResponseDto {
  /** @format uuid */
  id: string;
  /** @example "Street" */
  street?: string;
  /** @example "123" */
  number?: string;
  /** @example null */
  district?: string;
  /** @example null */
  complement?: string;
  /** @example "Sao Paulo" */
  city?: string;
  /** @example "Sao Paulo" */
  state?: string;
  /** @example "Brazil" */
  country?: string;
  /** @example null */
  postalCode?: string;
  /** @example null */
  coordinates?: string;
}

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
  tenantId: string;
  /** @example "0x0000000000000000000000000000000000000000" */
  address: string;
  /** @format uuid */
  ownerId: string;
  /** @example "vault" */
  type: WalletTypes;
  /** @example "ready" */
  status: WalletStatus;
}

export enum UserContextStatus {
  Approved = 'approved',
  Denied = 'denied',
  RequiredReview = 'requiredReview',
  Created = 'created',
}

export interface LogUserContextDto {
  /** @default [] */
  inputIds: any[][];
  /** @format uuid */
  moderatorId: string;
  reason?: string | null;
  /** @format date-time */
  registerAt: string;
  status: UserContextStatus;
}

export interface ContextDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  description: string;
  slug: string;
  /** @format uuid */
  tenantId?: string | null;
}

export interface UserContextEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  tenantId: string;
  contextId: string;
  userId: string;
  /** @example "created" */
  status: UserContextStatus;
  context?: ContextDto | null;
  logs: LogUserContextDto[];
}

export enum KycStatus {
  NoRequired = 'noRequired',
  Approved = 'approved',
  Denied = 'denied',
  Pending = 'pending',
  PendingReview = 'pendingReview',
}

export interface UserPublicResponseDto {
  /** @format uuid */
  id: string;
  /** @example "email@example.com" */
  email: string;
  /** @example "+55(11)99999-9999" */
  phone?: string;
  /** @example true */
  verified: boolean;
  /**
   * @default ["user"]
   * @example ["user"]
   */
  roles: ('superAdmin' | 'admin' | 'operator' | 'user')[];
  /** @example "pt-br" */
  i18nLocale: I18NLocaleEnum;
  /** @example "John Doe" */
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
  contexts?: UserContextEntityDto[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  kycStatus: KycStatus;
}

export interface HttpExceptionDto {
  /** @example "2022-07-25T17:24:07.042Z" */
  timestamp: string;
  /** @example "/api/foo/bar" */
  path: string;
  error: string;
  /** @example 500 */
  statusCode: number;
  /** @example "Something went wrong" */
  message: object;
  /** @example null */
  data?: object;
}

export interface InviteUserDto {
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
  name?: string;
  /** @example "email@example.com" */
  email: string;
  /** @example "pt-br" */
  i18nLocale: I18NLocaleEnum;
  /** @example false */
  generateRandomPassword?: boolean;
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password?: string;
  /** @example true */
  sendEmail?: boolean;
  phone?: string;
  /** @example "user" */
  role?: UserRoleEnum;
  /** @example false */
  royaltyEligible?: boolean;
  /** @default "invisible" */
  verificationType?: VerificationType;
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
  /** @example "http://example.com?page=1" */
  first?: string;
  /** @example "http://example.com?page=1" */
  prev?: string;
  /** @example "http://example.com?page=2" */
  next?: string;
  /** @example "http://example.com?page=3" */
  last?: string;
}

export interface UserPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: UserPublicResponseDto[];
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
  /** @example "pt-br" */
  i18nLocale?: I18NLocaleEnum;
  address?: UpdateAddressDto;
}

export interface ChangePasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password: string;
  /** @example "P@ssw0rd" */
  confirmation: string;
  oldPassword: string;
}

export interface MainWalletDto {
  walletId: string;
}

export interface UpdateTokenDto {
  /** @default "invisible" */
  verificationType?: 'numeric' | 'invisible';
  /** @example "15m" */
  verificationExpire?: string;
}

export interface UserTokenResponseDto {
  /** @example "email@example.com" */
  email: string;
  /** @example "b8ee934f8d9c6704b982c14b95ba3266fef9bba7798ed4885a05c70dbb4545435517cdd25f851e7522ad503e04ccb691a18f507b792866c3282d13abc2a09cb2;1654178219308" */
  token: string;
  /** @example "b8ee934f8d9c6704b982c14b95ba3266fef9bba7798ed4885a05c70dbb4545435517cdd25f851e7522ad503e04ccb691a18f507b792866c3282d13abc2a09cb2" */
  code: string;
  /** @example "1654178219308" */
  expire: string;
}

export interface UpdateUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password?: string;
  /** @example "user" */
  role?: UserRoleEnum;
  phone?: string;
  name?: string;
  /** @example "user@example.com" */
  email?: string;
  /** @example "pt-br" */
  i18nLocale?: I18NLocaleEnum;
  /** @default "invisible" */
  verificationType?: VerificationType;
  address?: UpdateAddressDto;
}

export interface AccountCompleteRetryDto {
  email: string;
  tenantId: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
}

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Kovan = 42,
  Local = 1337,
  Mumbai = 80001,
  Polygon = 137,
}

export interface RequestMetamaskDto {
  /** @example "0x9FeCC07273d5F5Cb22FF10c5Bb7Dc49e82e01ce9" */
  address: string;
  /**
   * @default 137
   * @example 137
   */
  chainId: ChainId;
}

export interface RequestMetamaskResponseDto {
  /** @example "0x9FeCC07273d5F5Cb22FF10c5Bb7Dc49e82e01ce9" */
  address: string;
  /**
   * @default 137
   * @example 137
   */
  chainId: ChainId;
  /** @example "" */
  message: string;
  /** @example 1666581369815 */
  nonce: number;
  /** @format uuid */
  userId: string;
}

export interface ClaimMetamaskDto {
  /** @example "6ef8fe3b-d901-4f01-9aeb-20fecc545521" */
  signature: string;
}

export interface EventNotifyDto {
  /** @example 256 */
  blockNumber: number;
  /** @example "0x75a3c22ef6e394a496fb7cdb16c9c5a975d6c4950f931a9df9bff38a2a9371a7" */
  blockHash: string;
  /** @example "0x9882f164a13ad7cfaeb682d36415f6bd8d0348f7f738b85c7668665fa00956c4" */
  transactionHash: string;
  /** @example "0x82dbB0A14F79f50c8f8e0D50FC9F1ef30Aeb6C79" */
  address: string;
  topics: string[];
  /** @example "0x" */
  data: string;
  /** @example 0 */
  logIndex: number;
  /**
   * @default 137
   * @example 137
   */
  chainId: ChainId;
  /** @example 1653579785 */
  timestamp: number;
  /** @example "Transfer" */
  name: string;
  /** @example "Transfer(address,address,uint256)" */
  signature: string;
  /** @example "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" */
  topic: string;
  /** @example 0 */
  transactionIndex: number;
  /** @example {"from":"0x0000000000000000000000000000000000000000","to":"0xe5dc6eb721b535ece3be1b3220be2ce41ac284fc","tokenId":{"_hex":"0x03","_isBigNumber":true}} */
  args: object;
  transactionId?: string;
}

export interface RequestWalletConnectSessionDto {
  /**
   * @default 137
   * @example 137
   */
  chainId: ChainId;
  address: string;
  uri: string;
}

export interface ResponseWalletConnectSessionDto {
  /**
   * @default 137
   * @example 137
   */
  chainId: ChainId;
  address: string;
  handshakeTopic: string;
}

export interface JwtPayloadDto {
  /** @example "00000000-0000-0000-0000-000000000001" */
  sub: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  iss: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  aud?: string[];
  /** @example 1516239022 */
  exp?: number;
  /** @example 1516239022 */
  iat?: number;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
}

export enum JwtType {
  User = 'user',
  Tenant = 'tenant',
}

export interface UserJwtPayloadDto {
  /** @example "00000000-0000-0000-0000-000000000001" */
  sub: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  iss: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  aud?: string[];
  /** @example 1516239022 */
  exp?: number;
  /** @example 1516239022 */
  iat?: number;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
  /** @example "user@example.com" */
  email: string;
  /** @example "Jon Doe" */
  name?: string;
  /**
   * @default "user"
   * @example "user"
   */
  roles: UserRoleEnum[];
  /** @example true */
  verified: boolean;
  /**
   * @default "user"
   * @example "user"
   */
  type: JwtType;
}

export enum TenantRoleEnum {
  Application = 'application',
  Administrator = 'administrator',
  Integration = 'integration',
}

export interface TenantJwtPayloadDto {
  /** @example "00000000-0000-0000-0000-000000000001" */
  sub: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  iss: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  aud?: string[];
  /** @example 1516239022 */
  exp?: number;
  /** @example 1516239022 */
  iat?: number;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
  /**
   * @default "application"
   * @example "application"
   */
  roles: TenantRoleEnum[];
  /**
   * @default "tenant"
   * @example "tenant"
   */
  type: JwtType;
}

export interface VerifySignupResponseDto {
  /**
   * @default true
   * @example true
   */
  verified: boolean;
}

export interface TooManyRequestsExceptionDto {
  /** @example "2022-07-25T17:24:07.042Z" */
  timestamp: string;
  /** @example "/api/foo/bar" */
  path: string;
  error: string;
  /** @example 429 */
  statusCode: number;
  /** @example "Too many requests" */
  message: object;
  /** @example null */
  data?: object;
}

export interface RequestConfirmationEmailDto {
  email: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId?: string;
  callbackUrl?: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
}

export interface RequestPasswordResetDto {
  /** @example "email@example.com" */
  email: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId?: string;
  callbackUrl?: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
}

export interface ResetPasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password: string;
  /** @example "P@ssw0rd" */
  confirmation: string;
  /** @example "user@example.com" */
  email: string;
  token: string;
}

export interface SignInResponseDto {
  /** @example "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJlbWFpbCI6InBpeHdheUB3M2Jsb2NrLmlvIiwibmFtZSI6IlBpeHdheSIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRlbmFudElkIjoiNWJkOTZhYWYtMTg4OC00OTNlLWI4NGUtN2M1NGE0NzMxODY4IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY1ODUwODE3OSwiZXhwIjoxNjkwMDQ0MTc5fQ.L_0Py_M_1Ija_QnFKl7uNZr9fpkcVpZSv-tnNf07YQOcIEuR-TU0S9DMkLkHtmYrHKJe_vzzf14FS7J43NYVILn3NrXb-pC5-YO8V3JnMX4yBsgM2t0xdqEW6fqILk8_oxXsDFAhNkaNeBa2ljNilDncSepps7q69PP-TP7JVkjKQg2Za_E6ZwU" */
  token: string;
  /** @example "eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJ0ZW5hbnRJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRva2VuSGFzaCI6ImJiMmFjMzE4M2EzZDZlMDljYTI2ZDkzNDEzNjQyNzU4MGY3Yjc5NWVlYWU3YTFlYzUzNDU2MjU5NThjMDZhYWQiLCJpYXQiOjE2NTg1MDgxNzksImV4cCI6MTY5MDA0NDE3OX0.au6dcpbcSmF134J335G4CymEUlwK39TT-4jXQwEUm0zRokFBiHpkXZzy23fTufyo_XzW_Tr_IUfO9b_y5e0thjIfvng4dS7akdeQAykcN7nRhwNBtqCVZxFHyZE39yzz38JLMwC00EtaKowM6lPykJYC5qZC0bBj4g4Yb1GG9IU5dQodibdXj00" */
  refreshToken: string;
  data: UserJwtPayloadDto | TenantJwtPayloadDto;
}

export interface BadRequestExceptionDto {
  /** @example "2022-07-25T17:24:07.042Z" */
  timestamp: string;
  /** @example "/api/foo/bar" */
  path: string;
  error: string;
  /** @example 400 */
  statusCode: number;
  /** @example "Bad Request" */
  message: object;
  /** @example null */
  data?: object;
}

export interface SignupUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password: string;
  /** @example "P@ssw0rd" */
  confirmation: string;
  /** @example "00000000-0000-0000-0000-000000000000" */
  tenantId: string;
  /** @example "email@example.com" */
  email: string;
  /** @example "Jon Doe" */
  name?: string;
  /**
   * @default "pt-br"
   * @example "pt-br"
   */
  i18nLocale?: I18NLocaleEnum;
  callbackUrl: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
  phone?: string;
}

export interface UnauthorizedExceptionDto {
  /** @example "2022-07-25T17:24:07.042Z" */
  timestamp: string;
  /** @example "/api/foo/bar" */
  path: string;
  error: string;
  /** @example 401 */
  statusCode: number;
  /** @example "Unauthorized" */
  message: object;
  /** @example null */
  data?: object;
}

export interface LoginUserDto {
  /** @example "user@example.com" */
  email: string;
  /** @example "P@ssw0rd" */
  password: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId?: string;
}

export interface RefreshTokenDto {
  /** @example "eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiI4NGViM2Q2NC01OTk4LTRjM2UtODliMS0yZTgyZmQ2NDRjMDciLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJjb21wYW55SWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJ0b2tlbkhhc2giOiI5NGFkMzFjMjcwMWI0NzQxNjk5ZjI1YTA4NWM0NmQyNDE4ZTk2MjNhYTcyYjM3MGZhZWZkNWJhYWYzYzM3YzgzIiwiaWF0IjoxNjU3MzEwMzQwLCJleHAiOjE2NTc0ODMxNDB9.epg4Grc6LkJMMxNlFbsdEc5Rq2nupXZTsFQeD-JgKZMWg4ey_ialD-mmSBehHD_xFF4Ho_BbWG1ld9aCuQBQcft4zxDfMdxogM5fMfdhAnAccM7a4J0NyKECzYHhIDe_jnrpT4QVHs4x78NIookQiKguANuSa7dNViFphpC9K5LRcxVwS6sEqT8" */
  refreshToken: string;
}

export interface RefreshTokenResponseDto {
  /** @example "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJlbWFpbCI6InBpeHdheUB3M2Jsb2NrLmlvIiwibmFtZSI6IlBpeHdheSIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRlbmFudElkIjoiNWJkOTZhYWYtMTg4OC00OTNlLWI4NGUtN2M1NGE0NzMxODY4IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY1ODUwODE3OSwiZXhwIjoxNjkwMDQ0MTc5fQ.L_0Py_M_1Ija_QnFKl7uNZr9fpkcVpZSv-tnNf07YQOcIEuR-TU0S9DMkLkHtmYrHKJe_vzzf14FS7J43NYVILn3NrXb-pC5-YO8V3JnMX4yBsgM2t0xdqEW6fqILk8_oxXsDFAhNkaNeBa2ljNilDncSepps7q69PP-TP7JVkjKQg2Za_E6ZwU" */
  token: string;
  /** @example "eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJ0ZW5hbnRJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRva2VuSGFzaCI6ImJiMmFjMzE4M2EzZDZlMDljYTI2ZDkzNDEzNjQyNzU4MGY3Yjc5NWVlYWU3YTFlYzUzNDU2MjU5NThjMDZhYWQiLCJpYXQiOjE2NTg1MDgxNzksImV4cCI6MTY5MDA0NDE3OX0.au6dcpbcSmF134J335G4CymEUlwK39TT-4jXQwEUm0zRokFBiHpkXZzy23fTufyo_XzW_Tr_IUfO9b_y5e0thjIfvng4dS7akdeQAykcN7nRhwNBtqCVZxFHyZE39yzz38JLMwC00EtaKowM6lPykJYC5qZC0bBj4g4Yb1GG9IU5dQodibdXj00" */
  refreshToken: string;
}

export interface ForbiddenExceptionDto {
  /** @example "2022-07-25T17:24:07.042Z" */
  timestamp: string;
  /** @example "/api/foo/bar" */
  path: string;
  error: string;
  /** @example 403 */
  statusCode: number;
  /** @example "Forbidden" */
  message: object;
  /** @example null */
  data?: object;
}

export interface LoginTenantDto {
  key: string;
  secret: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
}

export interface JSONWebKeyDto {
  /** @example "RSA" */
  kty: string;
  /** @example "LySdYaP3_-DOrOElTtHy9TAM9EZ8veMzPftUWibTTNI" */
  kid: string;
  alg?: string;
  n?: string;
  e?: string;
}

export interface JSONWebKeySetDto {
  keys: JSONWebKeyDto[];
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
  /** @example "BRA" */
  countryCode: CountryCodeEnum;
  /** @example "example.com" */
  hostname: string;
}

export interface TenantInfoDto {
  emailLogoUrl?: string;
  headerLogoUrl?: string;
  headerBackgroundColor: string;
  bodyCardBackgroundColor: string;
}

export interface TenantEntityDto {
  id: string;
  name: string;
  document: string;
  /**
   * @default "BRA"
   * @example "BRA"
   */
  countryCode: CountryCodeEnum;
  /**
   * @default "application"
   * @example ["application"]
   */
  roles: TenantRoleEnum;
  wallets: string[];
  client?: object;
  clientId?: object;
  info: TenantInfoDto;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  deletedAt?: string;
}

export interface TenantPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantEntityDto[];
}

export interface TenantClientResponseDto {
  /** @example "193d34cd9f6ca1f2661357e346822a3643bd5c3d0590a670ee896af6ca9a8141" */
  apiKey: string;
  /** @format uuid */
  clientId: string;
  /** @example "ef9b4f3cc540501fa1d7c4f0fc1216851500ed52aa85f2adb34d978f70688f37" */
  signatureKey: string;
}

export interface UpdateTenantProfileDto {
  name?: string;
}

export interface UpdateTenantDto {
  name?: string;
  document?: string;
  /** @example "BRA" */
  countryCode?: CountryCodeEnum;
}

export interface FindByHostnameDto {
  /** @example "example.com" */
  hostname: string;
}

export interface CreateTenantAccessDto {
  /** @format uuid */
  id?: string;
}

export type TenantEntity = object;

export interface TenantAccessEntityDto {
  /** @format uuid */
  id: string;
  key: string;
  secret: string;
  tenant: TenantEntity;
  tenantId: string;
  active: boolean;
}

export interface TenantAccessPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantAccessEntityDto[];
}

export interface TenantHostPathsDto {
  /**
   * The path to the user complete profile page. Only fill in if different from default
   * @example "/auth/complete-profile/"
   */
  fillProfileForm?: string;
  /**
   * The path to user sign in page. Only fill in if different from default
   * @example "/auth/signIn/"
   */
  userSignIn?: string;
  /**
   * The path to see certificate of NFT. Only fill in if different from default
   * @example "/token/{{contractAddress}}/{{chainId}}/{{tokenId}}"
   */
  nftCertificate?: string;
}

export interface CreateTenantHostDto {
  /** @format uuid */
  id?: string;
  isMain?: boolean;
  /** @example "example.com" */
  hostname: string;
  paths?: TenantHostPathsDto;
}

export interface TenantHostPathsResponse {
  /**
   * The path for the user to finish filling out their profile form. Only exists when it is different from default
   * @example "/auth/complete-profile/"
   */
  fillProfileForm?: string;
  /**
   * The path to user sign in page. Only exists when it is different from default
   * @example "/auth/signIn/"
   */
  userSignIn?: string;
  /**
   * The path to  see certificate of NF. Only exists when it is different from default
   * @example "/token/{{contractAddress}}/{{chainId}}/{{tokenId}}"
   */
  nftCertificate?: string;
}

export interface TenantHostResponseDto {
  /** @format uuid */
  id: string;
  /** @example "example.com" */
  hostname: string;
  tenantId: string;
  isMain: boolean;
  paths: TenantHostPathsResponse;
  routes: TenantHostPathsResponse;
}

export interface TenantHostEntityDto {
  /** @format uuid */
  id: string;
  /** @example "example.com" */
  hostname: string;
  tenant: TenantEntity;
  tenantId: string;
  isMain: boolean;
  paths: TenantHostPathsResponse;
  routes: TenantHostPathsResponse;
}

export interface TenantHostPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantHostEntityDto[];
}

export interface UpdateTenantHostDto {
  /** @format uuid */
  id?: string;
  isMain?: boolean;
  /** @example "example.com" */
  hostname: string;
  paths?: TenantHostPathsDto;
}

export interface UsersContextsPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: UserContextEntityDto[];
}

export interface UserContextStatusDto {
  reason?: string | null;
}

export interface RequiredReviewContextStatusDto {
  reason?: string | null;
  /** @example [] */
  inputIds: any[][];
}

export type TenantInputEntity = object;

export enum AssetType {
  Image = 'image',
  Document = 'document',
}

export enum AssetStatus {
  WaitingUpload = 'waitingUpload',
  WaitingAssociation = 'waitingAssociation',
  Associated = 'associated',
  Excluded = 'excluded',
  Expired = 'expired',
}

export enum AssetProvider {
  Cloudinary = 'cloudinary',
}

export enum AssetTarget {
  UserDocument = 'userDocument',
}

export enum AssetAccess {
  Public = 'public',
  Private = 'private',
}

export interface AssetEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  tenantId: string;
  /** @example "image" */
  type: AssetType;
  /** @example "associated" */
  status: AssetStatus;
  /** @example "cloudinary" */
  provider: AssetProvider;
  /** @example "https://dummyimage.com/200x200/fff/000" */
  directLink?: string | null;
  /** @example "userDocument" */
  target: AssetTarget;
  /** @example "public" */
  access?: AssetAccess | null;
}

export enum UserDocumentStatus {
  Approved = 'approved',
  Denied = 'denied',
  RequiredReview = 'requiredReview',
  Created = 'created',
}

export interface DocumentEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  tenantId: string;
  contextId: string;
  userId: string;
  /** @format uuid */
  inputId: string;
  input?: TenantInputEntity;
  /** @example true */
  active: boolean;
  value: string;
  /** @format uuid */
  assetId: string | null;
  asset?: AssetEntityDto | null;
  status: UserDocumentStatus;
}

export interface DocumentPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: DocumentEntityDto[];
}

export interface DocumentDto {
  /** @format uuid */
  inputId: string;
  value?: string;
  assetId?: string;
}

export interface AttachDocumentsToUser {
  documents: DocumentDto[];
}

export enum DataTypesEnum {
  File = 'file',
  Url = 'url',
  Cpf = 'cpf',
  Phone = 'phone',
  Text = 'text',
  Email = 'email',
}

export interface CreateTenantInputDto {
  contextId: string;
  /** @example "Input label" */
  label: string;
  /** @example "Input description" */
  description: string;
  /** @example "cpf" */
  type: DataTypesEnum;
  /** @example 1 */
  order: number;
  /** @example true */
  mandatory: boolean;
  /** @example true */
  active: boolean;
}

export interface TenantInputEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  tenantId: string;
  contextId: string;
  label: string;
  description: string;
  /** @example "cpf" */
  type: DataTypesEnum;
  order: number;
  mandatory: boolean;
  /** @example true */
  active: boolean;
}

export interface UpdateTenantInputDto {
  /** @example "Input label" */
  label: string;
  /** @example "Input description" */
  description: string;
  /** @example 1 */
  order: number;
  /** @example true */
  mandatory: boolean;
  /** @example true */
  active: boolean;
}

export interface TenantInputPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantContextDto[];
}

export enum AssetTypeEnum {
  Image = 'image',
  Document = 'document',
}

export enum AssetTargetEnum {
  UserDocument = 'userDocument',
}

export interface RequestAssetUploadDto {
  /**
   * @default "image"
   * @example "image"
   */
  type: AssetTypeEnum;
  /** @example "userDocument" */
  target: AssetTargetEnum;
}

export interface CloudinaryProviderUploadParamsDto {
  /** @example "000000000000" */
  apiKey: string;
  /** @example 1666215568 */
  timestamp: number;
  /** @example "directory/3fa85f64-5717-4562-b3fc-2c963f66afa6" */
  publicId: string;
  /** @example "bfd09f95f331f558cbd1320e67aa8d488770583e" */
  signature: string;
  /** @example "filename_override=false&public_id=directory/3fa85f64-5717-4562-b3fc-2c963f66afa6&timestamp=1666215568&unique_filename=true&upload_preset=upload_preset&api_key=000000000000&signature=bfd09f95f331f558cbd1320e67aa8d488770583e" */
  signedParams: string;
  /** @example {"filename_override":false,"public_id":"directory/3fa85f64-5717-4562-b3fc-2c963f66afa6","timestamp":"1666215568","unique_filename":true} */
  queryParams: object;
  /** @example "upload_preset" */
  uploadPreset?: string | null;
}

export interface AssetEntityWithProviderUploadParamsDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  tenantId: string;
  /** @example "image" */
  type: AssetType;
  /** @example "associated" */
  status: AssetStatus;
  /** @example "cloudinary" */
  provider: AssetProvider;
  /** @example "https://dummyimage.com/200x200/fff/000" */
  directLink?: string | null;
  /** @example "userDocument" */
  target: AssetTarget;
  /** @example "public" */
  access?: AssetAccess | null;
  providerUploadParams: CloudinaryProviderUploadParamsDto;
}

export interface CreateContextsDto {
  description: string;
  slug: string;
  tenantId?: string;
}

export interface UpdateContextsDto {
  description: string;
  slug: string;
}

export type DuplicatedContextException = object;

export interface CreateTenantContextDto {
  contextId: string;
  /** @example true */
  active: boolean;
}

export interface TenantContextDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  tenantId: string;
  contextId: string;
  context?: ContextDto;
  /** @example true */
  active: boolean;
}

export interface UpdateTenantContextDto {
  /** @example true */
  active: boolean;
}

export interface PublicDataDto {
  WALLET_CONNECT?: object;
  METAMASK?: object;
}

export interface PrivateDataDto {
  WALLET_CONNECT?: object;
  METAMASK?: object;
}

export enum IntegrationType {
  WALLET_CONNECT = 'WALLET_CONNECT',
  METAMASK = 'METAMASK',
}

export interface IntegrationResponseDto {
  id: string;
  tenantId: string;
  type: IntegrationType;
  publicData: PublicDataDto;
  userId: string;
  active: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface CheckWhitelistUserResponseDto {
  /** @format uuid */
  whitelistId: string;
  /** @format uuid */
  userId: string;
  /** @example false */
  hasAccess: boolean;
}

export interface CheckUserInMultipleWhitelistsResponseDto {
  /** @example false */
  hasAccess: boolean;
  details: CheckWhitelistUserResponseDto[];
}

export enum WalletGroupStatus {
  Draft = 'draft',
  Publishing = 'publishing',
  Published = 'published',
}

export interface WalletGroupResponseDto {
  id: string;
  tenantId: string;
  contractAddress: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format uuid */
  actionId?: string;
  /**
   * @default 137
   * @example 137
   */
  chainId: ChainId;
  status: WalletGroupStatus;
  whitelistId?: string;
  lastSyncBlock?: number;
  sync: boolean;
}

export interface WhitelistResponseDto {
  /** @format uuid */
  id: string;
  /** @format uuid */
  tenantId: string;
  /** @example "W3Block Whitelist" */
  name: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  walletGroups?: WalletGroupResponseDto[];
}

export interface WhitelistPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: WhitelistResponseDto[];
}

export interface CreateOrUpdateWhitelistDto {
  /** @example "W3Block Whitelist" */
  name: string;
}

export interface WhitelistOnChainDto {
  /**
   * @default 137
   * @example 137
   */
  chainId: ChainId;
}

export enum WhitelistEntriesSortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export enum WhitelistEntryType {
  UserId = 'user_id',
  Email = 'email',
  WalletAddress = 'wallet_address',
  CollectionHolder = 'collection_holder',
}

export interface WhitelistEntryResponseDto {
  /** @format uuid */
  id: string;
  /** @format uuid */
  whitelistId: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @example "collection_holder" */
  type: WhitelistEntryType;
  /** @example "0xd3304183ec1fa687e380b67419875f97f1db05f5" */
  value: string;
  additionalData?: object;
  wallets?: WalletResponseDto[];
}

export interface WhitelistEntryPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: WhitelistEntryResponseDto[];
}

export interface CreateWhitelistEntryDto {
  /**
   * @default "collection_holder"
   * @example "collection_holder"
   */
  type: WhitelistEntryType;
  /** @example "0xd3304183ec1fa687e380b67419875f97f1db05f5" */
  value: string;
  /** @example {"chainId":80001} */
  additionalData?: object;
}

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name Create
   * @request POST:/users
   * @secure
   * @response `201` `UserPublicResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
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
   * @name Invite
   * @request POST:/users/invite
   * @secure
   * @response `201` `UserPublicResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace Invite {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InviteUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetUserByEmail
   * @request GET:/users/find-user-by-email
   * @secure
   * @response `200` `UserPublicResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace GetUserByEmail {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @example "email@example.com" */
      email: string;
      /** @example "00000000-0000-0000-0000-000000000001" */
      tenantId: string;
    };
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
   * @response `200` `UserPublicResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
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
   * @name GetUsersReport
   * @request GET:/users/{tenantId}/report/{email}
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin
   */
  export namespace GetUsersReport {
    export type RequestParams = {
      tenantId: string;
      email: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name GetProfileUserById
   * @request GET:/users/{tenantId}/{id}
   * @secure
   * @response `200` `UserPublicResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace GetProfileUserById {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetUsersByTenantId
   * @request GET:/users/{tenantId}
   * @secure
   * @response `200` `UserPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace GetUsersByTenantId {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
      role?: UserRoleEnum;
      userId?: string[];
      contextIds?: string[];
      contextStatus?: UserContextStatus[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPaginateResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name UpdateProfileByUserLogged
   * @request PATCH:/users/{tenantId}/profile
   * @secure
   * @response `200` `UserPublicResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
   */
  export namespace UpdateProfileByUserLogged {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateProfileUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name ChangePassword
   * @request PATCH:/users/change-password
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
   */
  export namespace ChangePassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePasswordDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name SetWalletDefault
   * @request PATCH:/users/main-wallet
   * @secure
   * @response `204` `void`
   */
  export namespace SetWalletDefault {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MainWalletDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name UpdateToken
   * @request PATCH:/users/{tenantId}/{id}/token
   * @secure
   * @response `200` `UserTokenResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace UpdateToken {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserTokenResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name Update
   * @request PATCH:/users/{tenantId}/{id}/edit
   * @secure
   * @response `200` `UserPublicResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace Update {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name AccountCompleteRetry
   * @request POST:/users/account-complete/retry
   * @secure
   * @response `204` `void`
   */
  export namespace AccountCompleteRetry {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AccountCompleteRetryDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name ToggleOperatorRole
   * @request POST:/users/{tenantId}/{userId}/toggle-operator-role
   * @secure
   * @response `200` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace ToggleOperatorRole {
    export type RequestParams = {
      tenantId: string;
      userId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name CreateVault
   * @request POST:/users/{tenantId}/wallets/vault/claim
   * @secure
   * @response `200` `WalletResponseDto`
   */
  export namespace CreateVault {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name FindByAddress
   * @request GET:/users/{tenantId}/wallets/by-address/{address}
   * @secure
   * @response `200` `WalletResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, administrator,integration
   */
  export namespace FindByAddress {
    export type RequestParams = {
      tenantId: string;
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name FindOwnWalletByAddress
   * @request GET:/users/{tenantId}/wallets/own-wallet-by-address/{address}
   * @secure
   * @response `200` `WalletResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
   */
  export namespace FindOwnWalletByAddress {
    export type RequestParams = {
      tenantId: string;
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name FindAllWalletByUserId
   * @request GET:/users/{tenantId}/wallets/{userId}
   * @secure
   * @response `200` `(WalletResponseDto)[]`
   */
  export namespace FindAllWalletByUserId {
    export type RequestParams = {
      userId: string;
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto[];
  }
  /**
   * No description
   * @tags Users Wallet
   * @name FindWallet
   * @request GET:/users/{tenantId}/wallets/{userId}/{walletId}
   * @secure
   * @response `200` `WalletResponseDto`
   */
  export namespace FindWallet {
    export type RequestParams = {
      walletId: string;
      userId: string;
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name RequestMetamask
   * @request POST:/users/{tenantId}/wallets/metamask/request
   * @secure
   * @response `201` `RequestMetamaskResponseDto`
   */
  export namespace RequestMetamask {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RequestMetamaskDto;
    export type RequestHeaders = {};
    export type ResponseBody = RequestMetamaskResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name ClaimMetamask
   * @request POST:/users/{tenantId}/wallets/metamask/claim
   * @secure
   * @response `201` `WalletResponseDto`
   */
  export namespace ClaimMetamask {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ClaimMetamaskDto;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Contexts
   * @name FindUsersContextByUserId
   * @request GET:/users/{tenantId}/contexts/{userId}
   * @secure
   * @response `200` `UsersContextsPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
   */
  export namespace FindUsersContextByUserId {
    export type RequestParams = {
      tenantId: string;
      userId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
      /**
       * Filter by status
       * @example null
       */
      status?: UserContextStatus;
      /** Filter by document contextId */
      contextId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersContextsPaginateResponseDto;
  }
  /**
   * No description
   * @tags Users Contexts
   * @name ApproveTenantContextByUserId
   * @request PATCH:/users/{tenantId}/contexts/{userId}/{contextId}/approve
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace ApproveTenantContextByUserId {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      contextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserContextStatusDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users Contexts
   * @name RejectTenantContextByUserId
   * @request PATCH:/users/{tenantId}/contexts/{userId}/{contextId}/reject
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace RejectTenantContextByUserId {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      contextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserContextStatusDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users Contexts
   * @name RequireReviewTenantContextByUserId
   * @request PATCH:/users/{tenantId}/contexts/{userId}/{contextId}/require-review
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace RequireReviewTenantContextByUserId {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      contextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RequiredReviewContextStatusDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users Documents
   * @name FindUserDocumentsByUserId
   * @request GET:/users/{tenantId}/documents/{userId}
   * @secure
   * @response `200` `DocumentPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
   */
  export namespace FindUserDocumentsByUserId {
    export type RequestParams = {
      tenantId: string;
      userId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
      /** Filter by document type */
      type?: ('file' | 'url' | 'cpf' | 'phone' | 'text' | 'email')[];
      /** Filter by document contextId */
      contextId?: string;
      /** Filter by document inputId */
      inputId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DocumentPaginateResponseDto;
  }
  /**
   * No description
   * @tags Users Documents
   * @name GetAllByContextByUserIdAndContextId
   * @request GET:/users/{tenantId}/documents/{userId}/context/{contextId}
   * @secure
   * @response `200` `(DocumentEntityDto)[]`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
   */
  export namespace GetAllByContextByUserIdAndContextId {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      contextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DocumentEntityDto[];
  }
  /**
   * No description
   * @tags Users Documents
   * @name AttachDocumentsToUserByContextId
   * @request POST:/users/{tenantId}/documents/{userId}/context/{contextId}
   * @secure
   * @response `201` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
   */
  export namespace AttachDocumentsToUserByContextId {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      contextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AttachDocumentsToUser;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Blockchain {
  /**
   * No description
   * @tags Blockchain
   * @name ReceiveEventWebhook
   * @request POST:/blockchain/webhook/event/{tenantId}
   * @response `401` `void` Unauthorized - Invalid Pixchain signature
   */
  export namespace ReceiveEventWebhook {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EventNotifyDto;
    export type RequestHeaders = {
      'x-pixchain-signature': string;
      'x-pixchain-client-id'?: string;
    };
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name ReceiveTransactionWebhook
   * @request POST:/blockchain/webhook/transaction/{tenantId}
   * @response `401` `void` Unauthorized - Invalid Pixchain signature
   */
  export namespace ReceiveTransactionWebhook {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      'x-pixchain-signature': string;
      'x-pixchain-client-id'?: string;
    };
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name ReceiveExternalTransactionSigningRequestWebhook
   * @request POST:/blockchain/webhook/external-transaction-signing-request/{tenantId}
   * @response `401` `void` Unauthorized - Invalid Pixchain signature
   */
  export namespace ReceiveExternalTransactionSigningRequestWebhook {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      'x-pixchain-signature': string;
      'x-pixchain-client-id'?: string;
    };
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name GetBalance
   * @request GET:/blockchain/balance/{address}/{chainId}
   * @deprecated
   * @secure
   * @response `200` `void`
   */
  export namespace GetBalance {
    export type RequestParams = {
      /** @example "0x82dbB0A14F79f50c8f8e0D50FC9F1ef30Aeb6C79" */
      address: string;
      /** @example 137 */
      chainId: ChainId;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Blockchain
   * @name RequestSessionWalletConnect
   * @request POST:/blockchain/request-session-wallet-connect
   * @secure
   * @response `201` `ResponseWalletConnectSessionDto`
   */
  export namespace RequestSessionWalletConnect {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestWalletConnectSessionDto;
    export type RequestHeaders = {};
    export type ResponseBody = ResponseWalletConnectSessionDto;
  }
  /**
   * No description
   * @tags Blockchain
   * @name DisconnectSessionWalletConnect
   * @request DELETE:/blockchain/disconnect-session-wallet-connect
   * @secure
   * @response `200` `void`
   */
  export namespace DisconnectSessionWalletConnect {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestWalletConnectSessionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Auth {
  /**
   * No description
   * @tags Authentication
   * @name VerifySignUp
   * @request GET:/auth/verify-sign-up
   * @response `200` `VerifySignupResponseDto` Response for verify sign up
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace VerifySignUp {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @example "user@example.com" */
      email: string;
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VerifySignupResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name RequestConfirmationEmail
   * @request POST:/auth/request-confirmation-email
   * @response `204` `void`
   * @response `429` `TooManyRequestsExceptionDto`
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
   * @response `204` `void`
   * @response `429` `TooManyRequestsExceptionDto`
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
   * @response `200` `SignInResponseDto`
   * @response `400` `BadRequestExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
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
   * @name SignUp
   * @request POST:/auth/signup
   * @response `201` `SignInResponseDto`
   * @response `401` `UnauthorizedExceptionDto`
   */
  export namespace SignUp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignupUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name SignIn
   * @request POST:/auth/signin
   * @response `201` `SignInResponseDto`
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
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
   * @secure
   * @response `201` `RefreshTokenResponseDto`
   * @response `403` `ForbiddenExceptionDto`
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
   * @name SignInTenant
   * @request POST:/auth/signin/tenant
   * @response `201` `SignInResponseDto`
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace SignInTenant {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name LogOut
   * @request POST:/auth/logout
   * @secure
   * @response `403` `ForbiddenExceptionDto`
   */
  export namespace LogOut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Authentication
   * @name GetJwks
   * @request GET:/auth/jwks.json
   * @response `200` `JSONWebKeySetDto`
   */
  export namespace GetJwks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JSONWebKeySetDto;
  }
}

export namespace Tenant {
  /**
   * No description
   * @tags Tenant
   * @name Create
   * @request POST:/tenant
   * @secure
   * @response `201` `TenantEntityDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration,administrator
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
   * @response `200` `TenantPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
   */
  export namespace FindAll {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant
   * @name FindOne
   * @request GET:/tenant/{tenantId}
   * @secure
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace FindOne {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name Update
   * @request PUT:/tenant/{tenantId}
   * @secure
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
   */
  export namespace Update {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name Remove
   * @request DELETE:/tenant/{tenantId}
   * @secure
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
   */
  export namespace Remove {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name GetTenantClientOrFail
   * @request GET:/tenant/client/{tenantId}
   * @secure
   * @response `200` `TenantClientResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, integration
   */
  export namespace GetTenantClientOrFail {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantClientResponseDto;
  }
  /**
   * No description
   * @tags Tenant
   * @name UpdateProfile
   * @request PUT:/tenant/profile/{tenantId}
   * @secure
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
   */
  export namespace UpdateProfile {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace PublicTenant {
  /**
   * No description
   * @tags Tenant Public
   * @name GetCompanyByHost
   * @request GET:/public-tenant/by-hostname
   * @secure
   * @response `200` `FindByHostnameDto`
   */
  export namespace GetCompanyByHost {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @example "example.com" */
      hostname: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FindByHostnameDto;
  }
}

export namespace TenantAccess {
  /**
   * No description
   * @tags Tenant Access
   * @name Create
   * @request POST:/tenant-access/{tenantId}
   * @secure
   * @response `201` `TenantAccessEntityDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
   */
  export namespace Create {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateTenantAccessDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantAccessEntityDto;
  }
  /**
   * No description
   * @tags Tenant Access
   * @name FindAll
   * @request GET:/tenant-access/{tenantId}
   * @secure
   * @response `200` `TenantAccessPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
   */
  export namespace FindAll {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantAccessPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant Access
   * @name FindOne
   * @request GET:/tenant-access/{tenantId}/{id}
   * @secure
   * @response `200` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
   */
  export namespace FindOne {
    export type RequestParams = {
      id: string;
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace TenantHosts {
  /**
   * No description
   * @tags Tenant Hosts
   * @name Create
   * @request POST:/tenant-hosts/{tenantId}
   * @secure
   * @response `201` `TenantHostResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace Create {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateTenantHostDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantHostResponseDto;
  }
  /**
   * No description
   * @tags Tenant Hosts
   * @name FindAll
   * @request GET:/tenant-hosts/{tenantId}
   * @secure
   * @response `200` `TenantHostPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantHostPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant Hosts
   * @name GetMainHostByTenantId
   * @request GET:/tenant-hosts/{tenantId}/main-host
   * @secure
   * @response `200` `TenantHostEntityDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace GetMainHostByTenantId {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantHostEntityDto;
  }
  /**
   * No description
   * @tags Tenant Hosts
   * @name FindOne
   * @request GET:/tenant-hosts/{tenantId}/{id}
   * @secure
   * @response `200` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Tenant Hosts
   * @name Update
   * @request PATCH:/tenant-hosts/{tenantId}/{id}
   * @secure
   * @response `200` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace Update {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantHostDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace TenantInput {
  /**
   * No description
   * @tags Tenant Input
   * @name CreateTenantInput
   * @request POST:/tenant-input/{tenantId}
   * @secure
   * @response `201` `TenantInputEntityDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace CreateTenantInput {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateTenantInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantInputEntityDto;
  }
  /**
   * No description
   * @tags Tenant Input
   * @name FindTenantInput
   * @request GET:/tenant-input/{tenantId}
   * @secure
   * @response `200` `TenantInputPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace FindTenantInput {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantInputPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant Input
   * @name UpdateByInputId
   * @request PATCH:/tenant-input/{tenantId}/{inputId}
   * @secure
   * @response `201` `TenantInputEntityDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace UpdateByInputId {
    export type RequestParams = {
      tenantId: string;
      inputId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantInputDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantInputEntityDto;
  }
  /**
   * No description
   * @tags Tenant Input
   * @name FindTenantInputById
   * @request GET:/tenant-input/{tenantId}/{inputId}
   * @secure
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace FindTenantInputById {
    export type RequestParams = {
      tenantId: string;
      inputId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  } /**
 * @description Get all tenant param by tenant and context
 * @tags Tenant Input
 * @name ListBySlugContext
 * @request GET:/tenant-input/{tenantId}/slug/{slug}
 * @response `200` `(TenantInputEntityDto)[]`
 * @response `404` `{
  \** @example 404 *\
    statusCode: number,
  \** @example "Tenant context 'slug' is disabled from 'tenant'" *\
    message: string,
  \** @example "Not Found" *\
    error?: string,

}`
*/
  export namespace ListBySlugContext {
    export type RequestParams = {
      tenantId: string;
      slug: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantInputEntityDto[];
  }
}

export namespace Assets {
  /**
   * @description Creates a new request to upload some asset (image or pdf) in our service. You must use this endpoint response to upload assets using the specific provider apis (ex: Cloudinary)
   * @tags Assets
   * @name RequestUpload
   * @request POST:/assets/{tenantId}
   * @response `201` `AssetEntityWithProviderUploadParamsDto` Asset upload request successfully created!
   */
  export namespace RequestUpload {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RequestAssetUploadDto;
    export type RequestHeaders = {};
    export type ResponseBody = AssetEntityWithProviderUploadParamsDto;
  }
}

export namespace Contexts {
  /**
 * @description Create a new context
 * @tags Contexts
 * @name Create
 * @request POST:/contexts
 * @secure
 * @response `201` `ContextDto` Context created successfully
 * @response `401` `void` Unauthorized - Integration API key or JWT required
 * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin
 * @response `409` `{
  \** @example 409 *\
    statusCode: number,
  \** @example "Context "slug" already exists for tenant "tenantId"." *\
    message: string,
  \** @example "Conflict" *\
    error?: string,

}`
*/
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateContextsDto;
    export type RequestHeaders = {};
    export type ResponseBody = ContextDto;
  }
  /**
   * @description Returns all contexts
   * @tags Contexts
   * @name ListAll
   * @request GET:/contexts
   * @secure
   * @response `200` `(ContextDto)[]` Returns all contexts
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin
   */
  export namespace ListAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContextDto[];
  }
  /**
   * @description Update a context by id
   * @tags Contexts
   * @name Update
   * @request PATCH:/contexts/{id}
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin
   * @response `404` `DuplicatedContextException` Not found context to update
   */
  export namespace Update {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateContextsDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Delete a context by id
   * @tags Contexts
   * @name Delete
   * @request DELETE:/contexts/{id}
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin
   */
  export namespace Delete {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace TenantContext {
  /**
   * No description
   * @tags Tenant Context
   * @name CreateTenantContext
   * @request POST:/tenant-context/{tenantId}
   * @secure
   * @response `201` `TenantContextDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace CreateTenantContext {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateTenantContextDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextDto;
  }
  /**
   * No description
   * @tags Tenant Context
   * @name FindTenantContext
   * @request GET:/tenant-context/{tenantId}
   * @secure
   * @response `200` `TenantInputPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace FindTenantContext {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantInputPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant Context
   * @name FindOneByTenantContextId
   * @request GET:/tenant-context/{tenantId}/{tenantContextId}
   * @secure
   * @response `200` `TenantContextDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace FindOneByTenantContextId {
    export type RequestParams = {
      tenantId: string;
      tenantContextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextDto;
  }
  /**
   * No description
   * @tags Tenant Context
   * @name UpdateByTenantContextId
   * @request PATCH:/tenant-context/{tenantId}/{tenantContextId}
   * @secure
   * @response `200` `TenantContextDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
   */
  export namespace UpdateByTenantContextId {
    export type RequestParams = {
      tenantId: string;
      tenantContextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantContextDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextDto;
  }
}

export namespace Integrations {
  /**
   * No description
   * @tags Integration
   * @name List
   * @request GET:/integrations
   * @secure
   * @response `200` `(IntegrationResponseDto)[]`
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = IntegrationResponseDto[];
  }
}

export namespace Whitelists {
  /**
   * No description
   * @tags Whitelists
   * @name CheckUserInMultipleWhitelists
   * @request GET:/whitelists/{tenantId}/check-user
   * @secure
   * @response `200` `CheckUserInMultipleWhitelistsResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace CheckUserInMultipleWhitelists {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /**
       * @format uuid
       * @example "00000000-0000-0000-0000-000000000000"
       */
      userId: string;
      /** @example ["00000000-0000-0000-0000-000000000000"] */
      whitelistsIds: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckUserInMultipleWhitelistsResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name FindWhitelists
   * @request GET:/whitelists/{tenantId}
   * @secure
   * @response `200` `WhitelistPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace FindWhitelists {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WhitelistPaginateResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name CreateWhitelist
   * @request POST:/whitelists/{tenantId}
   * @secure
   * @response `201` `WhitelistResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace CreateWhitelist {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateOrUpdateWhitelistDto;
    export type RequestHeaders = {};
    export type ResponseBody = WhitelistResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name GetWhitelist
   * @request GET:/whitelists/{tenantId}/{id}
   * @secure
   * @response `200` `WhitelistResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace GetWhitelist {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WhitelistResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name UpdateWhitelist
   * @request PATCH:/whitelists/{tenantId}/{id}
   * @secure
   * @response `200` `WhitelistResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace UpdateWhitelist {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateOrUpdateWhitelistDto;
    export type RequestHeaders = {};
    export type ResponseBody = WhitelistResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name DeleteWhitelist
   * @request DELETE:/whitelists/{tenantId}/{id}
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace DeleteWhitelist {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Whitelists
   * @name PromoteWhitelistOnChain
   * @request PATCH:/whitelists/{tenantId}/{id}/promote-on-chain
   * @secure
   * @response `200` `WalletGroupResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace PromoteWhitelistOnChain {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = WhitelistOnChainDto;
    export type RequestHeaders = {};
    export type ResponseBody = WalletGroupResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name CheckUserInWhitelist
   * @request GET:/whitelists/{tenantId}/{id}/check-user
   * @secure
   * @response `200` `CheckWhitelistUserResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace CheckUserInWhitelist {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {
      /**
       * @format uuid
       * @example "00000000-0000-0000-0000-000000000000"
       */
      userId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckWhitelistUserResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name FindWhitelistEntries
   * @request GET:/whitelists/{tenantId}/{id}/entries
   * @secure
   * @response `200` `WhitelistEntryPaginateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace FindWhitelistEntries {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      /** @example "createdAt" */
      sortBy?: WhitelistEntriesSortBy;
      orderBy?: OrderByEnum;
      /** @default [] */
      type?: ('user_id' | 'email' | 'wallet_address' | 'collection_holder')[];
      /** @example false */
      showWallets?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WhitelistEntryPaginateResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name CreateWhitelistEntry
   * @request POST:/whitelists/{tenantId}/{id}/entries
   * @secure
   * @response `201` `WhitelistEntryResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace CreateWhitelistEntry {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateWhitelistEntryDto;
    export type RequestHeaders = {};
    export type ResponseBody = WhitelistEntryResponseDto;
  }
  /**
   * No description
   * @tags Whitelists
   * @name DeleteWhitelistEntry
   * @request DELETE:/whitelists/{tenantId}/{id}/entries/{entryId}
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
   */
  export namespace DeleteWhitelistEntry {
    export type RequestParams = {
      tenantId: string;
      id: string;
      entryId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';

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
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'https://pixwayid.stg.pixway.io' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

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
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
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
 * @version 0.7.3
 * @baseUrl https://pixwayid.stg.pixway.io
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
     * @response `201` `UserPublicResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
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
     * @name Invite
     * @request POST:/users/invite
     * @secure
     * @response `201` `UserPublicResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    invite: (data: InviteUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/invite`,
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
     * @name GetUserByEmail
     * @request GET:/users/find-user-by-email
     * @secure
     * @response `200` `UserPublicResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    getUserByEmail: (
      query: {
        /** @example "email@example.com" */
        email: string;
        /** @example "00000000-0000-0000-0000-000000000001" */
        tenantId: string;
      },
      params: RequestParams = {},
    ) =>
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
     * @response `200` `UserPublicResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
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
     * @name GetUsersReport
     * @request GET:/users/{tenantId}/report/{email}
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin
     */
    getUsersReport: (tenantId: string, email: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/${tenantId}/report/${email}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetProfileUserById
     * @request GET:/users/{tenantId}/{id}
     * @secure
     * @response `200` `UserPublicResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    getProfileUserById: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUsersByTenantId
     * @request GET:/users/{tenantId}
     * @secure
     * @response `200` `UserPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    getUsersByTenantId: (
      tenantId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
        role?: UserRoleEnum;
        userId?: string[];
        contextIds?: string[];
        contextStatus?: UserContextStatus[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UserPaginateResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}`,
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
     * @name UpdateProfileByUserLogged
     * @request PATCH:/users/{tenantId}/profile
     * @secure
     * @response `200` `UserPublicResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
     */
    updateProfileByUserLogged: (tenantId: string, data: UpdateProfileUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/profile`,
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
     * @request PATCH:/users/change-password
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
     */
    changePassword: (data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/change-password`,
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
     * @request PATCH:/users/main-wallet
     * @secure
     * @response `204` `void`
     */
    setWalletDefault: (data: MainWalletDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/main-wallet`,
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
     * @name UpdateToken
     * @request PATCH:/users/{tenantId}/{id}/token
     * @secure
     * @response `200` `UserTokenResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    updateToken: (tenantId: string, id: string, data: UpdateTokenDto, params: RequestParams = {}) =>
      this.request<UserTokenResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/${id}/token`,
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
     * @request PATCH:/users/{tenantId}/{id}/edit
     * @secure
     * @response `200` `UserPublicResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    update: (tenantId: string, id: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/${id}/edit`,
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
     * @name AccountCompleteRetry
     * @request POST:/users/account-complete/retry
     * @secure
     * @response `204` `void`
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

    /**
     * No description
     *
     * @tags Users
     * @name ToggleOperatorRole
     * @request POST:/users/{tenantId}/{userId}/toggle-operator-role
     * @secure
     * @response `200` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    toggleOperatorRole: (tenantId: string, userId: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/${tenantId}/${userId}/toggle-operator-role`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name CreateVault
     * @request POST:/users/{tenantId}/wallets/vault/claim
     * @secure
     * @response `200` `WalletResponseDto`
     */
    createVault: (tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, any>({
        path: `/users/${tenantId}/wallets/vault/claim`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name FindByAddress
     * @request GET:/users/{tenantId}/wallets/by-address/{address}
     * @secure
     * @response `200` `WalletResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, administrator,integration
     */
    findByAddress: (tenantId: string, address: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/wallets/by-address/${address}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name FindOwnWalletByAddress
     * @request GET:/users/{tenantId}/wallets/own-wallet-by-address/{address}
     * @secure
     * @response `200` `WalletResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
     */
    findOwnWalletByAddress: (tenantId: string, address: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/wallets/own-wallet-by-address/${address}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name FindAllWalletByUserId
     * @request GET:/users/{tenantId}/wallets/{userId}
     * @secure
     * @response `200` `(WalletResponseDto)[]`
     */
    findAllWalletByUserId: (userId: string, tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto[], any>({
        path: `/users/${tenantId}/wallets/${userId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name FindWallet
     * @request GET:/users/{tenantId}/wallets/{userId}/{walletId}
     * @secure
     * @response `200` `WalletResponseDto`
     */
    findWallet: (walletId: string, userId: string, tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, any>({
        path: `/users/${tenantId}/wallets/${userId}/${walletId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name RequestMetamask
     * @request POST:/users/{tenantId}/wallets/metamask/request
     * @secure
     * @response `201` `RequestMetamaskResponseDto`
     */
    requestMetamask: (tenantId: string, data: RequestMetamaskDto, params: RequestParams = {}) =>
      this.request<RequestMetamaskResponseDto, any>({
        path: `/users/${tenantId}/wallets/metamask/request`,
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
     * @tags Users Wallet
     * @name ClaimMetamask
     * @request POST:/users/{tenantId}/wallets/metamask/claim
     * @secure
     * @response `201` `WalletResponseDto`
     */
    claimMetamask: (tenantId: string, data: ClaimMetamaskDto, params: RequestParams = {}) =>
      this.request<WalletResponseDto, any>({
        path: `/users/${tenantId}/wallets/metamask/claim`,
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
     * @tags Users Contexts
     * @name FindUsersContextByUserId
     * @request GET:/users/{tenantId}/contexts/{userId}
     * @secure
     * @response `200` `UsersContextsPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
     */
    findUsersContextByUserId: (
      tenantId: string,
      userId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
        /**
         * Filter by status
         * @example null
         */
        status?: UserContextStatus;
        /** Filter by document contextId */
        contextId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersContextsPaginateResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/contexts/${userId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Contexts
     * @name ApproveTenantContextByUserId
     * @request PATCH:/users/{tenantId}/contexts/{userId}/{contextId}/approve
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    approveTenantContextByUserId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: UserContextStatusDto,
      params: RequestParams = {},
    ) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/${tenantId}/contexts/${userId}/${contextId}/approve`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Contexts
     * @name RejectTenantContextByUserId
     * @request PATCH:/users/{tenantId}/contexts/{userId}/{contextId}/reject
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    rejectTenantContextByUserId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: UserContextStatusDto,
      params: RequestParams = {},
    ) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/${tenantId}/contexts/${userId}/${contextId}/reject`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Contexts
     * @name RequireReviewTenantContextByUserId
     * @request PATCH:/users/{tenantId}/contexts/{userId}/{contextId}/require-review
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    requireReviewTenantContextByUserId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: RequiredReviewContextStatusDto,
      params: RequestParams = {},
    ) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/${tenantId}/contexts/${userId}/${contextId}/require-review`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Documents
     * @name FindUserDocumentsByUserId
     * @request GET:/users/{tenantId}/documents/{userId}
     * @secure
     * @response `200` `DocumentPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
     */
    findUserDocumentsByUserId: (
      tenantId: string,
      userId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
        /** Filter by document type */
        type?: ('file' | 'url' | 'cpf' | 'phone' | 'text' | 'email')[];
        /** Filter by document contextId */
        contextId?: string;
        /** Filter by document inputId */
        inputId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentPaginateResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/documents/${userId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Documents
     * @name GetAllByContextByUserIdAndContextId
     * @request GET:/users/{tenantId}/documents/{userId}/context/{contextId}
     * @secure
     * @response `200` `(DocumentEntityDto)[]`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
     */
    getAllByContextByUserIdAndContextId: (
      tenantId: string,
      userId: string,
      contextId: string,
      params: RequestParams = {},
    ) =>
      this.request<DocumentEntityDto[], HttpExceptionDto>({
        path: `/users/${tenantId}/documents/${userId}/context/${contextId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Documents
     * @name AttachDocumentsToUserByContextId
     * @request POST:/users/{tenantId}/documents/{userId}/context/{contextId}
     * @secure
     * @response `201` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin,user
     */
    attachDocumentsToUserByContextId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: AttachDocumentsToUser,
      params: RequestParams = {},
    ) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/${tenantId}/documents/${userId}/context/${contextId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  blockchain = {
    /**
     * No description
     *
     * @tags Blockchain
     * @name ReceiveEventWebhook
     * @request POST:/blockchain/webhook/event/{tenantId}
     * @response `401` `void` Unauthorized - Invalid Pixchain signature
     */
    receiveEventWebhook: (tenantId: string, data: EventNotifyDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/webhook/event/${tenantId}`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blockchain
     * @name ReceiveTransactionWebhook
     * @request POST:/blockchain/webhook/transaction/{tenantId}
     * @response `401` `void` Unauthorized - Invalid Pixchain signature
     */
    receiveTransactionWebhook: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/webhook/transaction/${tenantId}`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blockchain
     * @name ReceiveExternalTransactionSigningRequestWebhook
     * @request POST:/blockchain/webhook/external-transaction-signing-request/{tenantId}
     * @response `401` `void` Unauthorized - Invalid Pixchain signature
     */
    receiveExternalTransactionSigningRequestWebhook: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/webhook/external-transaction-signing-request/${tenantId}`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blockchain
     * @name GetBalance
     * @request GET:/blockchain/balance/{address}/{chainId}
     * @deprecated
     * @secure
     * @response `200` `void`
     */
    getBalance: (address: string, chainId: ChainId, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/blockchain/balance/${address}/${chainId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blockchain
     * @name RequestSessionWalletConnect
     * @request POST:/blockchain/request-session-wallet-connect
     * @secure
     * @response `201` `ResponseWalletConnectSessionDto`
     */
    requestSessionWalletConnect: (data: RequestWalletConnectSessionDto, params: RequestParams = {}) =>
      this.request<ResponseWalletConnectSessionDto, any>({
        path: `/blockchain/request-session-wallet-connect`,
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
     * @tags Blockchain
     * @name DisconnectSessionWalletConnect
     * @request DELETE:/blockchain/disconnect-session-wallet-connect
     * @secure
     * @response `200` `void`
     */
    disconnectSessionWalletConnect: (data: RequestWalletConnectSessionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/blockchain/disconnect-session-wallet-connect`,
        method: 'DELETE',
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
     * @response `200` `VerifySignupResponseDto` Response for verify sign up
     * @response `429` `TooManyRequestsExceptionDto`
     */
    verifySignUp: (
      query: {
        /** @example "user@example.com" */
        email: string;
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifySignupResponseDto, TooManyRequestsExceptionDto>({
        path: `/auth/verify-sign-up`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name RequestConfirmationEmail
     * @request POST:/auth/request-confirmation-email
     * @response `204` `void`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    requestConfirmationEmail: (data: RequestConfirmationEmailDto, params: RequestParams = {}) =>
      this.request<void, TooManyRequestsExceptionDto>({
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
     * @response `204` `void`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    requestPasswordReset: (data: RequestPasswordResetDto, params: RequestParams = {}) =>
      this.request<void, TooManyRequestsExceptionDto>({
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
     * @response `200` `SignInResponseDto`
     * @response `400` `BadRequestExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    resetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, BadRequestExceptionDto | TooManyRequestsExceptionDto>({
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
     * @name SignUp
     * @request POST:/auth/signup
     * @response `201` `SignInResponseDto`
     * @response `401` `UnauthorizedExceptionDto`
     */
    signUp: (data: SignupUserDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto>({
        path: `/auth/signup`,
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
     * @response `201` `SignInResponseDto`
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    signIn: (data: LoginUserDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
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
     * @secure
     * @response `201` `RefreshTokenResponseDto`
     * @response `403` `ForbiddenExceptionDto`
     */
    refreshToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<RefreshTokenResponseDto, ForbiddenExceptionDto>({
        path: `/auth/refresh-token`,
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
     * @tags Authentication
     * @name SignInTenant
     * @request POST:/auth/signin/tenant
     * @response `201` `SignInResponseDto`
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    signInTenant: (data: LoginTenantDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/tenant`,
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
     * @secure
     * @response `403` `ForbiddenExceptionDto`
     */
    logOut: (params: RequestParams = {}) =>
      this.request<any, ForbiddenExceptionDto>({
        path: `/auth/logout`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetJwks
     * @request GET:/auth/jwks.json
     * @response `200` `JSONWebKeySetDto`
     */
    getJwks: (params: RequestParams = {}) =>
      this.request<JSONWebKeySetDto, any>({
        path: `/auth/jwks.json`,
        method: 'GET',
        format: 'json',
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
     * @response `201` `TenantEntityDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration,administrator
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
     * @response `200` `TenantPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
     */
    findAll: (
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantPaginateResponseDto, HttpExceptionDto>({
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
     * @request GET:/tenant/{tenantId}
     * @secure
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    findOne: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${tenantId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name Update
     * @request PUT:/tenant/{tenantId}
     * @secure
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
     */
    update: (tenantId: string, data: UpdateTenantDto, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${tenantId}`,
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
     * @request DELETE:/tenant/{tenantId}
     * @secure
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
     */
    remove: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${tenantId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name GetTenantClientOrFail
     * @request GET:/tenant/client/{tenantId}
     * @secure
     * @response `200` `TenantClientResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, integration
     */
    getTenantClientOrFail: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantClientResponseDto, HttpExceptionDto>({
        path: `/tenant/client/${tenantId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name UpdateProfile
     * @request PUT:/tenant/profile/{tenantId}
     * @secure
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
     */
    updateProfile: (tenantId: string, data: UpdateTenantProfileDto, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/profile/${tenantId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  publicTenant = {
    /**
     * No description
     *
     * @tags Tenant Public
     * @name GetCompanyByHost
     * @request GET:/public-tenant/by-hostname
     * @secure
     * @response `200` `FindByHostnameDto`
     */
    getCompanyByHost: (
      query: {
        /** @example "example.com" */
        hostname: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindByHostnameDto, any>({
        path: `/public-tenant/by-hostname`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  tenantAccess = {
    /**
     * No description
     *
     * @tags Tenant Access
     * @name Create
     * @request POST:/tenant-access/{tenantId}
     * @secure
     * @response `201` `TenantAccessEntityDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
     */
    create: (tenantId: string, data: CreateTenantAccessDto, params: RequestParams = {}) =>
      this.request<TenantAccessEntityDto, HttpExceptionDto>({
        path: `/tenant-access/${tenantId}`,
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
     * @tags Tenant Access
     * @name FindAll
     * @request GET:/tenant-access/{tenantId}
     * @secure
     * @response `200` `TenantAccessPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
     */
    findAll: (
      tenantId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantAccessPaginateResponseDto, HttpExceptionDto>({
        path: `/tenant-access/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Access
     * @name FindOne
     * @request GET:/tenant-access/{tenantId}/{id}
     * @secure
     * @response `200` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,integration
     */
    findOne: (id: string, tenantId: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/tenant-access/${tenantId}/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  tenantHosts = {
    /**
     * No description
     *
     * @tags Tenant Hosts
     * @name Create
     * @request POST:/tenant-hosts/{tenantId}
     * @secure
     * @response `201` `TenantHostResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    create: (tenantId: string, data: CreateTenantHostDto, params: RequestParams = {}) =>
      this.request<TenantHostResponseDto, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}`,
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
     * @tags Tenant Hosts
     * @name FindAll
     * @request GET:/tenant-hosts/{tenantId}
     * @secure
     * @response `200` `TenantHostPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    findAll: (
      tenantId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantHostPaginateResponseDto, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Hosts
     * @name GetMainHostByTenantId
     * @request GET:/tenant-hosts/{tenantId}/main-host
     * @secure
     * @response `200` `TenantHostEntityDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    getMainHostByTenantId: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantHostEntityDto, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}/main-host`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Hosts
     * @name FindOne
     * @request GET:/tenant-hosts/{tenantId}/{id}
     * @secure
     * @response `200` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    findOne: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Hosts
     * @name Update
     * @request PATCH:/tenant-hosts/{tenantId}/{id}
     * @secure
     * @response `200` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    update: (tenantId: string, id: string, data: UpdateTenantHostDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tenantInput = {
    /**
     * No description
     *
     * @tags Tenant Input
     * @name CreateTenantInput
     * @request POST:/tenant-input/{tenantId}
     * @secure
     * @response `201` `TenantInputEntityDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    createTenantInput: (tenantId: string, data: CreateTenantInputDto, params: RequestParams = {}) =>
      this.request<TenantInputEntityDto, HttpExceptionDto>({
        path: `/tenant-input/${tenantId}`,
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
     * @tags Tenant Input
     * @name FindTenantInput
     * @request GET:/tenant-input/{tenantId}
     * @secure
     * @response `200` `TenantInputPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    findTenantInput: (
      tenantId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantInputPaginateResponseDto, HttpExceptionDto>({
        path: `/tenant-input/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Input
     * @name UpdateByInputId
     * @request PATCH:/tenant-input/{tenantId}/{inputId}
     * @secure
     * @response `201` `TenantInputEntityDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    updateByInputId: (tenantId: string, inputId: string, data: UpdateTenantInputDto, params: RequestParams = {}) =>
      this.request<TenantInputEntityDto, HttpExceptionDto>({
        path: `/tenant-input/${tenantId}/${inputId}`,
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
     * @tags Tenant Input
     * @name FindTenantInputById
     * @request GET:/tenant-input/{tenantId}/{inputId}
     * @secure
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    findTenantInputById: (tenantId: string, inputId: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant-input/${tenantId}/${inputId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
 * @description Get all tenant param by tenant and context
 *
 * @tags Tenant Input
 * @name ListBySlugContext
 * @request GET:/tenant-input/{tenantId}/slug/{slug}
 * @response `200` `(TenantInputEntityDto)[]`
 * @response `404` `{
  \** @example 404 *\
    statusCode: number,
  \** @example "Tenant context 'slug' is disabled from 'tenant'" *\
    message: string,
  \** @example "Not Found" *\
    error?: string,

}`
 */
    listBySlugContext: (tenantId: string, slug: string, params: RequestParams = {}) =>
      this.request<
        TenantInputEntityDto[],
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Tenant context 'slug' is disabled from 'tenant'" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/tenant-input/${tenantId}/slug/${slug}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  assets = {
    /**
     * @description Creates a new request to upload some asset (image or pdf) in our service. You must use this endpoint response to upload assets using the specific provider apis (ex: Cloudinary)
     *
     * @tags Assets
     * @name RequestUpload
     * @request POST:/assets/{tenantId}
     * @response `201` `AssetEntityWithProviderUploadParamsDto` Asset upload request successfully created!
     */
    requestUpload: (tenantId: string, data: RequestAssetUploadDto, params: RequestParams = {}) =>
      this.request<AssetEntityWithProviderUploadParamsDto, any>({
        path: `/assets/${tenantId}`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  contexts = {
    /**
 * @description Create a new context
 *
 * @tags Contexts
 * @name Create
 * @request POST:/contexts
 * @secure
 * @response `201` `ContextDto` Context created successfully
 * @response `401` `void` Unauthorized - Integration API key or JWT required
 * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin
 * @response `409` `{
  \** @example 409 *\
    statusCode: number,
  \** @example "Context "slug" already exists for tenant "tenantId"." *\
    message: string,
  \** @example "Conflict" *\
    error?: string,

}`
 */
    create: (data: CreateContextsDto, params: RequestParams = {}) =>
      this.request<
        ContextDto,
        | void
        | HttpExceptionDto
        | {
            /** @example 409 */
            statusCode: number;
            /** @example "Context "slug" already exists for tenant "tenantId"." */
            message: string;
            /** @example "Conflict" */
            error?: string;
          }
      >({
        path: `/contexts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns all contexts
     *
     * @tags Contexts
     * @name ListAll
     * @request GET:/contexts
     * @secure
     * @response `200` `(ContextDto)[]` Returns all contexts
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin
     */
    listAll: (params: RequestParams = {}) =>
      this.request<ContextDto[], void | HttpExceptionDto>({
        path: `/contexts`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a context by id
     *
     * @tags Contexts
     * @name Update
     * @request PATCH:/contexts/{id}
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin
     * @response `404` `DuplicatedContextException` Not found context to update
     */
    update: (id: string, data: UpdateContextsDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto | DuplicatedContextException>({
        path: `/contexts/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete a context by id
     *
     * @tags Contexts
     * @name Delete
     * @request DELETE:/contexts/{id}
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin
     */
    delete: (id: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/contexts/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  tenantContext = {
    /**
     * No description
     *
     * @tags Tenant Context
     * @name CreateTenantContext
     * @request POST:/tenant-context/{tenantId}
     * @secure
     * @response `201` `TenantContextDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    createTenantContext: (tenantId: string, data: CreateTenantContextDto, params: RequestParams = {}) =>
      this.request<TenantContextDto, HttpExceptionDto>({
        path: `/tenant-context/${tenantId}`,
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
     * @tags Tenant Context
     * @name FindTenantContext
     * @request GET:/tenant-context/{tenantId}
     * @secure
     * @response `200` `TenantInputPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    findTenantContext: (
      tenantId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantInputPaginateResponseDto, HttpExceptionDto>({
        path: `/tenant-context/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Context
     * @name FindOneByTenantContextId
     * @request GET:/tenant-context/{tenantId}/{tenantContextId}
     * @secure
     * @response `200` `TenantContextDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    findOneByTenantContextId: (tenantId: string, tenantContextId: string, params: RequestParams = {}) =>
      this.request<TenantContextDto, HttpExceptionDto>({
        path: `/tenant-context/${tenantId}/${tenantContextId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Context
     * @name UpdateByTenantContextId
     * @request PATCH:/tenant-context/{tenantId}/{tenantContextId}
     * @secure
     * @response `200` `TenantContextDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, superAdmin,admin,integration
     */
    updateByTenantContextId: (
      tenantId: string,
      tenantContextId: string,
      data: UpdateTenantContextDto,
      params: RequestParams = {},
    ) =>
      this.request<TenantContextDto, HttpExceptionDto>({
        path: `/tenant-context/${tenantId}/${tenantContextId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  integrations = {
    /**
     * No description
     *
     * @tags Integration
     * @name List
     * @request GET:/integrations
     * @secure
     * @response `200` `(IntegrationResponseDto)[]`
     */
    list: (params: RequestParams = {}) =>
      this.request<IntegrationResponseDto[], any>({
        path: `/integrations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  whitelists = {
    /**
     * No description
     *
     * @tags Whitelists
     * @name CheckUserInMultipleWhitelists
     * @request GET:/whitelists/{tenantId}/check-user
     * @secure
     * @response `200` `CheckUserInMultipleWhitelistsResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    checkUserInMultipleWhitelists: (
      tenantId: string,
      query: {
        /**
         * @format uuid
         * @example "00000000-0000-0000-0000-000000000000"
         */
        userId: string;
        /** @example ["00000000-0000-0000-0000-000000000000"] */
        whitelistsIds: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CheckUserInMultipleWhitelistsResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/check-user`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Whitelists
     * @name FindWhitelists
     * @request GET:/whitelists/{tenantId}
     * @secure
     * @response `200` `WhitelistPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    findWhitelists: (
      tenantId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<WhitelistPaginateResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Whitelists
     * @name CreateWhitelist
     * @request POST:/whitelists/{tenantId}
     * @secure
     * @response `201` `WhitelistResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    createWhitelist: (tenantId: string, data: CreateOrUpdateWhitelistDto, params: RequestParams = {}) =>
      this.request<WhitelistResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}`,
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
     * @tags Whitelists
     * @name GetWhitelist
     * @request GET:/whitelists/{tenantId}/{id}
     * @secure
     * @response `200` `WhitelistResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    getWhitelist: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<WhitelistResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Whitelists
     * @name UpdateWhitelist
     * @request PATCH:/whitelists/{tenantId}/{id}
     * @secure
     * @response `200` `WhitelistResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    updateWhitelist: (tenantId: string, id: string, data: CreateOrUpdateWhitelistDto, params: RequestParams = {}) =>
      this.request<WhitelistResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}`,
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
     * @tags Whitelists
     * @name DeleteWhitelist
     * @request DELETE:/whitelists/{tenantId}/{id}
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    deleteWhitelist: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Whitelists
     * @name PromoteWhitelistOnChain
     * @request PATCH:/whitelists/{tenantId}/{id}/promote-on-chain
     * @secure
     * @response `200` `WalletGroupResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    promoteWhitelistOnChain: (tenantId: string, id: string, data: WhitelistOnChainDto, params: RequestParams = {}) =>
      this.request<WalletGroupResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}/promote-on-chain`,
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
     * @tags Whitelists
     * @name CheckUserInWhitelist
     * @request GET:/whitelists/{tenantId}/{id}/check-user
     * @secure
     * @response `200` `CheckWhitelistUserResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    checkUserInWhitelist: (
      tenantId: string,
      id: string,
      query: {
        /**
         * @format uuid
         * @example "00000000-0000-0000-0000-000000000000"
         */
        userId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CheckWhitelistUserResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}/check-user`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Whitelists
     * @name FindWhitelistEntries
     * @request GET:/whitelists/{tenantId}/{id}/entries
     * @secure
     * @response `200` `WhitelistEntryPaginateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    findWhitelistEntries: (
      tenantId: string,
      id: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        /** @example "createdAt" */
        sortBy?: WhitelistEntriesSortBy;
        orderBy?: OrderByEnum;
        /** @default [] */
        type?: ('user_id' | 'email' | 'wallet_address' | 'collection_holder')[];
        /** @example false */
        showWallets?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WhitelistEntryPaginateResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}/entries`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Whitelists
     * @name CreateWhitelistEntry
     * @request POST:/whitelists/{tenantId}/{id}/entries
     * @secure
     * @response `201` `WhitelistEntryResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    createWhitelistEntry: (tenantId: string, id: string, data: CreateWhitelistEntryDto, params: RequestParams = {}) =>
      this.request<WhitelistEntryResponseDto, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}/entries`,
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
     * @tags Whitelists
     * @name DeleteWhitelistEntry
     * @request DELETE:/whitelists/{tenantId}/{id}/entries/{entryId}
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, admin
     */
    deleteWhitelistEntry: (tenantId: string, id: string, entryId: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}/entries/${entryId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
}
