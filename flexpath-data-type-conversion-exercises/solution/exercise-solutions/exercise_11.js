function exercise_11() {
  /* 
   
    Exercise 11
    
    Locale Number Formatting: 
		
		1. Create a variable to hold a large number with 2 decimal points at the end of it
    2. Create a new Intl.NumberFormat object for the US locale
    3. Then, use this new objects `format` function to format the variable from step 1.
       Store the result in a new variable
    4. Log the new variable from step 3 to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  let numberToFormat = 9240012.15;
  const usFormatter = new Intl.NumberFormat("en-US");
  let formattedNumberUS = usFormatter.format(numberToFormat);
  console.log(formattedNumberUS); // "1,234,567.89"

  // CODE IN THE OPEN LINES ABOVE
}
