const inquirer = require("inquirer")
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, office) {
        super(name, id, email)

        this.office = office
    }
    getOfficeNumber() {
        inquirer.prompt([
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
        }.then(({ office }) => {
            this.manager = new Manager(office)
        })
    ])};

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager