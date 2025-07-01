function exercise_11() {
  /* 

    Exercise 11

    Modifying Objects
    
    Change the `publishedYear` of your book object and add a new property for `genre`.
    
    1. Copy the `book` object you created in exercise_09 and paste it below.
    2. Then, using dot notation, change the value tied to the 'publishedYear' property of your `book` object
    3. Then, using bracket notation, create a new property named `genre` for your 'book' object and assign it a String value
    4. Then, log your `book` variable to the console

  */
  // CODE IN THE OPEN LINES BELOW

  let book = {
    title: "2666",
    author: "Roberto Bolano",
    publishedYear: 2004,
  };

  book.publishedYear = 2024;
  book["genre"] = "Detective Fiction";

  console.log("Look at these changes!: ", book);

  // CODE IN THE OPEN LINES ABOVE
}
