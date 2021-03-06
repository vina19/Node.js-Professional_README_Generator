// npm require the MIT.js file
const generateMITLicense = require("../license/MIT");

// function to generate markdown for README
// returning README template with the data from the user input 
function generateMarkdown(project) {
  return `# ${project.title}
### ${generateLicenseBadge(project.license)}
## Description
#### ${project.description}
## Table of Contents
#### 1. [Installation](##Installation)
#### 2. [Usage](##Usage)
#### 3. [License](##License)
#### 4. [Contributing](##Contributing)
#### 5. [Tests](##Tests)
#### 6. [Questions](##Questions)
## Installation
#### ${project.installation}
## Usage
#### ${project.usage}
## License
#### This application is covered under ${generateLicenseNotice(project.license, project.name, project.year)}.
## Contributing
#### ${project.contributing}
## Tests
#### ${project.tests}
## Questions
#### GitHub profile: [${project.username}](${project.githubLink})
### Contact me ${project.email} for more additional questions.`
};

// Function that create the license badge based on the 
// if statement when the user choose one of the license options for the application
// then the license badge will be displayed on the top of the README file.
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

// Function to create a notice which license this application use that will go inside the License section
const generateLicenseNotice = (license, name, year) => {

    if (license === 'MIT License') {
        return `${generateMITLicense(name, year)}`;
    }
    else if (license === 'GNU AGPLv3') {
        return `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`;
    }
    else if (license === 'Apache License 2.0') {
        return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    }
    else if (license === 'Boost Software License 1.0') {
        return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
    }
    else if (license === '' || null) {
        return `Unlicense`;
    };
};

// Export this module
module.exports = generateMarkdown;