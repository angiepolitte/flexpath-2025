function exercise_16() {
  /* 
   
    Exercise 16
    
    Error Handling: 
		
		1. Write code that tries to parse invalid JSON and uses a try-catch block to handle the error.

  */

  // CODE IN THE OPEN LINES BELOW

  try {
    let invalidJson = JSON.parse("This is not JSON");
  } catch (error) {
    console.log("Error parsing JSON:", error.message);
  }

  // CODE IN THE OPEN LINES ABOVE
}
