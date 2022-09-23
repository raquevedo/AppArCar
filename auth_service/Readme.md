### Table of contents 
> [POST signup](#POST-signup)
>
> [POST users/login](#POST-users/login)

### POST /signup
```sh
curl -X 'POST' \
  'http://localhost:3000/signup' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "string",
  "email": "string",
  "password": "string"
}'
```
### POST /users/login
```sh
curl -X 'POST' \
  'http://localhost:3000/users/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "user@example.com",
  "password": "stringst"
}'
```
## Data Catalog

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.
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