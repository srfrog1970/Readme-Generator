const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

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

function init() {
  inquirer
    .prompt(questions)
    .then(function(response) {
      var {
        username,
        projectname,
        desc,
        licence,
        installdep,
        tests,
        usingrepo,
        contibuterepo
      } = response;

      readmeFile = `# Project Name: \n **${projectname}** \n\n`;
      readmeFile += `## Description: \n ${desc} \n\n`;
      readmeFile += `## License: \n ${licence} \n\n`;
      readmeFile += `## Installation Dependencies: \n ${installdep} \n\n`;
      readmeFile += `## Tests: \n ${tests} \n\n`;
      readmeFile += `## Using the Repo: \n ${usingrepo} \n\n`;
      readmeFile += `## Contributions: \n ${contibuterepo} \n\n`;

      //   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
      //   console.log(queryUrl);
      //   axios.get(queryUrl).then(function(res) {
      //     const repoNames = res.data.map(function(repo) {
      //       readmeFile += `## Authors: \n ${repo} \n\n`;
      //       writeFileAsync("README.md", readmeFile, "utf8");
      //     });
      //   });

      writeFileAsync("README.md", readmeFile, "utf8");
    })
    .catch(error => {
      console.log(error);
    });
}

init();

function checkUserName(username) {
  const queryUrl = `https://api.github.com/users/${username}/emails?per_page=100`;
  console.log(queryUrl);
  axios.get(queryUrl).then(function(res) {
    const repoNames = res.data.map(function(repo) {
      console.log(repo.name);
      return repo.name;
    });
  });
}
