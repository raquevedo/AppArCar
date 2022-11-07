CREATE table if not exists public.pmt_card (
    id integer generated always as identity,
    id_car_driver int4 NOT NULL,
    card_number varchar(20) NOT NULL,
    card_name VARCHAR(50) NOT NULL ,
    company VARCHAR(100) NOT NULL ,
    type VARCHAR(50) NOT NULL ,
    expire_date integer NOT NULL ,
    sys_created_at_dttm timestamptz NOT NULL,
    sys_updated_at_dttm timestamptz NOT NULL,
  CONSTRAINT pmt_card_id_pkey PRIMARY KEY (id)
);

CREATE table if not exists public.pmt_payments (
    id integer generated always as identity,
    id_reservation int4 NOT NULL,
    id_car_driver int4 NOT NULL,
	  id_parking int4 NOT NULL,
    card_number varchar(20) NOT NULL,
    total float8 NULL,
    status VARCHAR(50),
    paid_at_dttm timestamptz NOT NULL,
    sys_created_at_dttm timestamptz NOT NULL,
    sys_updated_at_dttm timestamptz NOT NULL,
  CONSTRAINT pmt_payments_id_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS pmt_id_car_driver_idx ON public.pmt_payments USING btree (id_car_driver);
CREATE INDEX IF NOT EXISTS pmt_id_reservation_idx ON public.pmt_payments USING btree (id_reservation);
CREATE INDEX IF NOT EXISTS pmt_id_parking_idx ON public.pmt_payments USING btree (id_parking);


