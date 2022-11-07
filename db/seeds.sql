USE employee_tracker_db;

INSERT INTO departments (id, department_name)
VALUES  (001, 'OPERATIONS'),
        (002, 'FINANCE'),
        (003, 'MARKETING'),
        (004, 'LEGAL'),
        (005, 'INFORMATION TECHNOLOGY'),
        (006, 'HUMAN RESOURCES');

INSERT INTO roles (id, title, salary, department_id)
VALUES  (1, 'Chief Executive Officer (CEO)', 200000, 001),
        (2, 'Chief Financial Officer (CFO)', 175000, 002),
        (3, 'Chief Operations Officer (COO)', 170000, 001),
        (4, 'Marketing Director', 170000, 003),
        (5, 'Legal Team Director', 190000, 004),
        (6, 'IT Director', 175000, 005),
        (7, 'Human Resources Director', 165000, 006),
        (8, 'Operations Manager', 100000, 001),
        (9, 'Finance Manager', 100000, 002),
        (10, 'Marketing Manager', 100000, 003),
        (11, 'Legal Team Manager', 100000, 004),
        (12, 'Product Manager', 100000, 005),
        (13, 'Programming Manager', 100000, 005),
        (14, 'IT Manager', 100000, 005),
        (15, 'Human Resources Manager', 100000, 006);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (001, 'John', 'Doe', 1, null),
        (002, 'Mike', 'Chan', 2, 1),
        (003, 'Ashley', 'Rodriguez', 3, 1),
        (004, 'Kevin', 'Tupik', 4, 1),
        (005, 'Kunal', 'Singh', 5, 1),
        (006, 'Malia', 'Brown', 6, 1),
        (007, 'Sarah', 'Lourd', 7, 1),
        (008, 'Tom', 'Allen', 8, 3),
        (009, 'Neil', 'Jamiseon', 9, 2),
        (010, 'Patrick', 'Fernandez', 10, 4),
        (011, 'John', 'Supra', 11, 5),
        (012, 'Daniel', 'Consate', 12, 6),
        (013, 'Patricia', 'Chamberlien', 13, 6),
        (014, 'Donald', 'Lopez', 14, 6),
        (015, 'Alex', 'Crock', 15, 7);
