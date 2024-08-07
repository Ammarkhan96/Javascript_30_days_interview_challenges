//ACTIVITY 01: Basic Recursion

//Task 01: (Write a recursive function to calculate the factorial of a number. Log the result for a few 
//test cases.)

// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// console.log(`Factorial of 0 is: ${factorial(0)}`);
// console.log(`Factorial of 1 is: ${factorial(1)}`);
// console.log(`Factorial of 5 is: ${factorial(5)}`);
// console.log(`Factorial of 7 is: ${factorial(7)}`);
// console.log(`Factorial of 10 is: ${factorial(10)}`);


//Task 02: (Write a recursive function to calculate the nth Fibonacci number. Log the result for a few 
//test cases.)


// function fibonacci(n){
//     if(n === 0){
//         return 0
//     }
//     if(n === 1){
//         return 1
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(`Fibonacci of 0 is: ${fibonacci(0)}`);
// console.log(`Fibonacci of 1 is: ${fibonacci(1)}`);
// console.log(`Fibonacci of 2 is: ${fibonacci(2)}`);
// console.log(`Fibonacci of 5 is: ${fibonacci(5)}`);
// console.log(`Fibonacci of 7 is: ${fibonacci(7)}`);
// console.log(`Fibonacci of 10 is: ${fibonacci(10)}`);





//ACTIVITY 02: Recursion with Array

//Task 03: (Write a recursive function to find the sum of all elements in an array. Log the result for
//a few test cases.)

// function sumArray(arr){
//     if(arr.length === 0){
//         return 0
//     }
//     return arr[0] + sumArray(arr.slice(1))
// }
// console.log(`Sum of [] is: ${sumArray([])}`);
// console.log(`Sum of [1] is: ${sumArray([1])}`);
// console.log(`Sum of [1,2,3,4,5] is: ${sumArray([1,2,3,4,5])}`);
// console.log(`Sum of [10,20,30,40] is: ${sumArray([10,20,30,40])}`);
// console.log(`Sum of [-1,-2,-3,-4] is: ${sumArray([-1,-2,-3,-4])}`);
// console.log(`Sum of [5,5,5,5,5] is: ${sumArray([5,5,5,5,5])}`);
// console.log(`Sum of [100, -50, 25, -75] is: ${sumArray([100, -50, 25, -75])}`);


//Task 04: (Write a recursive function to find the maximum elements in an array. Log the result for
//a few test cases.)


// function findMax(arr) {
//     if (arr.length === 1) {
//         return arr[0];
//     }
//     const maxRest = findMax(arr.slice(1));
//     return arr[0] > maxRest ? arr[0] : maxRest;
// }

// console.log(`Maximum of [5, 3, 9, 1, 6] is: ${findMax([5, 3, 9, 1, 6])}`); 
// console.log(`Maximum of [15, 22, 9, 30, 6] is: ${findMax([15, 22, 9, 30, 6])}`);
// console.log(`Maximum of [-3, -1, -7, -5] is: ${findMax([-3, -1, -7, -5])}`); 
// console.log(`Maximum of [3, 3, 3, 3] is: ${findMax([3, 3, 3, 3])}`);  
// console.log(`Maximum of [100, 1000, 50, 1000] is: ${findMax([100, 1000, 50, 1000])}`); 
// console.log(`Maximum of [1, 2, 3, 4, 5] is: ${findMax([1, 2, 3, 4, 5])}`); 
// console.log(`Maximum of [1] is: ${findMax([1])}`); 






//ACTIVITY 03: String Manipulation with Recursion

//Task 05: (Write a recursive function to reverse a string. Log the result for a few test cases.)


// function reverseString(str) {
//     if (str.length <= 1) {
//         return str;
//     }
    
//     return reverseString(str.slice(1)) + str[0];
// }

// console.log(`Reverse of 'hello' is: '${reverseString('hello')}'`); 
// console.log(`Reverse of 'world' is: '${reverseString('world')}'`);  
// console.log(`Reverse of 'racecar' is: '${reverseString('racecar')}'`);  
// console.log(`Reverse of 'JavaScript' is: '${reverseString('JavaScript')}'`);  
// console.log(`Reverse of 'OpenAI' is: '${reverseString('OpenAI')}'`); 
// console.log(`Reverse of 'a' is: '${reverseString('a')}'`);  
// console.log(`Reverse of '' is: '${reverseString('')}'`);  



//Task 06: (Write a recursive function to check if a string is a palindrome. Log the result for a 
//few test cases.)


// function isPalindrome(str){
//     if(str.length <= 1){
//         return true
//     }
//     if(str[0] !== str[str.length -1]){
//         return false
//     }
//     return isPalindrome(str.slice(1, str.length - 1))
// }
// console.log(`Is 'racecar' a palindrome? ${isPalindrome('racecar')}`);
// console.log(`Is 'hello' a palindrome? ${isPalindrome('hello')}`);
// console.log(`Is 'madam' a palindrome? ${isPalindrome('madam')}`);
// console.log(`Is 'level' a palindrome? ${isPalindrome('level')}`); 
// console.log(`Is '12321' a palindrome? ${isPalindrome('12321')}`); 
// console.log(`Is '12345' a palindrome? ${isPalindrome('12345')}`);
// console.log(`Is 'A' a palindrome? ${isPalindrome('A')}`)
// console.log(`Is '' a palindrome? ${isPalindrome('')}`);
// console.log(`Is 'Able was I ere I saw Elba' a palindrome? ${isPalindrome('Able was I ere I saw Elba'.toLowerCase().replace(/[^a-z]/g, ''))}`); 






//ACTIVITY 04: Recursive Search

//Task 07: (Write a recursive function to perform a binary search on a sorted array. Log the index of the
// target element for a few test cases.)

// function binarySearch(arr, target, start = 0, end = arr.length - 1) {
//     if (start > end) {
//         return -1;
//     }
//     const mid = Math.floor((start + end) / 2);

//     if (arr[mid] === target) {
//         return mid;
//     }
//     if (target < arr[mid]) {
//         return binarySearch(arr, target, start, mid - 1);
//     }
//     return binarySearch(arr, target, mid + 1, end);
// }

// const sortedArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sortedArray2 = [-10, -5, 0, 3, 7, 11, 18, 29, 34, 50];
// const sortedArray3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// const sortedArray4 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// const sortedArray5 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

// console.log(`Index of 7 in sortedArray1: ${binarySearch(sortedArray1, 7)}`);   
// console.log(`Index of 3 in sortedArray2: ${binarySearch(sortedArray2, 3)}`);  
// console.log(`Index of 14 in sortedArray3: ${binarySearch(sortedArray3, 14)}`); 
// console.log(`Index of 25 in sortedArray4: ${binarySearch(sortedArray4, 25)}`);
// console.log(`Index of 21 in sortedArray5: ${binarySearch(sortedArray5, 21)}`);
// console.log(`Index of 11 in sortedArray1: ${binarySearch(sortedArray1, 11)}`); 
// console.log(`Index of 29 in sortedArray2: ${binarySearch(sortedArray2, 29)}`); 
// console.log(`Index of 2 in sortedArray3: ${binarySearch(sortedArray3, 2)}`);  
// console.log(`Index of 50 in sortedArray4: ${binarySearch(sortedArray4, 50)}`); 
// console.log(`Index of 15 in sortedArray5: ${binarySearch(sortedArray5, 15)}`); 


//Task 08: (Write a recursive function to count the occurences of a target element in an array. Log
//the result for a few test cases.)


// function countOccurrences(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return 0;
//     }

//     const count = (arr[index] === target ? 1 : 0);

//     return count + countOccurrences(arr, target, index + 1);
// }

// const array1 = [1, 2, 3, 4, 2, 2, 5, 6, 2];
// const array2 = [7, 8, 9, 7, 10, 7, 11, 7];
// const array3 = [5, 5, 5, 5, 5, 5, 5];
// const array4 = [12, 13, 14, 15, 16];
// const array5 = [2, 3, 2, 4, 5, 2, 6, 7, 2];

// console.log(`Occurrences of 2 in array1: ${countOccurrences(array1, 2)}`); 
// console.log(`Occurrences of 7 in array2: ${countOccurrences(array2, 7)}`); 
// console.log(`Occurrences of 5 in array3: ${countOccurrences(array3, 5)}`); 
// console.log(`Occurrences of 10 in array: ${countOccurrences(array, 10)}`); 
// console.log(`Occurrences of 2 in array5: ${countOccurrences(array5, 2)}`); 





//ACTIVITY 05: Tree Traversal(Optional)

//Task 09: (Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes
//as they are visited)

// function countOccurrences(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return 0;
//     }

   
//     const count = (arr[index] === target ? 1 : 0);

//     return count + countOccurrences(arr, target, index + 1);
// }

// const array1 = [1, 2, 3, 4, 2, 2, 5, 6, 2];
// const array2 = [7, 8, 9, 7, 10, 7, 11, 7];
// const array3 = [5, 5, 5, 5, 5, 5, 5];
// const array4 = [12, 13, 14, 15, 16];
// const array5 = [2, 3, 2, 4, 5, 2, 6, 7, 2];

// console.log(`Occurrences of 2 in array1: ${countOccurrences(array1, 2)}`); 
// console.log(`Occurrences of 7 in array2: ${countOccurrences(array2, 7)}`); 
// console.log(`Occurrences of 5 in array3: ${countOccurrences(array3, 5)}`);
// console.log(`Occurrences of 10 in array4: ${countOccurrences(array4, 10)}`);
// console.log(`Occurrences of 2 in array5: ${countOccurrences(array5, 2)}`); 


//Task 10: (Write a recursive function to calculate the depth of a binary tree. Log the result for the
//few cases.)

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateDepth(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

function logDepth(tree, name) {
    console.log(`Depth of ${name}: ${calculateDepth(tree)}`);
}


const emptyTree = null;
logDepth(emptyTree, "Empty Tree"); 

const singleNodeTree = new TreeNode(1);
logDepth(singleNodeTree, "Single Node Tree"); 

const fullBinaryTree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7)
    )
);
logDepth(fullBinaryTree, "Full Binary Tree"); 
const skewedLeftTree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(4,
                new TreeNode(5)
            )
        )
    )
);
logDepth(skewedLeftTree, "Skewed Left Tree"); 

const skewedRightTree = new TreeNode(1, null,
    new TreeNode(2, null,
        new TreeNode(3, null,
            new TreeNode(4, null,
                new TreeNode(5)
            )
        )
    )
);
logDepth(skewedRightTree, "Skewed Right Tree"); 

const balancedTree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4,
            new TreeNode(8),
            new TreeNode(9)
        ),
        new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7,
            new TreeNode(10)
        )
    )
);
logDepth(balancedTree, "Balanced Tree"); 
const customTree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4,
            new TreeNode(8),
            new TreeNode(9)
        )
    ),
    new TreeNode(3,
        new TreeNode(5),
        new TreeNode(6,
            null,
            new TreeNode(7)
        )
    )
);
logDepth(customTree, "Custom Tree"); 