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

INSERT INTO products (name, phone_number, email, unique_id) VALUES ('Duy Do', 3054446666, 'duydo@mac.com', 305);
INSERT INTO products (name, phone_number, email, unique_id) VALUES ('Craig', 3054446666, 'craigj@mac.com', 512);
