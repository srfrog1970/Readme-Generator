const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

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
        projectname,
        desc,
        licence,
        installdep,
        tests,
        usingrepo,
        contibuterepo
      } = response;
      console.log(projectname);
      console.log(desc);
      console.log(licence);
      console.log(installdep);
      //   console.log(tests)
      //   console.log(usingrepo)
      //   console.log(contibuterepo)
    })
    .catch(error => {
      console.log(error);
    });
}

init();

function checkUserName(username) {
  console.log(username);
}

function writeToFile(fileName, data) {
  fs.writeFile("README,md", readmeData, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
