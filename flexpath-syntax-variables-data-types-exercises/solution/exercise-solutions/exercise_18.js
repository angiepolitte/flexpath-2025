function exercise_18() {
  // DONT edit the code below
  const msgPart1 = "Hello";
  const msgPart2 = "World";
  // DONT edit the code above

  /* 

    Exercise 18

    String Concatenation

    We have defined two variables above: msgPart1 and msgPart2
    
    1. In the space below, use the `+` operator to create an overall string using these variables and whatever
    other strings are required to create the message "With Plus Operator: Hello World!"
    2. Log this message to the console

    3. Then, use a template literal to create the same message, dynamically inserting msgPart1 and msgPart2
    into the template literal to create the message "With Template Literal: Hello World!"
    4. Log this message to the console


  */
  // CODE IN THE OPEN LINES BELOW

  const withPlus = "With Plus Operator: " + msgPart1 + " " + msgPart2 + "!";
  console.log(withPlus);
  const withTemplateLiteral = `With Template Literal: ${msgPart1} ${msgPart2}!`;
  console.log(withTemplateLiteral);

  // CODE IN THE OPEN LINES ABOVE
}
