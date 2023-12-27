# REST API

The `markett.gay` REST API documentation

## List of all permissions

### Request

`GET /admin/permissions`

### Response

```json
[
  {
    "app": "Admin",
    "model": "User",
    "permission": "create_adm_user"
  }
]
```

## Login

### Request

`POST /admin/login`

```json
{
  "username": "admin",
  "password": "admin"
}
```

Standard owner login is password is "admin", "admin"

### Response

```json
{
  "refresh_token": "TOKEN",
  "access_token": "TOKEN"
}
```

## Me

### Request

`GET /admin/me`

### Response

```json
{
  "username": "admin",
  "is_active": true,
  "is_staff": true,
  "is_super_user": true,
  "last_login": 1694253508,
  "register": 1694235994,
  "permissions": [
    {
      "app": "Admin",
      "model": "User",
      "permission": "create_adm_user"
    },
    {
      "app": "Admin",
      "model": "User",
      "permission": "update_adm_user"
    },
    {
      "app": "Admin",
      "model": "User",
      "permission": "delete_adm_user"
    },
    {
      "app": "Admin",
      "model": "Group",
      "permission": "create_adm_group"
    },
    {
      "app": "Admin",
      "model": "Group",
      "permission": "update_adm_group"
    },
    {
      "app": "Admin",
      "model": "Group",
      "permission": "delete_adm_group"
    }
  ],
  "groups": []
}
```

Permissions field already include all groups permissions

## Refresh

### Request

`GET /admin/me/refresh`
Must be already login

### Response

```json
{
  "refresh_token": "TOKEN",
  "access_token": "TOKEN"
}
```

## Change password

### Request

`POST /admin/me/change/password`

```json
{
  "old_password": "admin",
  "password": "123"
}
```

Must be already login

### Response

```json
{
  "refresh_token": "TOKEN",
  "access_token": "TOKEN"
}
```

## Logout

### Request

`GET /admin/logout`
Must be already login

### Response

```json
{
  "refresh_token": "TOKEN",
  "access_token": "TOKEN"
}
```
