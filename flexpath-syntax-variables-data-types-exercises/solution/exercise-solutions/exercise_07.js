function exercise_07() {
  /* 

    Exercise 7
    
    1. Create a variable named 'name' and give it a value matching your name.
    2. Then, create a variable named 'greeting'.
    3. Using a String template literal, assign this variable the message below, swapping out
       the '[name]' spot in the string with a dynamic reference to your 'name' variable
      
       "Hello, [name]! Welcome to JavaScript!"

       So if I set name = "Christian", this template literal would insert the 'name' variable inside of the 
       String and it would say:

       "Hello, Christian! Welcome to JavaScript!"

    4. Then, log the 'greeting' variable to the console
  */

  // CODE IN THE OPEN LINES BELOW

  const name = "Christian";
  const greeting = `Hello, ${name}! Welcome to JavaScript!`;
  console.log(greeting);

  // CODE IN THE OPEN LINES ABOVE
}
