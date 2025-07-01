function exercise_08() {
  /* 
   
    Exercise 8
    
    Array Index: 
		
		Copy the array from exercise_08 below.
		Use indexOf() to find the position of 4 in the array.
    Then, using bracket notation on the `numbers` array, 
    print the element before and the element after 4 in the array

    WARNING: Don't just manually type out and print 3 and 5 to the console.
    Use bracket notation on the array to select the element before
    and the element after the indexOf 4 in the array, and print THOSE to the 
    console.

  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const i = numbers.indexOf(4);
  console.log("before:", numbers[i - 1]);
  console.log("after:", numbers[i + 1]);
  // CODE IN THE OPEN LINES ABOVE
}
