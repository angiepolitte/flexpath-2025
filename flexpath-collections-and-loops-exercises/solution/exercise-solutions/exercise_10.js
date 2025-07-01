function exercise_10() {
  /* 
   
    Exercise 10

    Maps: 
		
		Create a new Map, and set values for these 3 keys:
    - name
    - age
    - job

    Then log this Map to the console

    Then create an object literal with these property/value pairs
    and log it to the console.

    Notice the difference on how it appears when logged to the console.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("job", "Software Developer");
  console.log(userMap);

  console.log({
    name: "John",
    age: 25,
    job: "Software Developer",
  });
  // CODE IN THE OPEN LINES ABOVE
}
