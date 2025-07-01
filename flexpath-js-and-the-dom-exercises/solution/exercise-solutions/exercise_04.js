/*
Exercise 4: Navigating the DOM Tree

Description: 

Select the element with ID 'introduction' and access its parent node. 
Log the parent node's tag name to the console.
*/

// Exercise 4
const introSection = document.getElementById("introduction");
const parentNode = introSection.parentNode;
console.log("Parent Node Tag:", parentNode.tagName);
