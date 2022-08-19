//Let's talk about functions.
console.log("Let's talk about functions");

//Functions turn a piece of code into a "module".
//Functions need these pieces: Functions keyword, name we wish to give function, (), and {}.

//The follow function prints numbers 0-99

function myFunction(){
    for(let i = 0; i < 100; i++){
        console.log(i);
    }
}

//Writing a function itself does not result in code being executed. They are similar to instructions.
//Nothing happens until function is actually applied or ran.

//In order to invoke function we use function name

myFunction();

//Note we can put anything inside function. Loops, conditions, variables, etc. Makes code reusable.
//Some functions takes input to make it more dynamic (parameters)
//Parameters are used when making functions and placed in the parentheses. Try to use no more than 3.
//Try to make sure a function accomplishes one thing, or consider splitting it into multiple functions.

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}

//Arguments are passed into parameters spaces.

createFullName('Tom', 'Sawyer')

//Parameters are like 'Parking spots' and Arguments are like 'Cars'.
//Parameters are place holders for values we will pass in later.
//Parameters are used when declaring function
//Arguments are used when invoking funciont

//Return statements are used typically at the end of a function to give a value back or "return" something.
//The return statement will end the function and return whatever value follows.
//Can be used outside of function.

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

console.log(createFullName('Tom', 'Sawyer'));

//You can store the value of the return statement as a variable.

var fullName = createFullName('Tom', 'Sawyer');

console.log('Welcome', fullName);

//Functions should have descriptive names with verbs since they are actions.