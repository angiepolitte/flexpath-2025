/*
Exercise 22: Modifying Styles with JavaScript

Description: 

Change the background color of the <body> when the 
user moves the mouse over the <header> element.
*/

// Exercise 22
const header = document.querySelector("header");

header.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "red";
});

header.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "";
});
