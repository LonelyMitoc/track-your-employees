const mysql = require('mysql2');
const inquirer = requre('inquirer');
const consoleTable = require('console.table');
const connection = require('./config/connection');

const welcomeMsg = `====== WELCOME TO THE EMPLOYEE MANAGER =======`;

const welcome = () => {
    return inquirer
        .prompt ([
            {
                type: 'input',
                message: welcomeMsg + `\nHere you have access to viewing, adding, editing employees, roles and departments information.\nHit ENTER to continue.\n`,
                name: 'welcome',
            },
        ])
        .then(startPrompt)
};

const startPrompt = async () => {
    return await inquirer
        .prompt([
            {
                
            }
        ])
}