const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeList',
            message: 'Please select an option from the list of "Employees" that you would like to add to your team.  Note: If all employees are added, simply select "finish"',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish']    
        }
    ])
}

const managerQuestion = manData => {
    if (!manData.info) {
        manData.info = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mName',
            message: "Please enter your manager's name (required)",
            validate: mNameInput => {
               if (mNameInput) {
                   return true;
               } else {
                   console.log('Please enter a name')
                   return false;
               }
            }
        },
        {
            type: 'number',
            name: 'mId',
            message: "Please enter manager's ID number (required)",
            validate: mIdInput => {
                if (mIdInput === Number) {
                    return true;
                } else {
                    console.log('Please enter a number for ID number')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'mEmail',
            message: "Please enter manager's email address (required)",
            validate: mEmailInput => {
                if(mEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an Email address')
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'office',
            message: "Please enter manager's office number (required)",
            validate: officeInput => {
                if (officeInput === Number) {
                    return true;
                } else {
                    console.log('Please enter a number for office')
                    return false;
                }
            }
        }
    ])
}

const engineerQuestion = engData => {
    if (!engData.info) {
        engData.info = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'eName',
            message: "Please enter your engineer's name (required)",
            validate: eNameInput => {
               if (eNameInput) {
                   return true;
               } else {
                   console.log('Please enter a name')
                   return false;
               }
            }
        },
        {
            type: 'number',
            name: 'eId',
            message: "Please enter engineer's ID number (required)",
            validate: eIdInput => {
                if (eIdInput === Number) {
                    return true;
                } else {
                    console.log('Please enter a number for ID number')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'eEmail',
            message: "Please enter engineer's email address (required)",
            validate: eEmailInput => {
                if(eEmailInput) {
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
            message: "Please enter engineer's github username (required)",
            validate: eGithubInput => {
                if(eGithubInput) {
                    return true;
                } else {
                    console.log('Please enter a github username')
                    return false;
                }
            }
        }
    ])
}

const InternQuestion = intData => {
    if (!intData.info) {
        intData.info = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'iName',
            message: "Please enter your intern's name (required)",
            validate: iNameInput => {
               if (iNameInput) {
                   return true;
               } else {
                   console.log('Please enter a name')
                   return false;
               }
            }
        },
        {
            type: 'number',
            name: 'iId',
            message: "Please enter intern's ID number (required)",
            validate: iIdInput => {
                if (iIdInput === Number) {
                    return true;
                } else {
                    console.log('Please enter a number for ID number')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'iEmail',
            message: "Please enter intern's email address (required)",
            validate: iEmailInput => {
                if(iEmailInput) {
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
            message: "Please enter what school your intern attended",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school')
                    return false;
                }
            }
        }
    ])
}