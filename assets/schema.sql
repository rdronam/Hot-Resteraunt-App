DROP DATABASE IF EXISTS HotRestaurant_DB;
CREATE DATABASE HotRestaurant_DB;

USE HotRestaurant_DB;


CREATE TABLE reservations (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    phone_number INT (11) NOT NULL,
    email VARCHAR (50) NOT NULL,
    unique_id INT(11) NOT NULL
    );