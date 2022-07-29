import { TenantRoleEnum, UserRoleEnum } from './enums';

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

export type Credential = UserCredential | TenantCredential;

export interface W3blockIdSDKOptions {
  credential: UserCredential | TenantCredential;
  baseURL?: string;
  tokens?: {
    authToken: string;
    refreshToken: string;
  };
  autoRefresh?: boolean;
}

export const isUserCredential = (credential: Credential): credential is UserCredential => {
  return (credential as UserCredential).email !== undefined;
};

export const isTenantCredential = (credential: Credential): credential is TenantCredential => {
  return (credential as TenantCredential).key !== undefined;
};

export type JwtRole = UserRoleEnum | TenantRoleEnum;

export enum JwtType {
  User = 'user',
  Tenant = 'tenant',
}

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
