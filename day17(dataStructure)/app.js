//ACTIVITY 01: Linked List

//Task 01: (Implement a Node class to represent an element in a linked list with properties value and next.)

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// const node1 = new Node(10) 
// const node2 = new Node(20) 
// const node3 = new Node(30)

// node1.next=node2
// node2.next=node3

// let currentNode = node1
// while(currentNode !== null){
//     console.log(currentNode.value);
//     currentNode = currentNode.next
// }


//Task 02: (Implement a LinkedList class with methods to add a node to the end, remove a node from 
// the end, and display all nodes.)

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     addNode(value) {
//       const newNode = new Node(value);
  
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next !== null) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//     }
  
//     removeNode() {
//       if (this.head === null) {
//         console.log('The list is empty.');
//         return;
//       }
  
//       if (this.head.next === null) {
//         this.head = null;
//       } else {
//         let current = this.head;
//         while (current.next.next !== null) {
//           current = current.next;
//         }
//         current.next = null;
//       }
//     }
  
//     displayNodes() {
//       if (this.head === null) {
//         console.log('The list is empty.');
//         return;
//       }
  
//       let current = this.head;
//       let result = '';
//       while (current !== null) {
//         result += current.value + ' -> ';
//         current = current.next;
//       }
//       console.log(result.slice(0, -4)); 
//     }
//   }
  
  
//   const list = new LinkedList();
  
//   list.addNode(1);
//   list.addNode(2);
//   list.addNode(3);
//   list.displayNodes();  
//   list.removeNode();
//   list.displayNodes();  
//   list.removeNode();
//   list.displayNodes();  
//   list.removeNode();
//   list.displayNodes();
  








//ACTIVITY 02: Stack


//Task 03: (Implement a stack class with method push(add element), pop(remove element), and peek(view the
//top element.))

// class Stack {
//     constructor() {
//       this.items = []; 
//     }
//       push(element) {
//       this.items.push(element);
//     }
//       pop() {
//       if (this.items.length === 0) {
//         console.log('Stack is empty.');
//         return null;
//       }
//       return this.items.pop();
//     }
  
//     peek() {
//       if (this.items.length === 0) {
//         console.log('Stack is empty.');
//         return null;
//       }
//       return this.items[this.items.length - 1];
//     }
//   }
  
//   const stack = new Stack();
  
//   stack.push(10);
//   stack.push(20);
//   stack.push(30);
  
//   console.log(stack.peek());  
//   console.log(stack.pop());  
//   console.log(stack.peek());  
//   console.log(stack.pop());   
//   console.log(stack.pop());   
//   console.log(stack.pop());   
//   console.log(stack.peek()); 
  

//Task 04: (Use the stack class to reserve a string bu pushing all characters onto the stack and then 
// popping them off.)

// class Stack {
//     constructor() {
//       this.items = [];
//     }
  
//     push(element) {
//       this.items.push(element);
//     }
  
//     pop() {
//       if (this.items.length === 0) {
//         return null;
//       }
//       return this.items.pop();
//     }
  
//     peek() {
//       if (this.items.length === 0) {
//         return null;
//       }
//       return this.items[this.items.length - 1];
//     }
//   }
  
//   function reverseString(str) {
//     const stack = new Stack();
  
//     for (let i = 0; i < str.length; i++) {
//       stack.push(str[i]);
//     }
  
//     let reversedStr = '';
  
//     while (stack.peek() !== null) {
//       reversedStr += stack.pop();
//     }
  
//     return reversedStr;
//   }
  
//   const originalString = "hello";
//   const reversedString = reverseString(originalString);
  
//   console.log(`Original String: ${originalString}`);  
//   console.log(`Reversed String: ${reversedString}`);  
  







//ACTIVITY 03: Queue

//Task 05: (Implement a Queue class with methods enqueue(add element), dequeue(remove element), and front
//(view the first element.))

// class Queue {
//     constructor() {
//       this.items = []; 
//     }
  
//     enqueue(element) {
//       this.items.push(element);
//     }
  
//     dequeue() {
//       if (this.items.length === 0) {
//         console.log('Queue is empty.');
//         return null;
//       }
//       return this.items.shift();  
//     }
  
//     front() {
//       if (this.items.length === 0) {
//         console.log('Queue is empty.');
//         return null;
//       }
//       return this.items[0];
//     }
//   }
  
//   const queue = new Queue();
  
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
  
//   console.log(queue.front());  
//   console.log(queue.dequeue());  
//   console.log(queue.front());    
//   console.log(queue.dequeue());  
//   console.log(queue.dequeue());  
//   console.log(queue.dequeue());  
//   console.log(queue.front());    
  


//Task 06: (Use the Queue class to simulate a simple printer queue where print jobs are added to the queue
// and processed in order.)



// class Queue {
//     constructor() {
//       this.items = [];
//     }
  
//     enqueue(element) {
//       this.items.push(element);
//     }
  
//     dequeue() {
//       if (this.items.length === 0) {
//         console.log('Queue is empty.');
//         return null;
//       }
//       return this.items.shift();
//     }
  
//     front() {
//       if (this.items.length === 0) {
//         console.log('Queue is empty.');
//         return null;
//       }
//       return this.items[0];
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
//   }
  
//   class PrinterQueue {
//     constructor() {
//       this.queue = new Queue();
//     }
  
//     addPrintJob(job) {
//       console.log(`Adding print job: ${job}`);
//       this.queue.enqueue(job);
//     }
  
//     processNextJob() {
//       if (this.queue.isEmpty()) {
//         console.log('No print jobs to process.');
//         return;
//       }
  
//       const job = this.queue.dequeue();
//       console.log(`Processing print job: ${job}`);
//     }
  
//     viewNextJob() {
//       const job = this.queue.front();
//       if (job !== null) {
//         console.log(`Next print job in queue: ${job}`);
//       }
//     }
//   }
  
//   const printerQueue = new PrinterQueue();
  
//   printerQueue.addPrintJob('Document1.pdf');
//   printerQueue.addPrintJob('Image1.png');
//   printerQueue.addPrintJob('Report1.docx');
  
//   printerQueue.viewNextJob(); 
//   printerQueue.processNextJob();  
//   printerQueue.processNextJob(); 
//   printerQueue.processNextJob(); 
//   printerQueue.processNextJob();  
  






//ACTIVITY 04: Binary Tree

//Task 07: (Implement a TreeNode class to represent a node in a binary tree with properties value,
//left and right.)

// class TreeNode {
//     constructor(value) {
//       this.value = value;   
//       this.left = null;    
//       this.right = null;    
//     }
//   }
  

//   const root = new TreeNode(1);
//   const node2 = new TreeNode(2);
//   const node3 = new TreeNode(3);
//   const node4 = new TreeNode(4);
//   const node5 = new TreeNode(5);
  
 
//   root.left = node2;
//   root.right = node3;
//   node2.left = node4;
//   node2.right = node5;
  
 
  
//   console.log(root);
  

//Task 08: (Implement a BinaryTree class with methods for inserting values and performing in-order 
//traversal to display nodes.)

// class TreeNode {
//     constructor(value) {
//       this.value = value;  
//       this.left = null;   
//       this.right = null;    
//     }
//   }
  
//   class BinaryTree {
//     constructor() {
//       this.root = null;  
//     }
  
//     insert(value) {
//       const newNode = new TreeNode(value);
  
//       if (this.root === null) {
//         this.root = newNode;
//         return;
//       }
  
//       let currentNode = this.root;
//       while (true) {
//         if (value < currentNode.value) {
//           if (currentNode.left === null) {
//             currentNode.left = newNode;
//             break;
//           } else {
//             currentNode = currentNode.left;
//           }
//         } else {
//           if (currentNode.right === null) {
//             currentNode.right = newNode;
//             break;
//           } else {
//             currentNode = currentNode.right;
//           }
//         }
//       }
//     }
  
//     inOrderTraversal(node, result = []) {
//       if (node !== null) {
//         this.inOrderTraversal(node.left, result);
//         result.push(node.value);
//         this.inOrderTraversal(node.right, result);
//       }
//       return result;
//     }
  
//     displayInOrder() {
//       const result = this.inOrderTraversal(this.root);
//       console.log(result.join(' '));
//     }
//   }
  
//   const tree = new BinaryTree();
  
//   tree.insert(5);
//   tree.insert(3);
//   tree.insert(7);
//   tree.insert(2);
//   tree.insert(4);
//   tree.insert(6);
//   tree.insert(8);
  
 
//   tree.displayInOrder(); 
  






//ACTIVITY 05: Graph

//Task 09: (Implement a Graph class with methods to add vertices, add edges, and perform a breath-first 
// search (BFS).)

// class Graph {
//     constructor() {
//       this.adjacencyList = {};  
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);  
//       }
//     }
  
//     bfs(start) {
//       const queue = [start];   
//       const result = [];      
//       const visited = {};     
  
//       visited[start] = true;
  
//       while (queue.length > 0) {
//         const vertex = queue.shift(); 
//         result.push(vertex);
  
//         this.adjacencyList[vertex].forEach(neighbor => {
//           if (!visited[neighbor]) {
//             visited[neighbor] = true;
//             queue.push(neighbor);  
//           }
//         });
//       }
  
//       return result;
//     }
//   }
  
//   const graph = new Graph();
  
//   // Add vertices
//   graph.addVertex('A');
//   graph.addVertex('B');
//   graph.addVertex('C');
//   graph.addVertex('D');
//   graph.addVertex('E');
  
//   // Add edges
//   graph.addEdge('A', 'B');
//   graph.addEdge('A', 'C');
//   graph.addEdge('B', 'D');
//   graph.addEdge('C', 'E');
//   graph.addEdge('D', 'E');
  
//   const bfsResult = graph.bfs('A');
//   console.log('BFS Traversal:', bfsResult); 
  


//Task 10: (Use the Graph class to represent a simple network and perform BFS to find the shortest path
// between two nodes.)

// class Graph {
//     constructor() {
//       this.adjacencyList = {}; 
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);  
//       }
//     }
  
//     shortestPath(start, end) {
//       const queue = [start];
//       const visited = {};
//       const previous = {}; 
  
//       visited[start] = true;
//       previous[start] = null;
  
//       while (queue.length > 0) {
//         const vertex = queue.shift();
  
//         if (vertex === end) {
//           const path = [];
//           let step = end;
  
//           while (step) {
//             path.push(step);
//             step = previous[step];
//           }
  
//           return path.reverse();  
//         }
  
//         this.adjacencyList[vertex].forEach(neighbor => {
//           if (!visited[neighbor]) {
//             visited[neighbor] = true;
//             previous[neighbor] = vertex;
//             queue.push(neighbor);
//           }
//         });
//       }
  
//       return [];  
//     }
//   }
  
//   const graph = new Graph();
  
//   // Add vertices
//   graph.addVertex('A');
//   graph.addVertex('B');
//   graph.addVertex('C');
//   graph.addVertex('D');
//   graph.addVertex('E');
  
//   // Add edges
//   graph.addEdge('A', 'B');
//   graph.addEdge('A', 'C');
//   graph.addEdge('B', 'D');
//   graph.addEdge('C', 'E');
//   graph.addEdge('D', 'E');
  
 
//   const path = graph.shortestPath('A', 'E');
//   console.log('Shortest Path from A to E:', path);  
  