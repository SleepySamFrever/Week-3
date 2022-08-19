//Let's talk about Intermediate Array Methods.
console.log("Let's talk about Intermediate Array Methods");

//The array object comes with powerful methods to utilize data.
//Here are just 5 important methods on the array.

/*
Map-used to invoke a function for each element in an array, then create a new array from the returned values of each iterations function invokation.
    Useful for when we need to transform data in an array in some manner.
*/

//Here is an example.

//Create an array

let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];

//Use Map method to create new array that has the lengths of the strings in the above array.
//Map takes a function and calls the function for each element in the array. The return is going to be an element in our new array.
//First time function gets called it passes in the the "Sam" element from above, so on and so forth.

let lengths = names.map(function(element) {
    return element.length
});

//If we log our new "lengths" array we will now see the lengths of the names in the first array.

console.log(lengths);

//Summary:Map method on the array takes a function, performs function for each element in the array that you call the map method on.
//Summary:Returns a new array with results of all the return values from the function.

/*Reduce-Useful for taking all the values in an array and reducing them down to one value.
    This final value is the result of a "reducer" function that we pass in as an argument.
    Can be used in many creative ways, We want to use it any time we need to perform an operation on all element in an array that results in a single value.*/

//Examples:summing up values, finding average of values, or returning an object with properties of multiple objects.

//We can use it to find the sum of our lengths array using reducer.

let sum = lengths.reduce(function(accumulator, currentValue){
//The "accumulator" or 1st parameter of the function passed into the reduce method is used to accumulate all the values together.
//Each time the function executes, the accumulator will be what was returned by the previous execution.
//The second parameter is the "currentValue" or element in the array
    return accumulator + currentValue;
//Reduce can also take a 2nd parameter if need be after the function which is the initial value to start the accumulator at.
//If we wanted to find the sum of the array, but for some reason wanted to start at 10 we add a comma 10 as a 2nd parameter.
//The function is the first parameter.
//As with any method we can have multiple parameters.
}, 10);
console.log(sum);

/*Foreach-This method is similar to map in that it invokes a function for each element in an array.
    However, it doesn't return a new array.
    If we need to modify values then store them, the Map method is the better option.
    If we need to perform an action for each element in an array, and don't care about storing the results, Foreach is perfect.*/
    
//An example would be if we wanted to log out each element in the array.
//Could use a loop, or the Foreach method.

names.forEach(function(element){
    console.log(element);
});

/*Filter-This method invokes a function that returns a boolean value on each element in an array.
    Filter returns a new array that contains all the elements where the invoked method returns 'true'.
    This allows us to use a boolean expression to filter out specific elements and only keep ones that pass our boolean expression.*/

//For example we could filter for names with even number of characters.

let evens = names.filter(function(element){
    return element.length % 2 == 0;
});
//Now we log the new array that was created.
console.log(evens);

/*Splice-This method can be used to alter the contents of an array by adding, modifying, or removing elements from an array at a specific location.
    Quite a bit can be done with this method.
    Reading further documentation is recommended.*/

//For now a common example is to remove an elementfrom an array.

//First parameter is locations to start at (1 in this case)
//Second parameter is how many elements to remove.
let removedElement = names.splice(1, 1);
//The method returns an array of all the elements removed, not just a string. 
//Log will have square brackets because it's an array.
console.log(removedElement);

/*SUMMARY-Arrays are very powerful and come with great methods to help manage our data.
Its always a good idea to check out what methods are available using the "MDM" documentation.*/

