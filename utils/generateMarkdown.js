function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU GPL v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU AGPL v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "BSD 2-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "No license":
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://choosealicense.com/licenses/mit/";
    case "GNU GPL v3.0":
      return "https://choosealicense.com/licenses/gpl-3.0";
    case "GNU AGPL v3.0":
      return "https://choosealicense.com/licenses/agpl-3.0/";
    case "BSD 2-Clause":
      return "https://choosealicense.com/licenses/bsd-2-clause";
    case "BSD 3-Clause":
      return "https://choosealicense.com/licenses/bsd-3-clause";
    case "No license":
      return "";
  }
}

function renderLicenseSection(license) {
  if (license !== "No license") {
    return `## License
    This project has been created under the ${answers.license} license.`;
  }
  return "";
};

const generateMarkdown = (answers) => {
  return ` # ${answers.projectTitle}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation Intructions
${answers.installationInstructions}

## Usage Information
${answers.usageInforamtion}

${renderLicenseSection}

## Contribution Guidelines
${answers.contributionGuidelines}

## Test Instructions
${answers.testInstructions}

## GitHub Username
${answers.username}

## Questions
Please email me with any questions at ${answers.emailAddress}`;
};

module.exports = generateMarkdown;
