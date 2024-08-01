//ACTIVITY 01: Basic Error Handling with Try-Catch

//Task 01: (Write a function that intentionally throws an error and use a try-catch block to handle the 
//error and log an appropriate message to the console.)

// function errorCause(){
//     throw new Error("Something went wrong!")
// }
// try{
//     errorCause()
// }catch(error){
//     console.error("An error occured: " + error.message)
// }


//Task 02: (Create a function that divides two numbers and throws an error if the denominator is zero.
//Use a try-catch block to handle this error. )

// function divideNumbers(numerator, denominator){
//     if(denominator === 0){
//         throw new Error("Division by zero is not allowed!")
//     }
//     return numerator / denominator
// }
// try{
//     const result = divideNumbers(10, 0)
//     console.log("Result: ", result);
// }catch(error){
//     console.error("An error occured: " + error.message)
// } finally{
//     console.log("Division operation completed.");
// }







//ACTIVITY 02: Finally Block

//Task 03: (Write a script that includes a try-catch block. Log messages in the try, catch, and finally
//block to observe the execution flow.)

// function stimulateOperation(){
//     console.log("Operation started.");

//     const random = Math.random()
//     console.log("Generated random number:", random);

//     if(random > 0.5){
//         throw new Error("Randomly triggered error!")
//     }
//     console.log("Operation completed successfully!");
//     return "Success!"
// }
// try{
//     console.log("Entering the try block...");

//     const result = stimulateOperation()
//     console.log("Result:", result);

//     console.log("Eixting the try block...");
// }catch(error){
//     console.error("Entering the catch block...")
//     console.error("An error occured:", error.message)
//     console.error("Exiting the catch block...")
// }finally{
//     console.log("Entering the finally block...");
//     console.log("This will execute regardless of error occurence");
//     console.log("Exiting the finally block...");
// }
// console.log("Script execution completed.");






//ACTIVITY 03: Custom Error Objects

//Task 04: (Create a custom error class that extends the built-in Error class. Throw an instance of this
//custom error in a function and handle it using a try-catch block. )

// class CustomError extends Error {
//     constructor(message, errorCode) {
//       super(message);  
//       this.name = 'CustomError';  
//       this.errorCode = errorCode;  
//     }
//   }
//   function riskyOperation() {
//     const shouldFail = Math.random() > 0.5; 
//     console.log("Should fail:", shouldFail);
    
//     if (shouldFail) {
//       throw new CustomError("A custom error occurred!", 404);
//     }
    
//     return "Operation completed successfully!";
//   }
//   try {
//     console.log("Attempting risky operation...");
//     const result = riskyOperation();
//     console.log("Result:", result);
//   } catch (error) {
//     if (error instanceof CustomError) {
//       console.error("Caught a CustomError!");
//       console.error("Error Message:", error.message);
//       console.error("Error Code:", error.errorCode);
//     } else {
//       console.error("An unexpected error occurred:", error.message);
//     }
//   } finally {
//     console.log("Execution of try-catch-finally completed.");
//   }


//Task 05: (Write a function that validates user input (e.g., checking if a string is not empty)and
//throws a custom error if the validation fails. Handle the custom error using a try-catch block.)

// class validationError extends Error{
//     constructor(message, fieldName){
//         super(message)
//         this.name = 'ValidationError'
//         this.fieldName = fieldName
//     }
// }
// function validateInput(input, fieldName){
//     if(input.trim() === ''){
//         throw new validationError(`The ${fieldName} cannot be empty.`, fieldName)
//     }
//     console.log(`${fieldName} is valid ${input}`);
//     return true;
// }
// function testValidation(input, fieldName){
//     try{
//         console.log(`Validating ${fieldName}...`);
//         validateInput(input, fieldName)
//         console.log(`${fieldName} validation passed.`);
//     }catch(error){
//         if(error instanceof validationError){
//             console.error(`Validation error on ${error.fieldName}: ${error.message}`)
//         }else{
//             console.error('An unexpected error ocuured:', error.message)
//         }
//     }finally{
//         console.log(`Finished validating ${fieldName}.\n`);
//     }
// }
// testValidation('Hello, World!', 'Greeting'); 
// testValidation('   ', 'Username');           
// testValidation('', 'Password');       







//ACTIVITY 04: (Error Handling in Promises)

//Task 06: (Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection 
//and log an appropriate message to the console. )

// function randomPromise(){
//     return new Promise ((resolve, reject) => {
//         const randomValue = Math.random()
//         console.log("Random value:", randomValue);

//         if(randomValue > 0.5){
//             resolve("Promise resolved successfully!")
//         } else{
//             reject(new Error("Promise rejected! Remove value was too low."))
//         }
//     })
// }

// randomPromise()
// .then((successMessage) => {
//     console.log(successMessage);
// })
// .catch((error) => {
//     console.error("Caught an error:", error.message)
// })
// .finally(() => {
//     console.log("Promise operation completed.");
// })


//Task 07: (Use try-catch within an async function to handle errors from a promise that randomly resolves
//or rejects, and log the error message.)

// function randomPromise(){
//     return new Promise ((resolve, reject) => {
//         const randomValue = Math.random()
//         console.log("Random value:", randomValue);

//         if(randomValue > 0.5){
//             resolve("Promise resolved successfully!")
//         } else{
//             reject(new Error("Promise rejected! Remove value was too low."))
//         }
//     })
// }

// async function handlePromise(){
//     try{
//         console.log("Starting promise handling...");
//         const result = await randomPromise()
//         console.log("Success:", result);
//     }catch(error){
//         console.error("Caught an error:", error.message)
//     }finally{
//         console.log("Promise handling completed");
//     }
// }
// handlePromise()






//ACTIVITY 06: Graceful Error Handling in Fetch

//Task 08: (Use the fetch API to request data from an invalid URL and handle the error using .catch().
//Log an appropriate error message to the console.)

// function fetchData(){
//     const invalidUrl = "https://invalid-url.example.com/data"

//     fetch(invalidUrl)
//     .then((response) => {
//         if(!response.ok){
//             throw new Error(`Network response was not ok ${response.statusText}`)
//         }
//         return response.json()
//     })
//     .then((data) => {
//         console.log("Data received:", data);
//     })
//     .catch((error) => {
//         console.error("An error occurred while fetching data:", error.message)
//     })
//     .finally(() => {
//         console.log("Fetch operation completed.");
//     })
// }
// fetchData()


//Task 09: (Use the fetch API to request data from an invalid URL within an async dunction and handle the
//error using try-catch . Log an appropriate error message.)

// async function fetchData() {
//     const invalidUrl = "https://invalid-url.example.com/data"; 
  
//     try {
//       console.log("Attempting to fetch data from:", invalidUrl);

//       const response = await fetch(invalidUrl);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
//       }
//       const data = await response.json();
//       console.log("Data received:", data); 
  
//     } catch (error) {
//       console.error("An error occurred while fetching data:", error.message);
  
//     } finally {
//       console.log("Fetch operation completed.");
//     }
//   }
//   fetchData();