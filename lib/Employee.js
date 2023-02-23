// TODO: Write code to define and export the Employee class

//create an employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

//method to return name of employee
    getName() {
        return this.name;
    }

//method to return id of employee
    getId() {
        return this.id;
    }

//method to return email of employee
    getEmail() {
        return this.email;
    } 

//method to return role of employee
    getRole() {
        return "Employee";
    }   
}

module.exports = Employee;