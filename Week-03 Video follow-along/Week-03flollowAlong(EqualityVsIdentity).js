//Let's talk about Equality vs Identity
console.log("Let's talk about equality vs identity.");

//In JavaScript we have three operators that look similar but do something different.
//The Assignment operator, the Equality operator, and the Identity operato(strict equality).
//These are denoted by =, ==, and === respectively.

console.log(2 == '2');
console.log(2 === '2');

//In the above example, the equality evaluates the number 2 and the string 2 as true.
//This is because the equality operator is used
//Equality operator will "approximate" the two values and evaluate true if they are "close enough"
//Using the identity operator, the log is false because they are different data types (number vs string).