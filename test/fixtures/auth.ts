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

export const TENANT_ID = 'e8a9814e-18a1-4f52-b6ca-c15f0ae2294a';

export const AUTH_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ZGY3Yjg1Ni05MWY3LTRmMDMtOTYyYy0xNjcxYjM0ZDQ2NGIiLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJlbWFpbCI6ImFkbWluQHczYmxvY2suaW8iLCJuYW1lIjoiQWRtaW4iLCJyb2xlcyI6WyJzdXBlckFkbWluIl0sInRlbmFudElkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxIiwidmVyaWZpZWQiOnRydWUsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjY0Mzk3NDQ3LCJleHAiOjE3NTA3OTc0NDd9.NdzfIKW-71jlHSx9acYQ735NbQXXLDt4prjIkyKo3-x0Yi-9rDGCLy7ukIf8G0Pmk1z0Iz0iHUlCuaEfzy3_cu1HrohNgtLVYE8K2zRy0-3xAxIagikvK3K94UwRlRRAdmys6cYp8_6OfZbbCp4e5zO1mgVFQIqXd_pcjHIzU9w';
export const AUTH_REFRESH =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiI4ZGY3Yjg1Ni05MWY3LTRmMDMtOTYyYy0xNjcxYjM0ZDQ2NGIiLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJ0ZW5hbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMSIsInRva2VuSGFzaCI6IjNlZjA5ZmFkMjkzZGE4YTg0YjkzNjM2YjBjMGI4YzY2NThjMWU0ZGFiYzdiN2U5YWVjOGQyMTQ1YjRmNWZjMTQiLCJ0eXBlIjoidXNlciIsImlhdCI6MTY2NDM5NzQ0NywiZXhwIjoxNzUwNzk3NDQ3fQ.Y2jWXnIVstyhec4-Aivwb-OiA83GsUikYa-xDXs4eHzJ25ZbW7TJ0M-C7lmV8v8gYtyPtkAsS_SBTMgtviM6a4otkIhZOxOBfBYBlV2pS18bp6gbrcsecqAd224JQK0rbnwYUQpqQ575JUE-_nALWOpP4jYL5_4OUyYJjDTL0_s';

export const AUTH_TOKEN2 =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ZGY3Yjg1Ni05MWY3LTRmMDMtOTYyYy0xNjcxYjM0ZDQ2NGIiLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJlbWFpbCI6ImFkbWluQHczYmxvY2suaW8iLCJuYW1lIjoiQWRtaW4iLCJyb2xlcyI6WyJzdXBlckFkbWluIl0sInRlbmFudElkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxIiwidmVyaWZpZWQiOnRydWUsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjY0Mzk3NTAyLCJleHAiOjE3NTA3OTc1MDJ9.qSAaxbWnaLiYw5f_dedmDFRqaWhjGjK6Ej5tBsiEevf5gFAvD9f3TtyKEom2KJVsfdlrioRlTziNrOt03ueeVzAI7RKblXs26VWu_ob-6-ehBHqhPE9I_ebxZ1geiLlRfXXapAecjUCwhtr0skbt0LVhIC8lf37LScQSvsTDI4o';
export const AUTH_REFRESH2 =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiI4ZGY3Yjg1Ni05MWY3LTRmMDMtOTYyYy0xNjcxYjM0ZDQ2NGIiLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJ0ZW5hbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMSIsInRva2VuSGFzaCI6IjA1OGYyMzRmNzY2ZWNlMDI2OGU5Njg2NWIyYzI1ZTk4MTYwMjExMzYxNTY5OTRlYzY5YzFmNGVmODhlM2ViYjMiLCJ0eXBlIjoidXNlciIsImlhdCI6MTY2NDM5NzUwMiwiZXhwIjoxNzUwNzk3NTAyfQ.rOP2EUl574zlgOE6mpsCVHO9oCuNUBabDxrE6V9VZPeXBsgbtT73gp9pKSIaRHCXueMPHqAKmdBJ931tBTkqzTkfidyaITpvBliYxSW1Imzd6sso4fcqaLhafE3BRshQO_77yZKDyvB5ECt0_SSzUgymXY-eGBj7aoaXnuqQE8o';

export const USER_CREDENTIAL: UserCredential = {
  email: 'pixway@w3block.io',
  password: 'ABC123def456',
  tenantId: TENANT_ID,
};

export const TENANT_CREDENTIAL: TenantCredential = {
  key: 'tenant_b03dcc6a-4b5a-4b0e-8bf2-a7ee00a4e0ec',
  secret: 'bbada625584c51d5214b3205e454951ebce9df46f7c7f8278f78e3ce7d3905c1',
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
