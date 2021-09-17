class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(a) {
        name = a.name
    }
    getId(a) {
        id = a.id
    }
    getEmail(a) {
        email = a.email
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee