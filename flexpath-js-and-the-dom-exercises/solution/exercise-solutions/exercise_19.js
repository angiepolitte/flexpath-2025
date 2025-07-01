/*
Exercise 19: Simple Drag and Drop

Description: 

Make the element with ID 'drag-source' draggable and implement 
drag and drop functionality to move it to the element with ID 'drop-target'.
*/

// Exercise 19
const dragSource = document.getElementById("drag-source");
const dropTarget = document.getElementById("drop-target");

dragSource.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});

dropTarget.addEventListener("dragover", function (event) {
  event.preventDefault();
});

dropTarget.addEventListener("drop", function (event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  dropTarget.appendChild(draggedElement);
});
