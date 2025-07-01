function exercise_15() {
  /* 
   
    Exercise 15
    
    Locale Date Formatting

    1. Create a new Date object and assign it to a variable
    2. Call the toLocaleDateString method on it and convert it to an en-US format date.
       Log it to the console.
    3. Call the toLocaleDateString method on it again and convert it to an en-GB format date.
       Log it to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  let currentDate = new Date();
  console.log(currentDate.toLocaleDateString("en-US"));
  console.log(currentDate.toLocaleDateString("en-GB"));

  // CODE IN THE OPEN LINES ABOVE
}
