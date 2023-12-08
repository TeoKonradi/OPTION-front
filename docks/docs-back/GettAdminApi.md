## It looks like you have provided a Postman collection file with various routes for different API endpoints. Below are the end routes for each section of your Postman collection:

## Brand:

### Create Brand:

Method: POST
Endpoint: {{domain}}admin/brand/reg

### List Brands:

Method: GET
Endpoint: {{domain}}admin/brand/

### Get Brand by ID:

Method: GET
Endpoint: {{domain}}admin/brand/:id

### Variable: id

Delete Brand by ID:
Method: POST
Endpoint: {{domain}}admin/brand/:id/del

Variable: id

## Product:

### Create Product:

Method: POST
Endpoint: {{domain}}admin/product/reg

### List Products:

Method: GET
Endpoint: {{domain}}admin/product/

### Get Product by ID:

Method: GET
Endpoint: {{domain}}admin/product/:id

### Variable: id

Delete Product by ID:
Method: POST
Endpoint: {{domain}}admin/product/:id/del

### Variable: id

## Me:

### Get User Profile:

Method: GET
Endpoint: {{domain}}admin/me

### Refresh User Token:

Method: GET
Endpoint: {{domain}}admin/me/refresh

### Change Password:

Method: POST
Endpoint: {{domain}}admin/me/change/password

### Logout:

Method: GET
Endpoint: {{domain}}admin/logout

## User:

### List Users:

Method: GET
Endpoint: {{domain}}admin/user

### Get User by ID:

Method: GET
Endpoint: {{domain}}admin/user/:id

### Variable: id

Create User:
Method: POST
Endpoint: {{domain}}admin/user/reg

### Update User by ID:

Method: PUT
Endpoint: {{domain}}admin/user/:id/update

### Variable: id

Delete User by ID:
Method: POST
Endpoint: {{domain}}admin/user/:id/del

### Variable: id

Group:
(No specific routes provided in the collection)

## Login:

### User Login:

Method: POST
Endpoint: {{domain}}admin/login

## Permissions:

### Get Permissions:

Method: GET
Endpoint: {{domain}}admin/permissions
