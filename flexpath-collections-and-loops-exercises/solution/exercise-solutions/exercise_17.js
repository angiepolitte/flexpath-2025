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

  const itemNames = []; // pt. 1
  const uniqueTypes = new Set(); // pt. 2
  const sumPricePerType = {};

  for (let i = 0; i < checkoutItems.length; i++) {
    //
    const itemName = checkoutItems[i]["item"]; // pt. 1
    itemNames.push(itemName); // pt. 1
    const type = checkoutItems[i]["type"]; // pt. 2
    uniqueTypes.add(type); // pt. 2
    const price = checkoutItems[i]["price"]; // pt. 3

    if (!sumPricePerType.hasOwnProperty(type)) {
      // pt. 3
      sumPricePerType[type] = 0; // pt. 3
    }
    const newSum = price + sumPricePerType[type]; // pt. 3
    sumPricePerType[type] = Math.round(newSum * 100) / 100; // pt. 3
  }

  console.log("Item Names:"); // pt. 1
  for (let item of itemNames) {
    console.log("Item:", item);
  }
  console.log("--------------");

  console.log("Unique item types:"); // pt. 2
  for (let type of uniqueTypes) {
    console.log("Unique Type:", type);
  }
  console.log("--------------");

  console.log("Total sum for each type"); // pt. 3
  for (let key in sumPricePerType) {
    console.log(`Sum for ${key} items: ${sumPricePerType[key]}`);
  }
  console.log("--------------");

  console.log("Total sum for items purchased"); // pt. 4
  let totalSum = 0;
  for (let key in sumPricePerType) {
    totalSum += sumPricePerType[key];
  }
  console.log(
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalSum)
  );
  console.log("--------------");

  // CODE IN THE OPEN LINES ABOVE
}
