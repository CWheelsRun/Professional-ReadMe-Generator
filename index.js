// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/generateFile.js');

// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Please enter a description about your project:',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please enter a description!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions for the user:',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter instructions for installation!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain the usage of this project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter a usage explanation!')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'ISC', 'GPL v3']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please explain how to contribute to this project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please explain how to contribute!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please enter testing instructions for the user:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions for testing!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitLink',
            message: 'Please enter your GitHub Profile Link:',
            validate: gitLinkInput => {
                if (gitLinkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email adress for people to contact you:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email adress!');
                    return false;
                }
            }
        }
    ])
    .then(data => {
        return generateMarkdown(data);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    })
};

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
