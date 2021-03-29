// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const gen = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How should your project be installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are your contribution instructions?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the testing instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: [
            'none',
            'Apache 2.0',
            'Creative Commons Attribution-ShareAlike 4.0 International',
            'GNU GPLv3',
            'MIT'
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, gen(data), (err) => {console.log(err)});
}

// TODO: Create a function to initialize app
function init() {
    inq
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', data);
        })
}

// Function call to initialize app
init();
