function exercise_06() {
  /*

    Exercise 6

    1. Create a variable named 'message' and assign it any String value you want
    2. Create a new variable named 'upper'.
        Using the toUpperCase() String method, assign 'upper' an upper-cased
        version of your 'message' variable. Then log 'upper' to the console.
    3. Create a new variable named 'lower'.
        Using the toLowerCase() String method, assign 'lower' a lower-cased
        version of your 'message' variable. Then log 'lower' to the console
    4. Create a new variable named 'length'.
        Using the 'length' property that every String type value has, log the
        length of your 'message' variable to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let message = "Welcome to the FlexTech program!";
  let upper;
  upper = message.toUpperCase();
  console.log(upper);
  let lower;
  lower = message.toLowerCase();
  console.log(lower);
  console.log("The length of my message is", message.length, "characters");

  // CODE IN THE OPEN LINES ABOVE
}
