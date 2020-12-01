const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
            name: 'email',
            message: 'What is your email address?',
        }
    ])
    .then((data) => {

        fs.writeFile(`${data.username.toLowerCase().split(' ').join('')}README.md`, generateReadme(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    });
    
const generateReadme = (project) =>  
`# ${project.title}
### ${project.license} badge
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
#### ${project.username} and the link to its github page
### Contact me ${project.email} for more additional questions.`;