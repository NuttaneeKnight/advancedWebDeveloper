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
 * - An ordered set if stack frames. Most recently invoked function is on the top of the stack. The bottom if the stack is the first function invoked. The stack is processed from top to bottom.
 */

