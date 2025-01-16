CREATE TABLE tasks (
   id INT PRIMARY KEY,
   description varchar(255),
   date varchar(10),
   completed BOOLEAN
);

INSERT INTO tasks (id, description, date, completed) VALUES (1, 'Take a dog for a walk', '2025-01-03', true);
INSERT INTO tasks (id, description, date, completed) VALUES (2, 'Take out the trash', '2025-01-04', false);
INSERT INTO tasks (id, description, date, completed) VALUES (3, 'Do all the dishes', '2025-01-16', false);
INSERT INTO tasks (id, description, date, completed) VALUES (4, 'Do the homework', '2025-01-11', true);