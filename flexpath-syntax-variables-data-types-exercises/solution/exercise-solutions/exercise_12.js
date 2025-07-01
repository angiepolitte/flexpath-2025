function exercise_12() {
  /* 

    Exercise 12

    Delete Object Properties
    
    1. Copy the `book` object you created in exercise_09 and paste it below. Log it to the console.
    1. Then, using dot notation and the `delete` keyword, delete the 'author' property from the `book` object  
    2. Then, log your `book` variable to the console. Notice that your object no longer has the 'author' property

  */
  // CODE IN THE OPEN LINES BELOW

  let book = {
    title: "2666",
    author: "Roberto Bolano",
    publishedYear: 2004,
  };
  console.log("Before delete:", book);
  delete book.author;
  console.log("After delete:", book);

  // CODE IN THE OPEN LINES ABOVE
}
