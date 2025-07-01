/*
Exercise 18: Preventing Default Behavior

Description: 

Add a submit event listener to the form with ID 'input-form' that 
prevents the form from submitting and logs the input value to the console.
*/

// Exercise 18
const inputForm = document.getElementById("input-form");
inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  console.log("Form submitted with:", inputText);
});
