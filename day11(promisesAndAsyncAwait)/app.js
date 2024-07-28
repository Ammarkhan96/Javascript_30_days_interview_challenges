//ACTIVITY 01: (Understanding Promises)

//Task 01: (Create promises that resolves with a message after a 2-second timeout and log the message to
//the console.)

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved after 2 seconds!")
//     }, 2000)
// })
// myPromise.then((message) => {
//     console.log(message);
// })


//Task 02: (Create promises that rejects with an error message after a 2-second timeout and handle the
//error using .catch())

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Promise rejected after 2 second!"))
//     },2000)
// })
// myPromise.catch((message) => {
//     console.log(message);
// })







//ACTIVITY 02: Chaining Promises

//Task 03: (Create a sequence of promises that simulate fetching data from a server. Chain the promise 
// to log messages in a specific order.)

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Fetching user data...");
//         resolve({ userId: 1, userName: "JohnDoe" });
//       }, 1000); 
//     });
//   }
  
  
//   function fetchUserPosts(userId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(`Fetching posts for user ID: ${userId}...`);
//         resolve([
//           { postId: 1, title: "Post 1" },
//           { postId: 2, title: "Post 2" },
//         ]);
//       }, 1500); 
//     });
//   }
  
  
//   function fetchPostComments(postId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(`Fetching comments for post ID: ${postId}...`);
//         resolve([
//           { commentId: 1, content: "Great post!" },
//           { commentId: 2, content: "Very informative." },
//         ]);
//       }, 2000); 
//     });
//   }
  
//   fetchUserData()
//     .then((user) => {
//       console.log(`User data received:`, user);
//       return fetchUserPosts(user.userId); 
//     })
//     .then((posts) => {
//       console.log(`User posts received:`, posts);
//       return fetchPostComments(posts[0].postId); 
//     })
//     .then((comments) => {
//       console.log(`Post comments received:`, comments);
//       console.log("All data fetched successfully!");
//     })
//     .catch((error) => {
//       console.error("An error occurred:", error);
//     });






//ACTIVITY 03: Using Async/Await

//Task 04: (Write an async function that waits for a promise to resolve and then logs the resolved value.)

// function createPromise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise resolved successfully!")
//         }, 2000)
//     })
// }

// async function waitForPromise(){
//     try{
//         const resolvedValue = await createPromise()
//         console.log(resolvedValue);
//     }catch(error){
//         console.error("An error occurred:", error.message)
//     }
// }
// waitForPromise()

//Task 05: (Write an async function that handles a rejected promise using try-catch and logs the 
//error message.)

// function createRejectedPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(new Error("Promise was rejected due to a simulated error!"));
//       }, 2000); 
//     });
//   }
  
//   async function handleRejectedPromise() {
//     try {
//       const result = await createRejectedPromise();
//       console.log("Promise resolved with value:", result);
//     } catch (error) {
//       console.error("An error occurred:", error.message);
//     }
//   }
  
//   handleRejectedPromise();







//ACTIVITY 04: Fetching Data from an API

//Task 06: (Use the fetch API to get data from a public API and log the response data to the console 
//using promises.)

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// function fetchData() {
//   fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok: ' + response.statusText);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Fetched Data:', data);
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error.message);
//     });
// }
// fetchData();


//Task 07: (Use the fetch API to get data from a public API and log the response data to the console 
//using async/await.)

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// async function fetchData(){
//     try{
//         const response = await fetch(apiUrl)
//         if(!response.ok){
//             throw new Error('Network response was not ok: ' + response.statusText)
//         }
//         const data = await response.json()

//         console.log('Fetched Data:', data);
//     }catch(error){
//         console.error('There was a problem with the fetch operation:', error.message)
//     }
// }
// fetchData()








//ACTIVITY 05: Concurrent Promises

//Task 08: (Use Promise.all to wait for multiple promises to resolve and then log all their values.)


// const fetchUserData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User data fetched");
//     }, 1000); 
//   });
  
  
//   const fetchPostsData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Posts data fetched");
//     }, 2000); 
//   });
  
 
//   const fetchCommentsData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Comments data fetched");
//     }, 1500); 
//   });
  
  
// Promise.all([fetchUserData, fetchPostsData, fetchCommentsData])
// .then((values) => {
  
//   console.log("All promises resolved:");
//   values.forEach((value, index) => {
//     console.log(`Promise ${index + 1}: ${value}`);
//   });
// })
// .catch((error) => {
  
//   console.error("An error occurred:", error.message);
// });


//Task 09: (Use Promise.race to log the value of the first promise that resolve among multiple promises.)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000); 
  });
  

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 2000); 
  });
  

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 1500); 
  });

Promise.race([promise1, promise2, promise3])
.then((value) => {
  console.log("First promise resolved:", value);
})
.catch((error) => {
  console.error("An error occurred:", error.message);
});

  