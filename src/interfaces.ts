import { TenantRoleEnum, UserRoleEnum } from './enums';
import { JwtType } from './id/api/api';

export interface UserCredential {
  /** @example user@example.com */
  email: string;

  /** @example P@ssw0rd */
  password: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
}

export interface TenantCredential {
  key: string;
  secret: string;
  tenantId: string;
}

export interface TokenCredential {
  authToken: string;
  refreshToken: string;
  tenantId: string;
}

export type Credential = UserCredential | TenantCredential | TokenCredential;

export interface W3blockIdSDKOptions {
  baseURL?: string;
  autoRefresh?: boolean;
  tokenExpireOffset?: number;
}

/**
 * If the credential has an email property, then it's a UserCredential.
 * @param {Credential} credential - Credential - this is the parameter that we're checking.
 * @returns A function that takes a credential and returns a boolean.
 */
export const isUserCredential = (credential: Credential): credential is UserCredential => {
  return (credential as UserCredential).email !== undefined;
};

/**
 * If the credential has a key property, then it's a TenantCredential.
 * @param {Credential} credential - Credential - this is the parameter that we're going to pass into
 * the function.
 * @returns A function that takes a credential and returns a boolean.
 */
export const isTenantCredential = (credential: Credential): credential is TenantCredential => {
  return (credential as TenantCredential).key !== undefined;
};

/**
 * If the credential has an authToken property, then it's a TokenCredential.
 * @param {Credential} credential - Credential - This is the credential that we're checking to see if
 * it's a TokenCredential.
 * @returns A function that takes a credential and returns a boolean.
 */
export const isTokenCredential = (credential: Credential): credential is TokenCredential => {
  return (credential as TokenCredential).authToken !== undefined;
};

export type JwtRole = UserRoleEnum | TenantRoleEnum;

export interface JwtPayload {
  sub: string;
  iss: string;
  aud?: string | string[];
  exp?: number;
  iat?: number;
  type: JwtType;
}

export interface UserJwtPayload extends JwtPayload {
  email: string;
  name?: string;
  roles: UserRoleEnum[];
  tenantId: string;
  companyId?: string;
  verified: boolean;
}

export interface RefreshTokenPayload extends Pick<UserJwtPayload, 'sub' | 'iss' | 'aud' | 'tenantId'> {
  tokenHash: string | undefined;
}

export interface TenantJwtPayload extends JwtPayload {
  roles: TenantRoleEnum[];
  tenantId: string;
}
