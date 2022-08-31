GRANT ALL ON auth TO ms_auth_app;
ALTER USER 'ms_auth_app'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'pwdauthapp';
FLUSH PRIVILEGES;

DROP TABLE IF EXISTS `auth`.`user` ; 

CREATE TABLE IF NOT EXISTS `auth`.`user` (
    `id` BIGINT unsigned NOT NULL AUTO_INCREMENT,
    `realm` VARCHAR(100),
    `username` VARCHAR(100) DEFAULT '',
    `email` VARCHAR(256) NOT NULL,
    `emailVerified` tinyint(1) NOT NULL DEFAULT 0,
    `verificationToken` VARCHAR(256),
    `password` VARCHAR(64) NOT NULL,
    `additionalProp1` JSON DEFAULT Null,
    `sys_created_at_dttm` datetime NOT NULL,
    `sys_updated_at_dttm` datetime NOT NULL,
    UNIQUE KEY `id` (`id`),
    KEY `idx_user_id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8
;
