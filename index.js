const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeList',
            message: 'Please select an option from the list of "Employees" that you would like to add to your team.  Note: If all employees are added, simply select "finish"',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish']    
        }
    ])
    .then(({ employeeList }) => {
        if(employeeList === 'Manager') {
            new Manager;
        } else if(employeeList === 'Engineer') {
            new Engineer;
        } else if(employeeList === 'Intern') {
            new Intern;
        } else {
            console.log(Manager)
        }
    })
}

promptUser();