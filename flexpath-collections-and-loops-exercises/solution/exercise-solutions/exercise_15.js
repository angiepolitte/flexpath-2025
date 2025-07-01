function exercise_15() {
  /* 
   
    Exercise 15
    
    Do-While Loop: 
		
		Use a do-while loop and the decrement operator to log numbers from 28 to 1.

    Then add a conditional inside the loop to only print the number if it is 
    divisible by 7 OR 4
  
  */
  // CODE IN THE OPEN LINES BELOW
  let j = 28;
  do {
    console.log(j);
    j--;
  } while (j > 0);

  let x = 28;
  do {
    if (x % 7 === 0 || x % 4 === 0) {
      console.log(x);
    }
    x--;
  } while (x > 0);
  // CODE IN THE OPEN LINES ABOVE
}
