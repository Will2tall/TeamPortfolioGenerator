const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeList',
            message: 'Please select an option from the list of "Employees" that you would like to add to your team.  Not if all employees are added, simply select "finish"',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish']
        }
    ])
}