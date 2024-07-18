//ACTIVITY 01: Array Creation and Access:

//Task 01: (Create an array of numbers from 1 to 5 and log the array to the console. )

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers);

//Task 02: (Access the first and last elements of the array and log them to the console. )

// const numbers = [1, 2, 3, 4, 5]

// const firstElement = numbers[0]
// const lastElement = numbers[numbers.length - 1]
// console.log("First element:", firstElement);
// console.log("Last element:", lastElement);





//ACTIVITY 02: Array Methods (Basic)

//Task 03: (Use the push method to add a new number to the end of the array and log the updated array. )

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers);

//Task 04: (Use the pop method to remove the last element from the array and log the updated array. )

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.pop()
// console.log(numbers);


//Task 05: (Use the shift method to remove the first element from the array and log the updated array.)

// const numbers = [1, 2, 3, 4, 5]
// numbers.shift()
// console.log(numbers);


//Task 06: (Use the unshift method to add a new number to the beginning of the array and log the updated
// array. )

// const numbers = [2, 3, 4, 5]
// numbers.unshift(1)
// console.log(numbers);





//ACTIVITY 03: Array Methods (Intermediate)

//Task 07: (Use the map method to create a new array where each number is doubled and log the new
// array. )

// const numbers = [1, 2, 3, 4, 5, 6]
// const doubleNumbers =  numbers.map(numbers => numbers*2)
// console.log(doubleNumbers);


//Task 08: (Use the filter method to create a new array with only even numbers and log the new array.)

// const numbers = [1, 2, 3, 4, 5]
// const evenNumber = numbers.filter(number => number % 2 === 0)
// console.log(evenNumber);


//Task 09: (Use the reduce method to calculate the sum of all numbers in the array and log the result.)

// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum);





//ACTIVITY 04: Array Iteration

//Task 10: (Use a for loop to iterate over the array and log each element to the console. )

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

//Task 11: (Use the forEach method to iterate over the array and log each element to the console. )

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(number => {
//     console.log(number);
// })






//ACTIVITY 05: Multi-dimensional Array

//Task 12: (Create a two-dimensional array (matrix) and log the entire array to the console. )

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix);


//Task 13: (Access and log a specific element from the two-dimensional array. )

// const matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]

//     const specificElement = matrix[1][2]
//     console.log(specificElement);