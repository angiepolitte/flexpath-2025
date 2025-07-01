function exercise_08() {
  // DONT edit the code below
  const jsonStringToParse = '{"name": "Charlie", "age": 35}';
  // DONT edit the code above

  /* 
		 
			Exercise 8
			
			JSON Parsing: 
			
			1. Using the JSON string stored in `jsonStringToParse`, parse this string into an object
				 and then print one of its properties.
	
		*/

  // CODE IN THE OPEN LINES BELOW

  let parsedObject = JSON.parse(jsonStringToParse);
  console.log(parsedObject.name); // "Charlie"

  // CODE IN THE OPEN LINES ABOVE
}
