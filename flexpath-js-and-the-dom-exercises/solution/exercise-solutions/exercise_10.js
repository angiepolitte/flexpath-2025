/*
Exercise 10: Handling Keyboard Events

Description: 

Add an event listener to the document that logs the 
key and code of any key pressed by the user.
*/

// Exercise 10
document.addEventListener("keydown", function (event) {
  console.log("Key Pressed:", event.key, "KeyCode:", event.code);
});
