// ACTIVITY 01: Class Definition

//Task 01: (Define a class Person with properties name and age, and a method to return a greeting message.
//Create an instance of the class and log the greeting message.)

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     getGreeting(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     }
// }

// const person1 = new Person("Alice", 30)
// console.log(person1.getGreeting());


//Task 02: (Add a method to the Person class that update the age property and logs the updated age.)


// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//       getGreeting() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age for ${this.name} is now ${this.age} years old.`);
//     }
  
//     incrementAge(years) {
//       this.age += years;
//       console.log(`${this.name} is now ${this.age} years old after ${years} years.`);
//     }
  
//     updateName(newName) {
//       this.name = newName;
//       console.log(`The person's new name is ${this.name}.`);
//     }

//     fullIntroduction() {
//       return `Hello, I'm ${this.name}. I'm ${this.age} years old. Nice to meet you!`;
//     }
//   }
  
//   const person1 = new Person("Alice", 30);
//     console.log(person1.getGreeting());
  
//   person1.updateAge(31);
  
//   person1.incrementAge(5);
  
//   person1.updateName("Alicia");
  
//   console.log(person1.fullIntroduction());











//ACTIVITY 02: Class Inheritance

//Task 03: (Define a class student that extends the Person class. Add a property studentId and a method
//to return the student ID. Create an instance of the Student class and log the Student ID.)

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//       getGreeting() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age for ${this.name} is now ${this.age} years old.`);
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
//     }
  
//     getStudentId() {
//       return `Student ID for ${this.name} is ${this.studentId}.`;
//     }
//   }
  
//   const student1 = new Student("Alice", 20, "S12345");
  
//   console.log(student1.getStudentId()); 
  
//   console.log(student1.getGreeting());
//   student1.updateAge(21); 
  
//   console.log(student1.getGreeting()); 



//Task 04: (Override the greeting method in the Student class to include the student ID in the message.
//Log the override greeting message. )

// Define the Person class
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     getGreeting() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//       updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age for ${this.name} is now ${this.age} years old.`);
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
//     }
  
//     getGreeting() {
//       return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
  
//     getStudentId() {
//       return `Student ID for ${this.name} is ${this.studentId}.`;
//     }
//   }
  
//   const student1 = new Student("Alice", 20, "S12345");
  
//   console.log(student1.getGreeting());
  
//   student1.updateAge(21); 
  
//   console.log(student1.getGreeting()); 
  











//ACTIVITY 03: Static Methods and Properties

//Task 05: (Add a static method to the person class that returns a generic greeting message. Call this
//static method without creating an instance of the class and log the message.)

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//       getGreeting() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//       updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age for ${this.name} is now ${this.age} years old.`);
//     }
  
//     static genericGreeting() {
//       return "Hello, welcome to the community!";
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
//     }
  
//     getGreeting() {
//       return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
  
//     getStudentId() {
//       return `Student ID for ${this.name} is ${this.studentId}.`;
//     }
//   }
  
//   console.log(Person.genericGreeting()); 
  
//   const student1 = new Student("Alice", 20, "S12345");
  
//   console.log(student1.getGreeting()); 
//   student1.updateAge(21); 
  
//   console.log(student1.getGreeting());



//Task 06: (Add a static property to the Student class to keep track of the number of students created.
//Increment this property in the constructor and log the total number of student.)

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     getGreeting() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age for ${this.name} is now ${this.age} years old.`);
//     }
  
//     static genericGreeting() {
//       return "Hello, welcome to the community!";
//     }
//   }
  
//   class Student extends Person {
//     static studentCount = 0;
  
//     constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
  
//       Student.studentCount++;
//     }
  
//     getGreeting() {
//       return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
  
//     getStudentId() {
//       return `Student ID for ${this.name} is ${this.studentId}.`;
//     }
  
//     static getStudentCount() {
//       return `Total number of students: ${Student.studentCount}`;
//     }
//   }
  
//   const student1 = new Student("Alice", 20, "S12345");
//   const student2 = new Student("Bob", 22, "S67890");
//   const student3 = new Student("Charlie", 19, "S54321");
  
//   console.log(student1.getGreeting()); 
//   console.log(student2.getGreeting()); 
//   console.log(student3.getGreeting()); 
  
//   console.log(Student.getStudentCount()); 
  









//ACTIVITY 04: Getters and Setters

//Task 07: (Add a getter mrthod to the Person class to return the full name (assume a firstName and 
//lastName property.) Create an instance and log the full name using the getter.)

// class Person {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
  
//     getGreeting() {
//       return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age for ${this.fullName} is now ${this.age} years old.`);
//     }
  
//     static genericGreeting() {
//       return "Hello, welcome to the community!";
//     }
//   }
  
//   const person1 = new Person("John", "Doe", 30);
  
//   console.log(`Full Name: ${person1.fullName}`);
  
//   console.log(person1.getGreeting()); 
  
//   person1.updateAge(35); 
  
//   console.log(Person.genericGreeting()); 
  

//Task 08: (Add a setter method to the Person class to update the name properties (firstName and lastName).
//Update the name using the setter and log the updated full name.)

// class Person {
//     constructor(firstName, lastName, age, middleName = "") {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.middleName = middleName;
//       this.age = age;
//     }
  
//     get fullName() {
//       return this.middleName
//         ? `${this.firstName} ${this.middleName} ${this.lastName}`
//         : `${this.firstName} ${this.lastName}`;
//     }
  
//     set fullName(name) {
//       const nameParts = name.split(" ");
//       if (nameParts.length === 2) {
//         [this.firstName, this.lastName] = nameParts;
//         this.middleName = ""; 
//       } else if (nameParts.length === 3) {
//         [this.firstName, this.middleName, this.lastName] = nameParts;
//       } else {
//         throw new Error("Please provide a valid full name with first and last name.");
//       }
//     }
  
//     getGreeting() {
//       return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
//     }
  
//     updateAge(newAge) {
//       if (typeof newAge === "number" && newAge > 0) {
//         this.age = newAge;
//         console.log(`Updated age for ${this.fullName} is now ${this.age} years old.`);
//       } else {
//         console.log("Invalid age. Please enter a positive number.");
//       }
//     }
  
//     static genericGreeting() {
//       return "Hello, welcome to the community!";
//     }
//   }
  
//   const person1 = new Person("John", "Doe", 30);
  
//   console.log(`Initial Full Name: ${person1.fullName}`); 
  
//   person1.fullName = "Michael Smith";
  
//   console.log(`Updated Full Name: ${person1.fullName}`); 
  
//   person1.fullName = "Michael Andrew Smith";
  
//   console.log(`Updated Full Name with Middle Name: ${person1.fullName}`); 
  
//   console.log(person1.getGreeting()); 
  
//   console.log(Person.genericGreeting()); 









//ACTIVITY 05: Private Fields (Optional)


//Task 09: (Define a class Account with private fields for a balance and a method to deposite and withdraw
//money. Ensure that the balance can only be updated through these methods.)

// class Account {
//     #balance;
  
//     constructor(initialBalance = 0) {
//       if (typeof initialBalance !== 'number' || initialBalance < 0) {
//         throw new Error('Initial balance must be a non-negative number.');
//       }
//       this.#balance = initialBalance;
//     }
  
//     deposit(amount) {
//       if (typeof amount !== 'number' || amount <= 0) {
//         throw new Error('Deposit amount must be a positive number.');
//       }
//       this.#balance += amount;
//       console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
//     }
  
//     withdraw(amount) {
//       if (typeof amount !== 'number' || amount <= 0) {
//         throw new Error('Withdrawal amount must be a positive number.');
//       }
//       if (amount > this.#balance) {
//         throw new Error('Insufficient funds.');
//       }
//       this.#balance -= amount;
//       console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
//     }
  
//     getBalance() {
//       return this.#balance;
//     }
//   }
  
//   const myAccount = new Account(100);
  
//   console.log(`Initial balance: $${myAccount.getBalance()}`);
  
//   myAccount.deposit(50); 
  
//   myAccount.withdraw(30);
  
//   try {
//     myAccount.withdraw(200);
//   } catch (error) {
//     console.error(error.message);
//   }
  
//   console.log(`Final balance: $${myAccount.getBalance()}`); 
  


// Task 10: (Create an instance of the Account class and test the deposite and withdraw methods, logging 
//the balance after each operation.)

// class Account {
//     #balance;
//     #transactions;
  
//     constructor(initialBalance = 0) {
//       if (typeof initialBalance !== 'number' || initialBalance < 0) {
//         throw new Error('Initial balance must be a non-negative number.');
//       }
//       this.#balance = initialBalance;
//       this.#transactions = [];
//       this.#logTransaction('Initial balance', initialBalance);
//     }
  
//     #logTransaction(type, amount) {
//       const date = new Date().toISOString();
//       this.#transactions.push({ date, type, amount, balance: this.#balance });
//     }
  
//     deposit(amount) {
//       if (typeof amount !== 'number' || amount <= 0) {
//         throw new Error('Deposit amount must be a positive number.');
//       }
//       this.#balance += amount;
//       this.#logTransaction('Deposit', amount);
//       console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
//     }
  
//     withdraw(amount) {
//       if (typeof amount !== 'number' || amount <= 0) {
//         throw new Error('Withdrawal amount must be a positive number.');
//       }
//       if (amount > this.#balance) {
//         throw new Error('Insufficient funds.');
//       }
//       this.#balance -= amount;
//       this.#logTransaction('Withdrawal', amount);
//       console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
//     }
  
//     getBalance() {
//       return this.#balance;
//     }
  
//     getTransactionHistory() {
//       return this.#transactions.map(transaction => ({
//         date: transaction.date,
//         type: transaction.type,
//         amount: `$${transaction.amount}`,
//         balance: `$${transaction.balance}`,
//       }));
//     }
//   }
  
//   const myAccount = new Account(100);
  
//   console.log(`Initial balance: $${myAccount.getBalance()}`); 
//   myAccount.deposit(50); 
  
//   console.log(`Balance after deposit: $${myAccount.getBalance()}`); 
  
//   myAccount.withdraw(30); 
  
//   console.log(`Balance after withdrawal: $${myAccount.getBalance()}`); 
  
//   try {
//     myAccount.withdraw(200); 
//   } catch (error) {
//     console.error(error.message); 
//   }
//     console.log(`Final balance: $${myAccount.getBalance()}`); 
  