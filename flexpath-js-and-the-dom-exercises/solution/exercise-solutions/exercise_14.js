/*
Exercise 14: Creating and Appending New Elements

Description: 

Create a new <li> element with the text "Item 4" and append it to 
the <ul> with ID 'item-list'.
*/

// Exercise 14
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
itemList.appendChild(newItem);
