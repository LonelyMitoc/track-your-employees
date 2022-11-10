const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connection = require('./config/connection');

const welcomeMsg = `====== WELCOME TO THE EMPLOYEE MANAGER =======`;

connection.connect((err) => {
    if (err) throw err;
    welcome();
});

//Welcome message when the program is first initialized
const welcome = () => {
    return inquirer
        .prompt ([
            {
                type: 'input',
                message: welcomeMsg + `\nHere you have access to viewing, adding, editing employees, roles and departments information.\nHit ENTER to continue.\n`,
                name: 'welcome',
            },
        ])
        .then(mainMenu())
};

// The main menu that user's will come back to
async function mainMenu() {
    const response = await inquirer
        .prompt([
            {
                type: 'list',
                message: `What would you like to do?`,
                choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department',
                    'Quit',
                ]
            }
        ]);

    switch (response.choice) {
        case 'View All Employees':
            viewEmployee();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployee();
            break;
        case 'View All Roles':
            viewRoles();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'View All Departments':
            viewDepartment();
            break;
        case 'Add Department':
            addDepartment();
            break;
        default:
            process.exit();
    }
}

// View employee function
async function viewEmployee() {
    connection.query(
        `SELECT employees.first_name AS First_Name, employees.last_name AS Last_Name, roles.title AS Role, departments.department_name AS Department, roles.salary AS Salary, CONCAT(managers.first_name, " ", managers.last_name) AS Manager FROM employees
            LEFT JOIN roles ON employees.role_id = roles.id
            LEFT JOIN departments ON roles.department_id = departments.id
            LEFT JOIN employees AS managers ON employees.manager_id = managers.id`,
        function (err, res) {
            if (err) throw err;
            console.log('Employees:');
            console.table(res);
            mainMenu();
        }
    );
};

//Add employee function
async function addEmployee() {
    connection.query(
        `SELECT * FROM departments ORDER BY id`,
        async function(err, availDep) {
            if (err) throw err;
            const dep = availDep.map((data) => data.department_name);
            const resDep = await inquirer.prompt({
                type: 'list',
                message: 'Which department does the new employee work in?',
                choices: dep,
                name: 'department',
            });

            let depIndex = departments.indexOf(resDep.department);
            connection.query(
                `SELECT * FROM roles WHERE department_id = ${availDep[depIndex].id} ORDER BY id`,
                async function (err2, availRoles) {
                    if (err2) throw err2;
                    const roles = availRoles.map((data) => data.title);
                    const resRole = await inquirer.prompt({
                        type: 'list',
                        message: 'Select the role with in the department for the new employee:',
                        choices: roles,
                        name: 'role',
                    });
                    let roleIndex = null;
                    for (let i = 0; i < availRoles.length; i++) {
                        if (availRoles[i].title === resRole.role) {
                            roleIndex = i;
                            break;
                        }
                    }
                    connection.query(
                        `SELECT CONCAT(first_name, " ", last_name) as name, id FROM employees ORDER BY id;`,
                        async function (err3, availMng) {
                            if (err3) throw err3;
                            const managers = ['none', ...availMng.map((data) => data.name)];
                            const res = await inquirer.prompt([
                                {
                                    type: 'list',
                                    message: 'Who will the new employee report to?',
                                    choices: managers,
                                    name: 'manager',
                                },
                                {
                                    type: 'input',
                                    message: 'Enter the first name of the new employee:',
                                    name: 'first_name',
                                },
                                {
                                    type: 'input',
                                    message: 'Enter the last name of the new employee:',
                                    name: 'last_name',
                                },
                            ]);

                            let mngIndex = null;
                            for (let i; i < availMng.length; i++) {
                                if ((availMng[i].name = response.manager)) {
                                    mngIndex = i;
                                }
                            }

                            let insertText = `INSERT INTO employees(first_name, last_name, role_id`;
                            if (mngIndex === null) {
                                insertText += `)`;
                            } else {
                                insertText += `, manager_id)`;
                            }

                            let empValues = `VALUES ('${res.first_name}', '${res.last_name}', '${availRoles[roleIndex].id}'`;
                            if (mngIndex === null) {
                                empValues += `)`;
                            } else {
                                empValues += `, '${availMng[mngIndex].id}')`;
                            }
                            const insert = insertText + ` ` + empValues;
                            connection.query(insert, function (err4, response) {
                                if (err4) throw err4;
                                console.log(`${res.first_name} ${res.last_name} added successfully to EMPLOYEE.`);
                                viewEmployee();
                            });
                        }
                    );
                }
            );
        }
    );
}

