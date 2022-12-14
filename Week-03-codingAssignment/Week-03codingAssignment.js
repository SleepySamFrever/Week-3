//Week-03 Coding Assignment
console.log('Week-03 Coding Assignment');



//Creat an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log(ages[ages.length-1] - ages[0]);

//Add a new age to your array and repeat the step above to ensure ti is dynamic(works for arrays of different lengths)
ages.push(64);
console.log(ages[ages.length-1] - ages[0]);

//Use a loop to iterate through the array and calculate the average number of letter per name. Print the result to the console.
//We will need to create a variable to keep track of the value.
let accumulator = 0
for(i = 0; i < ages.length; i++){
    accumulator += ages[i];
} 
console.log(Math.round(accumulator/ages.length));

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//Use a loop to iterate through the array and calculate the average number of letters per name. Pring the result to the console.
//As with before we need to create a variable
let totalLetters = 0
for(i = 0; i < names.length; i++){
    totalLetters+= names[i].length;
}
console.log(Math.round(totalLetters/names.length));

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result.
let newName = "";
for (let i = 0; i < names.length; i++){
    newName += names[i] + " ";
    }
//Using '.trim' eliminates unwanted spaces.
console.log(newName.trim());

//How do you access the last element of an array?
//Since arrays use a 0 index, if we use .length to get the length of the array, then subtract one, we end up with the last element.
console.log(names[names.length - 1]);

//How do you access the first element of an array?
//Since arrays use a 0 index, we can simply call for the element at position '0'
console.log(names[0]);

//Create a new array called nameLengths.
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}console.log("The nameLengths array", nameLengths);




//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function homeworkFunction(word, n){
//I can use console.log(word.repeat(n)); or a loop,
//I need a new empty variable
    var repeated = '';
    for (i = 0; i < n; i++){
        repeated += word;
    }
    return repeated
}
console.log(homeworkFunction('Couches', 10));

//Write a function that takes two parameters, firstName and lastName, and returns a full name
//The full name should be the first and the last name separated by a space
function createFullName(firstName, lastName){
   return firstName + ' ' + lastName;
}
console.log(createFullName('Tyler', 'Lambert'))

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function isGreaterThan100(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
        //Printing the position of the i in the array to console(Test)
        console.log("the position in the array:", array[i]);
        console.log("total length", sum);
    } if (sum > 100){
        return true;
    } else{
        return false;
    }
}
console.log(isGreaterThan100(ages));

//Write a function that takes an array of numbers and returns the average of all the elements in the array
function averageOfElements(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }return sum/array.length;
}
console.log(averageOfElements(ages));
//We can use "Math.round" to get a nice round number
console.log(Math.round(averageOfElements(ages)));


//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
function isFirstGreater(array1, array2){
    let array1Sum = 0;
    for (i = 0; i < array1.length; i++){
        array1Sum+= array1[i];
    }let array1Average = array1Sum/array1.length;
    let array2Sum = 0;
//Now we do the same for our 2nd array.
    for (i = 0; i < array2.length; i++){
        array2Sum+= array2[i];
    }let array2Average = array2Sum/array2.length;
    if(array1Average > array2Average)
        return array1Average > array2Average ? true : false;
    
}console.log(isFirstGreater([12, 56, 22, 2, 97], [46, 11, 1, 4, 22]));

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
let isHotOutside = true;
moneyInPocket = 100
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside = true && moneyInPocket > 10.5){
        return 'true';}
}
console.log(willBuyDrink(true, 100));

//!!//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function canIPlayVideoGames(choresDone, kidsAsleep){
    if(choresDone == true && kidsAsleep == true){
        return "It's game time!"
    }else{
        return "Not yet."
    }
}

//Now let's test our function with a few different values
console.log(canIPlayVideoGames(true, true));
console.log(canIPlayVideoGames(false, true));
console.log(canIPlayVideoGames(true, false));
console.log(canIPlayVideoGames(false, false));