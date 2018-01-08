USE yoyo;
DROP TABLE IF EXISTS `members`;  
CREATE TABLE `members` (  
      `id` int(11) NOT NULL AUTO_INCREMENT,  
      `nickname` varchar(20) NOT NULL,  
      `name` varchar(20) NOT NULL,  
      `sex` enum('Female', 'Male'),  
      `salary_w` int(11) DEFAULT '0',  
      `height` int(4) NOT NULL,
      `weight` INT(4) NOT NULL,
      `id_num` varchar(30),
      `hometown` varchar(20),
      `huji` varchar(20),
      `birthdata` date,
      `house` enum('BJ', 'WD', 'NONE'),
      `car` boolean default False, 
      `job` varchar(60) not null,
      `character` varchar(200),
      `intreast` varchar(200),
      `education` enum('doctor', 'master', 'underguraduate', 'college', 'highschool', 'below'),
      `school` varchar(100),
      `phone`  varchar(20),  
      `email`  varchar(30),  
      `createdate`  datetime null default CURRENT_TIMESTAMP,  
      `lastupdate`  timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (`id`)  
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;
