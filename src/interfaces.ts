export interface UserCredential {
  /** @example user@example.com */
  email: string;

  /** @example P@ssw0rd */
  password: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
}

export interface AppCredential {
  key: string;
  secret: string;
  tenantId: string;
}

export type Credential = UserCredential | AppCredential;

export interface W3blockIdSDKOptions {
  credential: UserCredential | AppCredential;
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

export const isAppCredential = (credential: Credential): credential is AppCredential => {
  return (credential as AppCredential).key !== undefined;
};
