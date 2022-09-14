CREATE TABLE IF NOT EXISTS public.usr_car_driver (
  id bigint NOT NULL,
  username text NULL,
  name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  document_number int NOT NULL,
  birth_date_dt date NOT NULL,
  gender varchar(50) NOT NULL,
  email varchar(100) NOT NULL,
  contact_number int NOT NULL,
  register_date_dttm timestamp NOT NULL,
  sys_created_at_dttm timestamp NOT NULL,
  sys_updated_at_dttm timestamp NOT NULL,
  CONSTRAINT user_pkey PRIMARY KEY (id)
);

CREATE UNIQUE INDEX IF NOT EXISTS users_username_idx ON public."usr_car_driver" USING btree (username);


CREATE table if not exists public.usr_car (
    id integer generated always as identity,
    id_car_driver bigint NOT NULL ,
    patent_id VARCHAR(10) NOT NULL ,
    brand VARCHAR(50) NOT NULL ,
    model VARCHAR(50) NOT NULL ,
    color VARCHAR(50) NOT NULL ,
    production_year integer NOT NULL ,
    sys_created_at_dttm timestamp NOT NULL,
    sys_updated_at_dttm timestamp NOT NULL,
  CONSTRAINT car_pkey PRIMARY KEY (id)
);
CREATE INDEX if not exists car_id_car_driver_idx ON public."usr_car" USING btree (id_car_driver);
CREATE INDEX if not exists car_patent_id_idx ON public."usr_car" USING btree (patent_id);

CREATE TABLE if not exists public.usr_partner (
id bigint NOT NULL,
username text NULL,
business_name VARCHAR(100) NOT NULL ,
cuit_number VARCHAR(25) NOT NULL ,
street_name VARCHAR(100) NOT NULL ,
street_number INTEGER NOT NULL ,
email VARCHAR(100) NOT NULL ,
contact_number INTEGER NOT NULL,
latitude FLOAT NULL ,
longitude FLOAT NULL ,
sys_created_at_dttm timestamp NOT NULL,
sys_updated_at_dttm timestamp NOT NULL,
CONSTRAINT partner_pkey PRIMARY KEY (id)
) ; 
CREATE INDEX if not exists partner_cuit_number_idx ON public."usr_partner" USING btree (cuit_number);
CREATE UNIQUE INDEX IF NOT EXISTS partner_username_idx ON public."usr_car_driver" USING btree (username);


