// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge;
  switch (license) {
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Creative Commons Attribution-ShareAlike 4.0 International':
      badge = '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)'
      break;
    case 'GNU GPLv3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'none':
      badge = '';
      break;
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link;
  switch (license) {
    case 'Apache 2.0':
      link = 'https://choosealicense.com/licenses/apache-2.0/'
      break;
    case 'Creative Commons Attribution-ShareAlike 4.0 International':
      link = 'https://creativecommons.org/licenses/by-sa/4.0/'
      break;
    case 'GNU GPLv3':
      link = 'https://choosealicense.com/licenses/gpl-3.0/'
      break;
    case 'MIT':
      link = 'https://choosealicense.com/licenses/mit/'
      break;
    case 'none':
      link = '';
      break;
    }
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)} 
  ${license} 
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.testing}

## Contact
* Github: ${data.github}
* Email: ${data.email}

## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
