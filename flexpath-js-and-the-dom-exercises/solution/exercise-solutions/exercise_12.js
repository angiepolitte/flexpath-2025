/*
Exercise 12: Stopping Event Propagation

Description: 

Modify the previous exercise to prevent the click event on 
the button from bubbling up to the section.
*/

// Exercise 12
colorButton.addEventListener("click", function (event) {
  console.log("Color button clicked");
  event.stopPropagation();
});
