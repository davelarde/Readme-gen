const inquirer = require('inquirer') 
const fs = require('fs') 
let generateReadMe =({projectTitle, description,installation, usage, contributors, tests, license,questions, username, email})=>
`# ${projectTitle} ☄ 
## Description 📖 
${description}
# Table of contents 📓 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributors](#contributors)
* [License](#license)
* [Questions](#questions)

## Installation 💡 
${installation}
* [npm-init](https://docs.npmjs.com/cli/v6/commands/npm-init)

## Usage 🔑 
${usage}

## Tests 🧪 
${tests}

## Contributors 👩‍🦱 
${contributors}

## License 🔍 
${license}

## Questions ❓ 
Got a question?
${questions}

* [Github](https://github.com/davelarde)
${username}
## Email me! 📧 
Feel free to email me anytime for any questions to:
${email}`;
inquirer.prompt([
    {
        type:'input',
        name:'projectTitle',
        message:'What is the Project Title?',
    },
    {
        type:'input',
        name:'description',
        message:'Write a brief description of your project',
    },
    {
        type:'input',
        name:'installation',
        message:'Describe the process installation',
    },
    {
        type: 'input',
        name:'usage',
        message:'What is the usage of this project for?',
    },
    {
        type:'list',
        name:'license',
        message:'Choose the adecuate license for this project',
        choices:[
            'Apache',
            'GNU',
            'ISC',
            'Mozilla',
            'Open'
        ]
    },
    {
        type:'input',
        name:'contributors',
        message:'Who are the contributors for this project?',
    },
    {
        type:'input',
        name:'tests',
        message:'Isthere a test included?',
    },
    {
        type: 'input',
        name:'questions',
        message:'What do I do if I have a question?',
    },
    {
        type:'input',
        name:'username',
        message:'Please enter your Github Username',
    },
    {
        type:'input',
        name:'email',
        message:'Please enter your email:',
    },
    

])
.then ((answers) =>{
    const readMeContent= generateReadMe(answers);
    console.log(answers)
    fs.writeFile('genreadme.md',readMeContent,(err)=>
    err? console.log(err) : console.log('You made it, readme created!')
    
    );
});