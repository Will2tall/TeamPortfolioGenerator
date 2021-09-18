const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const writeHtml = require('./src/writeFile.js')

let team = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your manager's name (required)",
            validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('Please enter a name')
                   return false;
               }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter manager's ID number (required)"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter manager's email address (required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter an Email address')
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter manager's office number (required)"
        }
    ]).then(function(a){
        team.push(new Manager(a.name, a.id, a.email, a.officeNumber))
    }).then(employeeQuestion)
}


const employeeQuestion = () => {
    inquirer.prompt({
            type: 'list',
            name: 'employeeList',
            message: 'Please select an option from the list of "Employees" that you would like to add to your team.  Note: If all employees are added, simply select "finish"',
            choices: ['Engineer', 'Intern', 'Manager', 'Finish']    
        }
    ).then(function(answer){
        if(answer.employeeList === 'Engineer'){
            engineerQuestion();
        }else if(answer.employeeList === 'Intern'){
            internQuestion();
        }else if (answer.employeeList === 'Manager'){
            promptUser();
        } else {
            console.log('team inside employee question', team);
            return writeHtml(team);
        }
    })
}

const engineerQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your engineer's name (required)",
            validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('Please enter a name')
                   return false;
               }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter engineer's ID number (required)",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's email address (required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter an Email address')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's github username",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter github username')
                    return false;
                }
            }
        }
    ])
    .then(function(answer) {
        team.push(new Engineer(answer.name, answer.id, answer.email, answer.github))
    }).then(employeeQuestion)
}

const internQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your intern's name (required)",
            validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('Please enter a name')
                   return false;
               }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter intern's ID number (required)"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's email address (required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter an Email address')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter a school')
                    return false;
                }
            }
        }
    ])
    .then(function(b) {
        team.push(new Intern(b.name, b.id, b.email, b.school))
    }).then(employeeQuestion)
}

promptUser()

module.exports = team;    