CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id  INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN
);
SELECT * FROM burgers;

DELETE FROM burgers WHERE ID > 0;

TRUNCATE burgers;