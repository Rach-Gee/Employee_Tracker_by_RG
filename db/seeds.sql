INSERT INTO department (id, name)
VALUES (001, "Human Resources"),
       (002, "Business Development"),
       (003, "Information Technology");

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "Managing Director", 150000, 001),
       (002, "Executive Director - Sales", 100000, 002),
       (003, "Executive Director - IT",100000, 003);

INSERT INTO employee (id, first_name, last_name, manager_id, roles_id)
VALUES (001, "Kate", "Doe", NULL, 001),
       (002, "John", "Smith", 002, 002),
       (003, "Fletcher", "Winter", 002, 003);