const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your porject title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'constributing',
        message: 'Please provide quidelines for other developers who want to contribute to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'list',
        name: 'license',
        message : 'Which license should your project have?',
        choices: [
            'MIT License', 
            'GNU AGPLv3', 
            'Apache License 2.0', 
            'Boost Software License 1.0'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'What is the link to your GitHub project repository?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
   
}

// function call to initialize program
init();


inquirer
    .prompt([
        
    ])
    .then((data) => {

   `${data.username.toLowerCase().split(' ').join('')}README.md`     

    });
    
const generateReadme = (project) =>  
`# ${project.title}
### ${generateLicenseBadge(project.license)}
## Description
#### ${project.description}
## Table of Contents
#### 1. [Installation](##Installation)
#### 2. [Usage](##Usage)
#### 3. [License](##License)
#### 4. [Contributing](##Constributing)
#### 5. [Tests](##Tests)
#### 6. [Questions](##Questions)
## Installation
#### ${project.installation}
## Usage
#### ${project.usage}
## License
#### ${project.license} license notice of which license the application is covered under
## Contributing
#### ${project.contributing}
## Tests
#### ${project.tests}
## Questions
#### [${project.username}](${project.githubLink})
### Contact me ${project.email} for more additional questions.`;

const generateLicenseBadge = (license) => {
   
    if (license === 'MIT License') {
        return `![MIT License](https://img.shields.io/static/v1?label=License&message=MIT&color=yellow)`;
    }
    else if (license === 'GNU AGPLv3') {
        return `![GNU AGPLv3 License](https://img.shields.io/static/v1?label=License&message=GNU+AGPLv3&color=yellow)`;
    }
    else if (license === 'Apache License 2.0') {
        return `![Apache License 2.0 License](https://img.shields.io/static/v1?label=License&message=Apache+License+2.0&color=yellow)`;
    }
    else if (license === 'Boost Software License 1.0') {
        return `![Boost Software License 1.0](https://img.shields.io/static/v1?label=License&message=Boost+Software+License+1.0&color=yellow)`;
    }
    else if (license === '' || null) {
        return `![Unlicense](https://img.shields.io/static/v1?label=License&message=Unlicense&color=yellow)`;
    };
};