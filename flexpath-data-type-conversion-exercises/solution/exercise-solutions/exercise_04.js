function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
		
		1. Create a variable that attempts to convert a non-numeric string to a number
    2. Then, using the method isNan(), check if this variable is Not a Number (NaN)

  */

  // CODE IN THE OPEN LINES BELOW

  let invalidNumber = Number("not a number");
  console.log(isNaN(invalidNumber)); // true

  // CODE IN THE OPEN LINES ABOVE
}
