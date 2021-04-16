const inquirer= require('inquirer');
// const fs= require('fs');
// const generatePage= require('./src/page-template')

// const pageHTML= generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
//     console.log("Portfolio complete! Checkout index.html to see the output!")
// });

const promptUser= () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your Github Username (Required)',
                validate: nameGithub => {
                    if (nameGithub) {
                        return true;
                    }
                    else {
                        console.log("Please enter your Github name")
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAbout',
                message: 'Would you like to enter some information about yourself for an "About" section?',
                default: true
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:',
                when: ({ confirmAbout}) => {
                    if (confirmAbout) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        ]);
        
};  

const promptProject = portfolioData => {
    console.log(` ====== Add a New Project ======`);

    if (!portfolioData.projects) {
        portfolioData.projects= [];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameProject => {
                if (nameProject) {
                    return true;
                }
                else {
                    console.log("Please enter your projects name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionProject => {
                if (descriptionProject) {
                    return true;
                }
                else {
                    console.log("Please enter a project description")
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'language',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)',
            validate: linkGithub => {
                if (linkGithub) {
                    return true;
                }
                else {
                    console.log("Please enter Github link");
                    return false;
                }
            }    
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProjects) {
            return promptProject(portfolioData);
        } 
        else {
            return portfolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => { 
        console.log(portfolioData);
    });

// ar inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

