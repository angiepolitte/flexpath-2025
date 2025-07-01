function exercise_13() {
  // DONT edit the code below
  const original = { name: "Alice" };
  const copy = original;
  // DONT edit the code above

  /* 

    Exercise 13

    Object Pass by Reference
    
    Notice the code above. We create an `original` object with the name set to 'Alice'.
    We then create a new variable `copy` that has the `original` variable assigned as its value.
    Due to how objects are stored in JavaScript, the `copy` variable doesn't actually contain
    a unique copy of the `original` object. It simply stores a REFERENCE to the `original` object.

    1. In the space below, log the 'name' property of the `original` object variable to the console. 
    2. In the space below, using dot notation, change the 'name' property of the `copy` object to the value "Bob"
    3. Then, log the 'name' property of the `original` object variable to the console again. 
    
    LOOK! It's 'name' property was changed too!

  */
  // CODE IN THE OPEN LINES BELOW

  console.log("Original Name: ", original.name);
  copy.name = "Bob";
  console.log("Original Name: ", original.name);

  // CODE IN THE OPEN LINES ABOVE
}
