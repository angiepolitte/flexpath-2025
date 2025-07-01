function exercise_19() {
  // DONT edit the code below
  const text = "JavaScript is an excellent language!";
  // DONT edit the code above

  /* 

    Exercise 19

    Include Method

    We have defined a variable above named `text`
    
    1. Using the String .includes() method, check to see if the 'text' variable contains the String 'JavaScript'.
        Log the result to the console.
    2. Then using the same method, check to see if the 'text' variable contains the String 'Python'.
        Log the result to the console
    3. Finally, check to see if the 'text' variable contains the specific string 'javascript'. 
       Notice that this time the word 'javascript' is all lowercase. 
    
       The includes() method should return 'false'.

       In a code comment below, explain why the includes() method returns 'true' when the string value we use is "JavaScript", 
       but returns 'false' when the string value we use is "javascript"
    
  */
  // CODE IN THE OPEN LINES BELOW

  console.log("Includes 'JavaScript':", text.includes("JavaScript"));
  console.log("Includes 'Python':", text.includes("Python"));
  console.log("Includes 'javascript':", text.includes("javascript"));

  // CODE IN THE OPEN LINES ABOVE
}
