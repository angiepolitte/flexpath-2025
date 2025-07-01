function exercise_15() {
  /* 

    Exercise 15

    Date Methods 
    
    1. Create a new `Date` object and assign it to the variable 'currentDate'. 
    2. Then, Extract the year, month, and day from the current date using the `Date` object methods. 
        Log each of these to the console. 
        
        REMEMBER - months are zero-indexed in the Date object, so you'll need to add 1 to the result
        to get the proper display value for the current month

  */
  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();
  console.log("Year: ", currentDate.getFullYear());
  console.log("Month: ", currentDate.getMonth() + 1); // Months are zero-indexed
  console.log("Day: ", currentDate.getDay());

  // CODE IN THE OPEN LINES ABOVE
}
