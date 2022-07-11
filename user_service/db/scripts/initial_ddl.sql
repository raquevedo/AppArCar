CREATE TABLE `users`.`usr_car_driver` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `dni` int NOT NULL,
  `birth_date_dt` date NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  `contact_number` int NOT NULL,
  `register_date_dttm` datetime NOT NULL,
  `sys_created_at_dttm` datetime NOT NULL,
  `sys_updated_at_dttm` datetime NOT NULL,
  UNIQUE KEY `id` (`id`),
  KEY `idx_id` (`id`),
  KEY `idx_dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8
;

CREATE TABLE `users`.`usr_car` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,
    `id_car_driver` INT(10) NOT NULL ,
    `patent_id` VARCHAR(10) NOT NULL ,
    `brand` VARCHAR(50) NOT NULL ,
    `model` VARCHAR(50) NOT NULL ,
    `color` VARCHAR(50) NOT NULL ,
    `production_year` INT(10) NOT NULL ,
    `sys_created_at_dttm` datetime NOT NULL,
    `sys_updated_at_dttm` datetime NOT NULL,
UNIQUE KEY `id` (`id`),
  KEY `idx_id` (`id`),
  KEY `idx_patent_id` (`patent_id`),
  KEY `idx_id_car_driver` (`id_car_driver`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8
;

CREATE TABLE `users`.`usr_partner` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`business_name` VARCHAR(100) NOT NULL ,
`cuit_number` VARCHAR(25) NOT NULL ,
`street_name` VARCHAR(100) NOT NULL ,
`street_number` INT(10) NOT NULL ,
`email` VARCHAR(100) NOT NULL ,
`password` varchar(256) NOT NULL,
`contact_number` int NOT NULL,
`latitude` FLOAT NULL ,
`longitude` FLOAT NULL ,
`sys_created_at_dttm` datetime NOT NULL,
`sys_updated_at_dttm` datetime NOT NULL,
UNIQUE KEY `id` (`id`),
  KEY `idx_id` (`id`),
  KEY `idx_cuit_number` (`cuit_number`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8
;

CREATE TABLE `users`.`usr_user_loggin` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`user_type` VARCHAR(100) NOT NULL ,
`user_id` BIGINT NOT NULL ,
`status_login` VARCHAR(100) NOT NULL ,
`ip_address` VARCHAR(100) NOT NULL ,
`device` VARCHAR(50) NOT NULL ,
`sys_created_at_dttm` datetime NOT NULL,
`sys_updated_at_dttm` datetime NOT NULL,
UNIQUE KEY `id` (`id`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8
;