function exercise_16() {
  /* 
   
    Exercise 16
    
    Break and Continue: 
		
    Create a for loop that iterates from 1 to 10 and logs 
    each number to the console.

    Then, using the `continue` and `break` keywords, skip the loop iteration
    each time the number is odd, and then break the loop once it reaches 8.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let x = 1; x <= 10; x++) {
    console.log(x);
  }

  for (let x = 1; x <= 10; x++) {
    if (x % 2 === 1) continue;
    if (x === 8) break;
    console.log(x);
  }
  // CODE IN THE OPEN LINES ABOVE
}
