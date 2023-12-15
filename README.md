# Introduction

## Authorization

```http
GET https://sih-demo.vercel.app/
POST https://sih-demo.vercel.app/add
```

## Responses

Many API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, Gophish returns a JSON response in the following format:

```javascript
{
  "id":"2",
  "sname":"Nitin",
  "semail":"nitinspatil2003@gmail.com",
  "sphone":"9876543210",
  "stype":"admin",
  "password":"123"
}
```

## Status Codes

Gophish returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
