const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }
    getSchool(a) {
        school = a.school
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern