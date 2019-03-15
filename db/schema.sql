DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
 id int AUTO_INCREMENT,
  burgers varchar(30) NOT NULL,
  PRIMARY KEY(id)
);