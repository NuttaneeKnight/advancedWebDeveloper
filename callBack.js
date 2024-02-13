/**
 * Objectives
 *
 * Define callback functions
 * Define higher order functions
 * Use a callback function to make your code more general
 * Create callbacks using anonymous functions
 */

// function callback() {
//   console.log("Coming from callback");
// }

// function higherOrder(fn) {
//   console.log("About to call callback");
//   fn();
//   console.log("Callback has been invoked");
// }
// // node callback.js
// higherOrder(callback);

// /**
//  * What are callbacks used for?
//  * - Advanced Array Methods
//  * - Browser events
//  * - AJAX Requests
//  * - React Development
//  */

// // Codes without callbacks
// function sendMessageConsole(message) {
//   console.log(message);
// }

// function sendMessageAlert(message) {
//   alert(message);
// }

// function sendMessageConfirm(message) {
//   return confirm(message);
// }

// sendMessageAlert("Lots of duplication");

// // Same code refactor with callbacks
// // This is a higheroerder function
// function sendMessage(message, callback) {
//   return callback(message);
// }

// sendMessage("Message for console", console.log);

// sendMessage("Message for alert", alert);

// var answer = sendMessage("Are you sure??", confirm);

// // Callbacks with Function Declarations
// function greet(name, formatter) {
//   return "Hello, " + formatter(name);
// }

// function upperCaseName(name) {
//   return name.toUpperCase();
// }

// greet("Tim", upperCaseName);

// // Callbacks With Anonymous function Functions
// function greet(name, formatter) {
//   return "Hello, " + formatter(name);
// }
// greet("TIm", function (name) {
//   return name.toUppercase();
// });
// greet("Tim", function (name) {
//   return name + "!!!!!";
// });

// // Print Array Values Doubled
// var arr = [1, 2, 3, 4, 5, 6];
// function double(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i] *2 )
//   }
// }
// double(arr)

// // Refactor with forEach
// // Callback signature
// function callback(curElement, currentIndex, array) {
//   //implement forEach
// }
// forEach(arr, function(arr) {
//   console.log(number * 2)
// })

// // forEach Example with all callback PArameters
// var strings = ['my', 'forEach', 'example']

// var result = ''
// forEach(strings, function(str, index, array) {
//   if (array.length -1 !== index) {
//     result += str + ' '
//   } else {
//     result += str + "!!!"
//   }
// }) // 'my forEach example!!!'

// // Sample
// function forEach(arr, callback) {
//   for (var i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr)
//   }
// }

// findIndex Definition
// Returns the index of the first element in the array for which the call back returns a truthy value. -1 is returns a truthy value.

// function findIndex(array, callback) {
//   // findIndex code to be implemented
// }

// function callback(curElement, curIndex, array) [
//   // callback implemented by caller of function
// ]

// var arr = [3, 4, 6, 2, 1]
// findIndex(arr, function(num, index, array) {
//   return num === 6;
// })

// // ex. findIndex, find first even
// var arr = [5, 11, 13, 8, 6, 7];
// findIndex(arr, function(num, index, array) {
//   return num % 2 === 0
// })

// // findIndex Example: Could Not Find
// var langs = ["Java", "C++", "Python", "Ruby"];
// findIndex(langs, function(lang, index, arr) {
//   return lang === "JavaScript";
// })

// function findIndex(arr, callback) {
//   for (var i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       return i;
//     }
//   }
//   return -1;
// }

/**
 * The Stack and the Heap
 *
 * Objectives
 *
 * - Describe what the stack is
 * - Describe a stack frame
 * - Describe the heap
 *
 * What is the Stack?
 * - An ordered data structure
 * - Keep track of function invocations
 * - PArt of the JAvaScript runtime (you don't access it directly)
 *
 *
 * How Your Code Changes the Stack
 * - Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top)
 * - Whenever a function returns, the information about the invocation is taken off the top of the stack (popped off of the top)
 *
 */

// Stack Example
// const multiply = (x, y) => {
//   return x * y;
// }
// var res = multiply(3,5)
// console.log(res)

// 179(line) - function:main
// 177(line)- function: multiply
// popped 177 popped off the stack
// then popped 179
// Now the runtime is empty and is waiting for something to do hence another stack

/**
 * Stack Frame Contents
 * - The function that was invoked
 * - The parameters that were passed to the function
 * - Current line number
 *
 * Stack Definition
 * - An ordered set if stack frames. Most recently invoked function is on the top of the stack.
 * The bottom if the stack is the first function invoked. The stack is processed from top to bottom.
 */

/* 
Objective:
- Describe what the stack is:
  - An ordered data structure
  - Keeps track of function invocations
  - Part of the Javascript runtime (you don't access it directly)
- Describe a stack frame
- Describe the heap

How your code changes the stack
- Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top)
- Whenever a function returns, the information about the invocation is taken off the top f the stack
*/

// // Stack Example
// 1 function multiply(x, y) {
// 2  return x * y;
// 3 }
// 4
// 5 var res =multiply(3, 5)

/* 
Stack: Stack Frame - line by line

2 function: multiply (popped) Taken off from the top of the stack 
5 function: main js runtime will take main off the stack

** Now the stack will be empty and ready for another task. 

Stack Frame Content
- The function that was invoked
- The parameter that were passed to the function
- Current line number

Stack Definition
- An ordered set of stack frames. Most recently invoked function is on the top of the stack. 
The bottom of the stack is the first function invoked. The stack is processed from top to bottom

Heap Definition
- An area in memory where your data is stored

The object is created in the heap. obj is a reference to the object.
var obj = {firstName: 'Tim',
            lastName: 'Garcia'};

*/

/* Event Loop and the Queue

Objective:
- Define the event loop and the queue
- Describe how the event loop and the queue work with the stack 
- Define Javascript as a single threaded language

The Queue:
- An ordered listed of functions waiting to be placed on the stack
- Functions in the queue are processed on a first in, first out basis (FIFO)

The Event Loop:
- Functionality in the JacaScript runtime that checks the queue when the stack is empty
- If the stack is empty, the front of the queue is placed in the stack

JavaScript is Single Threaded:
- Single Threaded: Code execution is linear. 
  Code that is running cannot be interrupted by something else going on in the program. 
*/

/* Promise Basics

Objectives:
- Define a promise
- Add a .then callback to a promise
- Add a .catch callback to a promise
- Wrap a setTimeout call in a promise

Promise: Conceptually
- A promise is an object that represents a task that will be completed in the future
- Analogy: Taking a number at a government office before you can get helped. 
  The piece of paper you get is like your promise. 
  The help you get at the counter is like the invocation of your callback

*/

// // Promise example for both scenarios
// var p1 = new Promise(function (resolve, reject) {
//   // resolve('Success!')
//   reject("ERROR");
// });

// p1.then(function (data) {
//   console.log("Promise p1 resolved with data: ", data);
// }).catch(function (data) {
//   console.log("Promise p1 was rejected with data: ", data);
// });

// // Promise: With randomly occurring errors
// var p1 = new Promise(function (resolve, reject) {
//   var num = Math.random();
//   if (num < 0.5) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });

// p1.then(function (result) {
//   console.log("Success: ", result);
// }).catch(function (error) {
//   console.log("Error: ", error);
// });

// Wrap setTimeout with Promise
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});

promise.then(function (data) {
  console.log("Random int passed to resolve: ", data);
});

/* Promise Chaining
Objectives 
- Describe the disadvantages of using nested callbacks
- Return a promise from a .then callback function
- Use a promise to make asynchronous code seem sequential


*/
