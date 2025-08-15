// When object is created using constructor it is called as Singleton Object
// When we create as literals no singleton object is created
// Object.create({name: "Ujjwal", age: 20}); // Creates a new object with the specified properties
// Object literals

const mySym = Symbol("mySymbol"); // Creates a unique symbol
const JSUser = {
    name:"Ujjwal",
    age: 20,
    location: "India",
    isLoggedin :false,
    email:"ud@gmail.com",
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    "full name": "Ujjwal Dixit", // Property with space in the name
    [mySym]: "This is a symbol property", // Using symbol as a key
}
// Here you can define both key and value

console.log(JSUser.email);
console.log(JSUser["email"]); // Accessing property using bracket notation
console.log(JSUser["full name"]); // Accessing property with space in the name. u can't use dot notation here
console.log( JSUser[mySym]); // Accessing symbol property


JSUser.age = 21; // Updating property value
console.log(JSUser.age); // 21
// Object.freeze(JSUser); // Freezes the object, preventing further modifications
JSUser.age = 22; // This will not change the age property because the object is frozen
console.log(JSUser); // 21 (remains unchanged)


JSUser.greeting = function(){
    console.log(` Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
console.log(JSUser.greeting); // [Function (anonymous)]
console.log(JSUser.greeting()); // Hello, my name is Ujjwal and I am 20 years old.

