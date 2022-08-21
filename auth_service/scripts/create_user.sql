CREATE TABLE IF NOT EXISTS 'authDb'.'User' (
    "id" bigint unsigned NOT NULL AUTO_INCREMENT,
    "realm" varchar(100),
    "username" varchar(100) DEFAULT '',
    "email" varchar(256) NOT NULL,
    "emailVerified": tinyint(1) NOT NULL DEFAULT 0,
    "verificationToken" varchar(256),
    "password": varchar(64) NOT NULL,
    "additionalProp1" JSON DEFAULT Null,
    UNIQUE KEY 'id' ('id'),
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8
;
