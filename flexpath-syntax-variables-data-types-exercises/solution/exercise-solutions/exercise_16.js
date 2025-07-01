function exercise_16() {
  /* 

    Exercise 16

    Custom Dates
    
    1. Create a new variable `birthday` and assign it a new Date object that represents your birthday.
        REMEBER - months are zero-indexed in the Date object

        To generate a date for a 01/29/1994 birthday, the code would look like this:
        const birthday = new Date(1994, 0, 29)

    2. Then, convert it to a date string using the method toDateString.
    3. Then, log that string to the console


  */
  // CODE IN THE OPEN LINES BELOW

  const birthday = new Date(1994, 0, 29);
  let birthdayString = birthday.toDateString(); // January 29, 1994 (months are zero-indexed)
  console.log("Birthday:", birthdayString);

  // CODE IN THE OPEN LINES ABOVE
}
