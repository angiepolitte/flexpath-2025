/*
Exercise 11: Event Propagation

Description: 

Add click event listeners to the <section> with ID 'interactive' and to 
the <button> with ID 'color-button'.

In each event handler, log a message indicating which element was clicked. 

Observe event bubbling.
*/

// Exercise 11
const interactiveSection = document.getElementById("interactive");
const colorButton = document.getElementById("color-button");

interactiveSection.addEventListener("click", function () {
  console.log("Interactive section clicked");
});

colorButton.addEventListener("click", function (event) {
  console.log("Color button clicked");
});
