//ACTIVITY 01: Object Creation and Access

//Task 01: (Create an object representing a book with properties like title, author, and year, and log
// the object to the console. )

// const book = {
//     title: "To Killer a Mockingbird",
//     author: "Harpar Lee",
//     year: 1960
// }
// console.log(book);

//Task 02: (Access and log the title and author properties of the book object. )

// const book = {
//         title: "To Killer a Mockingbird",
//         author: "Harpar Lee",
//         year: 1960
//     }
//     console.log("Title:", book.title);
//     console.log("Author:",book.author);





//ACTIVITY 02: Object Methods

//Task 03: (Add a method to the book object that returns a string with the book's title and author, and
//log the result of calling this method. )

// const book = {
//         title: "To Killer a Mockingbird",
//         author: "Harpar Lee",
//         year: 1960,
//         getBookInfo: function(){
//             return `${this.title} by ${this.author}`
//         }
//     }
//     console.log(book.getBookInfo());

//Task 04: (Add a method to the book object that takes a parameter (year) and updates the book's year
// property, then log the updated object)

// const book = {
//         title: "To Killer a Mockingbird",
//         author: "Harpar Lee",
//         year: 1960,
//         getBookInfo: function(){
//             return `${this.title} by ${this.author}`
//         },
//         updateYear: function(newYear){
//             this.year = newYear
//         }
//     }
//     book.updateYear(2024)
//     console.log(book);






//ACTIVITY 03:Nested Object

//Task 05: (Create a nested object representing a library with properties like name and books (an array
// of book objects), and log the library object to the console. )

// const book1 = {
//         title: "To Killer a Mockingbird",
//         author: "Harpar Lee",
//         year: 1960,
// }

// const book2 = {
//     title: "1984",
//     author: "George Orwell",
//     year: 1949,
// }

// const book3 = {
//     title: "The Greate Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
// }

// const library = {
//     name: "City Library",
//     books: [book1, book2, book3]
// }
// console.log(library);

//Task 06: (Access and log the name of the library and the titles of all books in the library.)

// const book1 = {
//         title: "To Killer a Mockingbird",
//         author: "Harpar Lee",
//         year: 1960,
// }

// const book2 = {
//     title: "1984",
//     author: "George Orwell",
//     year: 1949,
// }

// const book3 = {
//     title: "The Greate Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
// }

// const library = {
//     name: "City Library",
//     books: [book1, book2, book3]
// }
// console.log("Library Name:", library.name);

// console.log("Books Title:");
// library.books.forEach(book=>{
//     console.log(book.title);
// })






//ACTIVITY 04: The this Keyword:

//Task 07: (Add a method to the book object that use the this keyword to return a string with the book's
// title and year, and log the result of calling this method. )

// const book =  {
//     title: "To Killer a Mockingbird",
//      author: "Harpar Lee",
//      year: 1960,
//      getBookInfo: function(){
//         return `${this.title} by ${this.author}`
//      },
//      getTitleandYear: function(){
//         return `${this.title}, published in ${this.year}`
//      }
// }
// console.log(book.getTitleandYear());







//ACTIVITY 05: Object Iteration

//Task 08: (Use a for...in loop to iterate over the properties of the book object and log each property
// and its value. )

// const book =  {
//     title: "To Killer a Mockingbird",
//      author: "Harpar Lee",
//      year: 1960,
//      getBookInfo: function(){
//         return `${this.title} by ${this.author}`
//      },
//      getTitleandYear: function(){
//         return `${this.title}, published in ${this.year}`
//      }
// }

// for(const property in book){
//     if(Object.hasOwnProperty.call(book, property)){
//         console.log(`${property}: ${book[property]}`);
//     }
// }


//Task 09: (Use object.keys and object.values methods to log all the keys and values of the book
//object. )

const book =  {
    title: "To Killer a Mockingbird",
     author: "Harpar Lee",
     year: 1960,
     getBookInfo: function(){
        return `${this.title} by ${this.author}`
     },
     getTitleandYear: function(){
        return `${this.title}, published in ${this.year}`
     }
}

console.log("Keys:", Object.keys(book));
console.log("Value:", Object.values(book));