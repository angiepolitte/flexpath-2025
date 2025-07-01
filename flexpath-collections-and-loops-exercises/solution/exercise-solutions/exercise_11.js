function exercise_11() {
  /* 
   
    Exercise 11
    
    Get from Map: 
		
		Copy the Map creation code from exercise_10 and paste it below
		Use the .get() method on the Map to retrieve the value for the "name" key.
    Then, insert it into a string literal with the message:

    `This person's name is [nameValue]`

    Then log this to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  /*
   Answer info:
   This is how you instantiate a new map with values
   Notice, you pass it an array of multiple sub-arrays, each containing two
   elements each:
   - The first element the name of the key
   - The second element, the value of that key
  */
  let userMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["job", "Software Developer"],
  ]);
  const name = userMap.get("name");
  const msg = `This person's name is ${name}`;
  console.log(msg);
  // CODE IN THE OPEN LINES ABOVE
}
