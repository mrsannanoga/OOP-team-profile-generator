// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// import employee class
const Employee = require("./Employee");

// create an Employee subclass - Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

//method that returns manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;