
CREATE table if not exists public.pkg_parking (
    id integer generated always as identity,
    business_name varchar(100) NOT NULL,
    cuit_number VARCHAR(25) NOT NULL ,
    street_name VARCHAR(100) NOT NULL ,
    street_number integer NOT NULL ,
    latitude float,
    longitude float,
    qty_total_slots integer NOT NULL ,
    price_hour float, 
    price_6_hours float,
    price_12_hours float, 
    price_24_hours float, 
    price_week float, 
    price_month float,
    sys_created_at_dttm timestamptz NOT NULL,
    sys_updated_at_dttm timestamptz NOT NULL,
  CONSTRAINT parking_id_pkey PRIMARY KEY (id)
);

CREATE table if not exists public.pkg_parking_settings (
    id_parking integer,
    start_monday time default '00:00:00',
    end_monday time default '23:59:59',
    start_tuesday time default '00:00:00',
    end_tuesday time default '23:59:59', 
    start_wednesday time default '00:00:00',
    end_wednesday time default '23:59:59',
    start_thursday time default '00:00:00',
    end_thursday time default '23:59:59',
    start_friday time default '00:00:00',
    end_friday time default '23:59:59',
    start_saturday time default '00:00:00',
    end_saturday time default '23:59:59',
    start_sunday time default '00:00:00',
    end_sunday time default '23:59:59',
    sys_created_at_dttm timestamptz NOT NULL,
    sys_updated_at_dttm timestamptz NOT NULL,
  CONSTRAINT pkg_settings_parking_id_pkey PRIMARY KEY (id_parking)
);

CREATE table if not exists public.pkg_parking_status (
    id_parking integer,
    status varchar(50) NOT NULL,
    qty_total_slots integer NOT NULL ,
    qty_free_slots integer NOT NULL, 
    qty_busy_slots integer NOT NULL,
    qty_reserved_slots integer NOT NULL,
    qty_blocked_slots integer NOT NULL, 
    sys_created_at_dttm timestamptz NOT NULL,
    sys_updated_at_dttm timestamptz NOT NULL,
  CONSTRAINT id_parking_pkey PRIMARY KEY (id_parking)
);


CREATE INDEX IF NOT EXISTS parking_status_idx ON public.pkg_parking_status USING btree (status);


CREATE TABLE public.pkg_reservation (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	id_car_driver int4 NOT NULL,
	id_parking int4 NOT NULL,
  patent_id VARCHAR(10) NOT NULL ,
	created_at_dttm timestamptz NOT NULL,
	expiration_at_dttm timestamptz NULL,
	cancelled_at_dttm timestamptz NULL,
	checkin_at_dttm timestamptz NULL,
	checkout_at_dttm timestamptz NULL,
	status varchar(25) NULL,
	payment_status varchar(25) NULL,
	flg_extended bool NULL,
	total_price float8 NULL,
	sys_created_at_dttm timestamptz NOT NULL,
	sys_updated_at_dttm timestamptz NOT NULL,
	CONSTRAINT reservation_id_pkey PRIMARY KEY (id)
);

CREATE INDEX reservation_driver_idx ON public.pkg_reservation USING btree (id_car_driver);
CREATE INDEX reservation_parking_idx ON public.pkg_reservation USING btree (id_parking);

CREATE table if not exists public.pkg_parking_users (
    id integer generated always as identity,
    id_parking integer,
    id_parking_user integer,
    user_role VARCHAR(50), 
    sys_created_at_dttm timestamptz NOT NULL,
    sys_updated_at_dttm timestamptz NOT NULL,
  CONSTRAINT parking_user_id_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS pu_parking_user_idx ON public."pkg_parking_users" USING btree (id_parking_user);
CREATE INDEX IF NOT EXISTS pu_parking_id_idx ON public."pkg_parking_users" USING btree (id_parking);
