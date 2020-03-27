const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const appendFileAsync = util.promisify(fs.appendFile);
const questionsGroup2 = [
  {
    type: "input",
    message: "What is your Github user name?",
    name: "username"
  }
];
const questionsGroup2 = [
  {
    type: "input",
    message: "What is your Github user name?",
    name: "username"
  },
  {
    type: "password",
    message: "What is your project's name?",
    name: "password"
  },
  {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm"
  }
];

function promptQuestions(questionsGroup, githubCheckFlag) {
  inquirer.prompt(questions).then(function(questionsRespose) {
    console.log(username);
  });
}

function init() {
  var userName = promptQuestions(questionsGroup1);
  var foundUserName = findUserName();

  promptQuestions(questionsGroup2);
}

init();

function writeToFile(fileName, data) {
  fs.writeFile("README,md", readmeData, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
