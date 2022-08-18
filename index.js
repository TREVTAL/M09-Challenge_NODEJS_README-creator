// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
let badgeColor;
let licenseURL;
let licenseName;
// let installationArray;
// let usageArray;
// let creditArray;
// let testArray;

// TODO: Create an array of questions for user input
const questions = [
    "What is the Project's title?" ,
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

let arrayBreak = (arraySource) => {
  const brokenArray = arraySource.split(';');
  let concatedString = '';
  for (let i=0; i<brokenArray.length;i++) {
    concatedString += `* ${brokenArray[i]}\n`;
  }; return concatedString
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateReadMe = ({name, description, installation, usage, credit, test, license, github, email}) =>
`
# ${name}\n
![Badge](${badge})\n

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Test](#test)
- [License](#license)
- [Questions](#questions)


## Description 
${description}\n

## Installation
${name} has the following installation instructions:\n
${arrayBreak(installation)}\n

## Usage
${name} has the following usage instructions:\n
${arrayBreak(usage)}\n

## Contributors
${name}'s developer would like to give credit where credit is due. Thanks a lot to the following for their unmeasureable help\n
${arrayBreak(credit)}\n

## Test
If you would like to help us, please follow the steps to test this project:
${arrayBreak(test)}\n

## License 
This project is licensed under the [${licenseName}](${licenseURL}) license.\n

## Questions
Please feel free to contact me at my email ${email} or give me a visit at my github page [${github}](https://github.com/${github})\n

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
    // installationArray = response.installation.split(';');
    // usageArray = response.usage.split(';');
    // creditArray = response.credit.split(';');
    // testArray = response.credit.split(';');
    switch (licenseOption){
        case '1':
            badgeColor='brightgreen';  
            licenseURL ='https://choosealicense.com/licenses/gpl-3.0/';
            licenseName ='GNU GPLv2';
            break;
        case '2':
            badgeColor = 'green';
            licenseURL ='https://choosealicense.com/licenses/mit/';
            licenseName ='MIT';
            break;
        case '3':
            badgeColor = 'yellowgreen';
            licenseURL ='https://choosealicense.com/licenses/unlicense/';
            licenseName ='The Unlicense';
            break;
    };
    // badge = `https://img.shields.io/badge/License_${licenseName.replace(' ', '%20')}_${badgeColor}`; 
    badge = `https://img.shields.io/static/v1?label=License&message=${licenseName.replace(' ', '%20')}&color=${badgeColor}`;

    const readMeFinal = generateReadMe(response, badge, licenseURL, licenseName);
    fs.writeFile('README.md', readMeFinal, (err) =>
    err ? console.log(err) : console.log('Success, README created')  )
});



// Function call to initialize app
// init();
