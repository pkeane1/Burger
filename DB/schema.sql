Drop Database if exists burgers_db;

CREATE DATABASE burgers_db;

USE burgers_DB;

CREATE TABLE burgers 
(id int(10) auto_increment,
burger_name varchar(50),
devoured boolean,
primary key(id));