console.log('Hi lets talk about arrays')

//Create a variable and assign it to an array (square brackets).

let customerNames = [];

//Create some customer names and use "push" method to add to array. Use zero based indexing.

customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');
customerNames.push('Tyler Lambert');
customerNames.push('Jake Brown');

//To access element in array, refer to variable name, then add [element to access].

console.log(customerNames[0]);
console.log(customerNames[3]);

//Arrays are use fule for dynamically adding and removing elements to and from them and are scalable.
//Loops can be used in arrays to perform a set of actions on each element of the array.

for(let i = 0; i < customerNames.length; i++){
    console.log(customerNames[i])
}

//Same example but with a for of loop.
console.log('Same example but with a for of loop.');

for(name of customerNames){
    console.log(name);
}