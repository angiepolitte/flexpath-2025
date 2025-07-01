/*
Exercise 8: Adding an Event Listener

Description: 

Add an event listener to the button with ID 'alert-button' that 
shows an alert with the message "Button Clicked!" when clicked.
*/

// Exercise 8
const alertButton = document.getElementById("alert-button");
alertButton.addEventListener("click", function () {
  alert("Button Clicked!");
});
