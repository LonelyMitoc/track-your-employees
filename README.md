# Employee Manager
[![MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
![javascript](https://img.shields.io/badge/javascript-green.svg)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F&logoColor=white)
![mysql2](https://img.shields.io/badge/mysql2-blue.svg)
![inquirer](https://img.shields.io/badge/inquirer-green.svg)

## Description
This is a program you can run on the terminal to track and manage a companies employee. The program keeps a database with tables that will link between each other.

We used express.js and other node.js nodes such as mysql2 and inquirer to make the program work.

The creation of the database was straight forward but to make each menu function as intended prove to be difficult so I had to go through each step-by-step and draw out the functions I wanted each menu options to work. For future implementation, I would like to put in the function to delete employees, roles, departments, update roles and departments, make it so you can view via manager or department.

## Table of Contents
- [Example](#example)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Example

[Demonstration](https://drive.google.com/file/d/1gfH9Wv3FlGTL-LnNScp3NPSNjkfnLN9i/view)

## Installation

:warning: First, you will need to have installed the latest stable version of **node.js**.

Then, you will need to download this repository and go through the **npm initialization** (include "y" in order to skip through the prompts).

(do this if the **package.json** & **package.-lock.json** is not in the repository.)

```
npm init y
```

Then install the necessary packages by:

```
npm install
```

Once the packages are installed and you see that the **package-lock.json** is in the folder, you can run the program by changing directory (cd) in the terminal to this program and run **node app.js**.

```
node app.js
```

You will also need to have your computer setup to accept localhost connections via [mysql](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) as well as have setup the root user's password.

After the computer is setup, you need to enter the root user's password in the app.js "password:" section.

Go run node app.js or npm start in the terminal to start managing your company employee information!

## Usage

As explained above, this is used to manage the employee information, departments and roles within the departments in a terminal based program.

## License
Licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing
Contribution inquiries can be sent through the Github or the email in the question section (although, I work full time with family obligations so replies may be slow). I am open to all suggestions.

## Tests
Tests were conducted by starting the program in the terminal for each function and breaking down any bugs that occurred.

## Credits
- [MDN Wed Docs](https://developer.mozilla.org/en-US/)
- [Stack Overflow](https://stackoverflow.com/)
- [Shields.io](https://shields.io/)
- [Github Gist: rxaviers](https://gist.github.com/rxaviers/7360908)

## Questions
Please contact me below for further questions:

:octocat: Github username: [LonelyMitoc](https://github.com/LonelyMitoc)

:e-mail: Email: jamesmatsu@gmail.com