function exercise_13() {
  /* 
   
    Exercise 13
    
    Sets: 
		
		Create a new Set with three unique values
    Log the Set and its size to the console

    Then add 3 more unique items to the Set

    Log the Set and its size to the console

    Then, add an item to the Set that is already in it.
    Log the Set and its size to the console and notice that it 
    didn't add the duplicate

    Then use the .has() method to check if the set has 3 separate items
    
    Write a condition to store if the Set has all 3 items.
    Then write an if-else statement that prints "Has all three" if it does and
    "Does not contain all three" if it doesn't.

    Finally, delete three items from the Set and log the Set and it's size to
    the console.

  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set([1, 2, 3]);
  console.log("Original:", uniqueNumbers, "\nSize:", uniqueNumbers.size);
  uniqueNumbers.add(4);
  uniqueNumbers.add(5);
  uniqueNumbers.add(6);
  console.log(
    "New Members Added:",
    uniqueNumbers,
    "\nSize:",
    uniqueNumbers.size
  );

  uniqueNumbers.add(2);
  console.log(
    "Set won't add item already in Set:",
    uniqueNumbers,
    "\nSize:",
    uniqueNumbers.size
  );

  const has1 = uniqueNumbers.has(1);
  const has5 = uniqueNumbers.has(5);
  const has15 = uniqueNumbers.has(15);

  const hasAllThree = has1 && has5 && has15;

  if (hasAllThree) {
    console.log("Has all three");
  } else {
    console.log("Does not contain all three");
  }

  uniqueNumbers.delete(4);
  uniqueNumbers.delete(5);
  uniqueNumbers.delete(2);

  console.log(
    "Set after deletions",
    uniqueNumbers,
    "\nSize:",
    uniqueNumbers.size
  );
  // CODE IN THE OPEN LINES ABOVE
}
