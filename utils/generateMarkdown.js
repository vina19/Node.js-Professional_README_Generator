// function to generate markdown for README
function generateMarkdown(project) {
  return `# ${project.title}
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
        #### GitHub profile: [${project.username}](${project.githubLink})
        ### Contact me ${project.email} for more additional questions.`};

module.exports = generateMarkdown;