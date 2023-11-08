/**
 * Objectives
 * 
 * Define callback functions
 * Define higher order functions
 * Use a callback function to make your code more general
 * Create callbacks using anonymous functions
 */

function callback() {
  console.log("Coming from callback")
}

function higherOrder(fn) {
  console.log("About to call callback")
  fn()
  console.log("Callback has been invoked")
}
// node callback.js
higherOrder(callback);

/** 
 * What are callbacks used for?
 * - Advanced Array Methods
 * - Browser events
 * - AJAX Requests
 * - React Development 
 */