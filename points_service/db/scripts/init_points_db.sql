CREATE TABLE IF NOT EXISTS public."pts_benefit" (
    id integer generated always as identity,
	partner_id bigint NOT NULL,
	title text NOT NULL,
	description text NOT NULL,
	price float NOT NULL,
	points integer NOT NULL,
 	initial_at_dttm timestamp NOT NULL,
	expiration_at_dttm timestamp NOT NULL,
	status varchar(50) NOT NULL,
	creation_at_dttm timestamp NOT NULL,
	sys_created_at_dttm timestamp NOT NULL,
	sys_updated_at_dttm timestamp NOT NULL,
	CONSTRAINT benefit_pkey PRIMARY KEY (id)
	
);

CREATE INDEX IF NOT EXISTS benefit_partner_id on public."pts_benefit" USING btree (partner_id);

CREATE TABLE IF NOT EXISTS public."pts_reward" (
    id integer generated always as identity,
	benefit_id integer NOT NULL,
	car_driver_id integer NOT NULL,
	partner_id integer NOT NULL,
	creation_at_dttm timestamp NOT NULL,
	qty_points integer NOT NULL,
	status varchar(50) NOT NULL,
	cancelled_at_dttm timestamp,
	sys_created_at_dttm timestamp NOT NULL,
	sys_updated_at_dttm timestamp NOT NULL,
	CONSTRAINT reward_pkey PRIMARY KEY (id)
	
);

CREATE INDEX IF NOT EXISTS reward_car_driver_id on public."pts_reward" USING btree (car_driver_id);
CREATE INDEX IF NOT EXISTS reward_partner_id on public."pts_reward" USING btree (partner_id);
CREATE INDEX IF NOT EXISTS reward_benefit_id on public."pts_reward" USING btree (benefit_id);

CREATE TABLE IF NOT EXISTS public."pts_user_points" (
	car_driver_id integer NOT NULL,
	qty_available_points integer NOT NULL,
	qty_consumed_points integer NOT NULL,
	sys_created_at_dttm timestamp NOT NULL,
	sys_updated_at_dttm timestamp NOT NULL,
	CONSTRAINT car_driver_id_pkey PRIMARY KEY (car_driver_id)
	
);

