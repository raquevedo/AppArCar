### Table of contents 
> [POST signup](#POST-signup)
>
> [POST users/login](#POST-userslogin)

### POST /signup
```sh
curl -X 'POST' \
  'http://localhost:3000/signup' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "testuser",
  "email": "testuser@dominio.com",
  "password": "minimo8char"
}'
```
Response 200 OK
```sh
{
  "id": "1664032056",
  "username": "testuser",
  "email": "usertest@dominio.com"
}
```
 
### POST /users/login
```sh
curl -X 'POST' \
  'http://localhost:3000/users/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "testuser@dominio.com",
  "password": "minimo8char"
}'
```
Response 200 OK 
```sh
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI"
}
```

## Data Catalog

#### authDb.public.user
| Column | Type | Description|
| ------ | ------ | ------ |
| id | text (pk) |User id |
| realm | text | N/A|
| username | text | User name for account |
| email | text | Customer's email address|
| emailverified | bool | N/A|
| verificationtoken | text | N/A|

#### authDb.public.usercredentials
| Column | Type | Description|
| ------ | ------ | ------ |
| id | text (pk) | Uuid |
| password | text | Hashed password |
| userid | text | User id |
