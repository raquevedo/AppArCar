
CREATE table if not exists public.pkg_parking (
    id integer generated always as identity,
    business_name varchar(100) NOT NULL,
    cuit_number VARCHAR(25) NOT NULL ,
    street_name VARCHAR(100) NOT NULL ,
    street_number integer NOT NULL ,
    geocode json,
    qty_total_slots integer NOT NULL ,
    office_hours json, 
    price_hour float, 
    price_6_hours float,
    price_12_hours float, 
    price_24_hours float, 
    price_week float, 
    price_month float,
    sys_created_at_dttm timestamp NOT NULL,
    sys_updated_at_dttm timestamp NOT NULL,
  CONSTRAINT parking_id_pkey PRIMARY KEY (id)
);

CREATE table if not exists public.pkg_parking_status (
    id_parking integer,
    status varchar(50) NOT NULL,
    office_hours json, 
    qty_total_slots integer NOT NULL ,
    qty_free_slots integer NOT NULL, 
    qty_bussy_slots integer NOT NULL,
    qty_reserved_slots integer NOT NULL,
    qty_blocked_slots integer NOT NULL, 
    sys_created_at_dttm timestamp NOT NULL,
    sys_updated_at_dttm timestamp NOT NULL,
  CONSTRAINT id_parking_pkey PRIMARY KEY (id_parking)
);


CREATE UNIQUE INDEX IF NOT EXISTS parking_status_idx ON public."pkg_parking_status" USING btree (status);


CREATE table if not exists public.pkg_reservation (
    id integer generated always as identity,
    id_car_driver integer NOT NULL,
    id_parking integer NOT null,
    created_at_dttm timestamp not null, 
    expiration_at_dttm timestamp,
    cancelled_at_dttm timestamp,
    checkin_at_dttm timestamp,
    checkout_at_dttm timestamp,
    status varchar(25),
    payment_status varchar(25),
    flg_extended bool,
    total_price float,
    sys_created_at_dttm timestamp NOT NULL,
    sys_updated_at_dttm timestamp NOT NULL,
  CONSTRAINT reservation_id_pkey PRIMARY KEY (id_parking)
);

CREATE UNIQUE INDEX IF NOT EXISTS reservation_driver_idx ON public."pkg_reservation" USING btree (id_car_driver);
CREATE UNIQUE INDEX IF NOT EXISTS reservation_parking_idx ON public."pkg_reservation" USING btree (id_parking);

CREATE table if not exists public.pkg_parking_users (
    id integer generated always as identity,
    id_parking integer,
    id_parking_user integer,
    user_role VARCHAR(50), 
    sys_created_at_dttm timestamp NOT NULL,
    sys_updated_at_dttm timestamp NOT NULL,
  CONSTRAINT parking_user_id_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS pu_parking_user_idx ON public."pkg_parking_users" USING btree (id_parking_user);
CREATE INDEX IF NOT EXISTS pu_parking_id_idx ON public."pkg_parking_users" USING btree (id_parking);
