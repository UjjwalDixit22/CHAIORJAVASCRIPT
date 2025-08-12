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




// Stack and Heap Memory
// Stack Memory: Stores primitive data types (string, number, boolean, null, undefined, BigInt, Symbol) and references to objects.
// Heap Memory: Stores non-primitive data types (objects, arrays, functions) and their references.
// When you create a variable, it is stored in stack memory. If the variable is a primitive type, its value is stored directly in the stack.
// If the variable is a non-primitive type, a reference to the object is stored in the stack, while the actual object is stored in heap memory.
// When you assign a non-primitive type variable to another variable, you are copying the reference, not the actual object. This means that changes made to the object through one variable will affect the other variable as well, since both point to the same object in heap memory.


let youtubeName = "ujjwaldotcom";
let anotherYoutubeName = youtubeName; // Copying the value
anotherYoutubeName = "ujjwal22dotcom";
console.log(anotherYoutubeName); // "ujjwaldotcom"
console.log(youtubeName); // "ujjwaldotcom"


let userOne ={
    email: "user@goggle.com",
    upiId: "user@upi",
}
let userTwo = userOne; // Copying the reference
userTwo.email = "vansh@goggle.com";
console.log(userOne.email); // "
console.log(userTwo.email); // "
