// Primitive Data Types  (call by value) => (here the value is copied to a new variable and changes in the new variable do not affect the original variable)
// string, number, boolean, null, undefined, BigInt, Symbol
// Non-Primitive Data Types (call by reference) => (here the reference to the original variable is copied, so changes in the new variable affect the original variable)
// object, array, function  

// JS is a dynamically typed language, meaning you don't need to specify the data type of a variable when you declare it. The data type is determined at runtime based on the value assigned to the variable.

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
console.log(id==anotherId);


const heros = ["Thor", "Ironman", "Hulk"];
let myObj = {
    name:"Ujjwal",
    age:21,
    sex:"male"
};
console.log(myObj);


const myFunction = function(){
    console.log("Hello Ujjwal");
} 

console.log(typeof myFunction);
