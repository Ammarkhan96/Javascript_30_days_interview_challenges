//ACTIVITY 01: For Loop

//Task 01: (Write a program to print numbers from 1 to 10 using a for loop.)

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

//Task 02: (Write a program to print the multiplication table of 5 and 8 using a for loop.)

// const number = 5

// for(let i = 1; i <= 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// const number = 8
// for(let i = 1; i <= 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`);
// }




//ACTIVITY 02: While Loop

//Task 03: (Write a program to calculate the sum of numbers from 1 to 10 using a while loop.)

// let sum = 0
// let i = 1

// while(i <= 10){
//     sum += 1
//     i++
// }
// console.log(`The sum from numbers 1 to 10 is ${sum}`);

//Task 04: (Write a program to print numbers from 10 to 1 using a while loop.)

// let i = 10
// while(i >= 1){
//     console.log(i);
//     i--
// }




//ACTIVITY 04: Do...While Loop

//Task 05: (Write a program to print numbers from 1 to 5 using a do...while loop.)

// let i = 1

// do{
//     console.log(i);
//     i++
// }while(i <= 5)

// let i = 1
// do{
//     console.log(i);
//     i++
// }while(i <= 10)


//Task 06: (Write a program to calculate the factorial of a number using a do...while loop.)

// function factorial(n){
//     let result = 1
//     let i = 1

//     do {
//         result *= i
//         i++
//     }while(i <= n)

//     return result
// }
// const number = 5
// console.log(`The factorial of ${number} is ${factorial(number)}`);




//ACTIVITY 04: Nested Loops

//Task 07: (Write a program to print a pattern using nested for loops.
// *
// **
// ***
// ****
// *****
//)

// for(let i = 1; i <= 5; i++){
//     let pattern = ''

// for(let j = 1; j <= i; j++){
//     pattern += '*'
// }    
//    console.log(pattern);
// }





//ACTIVITY 05: Loop Control Statements

//Task 08: (Write a program to print numbers from 1 to 10, but skip the number 5 using the continue
// statement.)

// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         continue;  //it will skip number 5
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 20; i++){
//     if(i === 9){
//         continue;
//     }
//     console.log(i);
// }


//Task 09: (Write a program to print number from 1 to 10, but stop the loop when the number is 7 and 14 
// using the break statement. )

// for(let i = 1; i <= 10; i++){
//     if(i === 7){
//         break
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 20; i++){
//     if(i === 14){
//         break
//     }
//     console.log(i);
// }