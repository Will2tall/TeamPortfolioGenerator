const inquirer = require("inquirer")
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, school) {
        super(name, id, email)

        this.school = school
    }
    getSchool() {
        inquirer.prompt([
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
        }.then(({ school }) => {
            this.intern = new Intern(school)
        })
    ])};

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern