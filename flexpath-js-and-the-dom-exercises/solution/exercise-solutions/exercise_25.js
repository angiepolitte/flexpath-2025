/*
Exercise 25: Using Event Delegation

Description: 

Instead of adding event listeners to each <li> in 'item-list', 
add a single event listener to 'item-list' that logs the 
text of the clicked list item.
*/

// Exercise 25
itemList.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});
