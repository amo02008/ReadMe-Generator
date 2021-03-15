//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//Questions for user to complete
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "GitHub Username:",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "What is your email address?",
    },

    {
      type: "input",
      name: "projectTitle",
      message: "What would you like your README title to be?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project",
    },
    {
      type: "input",
      name: "installationInstructions",
      message: "What are the dependencies needed to run your project",
    },
    {
      type: "input",
      name: "usageInforamtion",
      message: "Provide Instructions and examples for use",
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "Guidelines for how others should contribute to your project",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Tests and examples of how to run them",
    },
    {
      type: "list",
      name: "license",
      message: "License Type",
      choices: [
        "MIT",
        "GNU GPL v3.0",
        "GNU AGPL v3.0",
        "BSD 2-Clause",
        "BSD 3-Clause",
        "No license",
      ],
    },
  ]);
};

const init = async () => {
  try {
    const answers = await promptUser();
    const markdown = generateMarkdown(answers);
    await writeFileAsync("Demo_README.MD", markdown);

    console.log("Successfully wrote README");
  } catch (error) {
    console.log(error);
  }
};

init();
