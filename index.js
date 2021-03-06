// npm require inquirer, file system, and the generateMarkdown.js file.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
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

    // using file system package to write a README file.
    // throw an error if a problem occured when creating the file and 
    // throw Success message if there is no problem when creating the file.
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
};

// function to initialize program
function init() {

    // using inquirer.prompt and set the prompt to the questions to the user array
    // and then if all the questions prompt displayed and answered then call the 
    // generateMarkdown function which returning the README file templated and 
    // set that function as data parameter when creating the README file.
    inquirer.prompt(questions).then((data) => {

        const generateData = generateMarkdown(data);

        // using writeToFile method to create the README file.
        // writeToFile(file, data).
        writeToFile(`${data.username.toLowerCase().split(' ').join('')}README.md`, generateData);
    });
   
};

// function call to initialize program
init();