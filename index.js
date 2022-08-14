// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    "What is the Projetc's title?" ,
    "Can you briefly describe your project (please include why you did it and what problem you're solving)?" ,
    "Please fill out starting with step number and separating steps with semicolon (;)\n What are the installation instructions?" ,
    "Please fill out starting with step number and separating steps with semicolon (;)\n What are the usage instructions?" ,
    "Please fill out starting with step number and separating steps with semicolon (;)\n Who do you want to give credit to" ,
    "Please fill out starting with step number and separating steps with semicolon (;)\n What are the test instructions?" ,
    "Please select the type of license your working with",
    "Please enter your GitHub User",
    "Please enter you email address"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}
inquirer.prompt([
    {
        type: 'input',
        message: "What is the Project's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "\n\nCan you briefly describe your project (please include why you did it and what problem you're solving)?" ,
        name: 'description',
      },
      {
        type: 'input',
        message: "\n\nPlease fill out starting with step number and separating steps with semicolon (;)\n What are the installation instructions?" ,
        name: 'installation',
      },
      {
        type: 'input',
        message:     "\n\nPlease fill out starting with step number and separating steps with semicolon (;)\n What are the usage instructions?" ,
        name: 'usage',
      },
      {
        type: 'input',
        message:     "\n\nPlease fill out starting with step number and separating steps with semicolon (;)\n Who do you want to give credit to" ,
        name: 'credit',
      },
      {
        type: 'input',
        message:     "\n\nPlease fill out starting with step number and separating steps with semicolon (;)\n What are the test instructions?" ,
        name: 'test',
      },
      {
        type: 'list',
        message:     "\n\nPlease select the type of license your working with",
        choices:    ["GNU GPLv2 \n \tPermisive license, let's do anything except distributing closed source versions" , 
                    "MIT License \n \tShort and to the point, lets people do almost anything they want with your project, only requires preservation of copyright and license" , 
                    "The Unlicense \n \tLicense with no conditions, only limitations to author"],
        name: 'license',
      },
      {
        type: 'input',
        message:     "\n\nPlease enter your GitHub User",
        name: 'github',
      },
      {
        type: 'input',
        message:  "\n\nPlease enter you email address",
        name: 'email',
      },
])

// Function call to initialize app
// init();
