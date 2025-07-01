/*
Exercise 20: Using dataTransfer in Drag and Drop

Description: 

Use event.dataTransfer to pass custom data during the drag and drop operation 
in the previous exercise. 

For example, pass a message and log it when the drop occurs.
*/

// Exercise 20

dragSource.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", "This is custom data");
});

dropTarget.addEventListener("drop", function (event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  console.log("Dropped data:", data);
  dropTarget.appendChild(dragSource);
});
