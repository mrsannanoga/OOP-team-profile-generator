const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { string } = require("yargs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// array 
const myTeam = [];

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
        //push data into myTeam array
        myTeam.push(manager)
        // run nextEmployeeChoice
        nextEmployeeChoice();
    })
managerQuestions();

//function to choose the type of the next employee to add
const nextEmployeeChoice = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "Choose, which type of employee you would you like to add next, please.",
        choices: ["Engineer", "Intern", "Team is ready, no need to add any more"]
    }]).then(response => {
        switch(response.employeeType) {
            case "Engineer":
              engineerQuestions();
              break;
            case "Intern":
              internQuestions();
              break;
    
            default:
              generateTeamPage();
          }
    })
}

// function to engineer questions
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the engineer's name, please.",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Engineer's name is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "engineerId",
            message: "Enter the engineer's employee ID number, please.",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Engineer's ID number is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the engineer's email address, please.",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Engineer's email is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the engineer's GitHub username, please.",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Engineer's GitHub is required!");
                    return false;
                }
            }
        }]).then(response => {
            //get inputs of engineer data
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            //push data into myTeam array
            myTeam.push(engineer)
            // run nextEmployeeChoice
            nextEmployeeChoice();
        })
}

const internQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the intern's name, please.",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Intern's name is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "internId",
            message: "Enter the intern's employee ID number, please.",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Intern's ID number is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's email address, please.",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Intern's email is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "internSchool",
            message: "Enter the school which the intern attend to, please.",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Intern's school is required to add!");
                    return false;
                }
            }
        }]).then(response => {
            //get inputs of intern data
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            //push data into myTeam array
            myTeam.push(intern)
            // run nextEmployeeChoice
            nextEmployeeChoice();
        })
}

const generateTeamPage = () => {
    
    const teamHtmlFile = render(myTeam);

    fs.writeFile(outputPath, teamHtmlFile, err =>
        err ? console.error(err) : console.log('Well done, your team is ready to view in HTML file!'))
}