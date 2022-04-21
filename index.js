const inquirer = require('inquirer')
const fs = require('fs')

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
        name:'Installation',
        message:'Describe the process installation',
    },
    {
        type: 'input',
        name:'usage',
        message:'What is the usage of this project for?',
    },
    {
        type:'list',
        name:'License',
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
        name:'Contributors',
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
        type:'input'
        name:'email'
        message:'Please enter your email:'
    },
    

])