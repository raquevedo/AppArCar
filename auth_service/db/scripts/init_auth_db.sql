CREATE TABLE public."user" (
    id text NOT NULL,
    realm text,
    username text,
    email text NOT NULL,
    emailverified boolean,
    verificationtoken text
);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE UNIQUE INDEX user_email_idx ON public."user" USING btree (email);


CREATE TABLE public.usercredentials (
    id text NOT NULL,
    password text NOT NULL,
    userid text NOT NULL
);
ALTER TABLE ONLY public.usercredentials
    ADD CONSTRAINT usercredentials_pkey PRIMARY KEY (id);