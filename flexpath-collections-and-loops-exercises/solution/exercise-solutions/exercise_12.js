function exercise_12() {
  /* 
   
    Exercise 12
    
    Delete from Map:
		 
		Copy the Map creation and key-value pair setting code from exercise_11 and 
    paste it below
    Log the Map and it's size to the console

		Then, use the Map's delete method to delete the entry with the key "age"
    Log the Map and it's size to the console again
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["job", "Software Developer"],
  ]);
  console.log(userMap);
  console.log("Size:", userMap.size);
  userMap.delete("age");
  console.log(userMap);
  console.log("Size:", userMap.size);
  // CODE IN THE OPEN LINES ABOVE
}
