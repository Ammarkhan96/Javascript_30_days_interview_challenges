//ACTIVITY 01: Understanding Closures

//Task 01: (Write a function that returns function, where the inner function accesses a variable from the outer 
//function's scope. Call the inner function and log the result.)

// function outerFunction(){
//     const outerVariable = "Hello from the outer function."

//     return function innerFunction(){
//         return outerVariable + " And greetings from the inner function."
//     }
// }

// const myInnerFunction = outerFunction()

// console.log(myInnerFunction());


//Task 02: (Create a closure that maintains a private counter. Implement functions to increment and get 
// the current value of the counter.)

// function createCounter(){
//     let counter = 0

//     function increment(){
//         counter += 1
//     }

//     function getValue(){
//         return counter
//     }

//     return{increment, getValue,}

// }

// const myCounter = createCounter()

// myCounter.increment()
// myCounter.increment()

// console.log(myCounter.getValue());

// myCounter.increment()

// console.log(myCounter.getValue());








//ACTIVITY 02: Practical Closure

//Task 03: (Write a function that generates unique. Use a closure to keep track of the last generated
// ID and increment it with each call.)

// function createUniqueIDGenerator(){
//     let lastId = 0

//     return function(){
//         return ++lastId
//     }
// }

// const generateUniqueID = createUniqueIDGenerator()

// console.log(generateUniqueID());
// console.log(generateUniqueID());
// console.log(generateUniqueID());

// const anotherUniqueIdGenerator = createUniqueIDGenerator()
// console.log(anotherUniqueIdGenerator());
// console.log(anotherUniqueIdGenerator());

//Task 04: (Create a closure that captures a user's name and return a function that greets the user 
//by name.)

// function createGreeting(name){
//      return function(){
//         return `Hello! ${name}`
//      }
// }

// const greetAlice = createGreeting('Alice')
// console.log(greetAlice());

// const greetBob = createGreeting('Bob')
// console.log(greetBob());








//ACTIVITY 03: Closures in Loops

//Task 05: (Write a loops that creates an array of functions. Each function should log its index when 
//called. Use a closure to ensure each function logs the correct index.)


// function createFunctionArray(size){
//     const functionArray = []

//     for(let i = 0; i < size; i++){
//         functionArray.push((function(index){
//             return function(){
//                 console.log(index);
//             }
//         })(i))
//     }

//     return functionArray
// }

// const functions = createFunctionArray(5)
// functions[0]()
// functions[1]()
// functions[2]()
// functions[3]()
// functions[4]()



//ACTIVITY 04: Module Pattern

//Task 06: (Use closures to create a simple module for managing a collection of items. Implements methods
//to add, remove, and list items.)


// function createItemManager(){
//     let items = []

//     return {
//         addItem(item){
//             items.push(item)
//             console.log(`Added item: ${item}`);
//         },
//         removeItem(item){
//             const index = items.indexOf(item)
//             if(index !== -1){
//                 items.splice(index, 1)
//                 console.log(`Removed item: ${item}`);
//             } else {
//                 console.log(`Item not found: ${item}`);
//             }
//         },
//         listItems(){
//             if(items.length > 0){
//                 console.log('Items in the collection:');
//                 items.forEach((item, index) => {
//                     console.log(`${index + 1}: ${item}`);
//                 })
//             } else{
//                 console.log('No items in the collection.');
//             }
//         }
//     }
// }

// const myitemManager = createItemManager()

// myitemManager.addItem('Apple')
// myitemManager.addItem('Mango')
// myitemManager.listItems()

// myitemManager.removeItem('Manhgo')
// myitemManager.listItems()

// myitemManager.removeItem('Grapes')
// myitemManager.listItems()




//ACTIVITY 05: Memoization

//Task 07: (Write a function that memoize the result of another function. Use a closure to store the
//results of previous computation.)


// function memoize(fn) {
//     const cache = {};

//     return function(...args) {
//         const key = JSON.stringify(args);

//         if (cache[key] !== undefined) {
//             console.log(`Returning cached result for arguments: ${args}`);
//             return cache[key];
//         }

        
//         const result = fn(...args);
//         cache[key] = result;

//         console.log(`Computed result for arguments: ${args}`);
//         return result;
//     };
// }


// function expensiveComputation(x, y) {
    
//     return x + y;
// }


// const memoizedExpensiveComputation = memoize(expensiveComputation);

// console.log(memoizedExpensiveComputation(2, 3)); 
// console.log(memoizedExpensiveComputation(2, 3));
// console.log(memoizedExpensiveComputation(4, 5)); 
// console.log(memoizedExpensiveComputation(4, 5));



//Task 08: (Create a memoized version of a function that calculates the factorial of a number.)


// function memoizeFactorial(){
//     const cache = {}

//     function factorial(n){
//         if(n === 0 || n === 1){
//             return 1
//         }
//         if(cache[n] !== undefined){
//             console.log(`Returning cached result for factorial(${n})`);
//             return cache[n]
//         }
//         console.log(`Computing result for factorial(${n})`);
//         const result = n * factorial(n - 1)
//         cache[n] = result
//         return result
//     }
//     return factorial
// }

// const factorial = memoizeFactorial()

// console.log(factorial(5));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(6));