function exercise_23() {
  /* 
   
    Exercise 23
    
    Combining Logical Operators

    1. Create a variable named `isProgramMember` and assign it a value of true or false.
    2. Create a variable named `age` and assign it a value between 10 and 85

    3. Write a condition that checks if isProgramMember is true AND that 
       their age is below 14 OR over 65
    
       Write this condition in one line using parenthesis, 
       the OR `||` operator, and the AND `&&` operator.

    4. If the condition returns true, log 
       "Eligible for special renewal discount" to the console.
        Otherwise, log "Not eligible for special renewal discount" to the console.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let isProgramMember = true;
  let ageCheck = 22;
  const eligibleForDiscount =
    isProgramMember && (ageCheck < 14 || ageCheck > 65);
  if (eligibleForDiscount) {
    console.log("Eligible for special renewal discount");
  } else {
    console.log("Not eligible for special renewal discount");
  }

  // CODE IN THE OPEN LINES ABOVE
}
