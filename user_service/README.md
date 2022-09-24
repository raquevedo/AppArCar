### Car Driver
> [POST car-driver/create-user](#POST-car-driver-create-user)
>
> [PATCH car-driver/update-profile](#PATCH-car-driver-update-profile)
>
> [GET car-driver/user-info](#GET-car-driver-user-info)

### POST car-driver/create-user
```sh
curl -X 'POST' \
  'http://localhost:3001/car-drivers/create-user' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Sancho",
  "lastName": "Panza",
  "documentNumber": 13658959,
  "birthDateDt": "2022-09-24 00:00:00",
  "gender": "Male",
  "contactNumber": 11331615
}'
```
Response 200 OK
```sh
{
  "id": "1664032208",
  "username": "testuser",
  "name": "Sancho",
  "lastName": "Panza",
  "documentNumber": 13658959,
  "birthDateDt": "2022-09-24T00:00:00.000Z",
  "gender": "Male",
  "email": "testuser@dominio.com",
  "contactNumber": 11331615,
  "registerDateDttm": "2022-09-24T15:53:42.000Z",
  "sysCreatedAtDttm": "2022-09-24T15:53:42.000Z",
  "sysUpdatedAtDttm": "2022-09-24T15:53:42.000Z"
}
```
 
### PATCH car-driver/update-profile
```sh
curl -X 'PATCH' \
  'http://localhost:3001/car-drivers/update-profile' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "don",
  "lastName": "quijote"
}'
```
```sh
curl -X 'PATCH' \
  'http://localhost:3001/car-drivers/update-profile' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI' \
  -H 'Content-Type: application/json' \
  -d '{
"documentNumber": 122
}'
```

### GET car-driver/user-info
```sh
curl -X 'GET' \
  'http://localhost:3001/car-drivers/user-info' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI'
  ```
  Response 200 ok
  ```sh
  {
  "data": {
    "id": 1664032208,
    "username": "testuser",
    "name": "don",
    "lastName": "quijote",
    "documentNumber": 122,
    "birthDateDt": "2022-09-24T00:00:00.000Z",
    "gender": "Male",
    "email": "testuser@dominio.com",
    "contactNumber": 11331615,
    "registerDateDttm": "2022-09-24T15:53:42.000Z",
    "sysCreatedAtDttm": "2022-09-24T15:53:42.000Z",
    "sysUpdatedAtDttm": "2022-09-24T15:57:00.000Z"
  },
  "isRegister": true
}
```
If not register 
 ```sh
  {
  "data": { },
  "isRegister": false
}
```

### Cars
> [POST cars/create](#POST-cars-create)
>
> [GET cars](#GET-cars)
>
> [DELETE cars/remove/{id}](#PATCH-cars-remove-{id})
>
> [PATCH cars/update-car/{id}](#GET-cars-update-car-{id})


### POST cars/create
```sh
curl -X 'POST' \
  'http://localhost:3001/cars/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI' \
  -H 'Content-Type: application/json' \
  -d '{
  "patentId": "ac123mm",
  "brand": "bmw",
  "model": "series 3",
  "color": "negro",
  "productionYear": 2020
}'
```
Response 200 OK 
```sh
{
  "id": 1,
  "idCarDriver": 1664032208,
  "patentId": "ac123mm",
  "brand": "bmw",
  "model": "series 3",
  "color": "negro",
  "productionYear": 2020,
  "sysCreatedAtDttm": "2022-09-24T15:59:50.000Z",
  "sysUpdatedAtDttm": "2022-09-24T15:59:50.000Z"
}
```

### GET cars
```sh
curl -X 'GET' \
  'http://localhost:3001/cars' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI'
  ```
Response 200 OK 
  ```sh
[
  {
    "id": 1,
    "idCarDriver": "1664032208",
    "patentId": "ac123mm",
    "brand": "bmw",
    "model": "series 3",
    "color": "negro",
    "productionYear": 2020
  },
  {
    "id": 2,
    "idCarDriver": "1664032208",
    "patentId": "bb134mm",
    "brand": "ford",
    "model": "focus",
    "color": "blanco",
    "productionYear": 2022
  },
  {
    "id": 3,
    "idCarDriver": "1664032208",
    "patentId": "bb134mm",
    "brand": "ford",
    "model": "focus",
    "color": "blanco",
    "productionYear": 2022
  }
]
 ```
 
### DELETE cars/remove/{id}
  ```sh
 curl -X 'DELETE' \
  'http://localhost:3001/cars/remove/3' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI'
   ```

### PATCH cars/update-car/{id}
  ```sh
curl -X 'PATCH' \
  'http://localhost:3001/cars/update-car/2' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI' \
  -H 'Content-Type: application/json' \
  -d '{

  "color": "amarillo"
}'
```
### Partners
> [POST partners/create-user](#POST-partners-create-user)
>
> [GET partners/user-info](#GET-partners-user-info)

### POST partners/create-user
```sh
curl -X 'POST' \
  'http://localhost:3001/partners/create-user' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI' \
  -H 'Content-Type: application/json' \
  -d '{
  "businessName": "lavadero",
  "cuitNumber": "25-111235-3",
  "streetName": "av. de mayo",
  "streetNumber": 145,
  "contactNumber": 11190812
}'
```

### GET partners/user-info
```sh
curl -X 'GET' \
  'http://localhost:3001/partners/user-info' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NjQwMzIyMDgiLCJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGRvbWluaW8uY29tIiwiaWF0IjoxNjY0MDMyMjM0LCJleHAiOjE2NjQwNTM4MzR9.c46Tiym6_qhVTg-_tUTEboJ8p_EIb5R6yd-9btbtonI'
  ```
 
 Response 200 OK 
   ```sh
 {
  "data": {
    "id": 1664032208,
    "username": "testuser",
    "businessName": "lavadero",
    "cuitNumber": "25-111235-3",
    "streetName": "av. de mayo",
    "streetNumber": 145,
    "email": "testuser@dominio.com",
    "contactNumber": 11190812,
    "latitude": 0,
    "longitude": 0,
    "sysCreatedAtDttm": "2022-09-24T16:09:13.000Z",
    "sysUpdatedAtDttm": "2022-09-24T16:09:13.000Z"
  },
  "isRegister": true
}
  ```
 If not register
```sh
{
  "data": { },
  "isRegister": false
}
```

## Data Catalog
> [usr_car](#userDb.public.usr_car)
> [usr_car_driver](#userDb.public.usr_car_driver)
> [usr_partner](#userDb.public.usr_partner)

#### userDb.public.usr_car
| Column | Type | Description|
| ------ | ------ | ------ |
| id | int4 (pk) | Car id identity autoincremental|
| id_car_driver | int8 (fk) | Car driver id|
| patent_id | varchar(10) | Car's patent id |
| brand | varchar(50) | Car's brand|
| model | varchar(50) | Car's model|
| color | varchar(50) | Car's color|
| production_year | int4 | Car's production year|
| sys_created_at_dttm | timestamp | Audit timestamp when the row was created|
| sys_updated_at_dttm | timestamp | Audit timestamp when the row was updated |

#### userDb.public.usr_car_driver
| Column | Type | Description|
| ------ | ------ | ------ |
| id | text (pk) | User id from auth.user |
| username | text (fk) | Car driver's username |
| name | varchar(100) | Driver's first name  |
| last_name | varchar(100) | Driver's last name |
| document_number | int | Driver's document number |
| birth_date_dt | date | Driver's birth date |
| gender | varchar(50) | Driver's gender [Male, Female, Other] |
| email | varchar(100) | User's email addres from auth.user |
| contact_number | int4 | Driver's contact number |
| register_date_dttm | timestamp | Timestamp when register was completed|
| sys_created_at_dttm | timestamp | Audit timestamp when the row was created|
| sys_updated_at_dttm | timestamp | Audit timestamp when the row was updated |

#### userDb.public.usr_partner
| Column | Type | Description|
| ------ | ------ | ------ |
| id | int (pk) | User id from auth.user |
| username | text (fk) | User's username from auth.user |
| business_name | varchar(100) | Partner's business name  |
| cuit_number | varchar(25) | Partner's cuit number |
| street_name | varchar(100) | Partner's street name |
| street_number | int | Partner's street number |
| email | varchar(100) | User's email addres from auth.user |
| contact_number | int4 | Partner's contact number |
| latitude | float | Coord. latitude |
| longitude | float | Coord. longitude |
| sys_created_at_dttm | timestamp | Audit timestamp when the row was created|
| sys_updated_at_dttm | timestamp | Audit timestamp when the row was updated |