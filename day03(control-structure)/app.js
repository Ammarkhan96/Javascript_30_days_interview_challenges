//ACTIVITY 01: If-Else Statement

//Task 01: (Write a program to check if a number is positive, negative, or zero, and log the result
// to the console.)

// const num = -7
// if(num > 0){
//     console.log("The number is Positive");
// } else if(num < 0){
//     console.log("The number is Negative");
// }else {
//     console.log("The number is Zero");
// }

//Task 02: (Write a program to check if a person is eligible to vote (age>=18) and log the result
// to the console.)

// const age = 20

// if(age >= 18){
//     console.log("The person is eligible to the vote");
// } else {
//     console.log("The person is not eligible to the vote");
// }



//ACTIVITY 02: Nestes If-Else Statement

//Task 03: (Write a program to find the largest of three numbers using nested if-else statement.)

// const num1 = 25
// const num2 = 42
// const num3 = 18

// if(num1 >= num2){
//     if(num1 >= 3){
//         console.log("The largest num is " + num1);
//     } else {
//         console.log("The largest num is " + num3);
//     }
// } else {
//     if(num2 >= num3){
//         console.log("The largest num is " + num2 );
//     } else {
//         console.log("The largest num is " + num3);
//     }
// }



//ACTIVITY 03: Switch Case

//Task 04: (Write a program that uses a switch case to determine the day of the week based on a number 
// (1-7) and log the day name to the console. )

// const dayNumber = 2

// switch(dayNumber){
//     case 1:
//         console.log("Sunday");
//         break;

//     case 2:
//         console.log("Monday");
//         break;
        
//     case 3:
//         console.log("Tuesday");
//         break;

//     case 4:
//         console.log("Wednesday");
//         break;

//     case 5:
//         console.log("Thursday");
//         break;  
        
//     case 6:
//         console.log("Friday");
//         break;   

//     case 7:
//         console.log("Saturday");
//         break;

//     default:
//         console.log("Invalid day number. Please enter a number between 1 to 7.");
// }

//Task 05: (Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based 
// on a score and log the grade to the console).

// const score = 85;

// let grade;
// switch (true) {
//   case (score >= 90):
//     grade = 'A';
//     break;
//   case (score >= 80):
//     grade = 'B';
//     break;
//   case (score >= 70):
//     grade = 'C';
//     break;
//   case (score >= 60):
//     grade = 'D';
//     break;
//   default:
//     grade = 'F';
//     break;
// }
// console.log("The grade is " + grade);



//ACTIVITY 04: Conditional (Ternary) Operators

//Task 06: (Write a program that uses the ternary operator to check if a number is even or odd and log 
//the result to the console. )

// const number = 27
// const result = number % 2 === 0 ? "even" : "odd"
// console.log(`The number ${number} is ${result}.`);



//ACTIVITY 05: Combining Conditions 
//Task 07: (Write a program to check if a year is a leap year using multiple condition (divisible by 4, 
// but not 100 unless also divisible by 400) and log the result to the console.)

// const year = 2024

// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }