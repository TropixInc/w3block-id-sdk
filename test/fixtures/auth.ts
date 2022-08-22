import {
  JwtType,
  TenantCredential,
  TenantJwtPayloadDto,
  TenantRoleEnum,
  TokenCredential,
  UserCredential,
  UserJwtPayloadDto,
  UserRoleEnum,
} from '../../src';

export const USER_ID = '5bd96aaf-1888-493e-b84e-7c54a4731000';

export const TENANT_ID = '5bd96aaf-1888-493e-b84e-7c54a4731868';

export const AUTH_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJlbWFpbCI6InBpeHdheUB3M2Jsb2NrLmlvIiwibmFtZSI6IlBpeHdheSIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRlbmFudElkIjoiNWJkOTZhYWYtMTg4OC00OTNlLWI4NGUtN2M1NGE0NzMxODY4IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY1ODUwODE3OSwiZXhwIjoxNjkwMDQ0MTc5fQ.L_0Py_M_1Ija_QnFKl7uNZr9fpkcVpZSv-tnNf07YQOcIEuR-TU0S9DMkLkHtmYrHKJe_vzzf14FS7J43NYVILn3NrXb-pC5-YO8V3JnMX4yBsgM2t0xdqEW6fqILk8_oxXsDFAhNkaNeBa2ljNilDncSepps7q69PP-TP7JVkjKQg2Za_E6ZwU';
export const AUTH_REFRESH =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJ0ZW5hbnRJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRva2VuSGFzaCI6ImJiMmFjMzE4M2EzZDZlMDljYTI2ZDkzNDEzNjQyNzU4MGY3Yjc5NWVlYWU3YTFlYzUzNDU2MjU5NThjMDZhYWQiLCJpYXQiOjE2NTg1MDgxNzksImV4cCI6MTY5MDA0NDE3OX0.au6dcpbcSmF134J335G4CymEUlwK39TT-4jXQwEUm0zRokFBiHpkXZzy23fTufyo_XzW_Tr_IUfO9b_y5e0thjIfvng4dS7akdeQAykcN7nRhwNBtqCVZxFHyZE39yzz38JLMwC00EtaKowM6lPykJYC5qZC0bBj4g4Yb1GG9IU5dQodibdXj00';

export const USER_CREDENTIAL: UserCredential = {
  email: 'pixway@w3block.io',
  password: 'ABC123def456',
  tenantId: TENANT_ID,
};

export const TENANT_CREDENTIAL: TenantCredential = {
  key: 'app-key',
  secret: 'app-secret',
  tenantId: TENANT_ID,
};

export const TOKEN_CREDENTIAL: TokenCredential = {
  authToken: AUTH_TOKEN,
  refreshToken: AUTH_REFRESH,
  tenantId: TENANT_ID,
};

export const JWKS = {
  keys: [
    {
      kty: 'RSA',
      kid: 'LySdYaP3_-DOrOElTtHy9TAM9EZ8veMzPftUWibTTNI',
      n: 'rUkJHT150uLYKuMAS7Fg_R8FIrCwkNK2Lrk29arkGNAnEOes16I6bRTWHntUMiMOgnjeGAOTBLdAJX1C4JaDDgKxtIcpZx4A_-chTgk8aUWkL9FP6xCMnmDd7UDDbZ0_WJo37bLZ4v3bBSKFbGPi9NDBTYB1IVvCQr1CXUaG1g0',
      e: 'AQAB',
    },
  ],
};

export const USER_JWT_PAYLOAD: UserJwtPayloadDto = {
  sub: USER_ID,
  name: 'Jon Doe',
  email: 'pixway@w3block.io',
  tenantId: TENANT_ID,
  iat: 1589788982,
  exp: 1589797682,
  iss: USER_ID,
  aud: [USER_ID],
  verified: true,
  type: JwtType.User,
  roles: [UserRoleEnum.User],
};

export const TENANT_JWT_PAYLOAD: TenantJwtPayloadDto = {
  sub: USER_ID,
  tenantId: TENANT_ID,
  iat: 1589788982,
  exp: 1589797682,
  iss: USER_ID,
  aud: [USER_ID],
  type: JwtType.Tenant,
  roles: [TenantRoleEnum.Application],
};
