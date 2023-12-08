# REST API

The `markett.gay` REST API documentation

# Admin users

## Create new admin user

### Request

`POST /admin/user/reg`

```json

```

### Response

```json
{
  "username": "success",
  "password": "success",
  "is_active": false,
  "is_staff": false,
  "is_super_user": false,
  "permissions": ["permission"],
  "groups": []
}
```

## Delete admin user

### Request

`POST /admin/user/{id}/reg`

### Response

```json
{ "status": "success" }
```

## Get a list of admin users

### Request

`GET /admin/user/`

### Response

```json
{
  "items": [
    {
      "ID": 1,
      "username": "success",
      "password": "success",
      "is_active": false,
      "is_staff": false,
      "is_super_user": false,
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
        }
      ],
      "groups": []
    }
  ],
  "total": 1
}
```

## Get a specific admin user

### Request

`GET /admin/user/{id}`

### Response

```json
{
  "ID": 1,
  "username": "success",
  "password": "success",
  "is_active": false,
  "is_staff": false,
  "is_super_user": false,
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
    }
  ],
  "groups": []
}
```

## Update admin user

### Request

`POST /admin/user/{id}/update`

```json

```

### Response

```json
{
  "username": "success",
  "is_active": false,
  "is_staff": false,
  "is_super_user": false,
  "permissions": ["permission"],
  "groups": []
}
```
