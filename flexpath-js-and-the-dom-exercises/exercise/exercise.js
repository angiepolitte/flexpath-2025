/*
Exercise 1: Accessing Elements with getElementById

Description: 

Select the element with the ID 'main-title' and change its text content 
to "Welcome to the DOM Manipulation Page".
*/

const mainTitle = document.getElementById("main-title");
console.log(mainTitle);
mainTitle.textContent = "Welcome to the DOM Manipulation Page";

/*
Exercise 2: Accessing Elements with querySelector

Description: 

Use querySelector to select the first <p> element with the 
class 'intro-text' and change its color to blue.
*/

const introText = document.querySelector(".intro-text");
introText.style.color = "blue";
/*
Exercise 3: Accessing Multiple Elements with querySelectorAll

Description: 

Use querySelectorAll to select all elements with the class 'article-text' and 
set their font size to 18px.
*/

const articleTexts = document.querySelectorAll(".article-text");
articleTexts.forEach(function (paragraph) {
  paragraph.style.fontSize = "18px";
});

/*
Exercise 4: Navigating the DOM Tree

Description: 

Select the element with ID 'introduction' and access its parent node. 
Log the parent node's tag name to the console.
*/

const intro = document.getElementById("introduction");
const parentNode = intro.parentNode;
console.log("Parent Node Tag: ", parentNode.tagName);
/*
Exercise 5: Accessing Child Nodes

Description: 

Select the <ul> with ID 'item-list' and log the number of 
its child elements to the console.
*/

const itemsInList = document.getElementById("item-list");
const childrenInList = itemsInList.children;
console.log("Number of Children in List: ", childrenInList.length);

/*
Exercise 6: Updating Inner HTML

Description: 

Change the inner HTML of the element with ID 'introduction' to 
include a new paragraph saying "This content has been updated!".
*/

// const updatedContent = document.getElementById("introduction");
intro.innerHTML += "<p>This content has been updated<p>";

/*
Exercise 7: Changing Attributes with setAttribute

Description: 

Assume there's an image with ID 'main-image' in your HTML. 
Change its src attribute to point "image2.png".
*/

const image = document.getElementById("main-image");
image.setAttribute("src", "image2.png");

/*
Exercise 8: Adding an Event Listener

Description: 

Add an event listener to the button with ID 'alert-button' that 
shows an alert with the message "Button Clicked!" when clicked.
*/

// const alertButton = document.getElementById("alert-button");
// alertButton.addEventListener("click", function () {
//   alert("Button Clicked");
// });

/*
Exercise 9: Removing an Event Listener

Description: 

Remove the code from Exercise 8.

In this file, add an event listener to the button with ID 'alert-button' that 
shows an alert when clicked. 

Then, remove the event listener so that clicking the button no longer 
shows the alert after 5 seconds.
*/
// const alertButton = document.getElementById("alert-button");

// function buttonAlerted() {
//   alert("Button Clicked");
// }

// alertButton.addEventListener("click", buttonAlerted);

// setTimeout(function () {
//   alertButton.removeEventListener("click", buttonAlerted);
//   console.log("Event Listener Removed");
// }, 5000);

const alertButton = document.getElementById("alert-button");
// alertButton.addEventListener("click", function () {
//   alert("Button Clicked!");
// });

function showAlert() {
  alert("Button Clicked!");
}

alertButton.addEventListener("click", showAlert);

// Remove the event listener after 5 seconds
setTimeout(function () {
  alertButton.removeEventListener("click", showAlert);
  console.log("Event listener removed");
}, 5000);

/*
Exercise 10: Handling Keyboard Events

Description: 

Add an event listener to the document that logs the 
key and code of any key pressed by the user.
*/

document.addEventListener("keydown", function (event) {
  console.log("Key Pressed: ", event.key, "KeyCode: ", event.code);
});

/*
Exercise 11: Event Propagation

Description: 

Add click event listeners to the <section> with ID 'interactive' and to 
the <button> with ID 'color-button'.

In each event handler, log a message indicating which element was clicked. 

Observe event bubbling.
*/

// const interActive = document.getElementById("interactive");
// const colorButton = document.getElementById("color-button");

// interActive.addEventListener("click", function () {
//   console.log("Interactive clicked");
// });
// colorButton.addEventListener("click", function () {
//   console.log("Color Button clicked");
// });

/*
Exercise 12: Stopping Event Propagation

Description: 

Modify the previous exercise to prevent the click event on 
the button from bubbling up to the section.
*/
const interActive = document.getElementById("interactive");
const colorButton = document.getElementById("color-button");

interActive.addEventListener("click", function () {
  console.log("Interactive clicked");
});
// colorButton.addEventListener("click", function (event) {
//   console.log("Color Button clicked");
//   event.stopPropagation();
// });

/*
Exercise 13: Using console.log for Debugging

Description: 

Inside the event listener for the color-button, 
log the current background color of the button before changing 
it to light green.
*/

colorButton.addEventListener("click", function () {
  console.log("Color: ", colorButton.style.backgroundColor);
  colorButton.style.backgroundColor = "lightgreen";
});

/*
Exercise 14: Creating and Appending New Elements

Description: 

Create a new <li> element with the text "Item 4" and append it to 
the <ul> with ID 'item-list'.
*/

const newItem = document.createElement("li");
newItem.textContent = "Item 4";
itemsInList.appendChild(newItem);

/*
Exercise 15: Removing Elements from the DOM

Description: 

Remove the first <li> element from the <ul> with ID 'item-list'.
*/

const firstItem = itemsInList.querySelector("li");
firstItem.remove();

/*
Exercise 16: Using classList.add

Description: 

Add a class 'highlight' to all <p> elements inside the 
section with ID 'content'.
*/

const contentSection = document.getElementById("content");
const paragraphs = contentSection.querySelectorAll("p");

paragraphs.forEach(function (p) {
  p.classList.add("highlight");
});

/*
Exercise 17: Using classList.toggle

Description: 

Add a click event listener to the button with ID 'color-button' that 
toggles the class 'active' on itself.
*/

colorButton.addEventListener("click", function () {
  colorButton.classList.toggle("active");
});

/*
Exercise 18: Preventing Default Behavior

Description: 

Add a submit event listener to the form with ID 'input-form' that 
prevents the form from submitting and logs the input value to the console.
*/
const form = document.getElementById("input-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  console.log("Submission: ", inputText);
});

/*
Exercise 19: Simple Drag and Drop

Description: 

Make the element with ID 'drag-source' draggable and implement 
drag and drop functionality to move it to the element with ID 'drop-target'.
// */

const dragSource = document.getElementById("drag-source");
const dropTarget = document.getElementById("drop-target");

// dragSource.addEventListener("dragstart", function (event) {
//   event.dataTransfer.setData("text/plain", event.target.id);
// });

// dropTarget.addEventListener("dragover", function (event) {
//   event.preventDefault();
// });

// dropTarget.addEventListener("drop", function (event) {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("text/plain");
//   const draggedElement = document.getElementById(data);
//   dropTarget.appendChild(draggedElement);
// });

/*
Exercise 20: Using dataTransfer in Drag and Drop

Description: 

Use event.dataTransfer to pass custom data during the drag and drop operation 
in the previous exercise. 

For example, pass a message and log it when the drop occurs.
*/

dragSource.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", "This is custom data");
});

dropTarget.addEventListener("dragover", function (event) {
  event.preventDefault();
});

dropTarget.addEventListener("drop", function (event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  console.log("Dropped data:", data);
  dropTarget.appendChild(dragSource);
});

/*
Exercise 21: Cloning Nodes

Description: 

Clone the element with ID 'main-title' and 
append the clone to the <footer> element.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 22: Modifying Styles with JavaScript

Description: 

Change the background color of the <body> when the 
user moves the mouse over the <header> element.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 23: Debouncing Function Calls

Description: 

Implement a debounced resize event handler that logs the 
new window size after the user stops resizing the browser window for 
500 milliseconds.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 24: Optimizing DOM Manipulations

Description: 

Add 100 new list items to ID 'item-list' efficiently by 
using a DocumentFragment. You can create one by using:

`document.createDocumentFragment()`
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 25: Using Event Delegation

Description: 

Instead of adding event listeners to each <li> in 'item-list', 
add a single event listener to 'item-list' that logs the 
text of the clicked list item.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;
