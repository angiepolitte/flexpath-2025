function exercise_07() {
  /* 
   
    Exercise 7
    
    Create a variable assigned an array containing the numbers from 1 to 10.
		Check if the number 7 is in the array.
    If it is log the message "Item is in the array!" to the console
    Otherwise log the message "Item not present in the array".
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const inArray = numbers.includes(7);
  if (inArray) {
    console.log("Item is in the array!");
  } else {
    console.log("Item not present in the array");
  }
  // CODE IN THE OPEN LINES ABOVE
}
