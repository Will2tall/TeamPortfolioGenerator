const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return inquirer.prompt({
            type: 'input',
            name: 'name',
            message: "Please enter your employee's name (required)",
            validate: NameInput => {
                if (NameInput) {
                    return true;
                } else {
                    console.log('Please enter a name')
                    return false;
                }
            }
        }.then(({ name }) => {
            this.employee = new Employee(name)
        })
    )};

    getId() {
        return inquirer.prompt({
            type: 'number',
            name: 'id',
            message: "Please enter employee's ID number (required)",
            validate: IdInput => {
                if (IdInput === Number) {
                    return true;
                } else {
                    console.log('Please enter a number for ID number')
                    return false;
                }
            }
        }.then(({ id }) => {
            this.employee = new Employee(id)
        })
    )};
    
    getEmail() {
        return inquirer.prompt({
            type: 'input',
            name: 'email',
            message: "Please enter employee's email address (required)",
            validate: mEmailInput => {
                if(mEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an Email address')
                    return false;
                }
            }
        }.then(({ email }) => {
            this.employee = new Employee(email)
        })
    )};

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee