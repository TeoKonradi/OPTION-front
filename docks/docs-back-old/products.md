# REST API

The `markett.gay` REST API documentation

# Brand

## Create new brand

### Request

`POST /admin/brand/reg`

```json

```

### Response

```json
{ "status": "success" }
```

## Delete brand

### Request

`POST /admin/brand/{id}/del`

### Response

```json
{ "status": "success" }
```

## Get a specific brand

### Request

`GET /admin/brand/{id}`

### Response

```json
{
  "ID": 2,
  "name": "TestBrand",
  "tag": "testbrand",
  "picture": ""
}
```

## Get a list of brands

### Request

`GET /admin/brand/`

### Response

```json
{
  "items": [
    {
      "ID": 2,
      "name": "TestBrand",
      "tag": "testbrand",
      "picture": ""
    }
  ],
  "total": 1
}
```

# Product

## Create new product

### Request

`POST /admin/product/reg`

```json
{
  "header": "TestHeader",
  "product_tag": "test",
  "short_description": "",
  "description": "",
  "price": 1000,
  "picture": [],
  "brand": [2],
  "show_in_market": true,
  "available": true,
  "size": [
    {
      "size": "xxl",
      "available_now": 10
    }
  ]
}
```

### Response

```json
{ "status": "success" }
```

## Delete product

### Request

`POST /admin/product/{id}/del`

### Response

```json
{ "status": "success" }
```

## Get a specific product

### Request

`GET /admin/product/{id}`

### Response

```json
{
  "ID": 3,
  "header": "TestHeader",
  "product_tag": "test1",
  "short_description": "",
  "description": "",
  "price": 1000,
  "picture": [],
  "brand": [
    {
      "ID": 2,
      "name": "TestBrand",
      "tag": "testbrand",
      "picture": ""
    }
  ],
  "size": [
    {
      "id": 2,
      "size": "xxl",
      "available_now": 10
    }
  ],
  "ShowInMarket": true,
  "Available": true
}
```

## Get a list of products

### Request

`GET /admin/product/`

### Response

```json
{
  "items": [
    {
      "ID": 3,
      "header": "TestHeader",
      "product_tag": "test1",
      "short_description": "",
      "description": "",
      "price": 1000,
      "picture": [],
      "brand": [
        {
          "ID": 2,
          "name": "TestBrand",
          "tag": "testbrand",
          "picture": ""
        }
      ],
      "size": [
        {
          "id": 2,
          "size": "xxl",
          "available_now": 10
        }
      ],
      "ShowInMarket": true,
      "Available": true
    },
    {
      "ID": 4,
      "header": "TestHeader",
      "product_tag": "test2",
      "short_description": "",
      "description": "",
      "price": 1000,
      "picture": [],
      "brand": [
        {
          "ID": 2,
          "name": "TestBrand",
          "tag": "testbrand",
          "picture": ""
        }
      ],
      "size": [
        {
          "id": 3,
          "size": "xxl",
          "available_now": 10
        }
      ],
      "ShowInMarket": true,
      "Available": true
    }
  ],
  "total": 2
}
```
