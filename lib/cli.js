const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./svgGenerator');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: input => input.length <= 3 || 'Please enter up to three characters only.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex code):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex code):'
  }
];

class CLI {
  run() {
    inquirer
      .prompt(questions)
      .then(answers => {
        const svgContent = createSVG(answers);
        writeFile(join(__dirname, '..', 'dist', 'logo.svg'), svgContent)
        .then(() => console.log('Generated logo.svg'))
        .catch(error => console.error('Error generating logo.svg:', error));
      });  
  }
}

module.exports = CLI;