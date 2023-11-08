/**
 * Objectives
 *
 * Define callback functions
 * Define higher order functions
 * Use a callback function to make your code more general
 * Create callbacks using anonymous functions
 */

function callback() {
  console.log("Coming from callback");
}

function higherOrder(fn) {
  console.log("About to call callback");
  fn();
  console.log("Callback has been invoked");
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

// Codes without callbacks
function sendMessageConsole(message) {
  console.log(message);
}

function sendMessageAlert(message) {
  alert(message);
}

function sendMessageConfirm(message) {
  return confirm(message);
}

sendMessageAlert("Lots of duplication");

// Same code refactor with callbacks
// This is a higheroerder function
function sendMessage(message, callback) {
  return callback(message);
}

sendMessage("Message for console", console.log);

sendMessage("Message for alert", alert);

var answer = sendMessage("Are you sure??", confirm);

// Callbacks with Function Declarations
function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

greet("Tim", upperCaseName);

// Callbacks With Anonymous function Functions
function greet(name, formatter) {
  return "Hello, " + formatter(name)
}
greet("TIm", function(name) {
  return name.toUppercase()
})
greet("Tim", function(name) {
  return name + "!!!!!"
})