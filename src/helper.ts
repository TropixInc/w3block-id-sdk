import { TenantRoleEnum, UserRoleEnum } from './enums';
import { JwtRole } from './interfaces';

export class AuthHelper {
  static hasAnyRole(roles: JwtRole[], requiredRoles: JwtRole[]): boolean {
    return requiredRoles.some((role: JwtRole) => roles.includes(role));
  }

  static hasAllRoles(roles: JwtRole[], requiredRoles: JwtRole[]): boolean {
    return requiredRoles.every((role: JwtRole) => roles.includes(role));
  }

  static hasRole(roles: JwtRole[], requiredRole: JwtRole): boolean {
    return roles.includes(requiredRole);
  }

  static hasUserRole(role: JwtRole): boolean {
    return AuthHelper.hasAnyUserRole([role]);
  }

  static hasAnyUserRole(roles: JwtRole[]): boolean {
    return AuthHelper.hasAnyRole(roles, AuthHelper.getUserRoles());
  }

  static hasAllUserRoles(roles: JwtRole[]): boolean {
    return AuthHelper.hasAllRoles(roles, AuthHelper.getUserRoles());
  }

  static hasTenantRole(role: JwtRole): boolean {
    return AuthHelper.hasAnyTenantRole([role]);
  }

  static hasAnyTenantRole(roles: JwtRole[]): boolean {
    return AuthHelper.hasAnyRole(roles, AuthHelper.getTenantRoles());
  }

  static hasAllTenantRoles(roles: JwtRole[]): boolean {
    return AuthHelper.hasAllRoles(roles, AuthHelper.getTenantRoles());
  }

  static getUserRoles(): UserRoleEnum[] {
    return Object.values(UserRoleEnum);
  }

  static getTenantRoles(): TenantRoleEnum[] {
    return Object.values(TenantRoleEnum);
  }
}
