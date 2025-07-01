function exercise_19() {
  /* 
   
    Exercise 19
    
    Date Arithmetic: 

    1. Create a variable to hold a new Date object for today's date.
    2. Create a variable to hold a new Date object for a future date in 2025
    3. Find the time difference between the future date and the current date
    4. Convert this time difference to days
    5. Log the day difference to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  let currentDate = new Date();
  let futureDate = new Date(2025, 0, 25); // January 25, 2025
  let timeDifference = futureDate - currentDate;
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  console.log(daysDifference); // Number of days until January 25, 2025

  // CODE IN THE OPEN LINES ABOVE
}
