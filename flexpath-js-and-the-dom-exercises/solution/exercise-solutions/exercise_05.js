/*
Exercise 5: Accessing Child Nodes

Description: 

Select the <ul> with ID 'item-list' and log the number of 
its child elements to the console.
*/

// Exercise 5
const itemList = document.getElementById("item-list");
console.log("Number of Child Elements:", itemList.children.length);
