const fs = require('fs')
const inquirer = require('inquirer')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);


//const prompt = inquirer.createPromptModule()
 function promptCreator(){
return inquirer.prompt([
    {
        type: 'input',
        name: 'Name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'Location',
        message: 'Where are you from?'
    },
    {
        type: 'input',
        name: 'Graduation',
        message: 'Have you completed your graduation?'
    },
    {
        type: 'input',
        name: 'Graduation',
        message: 'What is your hobby?'
    },

    {
        type: 'input',
        name: 'LinkedIn',
        message: 'Provide your LinkedIn url:'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Provide your GitHub url:'

    }
])

}

function generateHTML(answers){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div> ${answers.Name}</div>
    
</body>
</html>
    
    `
} 
promptCreator()
.then(function(answers){
    const html = generateHTML(answers)
    return writeFileAsync('index.html', html)
})
.then(function(){
console.log('Successfully wrote to html file')
})
.catch(function(err)
{
    console.log(err)
})