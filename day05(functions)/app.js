//ACTIVITY 01: Function Declaration

//Task 01: (Write a function to check if a number is even or odd and log the result to the console.)

// function checkEvenorOdd(number){
//     if(number % 2 === 0){
//         console.log(number + " is even.");
//     } else {
//         console.log(number + " is odd.");
//     }
// }

// checkEvenorOdd(10)
// checkEvenorOdd(7)


//Task 02: (Write a function to calculate the square of a number and return the result. )

// function calculateSquare(number){
//     return number * number
// }

// let result1 = calculateSquare(5)
// console.log(result1);

// let result2 = calculateSquare(9)
// console.log(result2);




//ACTIVITY 02: Function Expression

//Task 03: (Write a function expression to find the maximum of two numbers and log the result to the console. )

// const findMax = function(num1, num2){
//     if(num1 > num2){
//         console.log(num1 + " is the maximum number.");
//     }else if(num2 > num1) {
//         console.log(num2 + " is the maximum number.");
//     }else {
//         console.log("Both numbers are equal.");
//     }
// }
// findMax(10, 20)
// findMax(50, 25)
// findMax(30, 30)


//Task 04:(Write a function expression to concatenate two strings and return the result. )

// const concatenateString = function(str1, str2){
//     return str1 + str2
// }

// let result1 = concatenateString("Hello, ", "world!")
// console.log(result1);

// let result2 = concatenateString("Good ", "morning!")
// console.log(result2);





//ACTIVITY 03: Arrow Functions

//Task 05: (Write an arrow function to calculate the sum of two numbers and return the result. )

// const calculateSum = (num1, num2) => num1 + num2

// let result1 = calculateSum(5,10)
//     console.log(result1);

// let result2 = calculateSum(20, 30)
//     console.log(result2);    


//Task 06: (Write an arrow funtion to check if a string contains a specific character and return a 
// boolean value. )

// const containCharacter = (str, char) => str.includes(char)

// let result1 = containCharacter("hello", "e")
// console.log(result1);

// let result2 = containCharacter("world", "a")
// console.log(result2);




//ACTIVITY 04: Functions Parameters and Default Values

//Task 07: (Write a function that takes two parameters and returns their product. Provide a default
// value for the age. )

// function multiply(num1, age = 1){
//     return num1 * age
// }

// let result1 = multiply(10, 5)
// console.log(result1);

// let result2 = multiply(7)
// console.log(result2);


//Task 08: (Write a function that takes a person's name and age and returns a greeting message. Provide
// a default value for the age.)

// function greeting(name, age = 18){
//     return `Hello ${name}! You are ${age} years old.`
// } 

// let message1 = greeting("Alice", 25)
// console.log(message1);

// let message2 = greeting("Bob")
// console.log(message2);




//ACTIVITY 05: High-Order Functions

//Task 09: (Write a high order function that takes a function and a number, and calls the function
// that many times. )

// function repeatFunction(func, time){
//     for(let i = 0; i < time; i++){
//         func()
//     }
// }

// const sayHello = () => console.log("Hello!");
// repeatFunction(sayHello, 3)

//Task 10: (Write a high order function that takes two functions and a value, applies the first function
// to the value, and then applies the second function to the result. )

// function applyFunction(func1, func2, value){
//     let result1 = func1(value)
//     let result2 = func2(result1)
//     return result2
// }

// const double = (x) => x * 2
// const square =  (x) => x * x

// let result1 = applyFunction(double, square, 3)
// console.log(result1);

// let result2 = applyFunction(square,double, 5)
// console.log(result2);