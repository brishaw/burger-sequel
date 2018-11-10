-- DROP DATABASE IF EXISTS burgers_db;;
DROP DATABASE IF EXISTS burgers2_db;
-- Create the `burgers_db`. --
CREATE DATABASE burgers2_db;

-- Switch to or use the `burgers_db`.
USE burgers2_db;

-- Create a `burgers` table with these fields:

CREATE TABLE burgers
(
  -- id: an auto incrementing int that serves as the primary key.
	id INT NOT NULL AUTO_INCREMENT,
  -- burger_name: a string.
	burger_name VARCHAR(255) NOT NULL,
  -- devoured: a boolean.
	devoured BOOLEAN NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

