function exercise_20() {
  /* 
   
    Exercise 20
    Switch Statement: 

    1. Create a variable named `fruitColor` and 
       assign it a string for a color name.

    2. Then, write a switch statement that will log "Apple" if the 
       fruitColor is red, "Banana" if the fruit color is yellow, and 
       "Unknown fruit" as a default condition.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let fruitColor = "red";
  switch (fruitColor) {
    case "red":
      console.log("Apple");
      break;
    case "yellow":
      console.log("Banana");
      break;
    default:
      console.log("Unknown fruit");
  }

  // CODE IN THE OPEN LINES ABOVE
}
