// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please input your Project Name here.",
    },
    {
        type: "input",
        name: "description",
        message: "Please input description and purpose of your Project here."
    },
    {
        type: "input",
        name: "installation",
        message: "Please input installation instructions for your Project here.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please input how to use your Project here.",
    },
    {
        type: "input",
        name: "credits",
        message: "Please input any collaborators on your Project here.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license that suits your Project here.",
        choices: [
            "Apache 2.0",
            "GNU GPLv3.0",
            "MIT",
            "BSD 2",
            "BSD 3",
            "Boost Software 1.0",
            "CCZ v1.0",
            "EPL 2.0",
            "GNU AGPLv3",
            "GNU GPLv2.0",
            "GNU LGPLv2.1",
            "MPL 2.0",
            "None",
            ],
    },
    {
        type: "input",
        name: "creator",
        message: "Please input GitHub username here."
    },
    {
        type: "input",
        name: "name",
        message: "Please input your full name here."
    },
    {
        type: "input",
        name: "email",
        message: "Please input your email address here.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile("./README/README.md", data);
    });
}

// Function call to initialize app
init();
