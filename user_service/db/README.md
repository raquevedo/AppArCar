# Users Database 

Transactional mysql database for Users service.
Users db was created following our RDBS modeling guidelines 

## Login 

Users service use a service principal for authentication at RDBS 

**Service principal**: ms_[databasename]_app

usr: ms_users_app
pwd: pwdusersapp

## Entities 

- `usr_car_driver`: Store data relative a car drivers 
- `usr_car`: Store data relative a driver's cars
- `usr_partner`: Store data relative a strategic partners
- `usr_user_logging`: Store data relative a users logging in our system


## Datatypes 
We only use a few data types for improve perfomance and maintence high standard modeling techniques 

**Adventage**
- Compatibility with back-end framework 
- Simplify modeling task 
- Reduce transformation at downstream 
- Simplify interactions with other services

**Data types permitted**

- BIGINT
- INTEGER
- FLOAT
- VARCHAR
- DATE
- DATETIME

## General conventions

**Mandatory**: All tables should be contains 


- id : UNIQUE ID AUTOINCREMENTAL 


AUDIT COLUMNS 

- sys_created_at_dttm: DATETIME 
- sys_updated_at_dttm: DATETIME

## Naming conventions

**TABLES** 
Each table should be use prefix on table_name. Prefix is an abbreviation refeer to database name, prefix lenght **3** characters.

Example
```sh
Database: Users --> Prefix: usr
```

**COLUMNS**

- Audit columns should be use prefix **"sys"**
- Date columns should be use suffix **"dt"**
- Datetime columns should be use suffix **"dttm"**


**ACCESS DATABASE** 

Up docker compose 

```sh
docker-compose up
```

Php my admin running at  http://localhost:8081/