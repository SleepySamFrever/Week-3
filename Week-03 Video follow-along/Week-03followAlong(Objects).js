//                                          Let's talk about Objects.
console.log("Let's talk about Objects.");

/*A lot of data in JavaScript is organized into a structure known as an "Object".
Objects is a structures that logically group data and functionality together.
Any object irl has properties(pieces of data that define it) and probably has functionality.*/

//For example, a DVD player has properties such as height, width, depth, weight, color, name of currently loaded DVD
//DVD players also have functionality such as play, pause, stop, rewind, and eject.

//When using JavaScript we want to group data together in similar fashion.
//There are a few ways to do this, but today we are focusing on declaring object literals.

//Object literals make up an objects property and functionality(or methods).

let dvdPlayer = {//inside curly braces go key value pairs. 
    //The keys are the names of the properties(methods) on the object(DVD player in this ex.). They describe the object
    //The values assigned to each key will be either the values of the property, or the function that makes up the method
    //End each besides last with comma
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',

    //the above properties describe the object.

    //Now let's add a method to our object.
    //The above properties have values assigned to them, the below has a function assigned to it.
    //Note: Method vs Function:method=function that belongs to an object. Function=standalone piece of functionality.
    printDVDName: function(){
        //Below we use the "this" keyword. "This" refers to the object itself
        //dvdName doesn't exist outside the object in this case, we're calling it as a property that lives inside the object.
        //"This objects" dvdName.
        console.log(this.dvdName);
    }
};//There is our object(DVD player). It has properties that define it and a method that provides some functionality.

//Now we can use the Dot "." notation to utilize the properties and methods on our object.
//Name of identifier(variable), ., the you can access all the values on it.
console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();

//Objects allow us to group pieces of data and functionality together to make it relevant to what we're doing.
//If it's related data, we can put it together instead of a bunch of variables on their own island.

//Javascript also comes with a ton of built in objects.
//Some we are familiar with such as a string or an array.

//We can use the MDN documentation to see what methods can be done on built in objects in JavaScript, we don't have to memorize.
