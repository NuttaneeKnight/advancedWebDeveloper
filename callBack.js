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

// Codes without callbacks
function sendMessageConsole(message) {
  console.log(message)
}

function sendMessageAlert(message) {
  alert(message)
}

function sendMessageConfirm(message) {
  return confirm(message)
}

sendMessageAlert('Lots of duplication')

// Same code refactor with callbacks
function sendMessage(message, callback) {
  return callback(message)
}

sendMessage('Message for console', console.log)

sendMessage('Message for alert', alert)

var answer = sendMessage('Are you sure??', confirm)

