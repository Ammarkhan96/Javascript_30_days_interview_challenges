// Task 03: (Create a module that exports multiple functions using named exports. Import the use these
// function in another script.)

import { add, subtract, multiply, divide, square, squareRoot } from "./mathOperation.js";

const num1 = 10
const num2 = 15

//Addition
console.log(`Addition of ${num1} and ${num2}:`, add(num1, num2)); 

// Subtraction
console.log(`Subtraction of ${num1} and ${num2}:`, subtract(num1, num2)); 


// Multiplication
console.log(`Multiplication of ${num1} and ${num2}:`, multiply(num1, num2)); 

// Division
try {
  console.log(`Division of ${num1} by ${num2}:`, divide(num1, num2)); 
} catch (error) {
  console.error(error.message);
}

// Square
console.log(`Square of ${num1}:`, square(num1)); 


// Square Root
try {
  console.log(`Square Root of ${num1}:`, squareRoot(num1)); 

} catch (error) {
  console.error(error.message);
}


document.addEventListener('DOMContentLoaded', () => {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `
    <p>Addition of ${num1} and ${num2}: ${add(num1, num2)}</p>
    <p>Subtraction of ${num1} and ${num2}: ${subtract(num1, num2)}</p>
    <p>Multiplication of ${num1} and ${num2}: ${multiply(num1, num2)}</p>
    <p>Division of ${num1} by ${num2}: ${divide(num1, num2)}</p>
    <p>Square of ${num1}: ${square(num1)}</p>
    <p>Square Root of ${num1}: ${squareRoot(num1)}</p>
  `;
});