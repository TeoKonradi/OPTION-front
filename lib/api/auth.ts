// # Authentication

import { Group, Permission } from "../interfaces/common";

// ## Permissions
// Address: `{{connection}}/auth/permissions` [GET]
// Answer `200`, `json`
// ```json
// ["permission"]
// ```

export interface Login {
  password: string;
  username: string;
}
// ## Login
// Address: `{{connection}}/auth/login` [POST]
// Standard owner login is password is "admin", "admin"
// Require: `json`
// ```json
// {
//   "username": "USERNAME",
//   "password": "PASSWORD"
// }
// ```

export interface LoginRes {
  access_token: string;
  refresh_token: string;
}
// Answer: `200`, `COOKIE` & `json`
// ```json
// {
//     "refresh_token": "REFRESH_TOKEN",
//     "access_token": "ACCESS_TOKEN"
// }
// ```

export interface LogOutRes {
  access_token: string;
  refresh_token: string;
}
// ## Logout
// Address: `{{connection}}/auth/logout` [GET]
// Answer: `200`, `COOKIE` & `json`
// ```json
// {
//     "refresh_token": "log out",
//     "access_token": "log out"
// }
// ```

export interface Refresh {
  refresh_token: string;
}
// ## Refresh
// Address: `{{connection}}/auth/me/refresh` [GET]
// Require: `LOGIN`
// Answer: `200`, `COOKIE` & `json`
// ```json
// {
//     "refresh_token": "REFRESH_TOKEN"
// }
// ```

export interface MeRequest {
  groups: Group[];
  is_active: boolean;
  is_staff: boolean;
  is_super_user: boolean;
  last_login: number;
  permissions: Permission[];
  register: number;
  // set existing rules
  username: "admin" | "sudo";
}
// ## Me
// Address: `{{connection}}/auth/me` [GET]
// Require: `LOGIN`
// Answer: `200`, `COOKIE` & `json`
// ```json
// {
//   "username": "admin",
//   "is_active": true,
//   "is_staff": true,
//   "is_super_user": true,
//   "last_login": 1694253508,
//   "register": 1694235994,
//   "permissions": ["permission"],
//   "groups": []
// }
// ```
// Permissions field already include all groups permissions

// ## Change password
// Address: `{{connection}}/auth/change/password` [GET]

// Require: `LOGIN` & `json`
// ```json
// {
//   "old_password": "OLD_PASSWORD",
//   "password": "PASSWORD"
// }
// ```
export interface ChangePass {
  old_password: string;
  password: string;
}
// Answer: `200`, `json`
// ```json
// {
//   "status": "success"
// }
// ```
