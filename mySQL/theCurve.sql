CREATE DATABASE TheCurve;

USE TheCurve;

CREATE TABLE TheCurveStudents(
id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
department_id INT 
);

INSERT INTO TheCurveStudents (id, name, email, department_id)
VALUE(1, "David", "david@gmail.com", 2),
(2, "Vivian", "vivian@gmail.com", 2),
(3, "Daniel", "daniel@gmail.com", 1),
(4, "Emma", "emma@gmail.com", 1),
(5, "Loveth", "loveth@gmail.com", 2);


CREATE TABLE Department(
id INT PRIMARY KEY,
department_name VARCHAR(50) NOT NULL
);

INSERT INTO Department (id, department_name)
VALUE(1, "frontend"),
(2, "backend");

SELECT TheCurveStudents.id, TheCurveStudents.name, Department.department_name FROM TheCurveStudents
INNER JOIN Department ON TheCurveStudents.department_id = Department.id;


