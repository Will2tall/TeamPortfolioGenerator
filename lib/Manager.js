const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber
    }
    getOfficeNumber(a) {
       officeNumber = a.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager