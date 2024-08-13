//ACTIVITY 01: Sorting Algorithms

//Task 01: (Implement the bubble sort algorithms to sort an array of numbers in ascending order. Log the
//sort array.)

// const numbers = [64, 34, 25, 12, 22, 11, 90]

// function bubbleSort(arr){
//      let n = arr.length

//      for(let i = 0; i < n - 1; i++){
//         for(let j = 0; j < n - i; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//      }
//      console.log("Sorted array:", arr);
// }
// bubbleSort(numbers)



//Task 02: (Implement the selection sort algorithms to sort an array of numbers in ascending order. Log the
//sort array.)

// const numbers = [64, 25, 12, 22, 11]

// function selectionSort(arr){
//     let n = arr.length;

//     for(let i = 0; i < n - 1; i++){
//         let minIndex = i
//         for(let j = i + 1; j < n; j++){
//          if(arr[j] < arr[minIndex]){
//             minIndex = j
//          }
//         }
//         if(minIndex !== i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     console.log("Sorted array:", arr);
// }
// selectionSort(numbers)

//Task 03: (Implement the quicksort sort algorithms to sort an array of numbers in ascending order. Log the
//sort array.)

// const numbers = [64, 25, 12, 22, 11];

// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     const pivot = arr[arr.length - 1]
//     const left = []
//     const right = []

//     for(let i = 0; i < arr.length - 1; i ++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...quickSort(left), pivot, ...quickSort(right)]
// }
// const sortedArray = quickSort(numbers)
// console.log("Sorted Array:", sortedArray);










//ACTIIVITY 02: Seacrhing Algorithms


//Task 04: (Implement the linear search algorithm to find a target value in an array. Log the index
// of the target value.)

// const numbers = [64, 25, 12, 22, 11];

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             console.log("Target found at index:", i);
//             return i; 
//         }
//     }
//     console.log("Target not found in the array");
//     return -1;
// }

// const targetValue = 22;
// linearSearch(numbers, targetValue);


//Task 05: (Implement the binary search algorithm to find a target value in a sorted array. Log the 
// index of the target value.)

// const numbers = [11, 12, 22, 25, 64];

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             console.log("Target found at index:", mid);
//             return mid;
//         }

       
//         if (arr[mid] < target) {
//             left = mid + 1;
//         }else {
//             right = mid - 1;
//         }
//     }
//     console.log("Target not found in the array");
//     return -1;
// }

// const targetValue = 22;
// binarySearch(numbers, targetValue);







//ACTIVITY 03: String Algorithms

//Task 06: (Write a function to count the occurrences of each character in a string. Log the character
//count.)

// function countCharacterOccurrences(str) {
//     const charCount = {};

//     for (let char of str) {
       
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     console.log("Character count:", charCount);
//     return charCount;
// }

// const exampleString = "hello world";
// countCharacterOccurrences(exampleString);



//Task 07: (Write a function to find the longest substring without repeating characters in a string. 
// Log the lenght of the substring)

// const exampleString = "abcabcbb";

// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let start = 0;
//     const charIndexMap = {};

//     for (let end = 0; end < s.length; end++) {
//         const currentChar = s[end];

//         if (charIndexMap[currentChar] >= start) {
//             start = charIndexMap[currentChar] + 1;
//         }
//         charIndexMap[currentChar] = end;

//         maxLength = Math.max(maxLength, end - start + 1);
//     }
//     console.log("Length of the longest substring without repeating characters:", maxLength);
//     return maxLength;
// }

// lengthOfLongestSubstring(exampleString);












//ACTIVITY 04: Array Algorithms

//Task 08: (Write a function to rotate an array by k position. Log the rotated array.)

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function rotateArray(arr, k) {
//     const n = arr.length;
//     k = k % n;
//     const rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));

//     console.log("Rotated array:", rotatedArray);
//     return rotatedArray;
// }
// const k = 3;
// rotateArray(numbers, k);

//Task 09: (Write a function to merge two sorted arrays into one sorted array. Log the merged array.)

// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];

// function mergeSortedArrays(arr1, arr2) {
//     const mergedArray = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     console.log("Merged array:", mergedArray);
//     return mergedArray;
// }

// mergeSortedArrays(array1, array2);










//ACTIVITY 05: Dynamic Programming

// Task 10: (Write a function to solve the Fabonacci sequence using dynamic programming. Log the
//Fabonacci numbers.)

// const n = 10;
// function fibonacci(n) {
// const fib = [0, 1]

// for(let i = 2; i <= n; i++){
//     fib[i] = fib[i - 1] + fib[i - 2]
// }
// console.log("Fabonacci sequence up to", n, ":", fib);
// return fib
// }

// fibonacci(n)


//Task 11: (Write a function to solve the knapsack problem using dynamic programming. Log the maximum
// value that can be obtained.)

// const weights = [1, 3, 4, 5];
// const values = [1, 4, 5, 7];
// const capacity = 7;

// function knapsack(weights, values, capacity) {
//     const n = weights.length;
//     const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

//     for (let i = 1; i <= n; i++) {
//         for (let w = 1; w <= capacity; w++) {
//             if (weights[i - 1] <= w) {
//                 dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
//             } else {
//                 dp[i][w] = dp[i - 1][w];
//             }
//         }
//     }

//     console.log("Maximum value that can be obtained:", dp[n][capacity]);
//     return dp[n][capacity];
// }


// knapsack(weights, values, capacity);
