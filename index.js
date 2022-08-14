// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
let badgeColor;
let licenseURL;

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
let badge;

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateReadMe = ({name, description, installation, usage, credit, test, license, github, email}) =>
`
#${name}\n

${description}\n

${installation}\n
${usage}\n
${credit}\n
${test}\n
${license}\n
${github}\n
${email}\n
${badge}\n
${licenseURL}\n

`;


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
        choices:    ["1  GNU GPLv2 \n \tPermisive license, let's do anything except distributing closed source versions" , 
                    "2  MIT License \n \tShort and to the point, lets people do almost anything they want with your project, only requires preservation of copyright and license" , 
                    "3  The Unlicense \n \tLicense with no conditions, only limitations to author"],
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
]).then((response) => {
    let licenseOption = response.license.charAt(0);
    console.log(response.license);
    switch (licenseOption){
        case '1':
            badgeColor='brightgreen';  
            licenseURL ='https://choosealicense.com/licenses/gpl-3.0/';
            break;
        case '2':
            badgeColor = 'green';
            licenseURL ='https://choosealicense.com/licenses/mit/';
            break;
        case '3':
            badgeColor = 'yellowgreen';
            licenseURL ='https://choosealicense.com/licenses/unlicense/';
            break;
    };
    badge = `https://img.shields.io/badge/License-${licenseOption}-${badgeColor}`;
    const readMeFinal = generateReadMe(response, badge, licenseURL);
    fs.writeFile('README.md', readMeFinal, (err) =>
    err ? console.log(err) : console.log('Success, README created')  )
});

// Function call to initialize app
// init();
