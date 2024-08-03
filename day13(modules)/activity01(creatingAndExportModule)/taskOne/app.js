//Task 01: (Create a modules that exports a function to add two numbers. 
//Import and use this module  in another script. )


import { addNumbers } from './mathModule.js';


const num1 = 5;
const num2 = 10;
const sum = addNumbers(num1, num2);

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);


document.addEventListener('DOMContentLoaded', () => {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `The sum of ${num1} and ${num2} is: ${sum}`;
});
