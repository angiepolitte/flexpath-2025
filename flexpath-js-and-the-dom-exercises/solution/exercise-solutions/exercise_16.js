/*
Exercise 16: Using classList.add

Description: 

Add a class 'highlight' to all <p> elements inside the 
section with ID 'content'.
*/

// Exercise 16
const contentSection = document.getElementById("content");
const paragraphs = contentSection.querySelectorAll("p");

paragraphs.forEach(function (p) {
  p.classList.add("highlight");
});
