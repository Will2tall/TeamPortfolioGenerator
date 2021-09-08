const inquirer = require("inquirer")
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, github) {
        super(name, id, email) 

        this.github = github
    }
    getGitHub() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's github username (required)",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter a github username')
                    return false;
                }
            }
        }.then(({ github }) => {
            this.engineer = new Engineer(github)
        })
    ])};

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer