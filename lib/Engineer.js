// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// import employee class
const Employee = require("./Employee");

// create an Employee subclass - Engineer
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
//method that returns engineer github 
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;