//ACTIVITY 01: Template Literals

//Task 01: (Use template literals to create a string that include variables for a person's name and age,
//and log the string to the console. )

// const name = "Alice"
// const age = 25

// const message = `Hello, my name is ${name} and I am ${age} years old.`
// console.log(message);


//Task 02: (Create a multi-line string using template literals and log it to the console. )

// const multiLineString = `
// This is a multi-line string. 
// You can write text on multiple lines
// without using concatenation or escape characters.
// Isn't the great?
// `
// console.log(multiLineString);






//ACTIVITY 02: Destructing

//Task 03: (Use array destructing to extract the first and second element from an array of numbers and log
//them to the console. )

// const numbers = [10, 20, 30, 40, 50]

// const [first, second] = numbers

// console.log(`First element: ${first}`);
// console.log(`Second element: ${second}`);


//Task 04: (Use object destructing to extract the title and author from a book object and log them
// to the console. )

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
// }

// const {title, author} = book
// console.log(`Title: ${title}`);
// console.log(`Author: ${author}`);







//ACTIVITY 03: Spread and Rest Operators

//Task 05: (Use the spread operator to create a new array that includes all elements of an existing 
//array plus additional elements, and log the new array  )

// const originalArray = [1, 2, 3]
// const newArray = [...originalArray, 4, 5, 6]
// console.log(newArray);

//Task 06: (Use the rest operator in a function to accept an arbitary number of arguments, sum them,
// and return the result. )

// function sum(...numbers){
//     return numbers.reduce((total, num) => total + num, 0)
// }

// const result = sum(1,2,3,4,5)
// console.log(result);








//ACTIVITY 04: Default Parameters

//Task 07: (Write a function that takes two parameters and return their product, with the second parameter
// having a default value of 1. Log the result of calling this function aith and without second 
//parameter. )

// function multiply(a, b = 1){
//     return a * b;
// }

// const resultWithSecondPara = multiply(5, 2)
// const resultWithoutSecondPara = multiply(5)

// console.log(`Result with the second parameter ${resultWithSecondPara}`);
// console.log(`Result without the second parameter ${resultWithoutSecondPara}`);







//ACTIVITY 05: Enhanced Object Literals

//Task 08: (Use enhanced object literals to create an object with methods and properties, and log
// the object to the console.  )

// const name = "John"
// const age = 30

// const person = {
//     name, 
//     age,
//     greet(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years old. `
//     }
// }

// console.log(person);
// console.log(person.greet());


//Task 09: (Create an object with computed property names based on variables and log the object to 
//the console. )

// const propName1 = "firstName"
// const propName2 = "lastName"

// const person = {
//     [propName1] : 'Alice',
//     [propName2]: 'Smith',
//     age: 25
// }

// console.log(person);