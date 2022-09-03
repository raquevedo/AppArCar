DROP TABLE IF EXISTS public.user; 

CREATE TABLE IF NOT EXISTS public.user (
    id SERIAL NOT NULL,
    realm VARCHAR(100),
    username VARCHAR(100) DEFAULT '',
    email VARCHAR(256) NOT NULL,
    emailVerified INTEGER NOT NULL DEFAULT 0,
    verificationToken VARCHAR(256),
    password VARCHAR(64) NOT NULL,
    additionalProp1 JSON DEFAULT Null,
    sys_created_at_dttm timestamp NOT NULL,
    sys_updated_at_dttm timestamp NOT NULL,
    UNIQUE (id)  
) 
;