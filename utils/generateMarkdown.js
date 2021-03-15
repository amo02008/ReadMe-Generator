const badgeLicense = renderLicenseBadge(answers.license);
const linkLicense = renderLicenseLink(answers.license);
const sectionLicense = renderLicenseSection(answers.license);

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen)](https://img.shields.io/badge/license-MIT-brightgreen)";
    case "GNU GPL v3.0":
      return "[![GitHub license](https://img.shields.io/badge/license-GNU_GPL_v3.0-brightgreen)](https://img.shields.io/badge/license-GNU_GPL_v3.0-brightgreen)";
    case "GNU AGPL v3.0":
      return "[![GitHub license](https://img.shields.io/badge/license-GNU_AGPL_v3.0-brightgreen)](https://img.shields.io/badge/license-GNU_AGPL_v3.0-brightgreen)";
    case "BSD 2-Clause":
      return "[![GitHub license](https://img.shields.io/badge/license-BSD_2_Clause-brightgreen)](https://img.shields.io/badge/license-BSD_2_Clause-brightgreen)";
    case "BSD 3-Clause":
      return "[![GitHub license](https://img.shields.io/badge/license-BSD_3_Clause-brightgreen)](https://img.shields.io/badge/license-BSD_3_Clause-brightgreen)";
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
  if (license === "No license") {
    return "";
  } else {
    return `
    ## License
      
    This project has been created under the ${answers.license} license.`;
  }
}

const generateMarkdown = (answers) => {
  return ` ${answers.projectTitle}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation Instructions
${answers.installationInstructions}

## Usage Inforamtion
${answers.usageInforamtion}
${renderLicenseSection}

##Contribution Guidelines
${answers.contributionGuidelines}

## Test Instructions
${answers.testInstructions}

## GitHub Username
${answers.username}

##Questions
Please email me with any questions at ${answers.emailAddress}`;
};

module.exports = generateMarkdown;
