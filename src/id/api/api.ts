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
  LoyaltyOperator = 'loyaltyOperator',
  CommerceOrderReceiver = 'commerce.orderReceiver',
  KycApprover = 'kyc.approver',
  KeyErc20Receiver = 'key.erc20Receiver',
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
  owner?: object;
}

export interface ReferrerUserDto {
  /** @format uuid */
  id: string;
  /** @example "email@example.com" */
  email: string;
}

export enum UserContextStatus {
  Approved = 'approved',
  Denied = 'denied',
  RequiredReview = 'requiredReview',
  Created = 'created',
  Draft = 'draft',
}

export interface LogUserContextDto {
  /** @default [] */
  inputIds: string[];
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
  /** @example "user_properties" */
  type: 'user_properties' | 'form';
  /** @example 1 */
  maxSubmissions: number;
  /** @example 1 */
  isPreOrder: boolean;
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
  /**
   * @format uuid
   * @default null
   * @example null
   */
  approverUserId?: string | null;
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
  /** @example true */
  phoneVerified: boolean;
  /** @example true */
  emailVerified: boolean;
  /**
   * @default ["user"]
   * @example ["user"]
   */
  roles: (
    | 'superAdmin'
    | 'admin'
    | 'operator'
    | 'user'
    | 'loyaltyOperator'
    | 'commerce.orderReceiver'
    | 'kyc.approver'
    | 'key.erc20Receiver'
  )[];
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
  avatarUrl?: string | null;
  referrerUser?: ReferrerUserDto | null;
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
  /** @example false */
  createVaultWallet?: boolean;
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

export interface AffiliationsResponseDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  name?: string;
}

export interface AffiliationsPaginatedResponseDto {
  items: AffiliationsResponseDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface AffiliationsLevelReportDto {
  /** @example 1 */
  level: number;
  /** @example 0 */
  affiliations: number;
}

export interface AffiliationsGlobalReportDto {
  /** @example 0 */
  affiliations: number;
  /** @example 0 */
  rank: number;
  /** @example 0 */
  percentRank: number;
}

export interface AffiliationsReportResponseDto {
  levelReport: AffiliationsLevelReportDto[];
  globalReport: AffiliationsGlobalReportDto;
}

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
  Export = 'export',
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

export enum ExportTypeEnum {
  UsersReport = 'users_report',
}

export enum ExportStatusEnum {
  Pending = 'pending',
  Generating = 'generating',
  ReadyForDownload = 'ready_for_download',
  Failed = 'failed',
  Expired = 'expired',
}

export interface ExportEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format uuid */
  tenantId: string;
  /** @example "users_report" */
  type: ExportTypeEnum;
  /** @example "ready_for_download" */
  status: ExportStatusEnum;
  /** @format date-time */
  readyForDownloadDate?: string;
  /** @format date-time */
  expiresIn?: string;
  /** @format uuid */
  assetId: string;
  asset: AssetEntityDto;
  /** @example null */
  params?: object;
}

export interface AdminSetReferrerDto {
  referrerCode?: string;
  /** @format uuid */
  referrerUserId: string;
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

export interface ChangePhoneDto {
  phone: string;
}

export interface VerifyPhoneDto {
  code: string;
}

export interface MainWalletDto {
  walletId: string;
}

export interface SetReferrerDto {
  referrer: string;
}

export interface RequestAccountExclusionDto {
  reason?: string;
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
  phone?: string;
  name?: string;
  /** @example "user@example.com" */
  email?: string;
  /** @example "pt-br" */
  i18nLocale?: I18NLocaleEnum;
  address?: UpdateAddressDto;
  /** @example "user" */
  roles?: UserRoleEnum[] | null;
  /** @example false */
  forcePhoneValidation?: boolean;
}

export interface AccountCompleteRetryDto {
  email: string;
  tenantId: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
}

export interface UserByCodeResponseDto {
  name?: string;
  id: string;
  avatarUrl?: string | null;
  /** @format date-time */
  expiresAt: string;
}

export interface UserCodeResponseDto {
  code: string;
  /** @format date-time */
  expiresAt: string;
}

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Kovan = 42,
  Local = 1337,
  Mumbai = 80001,
  Polygon = 137,
  undefined = 1284,
  undefined = 1285,
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
  /** @example true */
  emailVerified: boolean;
  /** @example true */
  phoneVerified: boolean;
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
  /**
   * @default true
   * @example true
   */
  emailVerified: boolean;
  /**
   * @default true
   * @example true
   */
  phoneVerified: boolean;
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
  /** @example false */
  isNewUser?: boolean;
  /** @example false */
  isPrivateEmail?: boolean;
  profile?: UserPublicResponseDto;
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

export interface TenantResponseDto {
  /** @format uuid */
  id: string;
  /** @example "user@example.com" */
  name: string;
}

export interface UserTenantsResponseDto {
  /** @example "user@example.com" */
  email: string;
  /** @example [] */
  tenants: TenantResponseDto[];
}

export interface UTMParamsDto {
  /** @example "google" */
  utm_source?: string;
  /** @example "cpc" */
  utm_medium?: string;
  /** @example "spring_sale" */
  utm_campaign?: string;
  /** @example "monkey+nft" */
  utm_term?: string;
  /** @example "content" */
  utm_content?: string;
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
  callbackUrl?: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
  phone?: string;
  utmParams?: UTMParamsDto;
  /** @example "referral-code" */
  referrer?: string;
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

export interface LoginUserWithCodeDto {
  /** @example "user@example.com" */
  email: string;
  /** @example "012345" */
  code: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId?: string;
}

export interface RequestCodeEmailDto {
  email: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
}

export interface LoginUserWithMagicTokenDto {
  /** @format uuid */
  token: string;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000001"
   */
  tenantId: string;
}

export interface RequestMagicSignInTokenDto {
  email: string;
  /** @example 30 */
  expirationInMinutes?: number;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
}

export interface SigningMagicTokenResponseDto {
  /** @format uuid */
  token: string;
  /** @format date-time */
  expiresAt: string;
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
  /** @example false */
  isNewUser?: boolean;
  /** @example false */
  isPrivateEmail?: boolean;
  profile?: UserPublicResponseDto;
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

export interface LoginUserWithGoogleDto {
  credential: string;
  referrer?: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId: string;
}

export interface LoginUserWithGoogleWithTenantParamDto {
  credential: string;
  referrer?: string;
}

export interface LoginUserWithAppleDto {
  credential?: string;
  id_token?: string;
  /** @example "00000000-0000-0000-0000-000000000001" */
  tenantId?: string;
  referrer?: string;
}

export interface LoginUserWithAppleByCodeDto {
  code: string;
  referrer?: string;
}

export interface SignupToCreateTenantDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example "P@ssw0rd"
   */
  password: string;
  /** @example "P@ssw0rd" */
  confirmation: string;
  /** @example "email@example.com" */
  email: string;
  /** @example "Jon Doe" */
  name?: string;
  /**
   * @default "pt-br"
   * @example "pt-br"
   */
  i18nLocale?: I18NLocaleEnum;
  /** @default "invisible" */
  verificationType?: VerificationType;
  phone?: string;
  utmParams?: UTMParamsDto;
  /** @example "referral-code" */
  referrer?: string;
}

export interface FinishTenantSignUpDto {
  tenantName: string;
  ownerName: string;
  /** @example "+5511999999999" */
  phone: string;
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

export interface TenantInfoDto {
  emailLogoUrl?: string;
  headerLogoUrl?: string;
  headerBackgroundColor?: string;
  bodyCardBackgroundColor?: string;
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
  clientId?: string;
  info: TenantInfoDto;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  deletedAt?: string;
}

export interface TenantSignUpResponseDto {
  tenant: TenantEntityDto;
  tenantSignIn: SignInResponseDto;
}

export interface CreateTenantDto {
  name: string;
  document: string;
  /** @example "BRA" */
  countryCode: CountryCodeEnum;
  /** @example "example.com" */
  hostname: string;
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

export interface TenantConfigurationsKycDto {
  isUniqueCPF?: boolean;
}

export interface PasswordlessConfigurationsDto {
  /** @default false */
  enabled: boolean;
  /** @default 0 */
  expirationInMinutes?: number;
  /** @default false */
  sendEmailWhenRegister: boolean;
}

export interface SignUpConfigurationDto {
  /** @example false */
  requireReferrer?: boolean;
}

export interface ClearSaleConfigurationDto {
  /** @example "username" */
  password: string;
  /** @example "******" */
  username: string;
}

export interface TenantConfigurationsDto {
  kyc?: TenantConfigurationsKycDto;
  passwordless?: PasswordlessConfigurationsDto;
  signUp?: SignUpConfigurationDto;
  clearSale?: ClearSaleConfigurationDto;
}

export interface TenantConfigurationsResponseDto {
  kyc: TenantConfigurationsKycDto;
}

export interface PublicHostDto {
  /** @example "example.com" */
  hostname: string;
  /** @default false */
  isMain: boolean;
}

export interface OauthPublicDataDto {
  /** @default false */
  enabled: boolean;
  /** @default false */
  requireReferrer?: boolean;
  callbackUri: string;
}

export interface TenantConfigurationResponseDto {
  passwordless?: PasswordlessConfigurationsDto;
  googleSignIn: OauthPublicDataDto;
  appleSignIn: OauthPublicDataDto;
}

export interface TenantPublicDto {
  /** @format uuid */
  id: string;
  name: string;
  info: TenantInfoDto;
  hosts: PublicHostDto[];
  configuration: TenantConfigurationResponseDto;
}

export interface CreateTenantContextDto {
  contextId: string;
  /** @example true */
  active: boolean;
  /** @example {} */
  data?: object;
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
  /** @example {} */
  data: object;
  /** @example null */
  approverWhitelistIds?: string[] | null;
  /** @example false */
  requireSpecificApprover: boolean;
  /** @example false */
  autoApprove: boolean;
  /** @example false */
  blockCommerceDeliver: boolean;
}

export interface TenantContextPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantContextDto[];
}

export interface UpdateTenantContextDto {
  /** @example true */
  active: boolean;
  /** @example {} */
  data?: object;
}

export interface TenantContextApproverDto {
  /** @format uuid */
  id: string;
  email: string;
  name?: string | null;
}

export interface TenantContextApproversResponseDto {
  approvers: TenantContextApproverDto[];
}

export interface CreateFullTenantContextDto {
  /** @example true */
  active: boolean;
  /** @example {} */
  data?: object;
  slug: string;
  description: string;
  /**
   * @default "user_properties"
   * @example "user_properties"
   */
  type: 'user_properties' | 'form';
  /**
   * @default 1
   * @example 1
   */
  maxSubmissions: number;
  /**
   * @default false
   * @example 1
   */
  isPreOrder: boolean;
}

export interface UpdateFullTenantContextDto {
  /** @example true */
  active: boolean;
  /** @example {} */
  data?: object;
  slug: string;
  description: string;
  /**
   * @default 1
   * @example 1
   */
  maxSubmissions: number;
  /**
   * @default false
   * @example 1
   */
  isPreOrder: boolean;
}

export enum DataTypesEnum {
  Separator = 'separator',
  File = 'file',
  Url = 'url',
  Cpf = 'cpf',
  Phone = 'phone',
  Text = 'text',
  Email = 'email',
  Birthdate = 'birthdate',
  Date = 'date',
  MultifaceSelfie = 'multiface_selfie',
  UserName = 'user_name',
  SimpleSelect = 'simple_select',
  DynamicSelect = 'dynamic_select',
  Image = 'image',
  IdentificationDocument = 'identification_document',
  SimpleLocation = 'simple_location',
  Checkbox = 'checkbox',
  CommerceProduct = 'commerce_product',
}

export interface TenantInputSelectOptionDto {
  /** @example "Option label" */
  label: string;
  /** @example "Option value" */
  value: string;
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
  options?: TenantInputSelectOptionDto[];
  data?: object;
  /** @example 1 */
  step?: number;
  /** @example "email" */
  attributeName: string;
}

export interface CreateContextsDto {
  description: string;
  slug: string;
  /**
   * @default "user_properties"
   * @example "user_properties"
   */
  type: 'user_properties' | 'form';
  /**
   * @default 1
   * @example 1
   */
  maxSubmissions: number;
  /**
   * @default false
   * @example 1
   */
  isPreOrder: boolean;
  tenantId?: string;
}

export interface UpdateContextsDto {
  description: string;
  slug: string;
  /**
   * @default 1
   * @example 1
   */
  maxSubmissions: number;
  /**
   * @default false
   * @example 1
   */
  isPreOrder: boolean;
}

export type DuplicatedContextException = object;

export enum WithdrawAccountTypeEnum {
  Pix = 'pix',
  Bank = 'bank',
}

export interface AddWithdrawAccountDto {
  /**
   * @default "pix"
   * @example "pix"
   */
  type: WithdrawAccountTypeEnum;
  /** @example {"key":"00000000000","ownerSsn":"00000000000","ownerName":"Test"} */
  accountInfo: object;
}

export interface UserWithdrawAccountEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format uuid */
  tenantId: string;
  /** @format uuid */
  userId: string;
  /** @example "pix" */
  type: WithdrawAccountTypeEnum;
  /** @example {"key":"00000000000","ownerSsn":"00000000000","ownerName":"Test"} */
  accountInfo?: object;
}

export interface UserWithdrawAccountEntityPaginatedDto {
  items: UserWithdrawAccountEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
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
  /** @format uuid */
  tenantId: string;
  /** @default false */
  isMain: boolean;
  paths: TenantHostPathsResponse;
  routes: TenantHostPathsResponse;
}

export interface TenantHostEntityDto {
  /** @format uuid */
  id: string;
  /** @example "example.com" */
  hostname: string;
  tenant: TenantEntityDto;
  /** @format uuid */
  tenantId: string;
  /** @default false */
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
  userContextId?: string | null;
}

export interface RequiredReviewContextStatusDto {
  reason?: string | null;
  userContextId?: string | null;
  /** @example [] */
  inputIds: string[];
}

export type TenantInputEntity = object;

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
  value?: string;
  simpleValue?: string;
  complexValue?: object;
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
  value?: object;
  assetId?: string;
}

export interface AttachDocumentsToUser {
  documents: DocumentDto[];
  currentStep?: number;
  approverUserId?: string | null;
  userContextId?: string | null;
  utmParams?: UTMParamsDto;
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
  KycApprovedContext = 'kyc_approved_context',
  KeyCollectionHolder = 'key_collection_holder',
  KeyErc20Holder = 'key_erc20_holder',
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

export enum AssetTypeEnum {
  Image = 'image',
  Document = 'document',
}

export enum AssetTargetEnum {
  UserDocument = 'userDocument',
  Export = 'export',
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

export interface CloudinaryQueryParamsDto {
  /** @example false */
  filename_override: boolean;
  public_id: string;
  /** @example 1666215568 */
  timestamp: number;
  /** @example true */
  unique_filename: boolean;
  /** @example "upload_preset" */
  upload_preset?: string | null;
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
  queryParams: CloudinaryQueryParamsDto;
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

export interface DispatchNotificationEventDto {
  /** @example "kyc-approved" */
  event: string;
  /** @example null */
  metadata?: object | null;
  destinationUserId?: string[];
  hiddenDestinationUserId?: string[];
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
  options?: TenantInputSelectOptionDto[];
  /** @example {"key":"value"} */
  data?: object;
  /** @example 1 */
  step?: number;
  /** @example "email" */
  attributeName?: string;
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
  options?: TenantInputSelectOptionDto[];
  /** @example {"key":"value"} */
  data?: object;
  /** @example 1 */
  step?: number;
  /** @example "email" */
  attributeName?: string;
}

export interface TenantInputPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantInputEntityDto[];
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

export interface ClearSaleTransactionCardDto {
  /** @example "123456" */
  bin: string;
  /** @example "1234" */
  last4: string;
  /** @example "João Santos Silva" */
  ownerName: string;
  /** @format xxxxxxxxxxx */
  ownerDocument: string;
}

export interface RequestClearSaleInfoDto {
  /** @format uuid */
  userId: string;
  /** @example "+5511999999999" */
  phone?: string;
  /** @format xxxxxxxxxxx */
  cpf?: string;
  card?: ClearSaleTransactionCardDto;
}

export interface BillingPlanLimitDto {
  daily: number | null;
  lifetime: number | null;
  monthly: number | null;
  weekly: number | null;
}

export interface UploadFileSizeLimitDto {
  image: number | null;
  video: number | null;
  others: number | null;
}

export interface BillingFeesDto {
  minValue: number;
  percentage: number;
}

export interface BillingPlanEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @example "free" */
  name: string;
  /** @example 99.99 */
  basePrice: number;
  /**
   * @format uuid
   * @example null
   */
  unpaidPlanId: string | null;
  /** @example false */
  isDefault: boolean;
  /** @example false */
  isPublic: boolean;
  erc721Contracts: BillingPlanLimitDto;
  erc721Collections: BillingPlanLimitDto;
  erc721Tokens: BillingPlanLimitDto;
  erc721Mints: BillingPlanLimitDto;
  erc20Contracts: BillingPlanLimitDto;
  erc20Mints: BillingPlanLimitDto;
  activeWallets: BillingPlanLimitDto;
  bandwidth: BillingPlanLimitDto;
  nftCollections: BillingPlanLimitDto;
  nftContracts: BillingPlanLimitDto;
  nftMints: BillingPlanLimitDto;
  nftTokens: BillingPlanLimitDto;
  tokensPerCollection: BillingPlanLimitDto;
  onSaleProducts: BillingPlanLimitDto;
  storage: BillingPlanLimitDto;
  erc20SaleTransactionPrice: number;
  erc20TransactionPrice: number;
  extraNftMintPrice: number;
  users?: number | null;
  maxClients?: number | null;
  maxLoyaltyPartners?: number | null;
  nftSaleTransactionPrice: number;
  nftTransactionPrice: number;
  maxUploadFileSizes: UploadFileSizeLimitDto;
  primarySaleFee: BillingFeesDto;
  resaleFee: BillingFeesDto;
  enabledFeatures: (
    | 'mint_erc_721'
    | 'mint_erc_20'
    | 'mint_with_royalty'
    | 'mint_with_variable_royalties'
    | 'mint_permissioned_erc_20'
    | 'mint_custodial_erc_20'
    | 'batch_mint'
    | 'custom_nft_templates'
    | 'transfer_nft'
    | 'white_label'
    | 'external_ecommerce_integration'
    | 'smart_contract_portability'
    | 'custodial_wallet'
    | 'custodial_wallet_portability'
    | 'basic_token_pass'
    | 'full_token_pass'
    | 'loyalty'
    | 'kyc'
    | 'commerce'
    | 'constructor'
    | 'custom_domain'
  )[];
  /** @example 1 */
  homeSortOrder: number;
  /** @example {} */
  homeContent: object;
}

export interface BillingPlanEntityPaginatedDto {
  items: BillingPlanEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface BillingUsageItemDto {
  /** @example "purchase" */
  type: string;
  /** @default false */
  isLifeTime?: boolean;
  value?: number | null;
  metadata: object | null;
}

export interface RegisterBillingUsageDto {
  /** @format date-time */
  createdAt?: string | null;
  usages: BillingUsageItemDto[];
}

export interface FeatureCheckResponseDto {
  feature:
    | 'mint_erc_721'
    | 'mint_erc_20'
    | 'mint_with_royalty'
    | 'mint_with_variable_royalties'
    | 'mint_permissioned_erc_20'
    | 'mint_custodial_erc_20'
    | 'batch_mint'
    | 'custom_nft_templates'
    | 'transfer_nft'
    | 'white_label'
    | 'external_ecommerce_integration'
    | 'smart_contract_portability'
    | 'custodial_wallet'
    | 'custodial_wallet_portability'
    | 'basic_token_pass'
    | 'full_token_pass'
    | 'loyalty'
    | 'kyc'
    | 'commerce'
    | 'constructor'
    | 'custom_domain';
  /** @example true */
  enabled: boolean;
}

export interface TenantBillingStateResponseDto {
  enabledFeatures: (
    | 'mint_erc_721'
    | 'mint_erc_20'
    | 'mint_with_royalty'
    | 'mint_with_variable_royalties'
    | 'mint_permissioned_erc_20'
    | 'mint_custodial_erc_20'
    | 'batch_mint'
    | 'custom_nft_templates'
    | 'transfer_nft'
    | 'white_label'
    | 'external_ecommerce_integration'
    | 'smart_contract_portability'
    | 'custodial_wallet'
    | 'custodial_wallet_portability'
    | 'basic_token_pass'
    | 'full_token_pass'
    | 'loyalty'
    | 'kyc'
    | 'commerce'
    | 'constructor'
    | 'custom_domain'
  )[];
  /** @example false */
  isUnpaid: boolean;
  /**
   * @format uuid
   * @example null
   */
  planId: string | null;
  /** @example true */
  setupDone: boolean;
  /** @example true */
  hasCreditCard: boolean;
  /** @example null */
  creditCard: object | null;
  /** @example {"commerce.product_purchase":{"limit":null,"remaining":null,"unlimited":true}} */
  limits: object;
  hardLimits: object;
}

export interface SetCreditCardDto {
  tokenId: string;
  cardId: string;
  cardLastNumbers: string;
  /** @example 1 */
  expiryMonth: number;
  /** @example 1 */
  expiryYear: number;
  brand?: string;
}

export interface PublicUserCreditCardEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt?: string;
  brand?: string;
  lastNumbers: string;
  name?: string;
}

export interface SetPlanDto {
  /** @format uuid */
  planId: string;
  /**
   * Note: It only works for new tenants on its first plan selection
   * @example "coupon-code"
   */
  couponCode?: string;
}

export interface BillingCycleResponseDto {
  /** @format date-time */
  startCycleDate: string;
  /** @format date-time */
  endCycleDate: string;
}

export interface BillingCycleListResponseDto {
  items: BillingCycleResponseDto[];
}

export interface BillingSummaryItemByTypeDto {
  type:
    | 'commerce.product_purchase'
    | 'commerce.product_published'
    | 'key.nft_minted'
    | 'key.erc20_minted'
    | 'key.nft_collection_created'
    | 'key.nft_contract_created'
    | 'key.erc20_contract_created'
    | 'nft_sale_transaction'
    | 'erc20_sale_transaction'
    | 'nft_transaction'
    | 'erc20_transaction';
  planPrepaidLimit: number;
  planSingleItemPrice: number;
  totalEvents: number;
  totalPrice: number;
}

export interface BillingSummaryResponseDto {
  /** @format uuid */
  tenantId: string;
  /** @format date-time */
  startCycleDate: string;
  /** @format date-time */
  endCycleDate: string;
  eventsSummary: BillingSummaryItemByTypeDto[];
}

export interface BillingUsageEntityDto {
  /** @format uuid */
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format uuid */
  tenantId: string;
  /** @example "commerce.product_purchase" */
  type: string;
  /** @example false */
  isLifeTime: boolean;
  /** @example 100 */
  value?: number | null;
  /** @example null */
  metadata?: object | null;
}

export interface BillingUsageEntityPaginatedDto {
  items: BillingUsageEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name Create
   * @request POST:/users
   * @secure
   * @response `201` `UserPublicResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user, operator, loyaltyOperator
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
   * @name GetUserDirectAffiliations
   * @request GET:/users/affiliations
   * @secure
   * @response `200` `AffiliationsPaginatedResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
   */
  export namespace GetUserDirectAffiliations {
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
    export type ResponseBody = AffiliationsPaginatedResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetUserAffiliationsReport
   * @request GET:/users/affiliations-report
   * @secure
   * @response `200` `AffiliationsReportResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
   */
  export namespace GetUserAffiliationsReport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AffiliationsReportResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetUsersReport
   * @request GET:/users/{tenantId}/report/{email}
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin
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
   * @description Requests a users report XLS based on some params
   * @tags Users
   * @name RequestUsersExport
   * @request GET:/users/{tenantId}/xls
   * @secure
   * @response `201` `ExportEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace RequestUsersExport {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @example "2022-01-30T10:30:40-03:00" */
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      /**
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * @default 10
       * @example 10
       */
      limit?: number;
      search?: string;
      /** @example ["user"] */
      role?: (
        | 'superAdmin'
        | 'admin'
        | 'operator'
        | 'user'
        | 'loyaltyOperator'
        | 'commerce.orderReceiver'
        | 'kyc.approver'
        | 'key.erc20Receiver'
      )[];
      userId?: string[];
      contextIds?: string[];
      contextStatus?: UserContextStatus[];
      timezone?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExportEntityDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetProfileUserById
   * @request GET:/users/{tenantId}/{id}
   * @secure
   * @response `200` `UserPublicResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @name GetUserByReferralCode
   * @request GET:/users/{tenantId}/by-referral-code/{referralCode}
   * @secure
   * @response `200` `UserPublicResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace GetUserByReferralCode {
    export type RequestParams = {
      tenantId: string;
      referralCode: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name SetUserReferrer
   * @request PATCH:/users/{tenantId}/{id}/referrer
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace SetUserReferrer {
    export type RequestParams = {
      tenantId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AdminSetReferrerDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name GetUsersByTenantId
   * @request GET:/users/{tenantId}
   * @secure
   * @response `200` `UserPaginateResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace GetUsersByTenantId {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @example "2022-01-30T10:30:40-03:00" */
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      /**
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * @default 10
       * @example 10
       */
      limit?: number;
      search?: string;
      /** @example ["user"] */
      role?: (
        | 'superAdmin'
        | 'admin'
        | 'operator'
        | 'user'
        | 'loyaltyOperator'
        | 'commerce.orderReceiver'
        | 'kyc.approver'
        | 'key.erc20Receiver'
      )[];
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
   * @name ChangeUserPhone
   * @request PATCH:/users/phone
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
   */
  export namespace ChangeUserPhone {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePhoneDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name VerifyUserPhone
   * @request PATCH:/users/phone/verify
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
   */
  export namespace VerifyUserPhone {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VerifyPhoneDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name ResendPhoneVerificationCode
   * @request PATCH:/users/phone/resend-verification-code
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
   */
  export namespace ResendPhoneVerificationCode {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @name SetReferrer
   * @request PATCH:/users/referrer
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
   */
  export namespace SetReferrer {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetReferrerDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name RequestAccountExclusion
   * @request POST:/users/request-account-exclusion
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
   */
  export namespace RequestAccountExclusion {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestAccountExclusionDto;
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @tags Users
   * @name GetUserByCode
   * @request GET:/users/{tenantId}/code/{userCode}
   * @secure
   * @response `200` `UserByCodeResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, superAdmin, loyaltyOperator
   */
  export namespace GetUserByCode {
    export type RequestParams = {
      tenantId: string;
      userCode: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserByCodeResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetTemporaryCode
   * @request POST:/users/{tenantId}/code/{userId}
   * @secure
   * @response `200` `UserCodeResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user, loyaltyOperator
   */
  export namespace GetTemporaryCode {
    export type RequestParams = {
      tenantId: string;
      userId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserCodeResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name CreateVault
   * @request POST:/users/{tenantId}/wallets/vault/claim
   * @secure
   * @response `200` `WalletResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace CreateVault {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @format uuid */
      userId?: string | null;
    };
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, integration, admin
   */
  export namespace FindByAddress {
    export type RequestParams = {
      tenantId: string;
      address: string;
    };
    export type RequestQuery = {
      includeOwnerInfo?: boolean;
    };
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @tags Users Withdraw Accounts
   * @name AddUserWithdrawAccount
   * @request POST:/users/{tenantId}/withdraw-accounts/{userId}
   * @secure
   * @response `201` `UserWithdrawAccountEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace AddUserWithdrawAccount {
    export type RequestParams = {
      tenantId: string;
      userId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AddWithdrawAccountDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserWithdrawAccountEntityDto;
  }
  /**
   * No description
   * @tags Users Withdraw Accounts
   * @name ListUserWithdrawAccounts
   * @request GET:/users/{tenantId}/withdraw-accounts/{userId}
   * @secure
   * @response `200` `UserWithdrawAccountEntityPaginatedDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace ListUserWithdrawAccounts {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserWithdrawAccountEntityPaginatedDto;
  }
  /**
   * No description
   * @tags Users Withdraw Accounts
   * @name GetUserWithdrawAccountById
   * @request GET:/users/{tenantId}/withdraw-accounts/{userId}/{accountId}
   * @secure
   * @response `200` `UserWithdrawAccountEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace GetUserWithdrawAccountById {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      accountId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserWithdrawAccountEntityDto;
  }
  /**
   * No description
   * @tags Users Withdraw Accounts
   * @name DeleteUserWithdrawAccount
   * @request DELETE:/users/{tenantId}/withdraw-accounts/{userId}/{accountId}
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace DeleteUserWithdrawAccount {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      accountId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users Contexts
   * @name FindUsersContext
   * @request GET:/users/{tenantId}/contexts/find
   * @secure
   * @response `200` `UserContextEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user, admin, kyc.approver
   */
  export namespace FindUsersContext {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @example "2022-01-30T10:30:40-03:00" */
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      /**
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * @default 10
       * @example 10
       */
      limit?: number;
      search?: string;
      userId?: string[];
      status?: ('approved' | 'denied' | 'requiredReview' | 'created' | 'draft')[];
      contextId?: string[];
      contextType?: ('user_properties' | 'form')[];
      preOrder?: boolean;
      /** Applicable just for approver case */
      excludeSelfContexts?: boolean;
      /** @example "super_sales" */
      utmCampaign?: string;
      /** @example "google" */
      utmSource?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserContextEntityDto;
  }
  /**
   * No description
   * @tags Users Contexts
   * @name FindUsersContextByUserId
   * @request GET:/users/{tenantId}/contexts/{userId}
   * @secure
   * @response `200` `UsersContextsPaginateResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
   * @name FindUserContextById
   * @request GET:/users/{tenantId}/contexts/{userId}/{userContextId}
   * @secure
   * @response `200` `UserContextEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user, admin, kyc.approver
   */
  export namespace FindUserContextById {
    export type RequestParams = {
      tenantId: string;
      userId: string;
      userContextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserContextEntityDto;
  }
  /**
   * No description
   * @tags Users Contexts
   * @name ApproveTenantContextByUserId
   * @request PATCH:/users/{tenantId}/contexts/{userId}/{contextId}/approve
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, kyc.approver
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, kyc.approver
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, kyc.approver
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
   * @name FindUserByAny
   * @request GET:/users/{tenantId}/documents/find-user-by-any
   * @secure
   * @response `200` `UserPublicResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, integration
   */
  export namespace FindUserByAny {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @format uuid */
      userId?: string;
      /** @format xxxxxxxxxxx */
      cpf?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users Documents
   * @name FindUserDocumentsByUserId
   * @request GET:/users/{tenantId}/documents/{userId}
   * @secure
   * @response `200` `DocumentPaginateResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
      type?: (
        | 'separator'
        | 'file'
        | 'url'
        | 'cpf'
        | 'phone'
        | 'text'
        | 'email'
        | 'birthdate'
        | 'date'
        | 'multiface_selfie'
        | 'user_name'
        | 'simple_select'
        | 'dynamic_select'
        | 'image'
        | 'identification_document'
        | 'simple_location'
        | 'checkbox'
        | 'commerce_product'
      )[];
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user, admin, kyc.approver
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name RequestSessionWalletConnect
   * @request POST:/blockchain/request-session-wallet-connect
   * @secure
   * @response `201` `ResponseWalletConnectSessionDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
   * @name ListUserTenants
   * @request GET:/auth/user-tenants
   * @response `200` `UserTenantsResponseDto` Lists all user administrative tenants which can be used to login on dashboard
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace ListUserTenants {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @example "user@example.com" */
      email: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserTenantsResponseDto;
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
   * @name SignInWithCode
   * @request POST:/auth/signin/code
   * @response `201` `SignInResponseDto`
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace SignInWithCode {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginUserWithCodeDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name RequestCode
   * @request POST:/auth/signin/request-code
   * @response `200` `void`
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace RequestCode {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestCodeEmailDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Authentication
   * @name SignInWithMagicToken
   * @request POST:/auth/signin/magic-token
   * @response `201` `SignInResponseDto`
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace SignInWithMagicToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginUserWithMagicTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name GenerateSignInMagicToken
   * @request POST:/auth/signin/generate-magic-token
   * @secure
   * @response `201` `SigningMagicTokenResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace GenerateSignInMagicToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestMagicSignInTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = SigningMagicTokenResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name RefreshToken
   * @request POST:/auth/refresh-token
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
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
  /**
   * No description
   * @tags Authentication
   * @name GoogleAuth
   * @request POST:/auth/signin/google
   * @response `201` `SignInResponseDto` Authenticates user using google credential
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace GoogleAuth {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginUserWithGoogleDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name GoogleAuthWithTenantParam
   * @request POST:/auth/{tenantId}/signin/google
   * @response `201` `SignInResponseDto` Authenticates user using google credential
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace GoogleAuthWithTenantParam {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LoginUserWithGoogleWithTenantParamDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name GoogleAuthByCodeRedirect
   * @request GET:/auth/{tenantId}/signin/google
   * @response `308` `void` Redirects user to make google login under tenant scope using token code strategy
   * @response `400` `BadRequestExceptionDto`
   */
  export namespace GoogleAuthByCodeRedirect {
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
   * @tags Authentication
   * @name GoogleAuthByCode
   * @request GET:/auth/{tenantId}/signin/google/code
   * @response `201` `SignInResponseDto` Authenticates user using google token code
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace GoogleAuthByCode {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      code: string;
      referrer?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name AppleAuth
   * @request POST:/auth/signin/apple
   * @response `201` `SignInResponseDto` Authenticates user using apple credential
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace AppleAuth {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginUserWithAppleDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name AppleAuthByCodeRedirect
   * @request GET:/auth/{tenantId}/signin/apple
   * @response `308` `void` Redirects user to make apple login under tenant scope using token code strategy
   * @response `400` `BadRequestExceptionDto`
   */
  export namespace AppleAuthByCodeRedirect {
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
   * @tags Authentication
   * @name AppleAuthByCode
   * @request POST:/auth/{tenantId}/signin/apple/code
   * @response `201` `SignInResponseDto` Authenticates user using apple token code
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace AppleAuthByCode {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LoginUserWithAppleByCodeDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name TenantSignUp
   * @request POST:/auth/signup/tenant
   * @response `201` `SignInResponseDto`
   * @response `400` `BadRequestExceptionDto`
   * @response `401` `UnauthorizedExceptionDto`
   * @response `429` `TooManyRequestsExceptionDto`
   */
  export namespace TenantSignUp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignupToCreateTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name FinishTenantSignUp
   * @request PATCH:/auth/signup/tenant/finish
   * @secure
   * @response `201` `TenantSignUpResponseDto`
   * @response `400` `BadRequestExceptionDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
   */
  export namespace FinishTenantSignUp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinishTenantSignUpDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantSignUpResponseDto;
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
  /**
   * No description
   * @tags Tenant
   * @name UpsertConfigurations
   * @request POST:/tenant/configurations/{tenantId}
   * @secure
   * @response `200` `TenantConfigurationsResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, superAdmin, integration
   */
  export namespace UpsertConfigurations {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TenantConfigurationsDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantConfigurationsResponseDto;
  }
  /**
   * No description
   * @tags Tenant
   * @name GetConfigurations
   * @request GET:/tenant/configurations/{tenantId}
   * @secure
   * @response `200` `TenantConfigurationsResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, superAdmin, integration
   */
  export namespace GetConfigurations {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantConfigurationsResponseDto;
  }
}

export namespace PublicTenant {
  /**
   * No description
   * @tags Tenant Public
   * @name GetTenantByHost
   * @request GET:/public-tenant/by-hostname
   * @secure
   * @response `200` `TenantPublicDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace GetTenantByHost {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @example "example.com" */
      hostname: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantPublicDto;
  }
  /**
   * No description
   * @tags Tenant Public
   * @name GetTenantById
   * @request GET:/public-tenant/by-id
   * @secure
   * @response `200` `TenantPublicDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace GetTenantById {
    export type RequestParams = {};
    export type RequestQuery = {
      tenantId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantPublicDto;
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, integration
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
   * @response `200` `TenantContextPaginateResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
   */
  export namespace FindTenantContext {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @example "2022-01-30T10:30:40-03:00" */
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      /**
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * @default 10
       * @example 10
       */
      limit?: number;
      search?: string;
      active?: boolean;
      type?: ('user_properties' | 'form')[];
      preOrder?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant Context
   * @name GetTenantContextBySlug
   * @request GET:/tenant-context/{tenantId}/slug/{slug}
   * @secure
   * @response `200` `(TenantContextDto)[]`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
   */
  export namespace GetTenantContextBySlug {
    export type RequestParams = {
      tenantId: string;
      slug: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextDto[];
  }
  /**
   * No description
   * @tags Tenant Context
   * @name FindOneByTenantContextId
   * @request GET:/tenant-context/{tenantId}/{tenantContextId}
   * @secure
   * @response `200` `TenantContextDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
  /**
   * No description
   * @tags Tenant Context
   * @name GetTenantContextApprovers
   * @request GET:/tenant-context/{tenantId}/{tenantContextId}/approvers
   * @secure
   * @response `200` `TenantContextApproversResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
   */
  export namespace GetTenantContextApprovers {
    export type RequestParams = {
      tenantId: string;
      tenantContextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextApproversResponseDto;
  }
}

export namespace Admin {
  /**
   * No description
   * @tags Tenant Context
   * @name CreateFullTenantContext
   * @request POST:/admin/tenant-context/{tenantId}
   * @secure
   * @response `201` `TenantContextDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, integration
   */
  export namespace CreateFullTenantContext {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateFullTenantContextDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextDto;
  }
  /**
   * No description
   * @tags Tenant Context
   * @name UpdateFullContextById
   * @request PATCH:/admin/tenant-context/{tenantId}/{tenantContextId}
   * @secure
   * @response `200` `TenantContextDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace UpdateFullContextById {
    export type RequestParams = {
      tenantId: string;
      tenantContextId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateFullTenantContextDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextDto;
  }
  /**
   * No description
   * @tags Tenant Context
   * @name ListTenantContextInputs
   * @request GET:/admin/tenant-context/{tenantId}/{tenantContextId}/inputs
   * @secure
   * @response `200` `TenantInputEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace ListTenantContextInputs {
    export type RequestParams = {
      tenantId: string;
      tenantContextId: string;
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
    export type ResponseBody = TenantInputEntityDto;
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
 * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
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
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin
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
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
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
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
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

export namespace TenantAccess {
  /**
   * No description
   * @tags Tenant Access
   * @name Create
   * @request POST:/tenant-access/{tenantId}
   * @secure
   * @response `201` `TenantAccessEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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

export namespace Whitelists {
  /**
   * No description
   * @tags Whitelists
   * @name CheckUserInMultipleWhitelists
   * @request GET:/whitelists/{tenantId}/check-user
   * @secure
   * @response `200` `CheckUserInMultipleWhitelistsResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
      /**
       * @default false
       * @example false
       */
      disableCache?: boolean;
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
      /**
       * @default false
       * @example false
       */
      disableCache?: boolean;
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
      type?: (
        | 'user_id'
        | 'email'
        | 'wallet_address'
        | 'collection_holder'
        | 'kyc_approved_context'
        | 'key_collection_holder'
        | 'key_erc20_holder'
      )[];
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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

export namespace Notifications {
  /**
   * No description
   * @tags Notifications
   * @name DispatchNotificationEvent
   * @request POST:/notifications/{tenantId}/event
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
   */
  export namespace DispatchNotificationEvent {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DispatchNotificationEventDto;
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
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
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
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

export namespace Integrations {
  /**
   * No description
   * @tags Integration
   * @name List
   * @request GET:/integrations
   * @secure
   * @response `200` `(IntegrationResponseDto)[]`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = IntegrationResponseDto[];
  }
}

export namespace TenantBadgesProviders {
  /**
   * No description
   * @tags Tenant Badge Providers
   * @name RequestTransactionInfo
   * @request POST:/tenant-badges-providers/{tenantId}/clear-sale/transaction-info
   * @secure
   * @response `200` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
   */
  export namespace RequestTransactionInfo {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RequestClearSaleInfoDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Billing {
  /**
   * No description
   * @tags Billing
   * @name ListPlans
   * @request GET:/billing/plans
   * @secure
   * @response `200` `BillingPlanEntityPaginatedDto`
   */
  export namespace ListPlans {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @example "2022-01-30T10:30:40-03:00" */
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      /**
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * @default 10
       * @example 10
       */
      limit?: number;
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingPlanEntityPaginatedDto;
  }
  /**
   * No description
   * @tags Billing
   * @name RegisterBillingUsage
   * @request POST:/billing/{tenantId}/register-billing-usage
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
   */
  export namespace RegisterBillingUsage {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RegisterBillingUsageDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Billing
   * @name CheckFeatureEnabled
   * @request GET:/billing/{tenantId}/is-feature-enabled/{feature}
   * @secure
   * @response `200` `FeatureCheckResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user, operator
   */
  export namespace CheckFeatureEnabled {
    export type RequestParams = {
      tenantId: string;
      feature: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FeatureCheckResponseDto;
  }
  /**
   * No description
   * @tags Billing
   * @name GetState
   * @request GET:/billing/{tenantId}/state
   * @secure
   * @response `200` `TenantBillingStateResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace GetState {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantBillingStateResponseDto;
  }
  /**
   * No description
   * @tags Billing
   * @name SetCreditCard
   * @request PATCH:/billing/{tenantId}/credit-card
   * @secure
   * @response `200` `PublicUserCreditCardEntityDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace SetCreditCard {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SetCreditCardDto;
    export type RequestHeaders = {};
    export type ResponseBody = PublicUserCreditCardEntityDto;
  }
  /**
   * No description
   * @tags Billing
   * @name SetPlan
   * @request PATCH:/billing/{tenantId}/plan
   * @secure
   * @response `200` `BillingPlanEntityDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace SetPlan {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SetPlanDto;
    export type RequestHeaders = {};
    export type ResponseBody = BillingPlanEntityDto;
  }
  /**
   * No description
   * @tags Billing
   * @name CancelPlan
   * @request PATCH:/billing/{tenantId}/cancel
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace CancelPlan {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Billing
   * @name GetCycles
   * @request GET:/billing/{tenantId}/cycles
   * @secure
   * @response `200` `BillingCycleListResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace GetCycles {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingCycleListResponseDto;
  }
  /**
   * No description
   * @tags Billing
   * @name GetBillingSummary
   * @request GET:/billing/{tenantId}/billing-summary
   * @secure
   * @response `200` `BillingSummaryResponseDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace GetBillingSummary {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @format date-time */
      startCycleDate?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingSummaryResponseDto;
  }
  /**
   * No description
   * @tags Billing
   * @name ListBillingUsage
   * @request GET:/billing/{tenantId}/billing-usages
   * @secure
   * @response `200` `BillingUsageEntityPaginatedDto`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
   */
  export namespace ListBillingUsage {
    export type RequestParams = {
      tenantId: string;
    };
    export type RequestQuery = {
      /** @example "2022-01-30T10:30:40-03:00" */
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      /**
       * @default 1
       * @example 1
       */
      page?: number;
      /**
       * @default 10
       * @example 10
       */
      limit?: number;
      search?: string;
      /** @example ["key.nft_minted"] */
      type?: (
        | 'commerce.product_purchase'
        | 'commerce.product_published'
        | 'key.nft_minted'
        | 'key.erc20_minted'
        | 'key.nft_collection_created'
        | 'key.nft_contract_created'
        | 'key.erc20_contract_created'
        | 'nft_sale_transaction'
        | 'erc20_sale_transaction'
        | 'nft_transaction'
        | 'erc20_transaction'
      )[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingUsageEntityPaginatedDto;
  }
  /**
   * No description
   * @tags Billing
   * @name DispatchProcessInvoice
   * @request PATCH:/billing/{tenantId}/invoice-and-charge
   * @secure
   * @response `204` `void`
   * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
   */
  export namespace DispatchProcessInvoice {
    export type RequestParams = {
      tenantId: string;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'https://pixwayid.stg.w3block.io' });
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
 * @version 0.9.90
 * @baseUrl https://pixwayid.stg.w3block.io
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    create: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    invite: (data: InviteUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user, operator, loyaltyOperator
     */
    getProfileByUserLogged: (params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
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
     * @name GetUserDirectAffiliations
     * @request GET:/users/affiliations
     * @secure
     * @response `200` `AffiliationsPaginatedResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
     */
    getUserDirectAffiliations: (
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
      this.request<AffiliationsPaginatedResponseDto, void | HttpExceptionDto>({
        path: `/users/affiliations`,
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
     * @name GetUserAffiliationsReport
     * @request GET:/users/affiliations-report
     * @secure
     * @response `200` `AffiliationsReportResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
     */
    getUserAffiliationsReport: (params: RequestParams = {}) =>
      this.request<AffiliationsReportResponseDto, void | HttpExceptionDto>({
        path: `/users/affiliations-report`,
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin
     */
    getUsersReport: (tenantId: string, email: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/${tenantId}/report/${email}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Requests a users report XLS based on some params
     *
     * @tags Users
     * @name RequestUsersExport
     * @request GET:/users/{tenantId}/xls
     * @secure
     * @response `201` `ExportEntityDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    requestUsersExport: (
      tenantId: string,
      query?: {
        /** @example "2022-01-30T10:30:40-03:00" */
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        search?: string;
        /** @example ["user"] */
        role?: (
          | 'superAdmin'
          | 'admin'
          | 'operator'
          | 'user'
          | 'loyaltyOperator'
          | 'commerce.orderReceiver'
          | 'kyc.approver'
          | 'key.erc20Receiver'
        )[];
        userId?: string[];
        contextIds?: string[];
        contextStatus?: UserContextStatus[];
        timezone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExportEntityDto, void | HttpExceptionDto>({
        path: `/users/${tenantId}/xls`,
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
     * @name GetProfileUserById
     * @request GET:/users/{tenantId}/{id}
     * @secure
     * @response `200` `UserPublicResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    getProfileUserById: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
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
     * @name GetUserByReferralCode
     * @request GET:/users/{tenantId}/by-referral-code/{referralCode}
     * @secure
     * @response `200` `UserPublicResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getUserByReferralCode: (tenantId: string, referralCode: string, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, void>({
        path: `/users/${tenantId}/by-referral-code/${referralCode}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name SetUserReferrer
     * @request PATCH:/users/{tenantId}/{id}/referrer
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    setUserReferrer: (tenantId: string, id: string, data: AdminSetReferrerDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/${tenantId}/${id}/referrer`,
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
     * @name GetUsersByTenantId
     * @request GET:/users/{tenantId}
     * @secure
     * @response `200` `UserPaginateResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    getUsersByTenantId: (
      tenantId: string,
      query?: {
        /** @example "2022-01-30T10:30:40-03:00" */
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        search?: string;
        /** @example ["user"] */
        role?: (
          | 'superAdmin'
          | 'admin'
          | 'operator'
          | 'user'
          | 'loyaltyOperator'
          | 'commerce.orderReceiver'
          | 'kyc.approver'
          | 'key.erc20Receiver'
        )[];
        userId?: string[];
        contextIds?: string[];
        contextStatus?: UserContextStatus[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UserPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    updateProfileByUserLogged: (tenantId: string, data: UpdateProfileUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    changePassword: (data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @name ChangeUserPhone
     * @request PATCH:/users/phone
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    changeUserPhone: (data: ChangePhoneDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/phone`,
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
     * @name VerifyUserPhone
     * @request PATCH:/users/phone/verify
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    verifyUserPhone: (data: VerifyPhoneDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/phone/verify`,
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
     * @name ResendPhoneVerificationCode
     * @request PATCH:/users/phone/resend-verification-code
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    resendPhoneVerificationCode: (params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/phone/resend-verification-code`,
        method: 'PATCH',
        secure: true,
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    setWalletDefault: (data: MainWalletDto, params: RequestParams = {}) =>
      this.request<void, void>({
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
     * @name SetReferrer
     * @request PATCH:/users/referrer
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
     */
    setReferrer: (data: SetReferrerDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/referrer`,
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
     * @name RequestAccountExclusion
     * @request POST:/users/request-account-exclusion
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
     */
    requestAccountExclusion: (data: RequestAccountExclusionDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/request-account-exclusion`,
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
     * @name UpdateToken
     * @request PATCH:/users/{tenantId}/{id}/token
     * @secure
     * @response `200` `UserTokenResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    updateToken: (tenantId: string, id: string, data: UpdateTokenDto, params: RequestParams = {}) =>
      this.request<UserTokenResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    update: (tenantId: string, id: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    accountCompleteRetry: (data: AccountCompleteRetryDto, params: RequestParams = {}) =>
      this.request<void, void>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    toggleOperatorRole: (tenantId: string, userId: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/users/${tenantId}/${userId}/toggle-operator-role`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUserByCode
     * @request GET:/users/{tenantId}/code/{userCode}
     * @secure
     * @response `200` `UserByCodeResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, superAdmin, loyaltyOperator
     */
    getUserByCode: (tenantId: string, userCode: string, params: RequestParams = {}) =>
      this.request<UserByCodeResponseDto, void | HttpExceptionDto>({
        path: `/users/${tenantId}/code/${userCode}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetTemporaryCode
     * @request POST:/users/{tenantId}/code/{userId}
     * @secure
     * @response `200` `UserCodeResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user, loyaltyOperator
     */
    getTemporaryCode: (tenantId: string, userId: string, params: RequestParams = {}) =>
      this.request<UserCodeResponseDto, void | HttpExceptionDto>({
        path: `/users/${tenantId}/code/${userId}`,
        method: 'POST',
        secure: true,
        format: 'json',
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    createVault: (
      tenantId: string,
      query?: {
        /** @format uuid */
        userId?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<WalletResponseDto, void>({
        path: `/users/${tenantId}/wallets/vault/claim`,
        method: 'POST',
        query: query,
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, application, integration, admin
     */
    findByAddress: (
      tenantId: string,
      address: string,
      query?: {
        includeOwnerInfo?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WalletResponseDto, void | HttpExceptionDto>({
        path: `/users/${tenantId}/wallets/by-address/${address}`,
        method: 'GET',
        query: query,
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    findOwnWalletByAddress: (tenantId: string, address: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    findAllWalletByUserId: (userId: string, tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto[], void>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    findWallet: (walletId: string, userId: string, tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, void>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    requestMetamask: (tenantId: string, data: RequestMetamaskDto, params: RequestParams = {}) =>
      this.request<RequestMetamaskResponseDto, void>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    claimMetamask: (tenantId: string, data: ClaimMetamaskDto, params: RequestParams = {}) =>
      this.request<WalletResponseDto, void>({
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
     * @tags Users Withdraw Accounts
     * @name AddUserWithdrawAccount
     * @request POST:/users/{tenantId}/withdraw-accounts/{userId}
     * @secure
     * @response `201` `UserWithdrawAccountEntityDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    addUserWithdrawAccount: (
      tenantId: string,
      userId: string,
      data: AddWithdrawAccountDto,
      params: RequestParams = {},
    ) =>
      this.request<UserWithdrawAccountEntityDto, void>({
        path: `/users/${tenantId}/withdraw-accounts/${userId}`,
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
     * @tags Users Withdraw Accounts
     * @name ListUserWithdrawAccounts
     * @request GET:/users/{tenantId}/withdraw-accounts/{userId}
     * @secure
     * @response `200` `UserWithdrawAccountEntityPaginatedDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    listUserWithdrawAccounts: (
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
      },
      params: RequestParams = {},
    ) =>
      this.request<UserWithdrawAccountEntityPaginatedDto, void>({
        path: `/users/${tenantId}/withdraw-accounts/${userId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Withdraw Accounts
     * @name GetUserWithdrawAccountById
     * @request GET:/users/{tenantId}/withdraw-accounts/{userId}/{accountId}
     * @secure
     * @response `200` `UserWithdrawAccountEntityDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getUserWithdrawAccountById: (tenantId: string, userId: string, accountId: string, params: RequestParams = {}) =>
      this.request<UserWithdrawAccountEntityDto, void>({
        path: `/users/${tenantId}/withdraw-accounts/${userId}/${accountId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Withdraw Accounts
     * @name DeleteUserWithdrawAccount
     * @request DELETE:/users/{tenantId}/withdraw-accounts/{userId}/{accountId}
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    deleteUserWithdrawAccount: (tenantId: string, userId: string, accountId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${tenantId}/withdraw-accounts/${userId}/${accountId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Contexts
     * @name FindUsersContext
     * @request GET:/users/{tenantId}/contexts/find
     * @secure
     * @response `200` `UserContextEntityDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user, admin, kyc.approver
     */
    findUsersContext: (
      tenantId: string,
      query?: {
        /** @example "2022-01-30T10:30:40-03:00" */
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        search?: string;
        userId?: string[];
        status?: ('approved' | 'denied' | 'requiredReview' | 'created' | 'draft')[];
        contextId?: string[];
        contextType?: ('user_properties' | 'form')[];
        preOrder?: boolean;
        /** Applicable just for approver case */
        excludeSelfContexts?: boolean;
        /** @example "super_sales" */
        utmCampaign?: string;
        /** @example "google" */
        utmSource?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserContextEntityDto, void | HttpExceptionDto>({
        path: `/users/${tenantId}/contexts/find`,
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
     * @name FindUsersContextByUserId
     * @request GET:/users/{tenantId}/contexts/{userId}
     * @secure
     * @response `200` `UsersContextsPaginateResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
      this.request<UsersContextsPaginateResponseDto, void | HttpExceptionDto>({
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
     * @name FindUserContextById
     * @request GET:/users/{tenantId}/contexts/{userId}/{userContextId}
     * @secure
     * @response `200` `UserContextEntityDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user, admin, kyc.approver
     */
    findUserContextById: (tenantId: string, userId: string, userContextId: string, params: RequestParams = {}) =>
      this.request<UserContextEntityDto, void | HttpExceptionDto>({
        path: `/users/${tenantId}/contexts/${userId}/${userContextId}`,
        method: 'GET',
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, kyc.approver
     */
    approveTenantContextByUserId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: UserContextStatusDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, kyc.approver
     */
    rejectTenantContextByUserId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: UserContextStatusDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, kyc.approver
     */
    requireReviewTenantContextByUserId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: RequiredReviewContextStatusDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @name FindUserByAny
     * @request GET:/users/{tenantId}/documents/find-user-by-any
     * @secure
     * @response `200` `UserPublicResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, integration
     */
    findUserByAny: (
      tenantId: string,
      query?: {
        /** @format uuid */
        userId?: string;
        /** @format xxxxxxxxxxx */
        cpf?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserPublicResponseDto, void | HttpExceptionDto>({
        path: `/users/${tenantId}/documents/find-user-by-any`,
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
     * @name FindUserDocumentsByUserId
     * @request GET:/users/{tenantId}/documents/{userId}
     * @secure
     * @response `200` `DocumentPaginateResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
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
        type?: (
          | 'separator'
          | 'file'
          | 'url'
          | 'cpf'
          | 'phone'
          | 'text'
          | 'email'
          | 'birthdate'
          | 'date'
          | 'multiface_selfie'
          | 'user_name'
          | 'simple_select'
          | 'dynamic_select'
          | 'image'
          | 'identification_document'
          | 'simple_location'
          | 'checkbox'
          | 'commerce_product'
        )[];
        /** Filter by document contextId */
        contextId?: string;
        /** Filter by document inputId */
        inputId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    getAllByContextByUserIdAndContextId: (
      tenantId: string,
      userId: string,
      contextId: string,
      params: RequestParams = {},
    ) =>
      this.request<DocumentEntityDto[], void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user, admin, kyc.approver
     */
    attachDocumentsToUserByContextId: (
      tenantId: string,
      userId: string,
      contextId: string,
      data: AttachDocumentsToUser,
      params: RequestParams = {},
    ) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getBalance: (address: string, chainId: ChainId, params: RequestParams = {}) =>
      this.request<any, void>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    requestSessionWalletConnect: (data: RequestWalletConnectSessionDto, params: RequestParams = {}) =>
      this.request<ResponseWalletConnectSessionDto, void>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    disconnectSessionWalletConnect: (data: RequestWalletConnectSessionDto, params: RequestParams = {}) =>
      this.request<void, void>({
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
     * @name ListUserTenants
     * @request GET:/auth/user-tenants
     * @response `200` `UserTenantsResponseDto` Lists all user administrative tenants which can be used to login on dashboard
     * @response `429` `TooManyRequestsExceptionDto`
     */
    listUserTenants: (
      query: {
        /** @example "user@example.com" */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserTenantsResponseDto, TooManyRequestsExceptionDto>({
        path: `/auth/user-tenants`,
        method: 'GET',
        query: query,
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
     * @name SignInWithCode
     * @request POST:/auth/signin/code
     * @response `201` `SignInResponseDto`
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    signInWithCode: (data: LoginUserWithCodeDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/code`,
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
     * @name RequestCode
     * @request POST:/auth/signin/request-code
     * @response `200` `void`
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    requestCode: (data: RequestCodeEmailDto, params: RequestParams = {}) =>
      this.request<void, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/request-code`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name SignInWithMagicToken
     * @request POST:/auth/signin/magic-token
     * @response `201` `SignInResponseDto`
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    signInWithMagicToken: (data: LoginUserWithMagicTokenDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/magic-token`,
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
     * @name GenerateSignInMagicToken
     * @request POST:/auth/signin/generate-magic-token
     * @secure
     * @response `201` `SigningMagicTokenResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     * @response `429` `TooManyRequestsExceptionDto`
     */
    generateSignInMagicToken: (data: RequestMagicSignInTokenDto, params: RequestParams = {}) =>
      this.request<SigningMagicTokenResponseDto, void | HttpExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/generate-magic-token`,
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
     * @name RefreshToken
     * @request POST:/auth/refresh-token
     * @response `201` `RefreshTokenResponseDto`
     * @response `403` `ForbiddenExceptionDto`
     */
    refreshToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<RefreshTokenResponseDto, ForbiddenExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `ForbiddenExceptionDto`
     */
    logOut: (params: RequestParams = {}) =>
      this.request<any, void | ForbiddenExceptionDto>({
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

    /**
     * No description
     *
     * @tags Authentication
     * @name GoogleAuth
     * @request POST:/auth/signin/google
     * @response `201` `SignInResponseDto` Authenticates user using google credential
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    googleAuth: (data: LoginUserWithGoogleDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/google`,
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
     * @name GoogleAuthWithTenantParam
     * @request POST:/auth/{tenantId}/signin/google
     * @response `201` `SignInResponseDto` Authenticates user using google credential
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    googleAuthWithTenantParam: (
      tenantId: string,
      data: LoginUserWithGoogleWithTenantParamDto,
      params: RequestParams = {},
    ) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/${tenantId}/signin/google`,
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
     * @name GoogleAuthByCodeRedirect
     * @request GET:/auth/{tenantId}/signin/google
     * @response `308` `void` Redirects user to make google login under tenant scope using token code strategy
     * @response `400` `BadRequestExceptionDto`
     */
    googleAuthByCodeRedirect: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, void | BadRequestExceptionDto>({
        path: `/auth/${tenantId}/signin/google`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GoogleAuthByCode
     * @request GET:/auth/{tenantId}/signin/google/code
     * @response `201` `SignInResponseDto` Authenticates user using google token code
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    googleAuthByCode: (
      tenantId: string,
      query: {
        code: string;
        referrer?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/${tenantId}/signin/google/code`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AppleAuth
     * @request POST:/auth/signin/apple
     * @response `201` `SignInResponseDto` Authenticates user using apple credential
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    appleAuth: (data: LoginUserWithAppleDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/apple`,
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
     * @name AppleAuthByCodeRedirect
     * @request GET:/auth/{tenantId}/signin/apple
     * @response `308` `void` Redirects user to make apple login under tenant scope using token code strategy
     * @response `400` `BadRequestExceptionDto`
     */
    appleAuthByCodeRedirect: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, void | BadRequestExceptionDto>({
        path: `/auth/${tenantId}/signin/apple`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AppleAuthByCode
     * @request POST:/auth/{tenantId}/signin/apple/code
     * @response `201` `SignInResponseDto` Authenticates user using apple token code
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    appleAuthByCode: (tenantId: string, data: LoginUserWithAppleByCodeDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/${tenantId}/signin/apple/code`,
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
     * @name TenantSignUp
     * @request POST:/auth/signup/tenant
     * @response `201` `SignInResponseDto`
     * @response `400` `BadRequestExceptionDto`
     * @response `401` `UnauthorizedExceptionDto`
     * @response `429` `TooManyRequestsExceptionDto`
     */
    tenantSignUp: (data: SignupToCreateTenantDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, BadRequestExceptionDto | UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signup/tenant`,
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
     * @name FinishTenantSignUp
     * @request PATCH:/auth/signup/tenant/finish
     * @secure
     * @response `201` `TenantSignUpResponseDto`
     * @response `400` `BadRequestExceptionDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, user
     */
    finishTenantSignUp: (data: FinishTenantSignUpDto, params: RequestParams = {}) =>
      this.request<TenantSignUpResponseDto, BadRequestExceptionDto | void | HttpExceptionDto>({
        path: `/auth/signup/tenant/finish`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    create: (data: CreateTenantDto, params: RequestParams = {}) =>
      this.request<TenantEntityDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
      this.request<TenantPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
     */
    findOne: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    update: (tenantId: string, data: UpdateTenantDto, params: RequestParams = {}) =>
      this.request<any, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    remove: (tenantId: string, params: RequestParams = {}) =>
      this.request<any, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, integration
     */
    getTenantClientOrFail: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantClientResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    updateProfile: (tenantId: string, data: UpdateTenantProfileDto, params: RequestParams = {}) =>
      this.request<any, void | HttpExceptionDto>({
        path: `/tenant/profile/${tenantId}`,
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
     * @name UpsertConfigurations
     * @request POST:/tenant/configurations/{tenantId}
     * @secure
     * @response `200` `TenantConfigurationsResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, superAdmin, integration
     */
    upsertConfigurations: (tenantId: string, data: TenantConfigurationsDto, params: RequestParams = {}) =>
      this.request<TenantConfigurationsResponseDto, void | HttpExceptionDto>({
        path: `/tenant/configurations/${tenantId}`,
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
     * @name GetConfigurations
     * @request GET:/tenant/configurations/{tenantId}
     * @secure
     * @response `200` `TenantConfigurationsResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, superAdmin, integration
     */
    getConfigurations: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantConfigurationsResponseDto, void | HttpExceptionDto>({
        path: `/tenant/configurations/${tenantId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  publicTenant = {
    /**
     * No description
     *
     * @tags Tenant Public
     * @name GetTenantByHost
     * @request GET:/public-tenant/by-hostname
     * @secure
     * @response `200` `TenantPublicDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getTenantByHost: (
      query: {
        /** @example "example.com" */
        hostname: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantPublicDto, void>({
        path: `/public-tenant/by-hostname`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Public
     * @name GetTenantById
     * @request GET:/public-tenant/by-id
     * @secure
     * @response `200` `TenantPublicDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getTenantById: (
      query: {
        tenantId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantPublicDto, void>({
        path: `/public-tenant/by-id`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, integration
     */
    createTenantContext: (tenantId: string, data: CreateTenantContextDto, params: RequestParams = {}) =>
      this.request<TenantContextDto, void | HttpExceptionDto>({
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
     * @response `200` `TenantContextPaginateResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    findTenantContext: (
      tenantId: string,
      query?: {
        /** @example "2022-01-30T10:30:40-03:00" */
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        search?: string;
        active?: boolean;
        type?: ('user_properties' | 'form')[];
        preOrder?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantContextPaginateResponseDto, void | HttpExceptionDto>({
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
     * @name GetTenantContextBySlug
     * @request GET:/tenant-context/{tenantId}/slug/{slug}
     * @secure
     * @response `200` `(TenantContextDto)[]`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    getTenantContextBySlug: (tenantId: string, slug: string, params: RequestParams = {}) =>
      this.request<TenantContextDto[], void | HttpExceptionDto>({
        path: `/tenant-context/${tenantId}/slug/${slug}`,
        method: 'GET',
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    findOneByTenantContextId: (tenantId: string, tenantContextId: string, params: RequestParams = {}) =>
      this.request<TenantContextDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    updateByTenantContextId: (
      tenantId: string,
      tenantContextId: string,
      data: UpdateTenantContextDto,
      params: RequestParams = {},
    ) =>
      this.request<TenantContextDto, void | HttpExceptionDto>({
        path: `/tenant-context/${tenantId}/${tenantContextId}`,
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
     * @tags Tenant Context
     * @name GetTenantContextApprovers
     * @request GET:/tenant-context/{tenantId}/{tenantContextId}/approvers
     * @secure
     * @response `200` `TenantContextApproversResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user
     */
    getTenantContextApprovers: (tenantId: string, tenantContextId: string, params: RequestParams = {}) =>
      this.request<TenantContextApproversResponseDto, void | HttpExceptionDto>({
        path: `/tenant-context/${tenantId}/${tenantContextId}/approvers`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags Tenant Context
     * @name CreateFullTenantContext
     * @request POST:/admin/tenant-context/{tenantId}
     * @secure
     * @response `201` `TenantContextDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, integration
     */
    createFullTenantContext: (tenantId: string, data: CreateFullTenantContextDto, params: RequestParams = {}) =>
      this.request<TenantContextDto, void | HttpExceptionDto>({
        path: `/admin/tenant-context/${tenantId}`,
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
     * @name UpdateFullContextById
     * @request PATCH:/admin/tenant-context/{tenantId}/{tenantContextId}
     * @secure
     * @response `200` `TenantContextDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    updateFullContextById: (
      tenantId: string,
      tenantContextId: string,
      data: UpdateFullTenantContextDto,
      params: RequestParams = {},
    ) =>
      this.request<TenantContextDto, void | HttpExceptionDto>({
        path: `/admin/tenant-context/${tenantId}/${tenantContextId}`,
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
     * @tags Tenant Context
     * @name ListTenantContextInputs
     * @request GET:/admin/tenant-context/{tenantId}/{tenantContextId}/inputs
     * @secure
     * @response `200` `TenantInputEntityDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    listTenantContextInputs: (
      tenantId: string,
      tenantContextId: string,
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
      this.request<TenantInputEntityDto, void | HttpExceptionDto>({
        path: `/admin/tenant-context/${tenantId}/${tenantContextId}/inputs`,
        method: 'GET',
        query: query,
        secure: true,
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
 * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
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
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin
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
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
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
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
     */
    delete: (id: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/contexts/${id}`,
        method: 'DELETE',
        secure: true,
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    create: (tenantId: string, data: CreateTenantAccessDto, params: RequestParams = {}) =>
      this.request<TenantAccessEntityDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
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
      this.request<TenantAccessPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    findOne: (id: string, tenantId: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    create: (tenantId: string, data: CreateTenantHostDto, params: RequestParams = {}) =>
      this.request<TenantHostResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
      this.request<TenantHostPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    getMainHostByTenantId: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantHostEntityDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    findOne: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    update: (tenantId: string, id: string, data: UpdateTenantHostDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    checkUserInMultipleWhitelists: (
      tenantId: string,
      query: {
        /**
         * @format uuid
         * @example "00000000-0000-0000-0000-000000000000"
         */
        userId: string;
        /**
         * @default false
         * @example false
         */
        disableCache?: boolean;
        /** @example ["00000000-0000-0000-0000-000000000000"] */
        whitelistsIds: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CheckUserInMultipleWhitelistsResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
      this.request<WhitelistPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    createWhitelist: (tenantId: string, data: CreateOrUpdateWhitelistDto, params: RequestParams = {}) =>
      this.request<WhitelistResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    getWhitelist: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<WhitelistResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    updateWhitelist: (tenantId: string, id: string, data: CreateOrUpdateWhitelistDto, params: RequestParams = {}) =>
      this.request<WhitelistResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    deleteWhitelist: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    promoteWhitelistOnChain: (tenantId: string, id: string, data: WhitelistOnChainDto, params: RequestParams = {}) =>
      this.request<WalletGroupResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
        /**
         * @default false
         * @example false
         */
        disableCache?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CheckWhitelistUserResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
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
        type?: (
          | 'user_id'
          | 'email'
          | 'wallet_address'
          | 'collection_holder'
          | 'kyc_approved_context'
          | 'key_collection_holder'
          | 'key_erc20_holder'
        )[];
        /** @example false */
        showWallets?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<WhitelistEntryPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    createWhitelistEntry: (tenantId: string, id: string, data: CreateWhitelistEntryDto, params: RequestParams = {}) =>
      this.request<WhitelistEntryResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    deleteWhitelistEntry: (tenantId: string, id: string, entryId: string, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/whitelists/${tenantId}/${id}/entries/${entryId}`,
        method: 'DELETE',
        secure: true,
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
  notifications = {
    /**
     * No description
     *
     * @tags Notifications
     * @name DispatchNotificationEvent
     * @request POST:/notifications/{tenantId}/event
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    dispatchNotificationEvent: (tenantId: string, data: DispatchNotificationEventDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/notifications/${tenantId}/event`,
        method: 'POST',
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
     */
    createTenantInput: (tenantId: string, data: CreateTenantInputDto, params: RequestParams = {}) =>
      this.request<TenantInputEntityDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
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
      this.request<TenantInputPaginateResponseDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
     */
    updateByInputId: (tenantId: string, inputId: string, data: UpdateTenantInputDto, params: RequestParams = {}) =>
      this.request<TenantInputEntityDto, void | HttpExceptionDto>({
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
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, admin, integration
     */
    findTenantInputById: (tenantId: string, inputId: string, params: RequestParams = {}) =>
      this.request<any, void | HttpExceptionDto>({
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
  integrations = {
    /**
     * No description
     *
     * @tags Integration
     * @name List
     * @request GET:/integrations
     * @secure
     * @response `200` `(IntegrationResponseDto)[]`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    list: (params: RequestParams = {}) =>
      this.request<IntegrationResponseDto[], void>({
        path: `/integrations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  tenantBadgesProviders = {
    /**
     * No description
     *
     * @tags Tenant Badge Providers
     * @name RequestTransactionInfo
     * @request POST:/tenant-badges-providers/{tenantId}/clear-sale/transaction-info
     * @secure
     * @response `200` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    requestTransactionInfo: (tenantId: string, data: RequestClearSaleInfoDto, params: RequestParams = {}) =>
      this.request<void, void | HttpExceptionDto>({
        path: `/tenant-badges-providers/${tenantId}/clear-sale/transaction-info`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  billing = {
    /**
     * No description
     *
     * @tags Billing
     * @name ListPlans
     * @request GET:/billing/plans
     * @secure
     * @response `200` `BillingPlanEntityPaginatedDto`
     */
    listPlans: (
      query?: {
        /** @example "2022-01-30T10:30:40-03:00" */
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BillingPlanEntityPaginatedDto, any>({
        path: `/billing/plans`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name RegisterBillingUsage
     * @request POST:/billing/{tenantId}/register-billing-usage
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin, integration
     */
    registerBillingUsage: (tenantId: string, data: RegisterBillingUsageDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/billing/${tenantId}/register-billing-usage`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name CheckFeatureEnabled
     * @request GET:/billing/{tenantId}/is-feature-enabled/{feature}
     * @secure
     * @response `200` `FeatureCheckResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin, user, operator
     */
    checkFeatureEnabled: (tenantId: string, feature: string, params: RequestParams = {}) =>
      this.request<FeatureCheckResponseDto, HttpExceptionDto>({
        path: `/billing/${tenantId}/is-feature-enabled/${feature}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name GetState
     * @request GET:/billing/{tenantId}/state
     * @secure
     * @response `200` `TenantBillingStateResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    getState: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantBillingStateResponseDto, HttpExceptionDto>({
        path: `/billing/${tenantId}/state`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name SetCreditCard
     * @request PATCH:/billing/{tenantId}/credit-card
     * @secure
     * @response `200` `PublicUserCreditCardEntityDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    setCreditCard: (tenantId: string, data: SetCreditCardDto, params: RequestParams = {}) =>
      this.request<PublicUserCreditCardEntityDto, HttpExceptionDto>({
        path: `/billing/${tenantId}/credit-card`,
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
     * @tags Billing
     * @name SetPlan
     * @request PATCH:/billing/{tenantId}/plan
     * @secure
     * @response `200` `BillingPlanEntityDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    setPlan: (tenantId: string, data: SetPlanDto, params: RequestParams = {}) =>
      this.request<BillingPlanEntityDto, HttpExceptionDto>({
        path: `/billing/${tenantId}/plan`,
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
     * @tags Billing
     * @name CancelPlan
     * @request PATCH:/billing/{tenantId}/cancel
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    cancelPlan: (tenantId: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/billing/${tenantId}/cancel`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name GetCycles
     * @request GET:/billing/{tenantId}/cycles
     * @secure
     * @response `200` `BillingCycleListResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    getCycles: (tenantId: string, params: RequestParams = {}) =>
      this.request<BillingCycleListResponseDto, HttpExceptionDto>({
        path: `/billing/${tenantId}/cycles`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name GetBillingSummary
     * @request GET:/billing/{tenantId}/billing-summary
     * @secure
     * @response `200` `BillingSummaryResponseDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    getBillingSummary: (
      tenantId: string,
      query?: {
        /** @format date-time */
        startCycleDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BillingSummaryResponseDto, HttpExceptionDto>({
        path: `/billing/${tenantId}/billing-summary`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name ListBillingUsage
     * @request GET:/billing/{tenantId}/billing-usages
     * @secure
     * @response `200` `BillingUsageEntityPaginatedDto`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, admin
     */
    listBillingUsage: (
      tenantId: string,
      query?: {
        /** @example "2022-01-30T10:30:40-03:00" */
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        search?: string;
        /** @example ["key.nft_minted"] */
        type?: (
          | 'commerce.product_purchase'
          | 'commerce.product_published'
          | 'key.nft_minted'
          | 'key.erc20_minted'
          | 'key.nft_collection_created'
          | 'key.nft_contract_created'
          | 'key.erc20_contract_created'
          | 'nft_sale_transaction'
          | 'erc20_sale_transaction'
          | 'nft_transaction'
          | 'erc20_transaction'
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BillingUsageEntityPaginatedDto, HttpExceptionDto>({
        path: `/billing/${tenantId}/billing-usages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name DispatchProcessInvoice
     * @request PATCH:/billing/{tenantId}/invoice-and-charge
     * @secure
     * @response `204` `void`
     * @response `403` `HttpExceptionDto` Need user with one of these roles: superAdmin, integration, superAdmin
     */
    dispatchProcessInvoice: (tenantId: string, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/billing/${tenantId}/invoice-and-charge`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),
  };
}
