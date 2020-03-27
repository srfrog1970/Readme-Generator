const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
// const questionsGroup1 = [
//   {
//     type: "input",
//     message: "What is your Github user name?",
//     name: "username"
//   }
// ];
const questions = [
  {
    type: "input",
    message: "What is your Github user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectname"
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "desc"
  },
  {
    type: "input",
    message: "What kind of licence should your project have?",
    name: "licence"
  },
  {
    type: "input",
    message: "what command should be run to install dependancies?",
    name: "installdep"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests"
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usingrepo"
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contibuterepo"
  }
];

// function init() {
//   inquirer
//     .prompt(questions)
//     .then(function(response) {
//       buildReadme(response);
//       //   console.log(projectname);
//       //   console.log(desc);
//       //   console.log(licence);
//       //   console.log(installdep);
//       //   console.log(tests)
//       //   console.log(usingrepo)
//       //   console.log(contibuterepo)
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// init();

function buildReadme(response) {
  //   var {
  //     projectname,
  //     desc,
  //     licence,
  //     installdep,
  //     tests,
  //     usingrepo,
  //     contibuterepo
  //   } = response;
  var projectname = "projectname";
  var desc = "description";
  var licence = "licence";
  var installdep = "Install Dependancies";
  var tests = "Tests";
  var usingrepo = "USing the Repo";
  var contibuterepo = "Contributing to the Repo";

  readmeFile = `# Project Name: \n ${projectname} \n--- \n\n`;
  readmeFile += `## Description: \n ${desc} \n---\n\n`;
  readmeFile += `## License: \n ${licence} \n---\n\n`;
  readmeFile += `## Installation Dependencies: \n ${installdep} \n---\n\n`;
  readmeFile += `## Tests: \n ${tests} \n---\n\n`;
  readmeFile += `## Using the Repo: \n ${usingrepo} \n---\n\n`;
  readmeFile += `## Contributions: \n ${contibuterepo} \n---\n\n`;

  writeFileAsync("README.md", readmeFile, "utf8");
}
buildReadme("test");

function checkUserName(username) {
  console.log(username);
}
