/*
Exercise 9: Removing an Event Listener

Description: 

Remove the code from Exercise 8.

In this file, add an event listener to the button with ID 'alert-button' that 
shows an alert when clicked. 

Then, remove the event listener so that clicking the button no longer 
shows the alert after 5 seconds.
*/

// Exercise 9
function showAlert() {
  alert("Button Clicked!");
}

alertButton.addEventListener("click", showAlert);

// Remove the event listener after 5 seconds
setTimeout(function () {
  alertButton.removeEventListener("click", showAlert);
  console.log("Event listener removed");
}, 5000);
