function exercise_01() {
  /* 
   
    Exercise 1
    
    Data Types: 
		
		1. Create 4 variables to hold a value for each of these four data types:
				- String
				- Number
				- Boolean
				- Object
		2. Then, create a variable and DON'T assign it any value, just declare it. 
		3. Then, using the `typeof` keyword, log the type of each variable (including the unassigned one) to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  let stringType = "Hello, World!";
  let numberType = 42;
  let booleanType = true;
  let objectType = { key: "value" };
  let undefinedType;
  console.log(typeof stringType); // "string"
  console.log(typeof numberType); // "number"
  console.log(typeof booleanType); // "boolean"
  console.log(typeof objectType); // "object"
  console.log(typeof undefinedType); // "undefined"

  // CODE IN THE OPEN LINES ABOVE
}
