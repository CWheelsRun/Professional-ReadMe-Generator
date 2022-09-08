// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  switch(license){
    case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'ISC': return '[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)'
    case 'GPL v3': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  switch(license){
    case 'MIT': return 'This project is covered under the [MIT License](https://opensource.org/licenses/MIT)';
    case 'ISC': return 'This project is covered under the [ISC License](https://opensource.org/licenses/ISC)';
    case 'GPL v3': return 'This project is covered under the [GNU General Public License v3.0](https://www.gnu.org/licenses/)';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description
  ${data.about}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Testing](#testing) 
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribute
  ${data.contribute}

  ## Testing
  ${data.testing}

  ## Questions
  Created by: [${data.githubUsername}](${data.githubLink})
  
  If you have any further questions please feel free to contact me at [${data.email}](${data.email})

`;
}

module.exports = generateMarkdown;