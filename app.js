const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connection = require('./config/connection');

const welcomeMsg = `====== WELCOME TO THE EMPLOYEE MANAGER =======`;

connection.connect((err) => {
    if (err) throw err;
    welcome();
});

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

function viewEmployee() {
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

