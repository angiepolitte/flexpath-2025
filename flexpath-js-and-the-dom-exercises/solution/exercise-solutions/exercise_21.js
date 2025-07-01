/*
Exercise 21: Cloning Nodes

Description: 

Clone the element with ID 'main-title' and 
append the clone to the <footer> element.
*/

// Exercise 21
const mainTitleClone = mainTitle.cloneNode(true);
const footer = document.querySelector("footer");
footer.appendChild(mainTitleClone);
