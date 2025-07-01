import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_01();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
		Arrays: 
		
		1. Create a variable assigned to an array of five numbers and 
       log the array to the console.
		2. Then, Log the length of this array.
    
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2

		Access Array Elements: 
    
    1. Create a variable assigned to an array of five numbers.
		2. Log the first and last elements of the numbers array to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Add to Array: 
		
		Create a variable assigned to an empty array.
		Use push() to add a number to the end of the array five times.
		Then, log the array
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4

    Add to Beginning: 
		
		Create an array of 5 strings. 
		Use unshift() to add a number to the beginning of the array.
    
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Remove from Array: 

		Create a variable assigned to an array of 5 strings. 
		
		Use pop() to remove the last item and log it to the console
    Then log the array
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
   
    Exercise 6
    
    Remove from Beginning: 
		
		Create a variable assigned to an array of 5 numbers.
		Use shift() to remove the first item and log it to the console.
    Then, log the array to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_07() {
  /* 
   
    Exercise 7
    
    Create a variable assigned an array containing the numbers from 1 to 10.
		Check if the number 7 is in the array.
    If it is log the message "Item is in the array!" to the console
    Otherwise log the message "Item not present in the array".
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

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

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9
    
    Splice Array: 
		
		Copy the array from exercise_08 and paste it below.
		Use splice() to remove the second item in the array.
    Then print the array to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10

    Maps: 
		
		Create a new Map, and set values for these 3 keys:
    - name
    - age
    - job

    Then log this Map to the console

    Then create an object literal with these property/value pairs
    and log it to the console.

    Notice the difference on how it appears when logged to the console.
    
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11
    
    Get from Map: 
		
		Copy the Map creation code from exercise_10 and paste it below
		Use the .get() method on the Map to retrieve the value for the "name" key.
    Then, insert it into a string literal with the message:

    `This person's name is [nameValue]`

    Then log this to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  /*
   Answer info:
   This is how you instantiate a new map with values
   Notice, you pass it an array of multiple sub-arrays, each containing two
   elements each:
   - The first element the name of the key
   - The second element, the value of that key
  */

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

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

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

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

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14
    
		While Loop: 
		
		Use a while loop and the increment operator to log numbers from 1 to 5.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  /* 
   
    Exercise 15
    
    Do-While Loop: 
		
		Use a do-while loop and the decrement operator to log numbers from 28 to 1.

    Then add a conditional inside the loop to only print the number if it is 
    divisible by 7 OR 4
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Break and Continue: 
		
    Create a for loop that iterates from 1 to 10 and logs 
    each number to the console.

    Then, using the `continue` and `break` keywords, skip the loop iteration
    each time the number is odd, and then break the loop once it reaches 8.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  // DONT edit the code below
  const checkoutItems = [
    { item: "toilet paper", price: 17.99, type: "toiletry" },
    { item: "1lb ground beef", price: 6.99, type: "food" },
    { item: "Tooth brush 3 pack", price: 7.99, type: "toiletry" },
    { item: "Iphone Charging Cable", price: 12.49, type: "electronics" },
    { item: "Chips", price: 3.49, type: "food" },
    { item: "Xbox Gift Card", price: 25, type: "gift card" },
    { item: "12 pack Diet Coke", price: 9.99, type: "food" },
    { item: "Visa Gift Card", price: 160, type: "gift card" },
    { item: "Vizio 50 inch tv", price: 299, type: "electronics" },
    { item: "3lb bag apples", price: 8.99, type: "gift card" },
    { item: "a banana", price: 20, type: "food" },
    { item: "5lb protein powder", price: 35, type: "food" },
    { item: "Dumbbell Set", price: 80, type: "fitness equipment" },
    { item: "10lb bag rice", price: 18.25, type: "food" },
    { item: "gallon vitamin d milk", price: 3.49, type: "food" },
    { item: "12pk eggs", price: 7.99, type: "food" },
    { item: "5pk Uncrustables", price: 10.99, type: "food" },
    { item: "5 bags steamable brocolli", price: 7, type: "food" },
  ];
  // DONT edit the code above
  /* 
   
    Exercise 17
    
    Real World Application of For Loops: 

		We have defined an array above named `checkoutItems`.

    It contains objects that report on different properties of items bought 
    by a customer at a supermarket.


    For Loop Exercise pt. 1:

    Purpose: We want to see all the names of the items in our cart in an easy
             to read format. We want to automate this in case our checkout
             cart becomes very large, making the time to manually write this 
             information out a burden.

    1. In the space below, create a variable named `itemNames` and assign an empty
       array to it.
    2. Then, using a basic for loop, iterate through all elements in the 
       `checkoutItems` array and add the `item` property value of each object to
       the `itemNames` array. 
    3. Then, below this basic for loop, 
       write a for-of loop that logs each of the itemNames to the console.
       
       Before and after the for-of loop, write a console.log to give this
       information a header (like "Items in Checkout Cart") and a footer ("--------")
       to make the information easier to read in the console.


    For Loop Exercise pt. 2:

    Purpose: We want to see all the unique types of items we purchased 
             in an easy to read format. 

    1. Create a new variable named `itemTypes` that stores a new empty Set.
       Place this variable next to the `itemNames` variable declaration from
       pt. 1 of this exercise.
    2. Then, add a new line within the basic for loop from pt. 1 that adds the `type`
       property value of each object to the `itemTypes` set.
    3. Then, write a for-of loop after the for-of loop from pt. 1
       that logs each of the unique types from the cart to the console.
       
       Before and after the for-of loop, write a console.log to give this
       information a header (like "Unique Item Types") and a footer ("--------")
       to make the information easier to read in the console.

    For Loop Exercise pt. 3

    Purpose: We want to see how much money we spent per unique item type. 
             We want to automate this task so we can keep an accurate track of
             our areas of personal spending.

    1. Create a new variable named `sumPricePerType` and assign it an empty
       object literal. 
       Place this variable next to the others from pt.1 and pt. 2
    2. Add a new line within the basic for loop from pt. 1 
       that grabs the current elements 'price'. 
    3. Then, see if the object `sumPricePerType` has a 'type' property that matches
       the current element's type.

       If it does, grab it's value and add the current price to it. Then, set the 
       value of the 'type' in the `sumPricePerType` object to be this new sum, 
       rounded to two decimal points.

       If it does not, set the value of the 'type' in the `sumPricePerType` object
       to be the price of the current item, rounded to two decimal points.

    4. Then, using a for-in loop on the `sumPricePerType` object, log the total
       amount spent on each unique item type to the console. Write this for-in
       loop after the for-of loop from pt. 2
       
       Before and after the for-in loop, write a console.log to give this
       information a header (like "Total sum for each type") and a footer ("--------")
       to make the information easier to read in the console.

    For Loop Exercise pt. 4

    Purpose: We now want to see the total amount of money we spent on everything

    1. Thankfully we already have a variable we can use to answer the above prompt!
       Create a new variable named `totalSum` and set it to 0.
       Then, using a for-in loop on `sumPricePerType`, sum up the spending totals
       for each 'type' using the `totalSum` variable to hold the overall sum.
    2. Then, after the for-in loop from pt. 3
       log this information to the console, surrounded with a header that
       says "Total sum for items purchased" and a footer that says "-------"
    3. Finally, we want to see this amount printed in USD (U.S. Dollar) 
       formatting to the console.
       Use Intl.NumberFormat with the proper options to edit the code written in
       the step above to format the `totalSum` value as USD and print it to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}
