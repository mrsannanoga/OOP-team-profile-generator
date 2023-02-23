// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// import employee class
const Employee = require("./Employee");

// create an Employee subclass - Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }

//method that returns intern's school 
    getSchool() {
        return this.school;
    }

    getRole () {
        return "Intern"
    }
}

module.exports = Intern;