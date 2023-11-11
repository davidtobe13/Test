-- Creating a database
CREATE DATABASE userAuth;

-- selecting/using/activating a database
USE userAuth;

-- create a table
CREATE TABLE signUp(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL
);

-- updating a table
INSERT INTO signUp(name, email, password)
VALUE("Obi", "obi@gmail.com", "obi1234"),
("Ada", "Ada@gmail.com", "ada1234"),
("David", "david@gmail.com", "david1234"),
 ("Loveth", "loveth@gmail.com", "loveth1234"),
("Tobe", "tobe@gmail.com", "tobe1234");

-- view the table
SELECT * FROM signUp;

-- updating record on a table
UPDATE signUp SET name = "Dave" WHERE id = 3;

-- delete a record from the table
DELETE FROM signUp WHERE id = 2;

-- filtering data in a table
SELECT * FROM signUp WHERE name = "Ada";

-- sorting data on table in ascending order
SELECT * FROM signUp ORDER by name ASC;

-- sorting data on table in descending order
SELECT * FROM signUp ORDER by name DESC;