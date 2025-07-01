/*
Exercise 13: Using console.log for Debugging

Description: 

Inside the event listener for the color-button, 
log the current background color of the button before changing 
it to light green.
*/

// Exercise 13
colorButton.addEventListener("click", function () {
  console.log("Current background color:", colorButton.style.backgroundColor);
  colorButton.style.backgroundColor = "lightgreen";
});
