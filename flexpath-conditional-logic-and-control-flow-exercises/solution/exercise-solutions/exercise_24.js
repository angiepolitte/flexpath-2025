function exercise_24() {
  /* 
   
    Exercise 24

    1. Create a variable named `day` and assign it the name of a day of the week.

    2. Create a switch statement that uses cascading `case` statements to print 
      "Weekend" if the day falls on the weekend. Otherwise, print "Weekday" if 
      it does not.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let day = "Saturday";
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Weekday");
  }

  // CODE IN THE OPEN LINES ABOVE
}
