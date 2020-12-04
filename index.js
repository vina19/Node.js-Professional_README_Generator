const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'contributing',
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
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'number',
        name: 'year',
        message: 'What year is this project created?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'What is the link to your GitHub profile?',
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
};

// function to initialize program
function init() {

    inquirer.prompt(questions).then((data) => {

        const generateData = generateMarkdown(data);

        writeToFile(`${data.username.toLowerCase().split(' ').join('')}README.md`, generateData);
    });
   
};

// function call to initialize program
init();