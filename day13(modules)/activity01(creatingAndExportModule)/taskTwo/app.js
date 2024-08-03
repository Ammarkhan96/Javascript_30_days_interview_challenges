//Task 02: (Create a module that exports an object representing a person with properties and methods.
// Import and use this module in another script. )

import { person } from "./personModule.js";

console.log(person.greet());

console.log(person.displayInfo());

console.log(person.celebrateBirthday());

console.log(person.displayInfo());

document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.getElementById('output')
    outputElement.innerHTML = `
    <p>${person.greet()}</p>
    <p>${person.displayInfo()}</p>
    <p>${person.celebrateBirthday()}</p>
    <p>${person.displayInfo()}</p>
    `
})