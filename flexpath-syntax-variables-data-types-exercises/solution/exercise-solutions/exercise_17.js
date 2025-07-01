function exercise_17() {
  // DONT edit the code below
  const pastDate = new Date(2024, 9, 1); // October 1, 2024
  // DONT edit the code above

  /* 

  Exercise 17

  Date Arithmetic
  
  We have defined a variable above that contains a Date object for a date in the past.

  1. In the space below, create a new `Date` object and assign it to the variable 'currentDate'. 
  2. Find the time difference between the currentDate and the pastDate and assign it to a variable
  3. Divide this time difference by the following operation to convert it to days:
      (1000 * 60 * 60 * 24)
  2. Using Math.ceil, round this value up and then log it to the console

  */
  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();
  const timeDifference = currentDate - pastDate;
  const timeToDays = timeDifference / (1000 * 60 * 60 * 24);
  const daysDifference = Math.ceil(timeToDays);
  console.log("Day Difference:", daysDifference);

  // CODE IN THE OPEN LINES ABOVE
}
