import { TenantRoleEnum, UserRoleEnum } from './enums';
import { JwtRole } from './interfaces';

export class AuthHelper {
  static hasAnyRole<J = JwtRole>(roles: J[], requiredRoles: J[]): boolean {
    return requiredRoles.some((role: J) => roles.includes(role));
  }

  static hasAllRoles<J = JwtRole>(roles: J[], requiredRoles: J[]): boolean {
    return requiredRoles.every((role: J) => roles.includes(role));
  }

  static hasRole<J = JwtRole>(roles: J[], requiredRole: J): boolean {
    return roles.includes(requiredRole);
  }

  static hasUserRole<J = JwtRole>(role: J): boolean {
    return AuthHelper.hasAnyUserRole([role]);
  }

  static hasAnyUserRole<J = JwtRole>(roles: J[]): boolean {
    return AuthHelper.hasAnyRole(roles, AuthHelper.getUserRoles());
  }

  static hasAllUserRoles<J = JwtRole>(roles: J[]): boolean {
    return AuthHelper.hasAllRoles(roles, AuthHelper.getUserRoles());
  }

  static hasTenantRole<J = JwtRole>(role: J): boolean {
    return AuthHelper.hasAnyTenantRole([role]);
  }

  static hasAnyTenantRole<J = JwtRole>(roles: J[]): boolean {
    return AuthHelper.hasAnyRole(roles, AuthHelper.getTenantRoles());
  }

  static hasAllTenantRoles<J = JwtRole>(roles: J[]): boolean {
    return AuthHelper.hasAllRoles(roles, AuthHelper.getTenantRoles());
  }

  static getUserRoles<U = UserRoleEnum>(): U[] {
    return Object.values(UserRoleEnum) as unknown as U[];
  }

  static getTenantRoles<T = TenantRoleEnum>(): T[] {
    return Object.values(TenantRoleEnum) as unknown as T[];
  }
}
