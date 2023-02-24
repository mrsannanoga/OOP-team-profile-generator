const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// array 
const team = [];

// manager questions
const managerQuestions = () =>
inquirer.prompt([
    {
    type: "input",
    name: "managerName",
    message: "Enter the manager's name, please.",
    validate: managerNameInput => {
        if (managerNameInput) {
            return true;
        } else {
            console.log("Menager's name is required!");
            return false;
        }
    }
  },

  {
    type: "input",
    name: "managerId",
    message: "Enter the manager's employee ID number, please.",
    validate: managerIdInput => {
        if (managerIdInput) {
            return true;
        } else {
            console.log("Menager's ID number is required!");
            return false;
        }
    }
  },

  {
    type: "input",
    name: "managerEmail",
    message: "Enter the manager's email address, please.",
    validate: managerEmailInput => {
        if (managerEmailInput) {
            return true;
        } else {
            console.log("Menager's email is required!");
            return false;
        }
    }
  },

  {
    type: "input",
    name: "managerOfficeNumber",
    message: "Enter the manager's office number, please.",
    validate: managerOfficeNumberInput => {
        if (managerOfficeNumberInput) {
            return true;
        } else {
            console.log("Menager's office number is required!");
            return false;
        }
    }
},
]).then(response => {
    //get inputs of manager data
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
    
    // run nextEmployeeChoice
    nextEmployeeChoice();
})
managerQuestions();

const nextEmployeeChoice = () => {
    inquirer.prompt([{
        // choice of 3
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)
}