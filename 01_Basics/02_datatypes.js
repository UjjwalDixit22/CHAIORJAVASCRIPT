
 "use strict";// This line is optional but recommended to enforce strict mode in JavaScript
 console.log("Data Types in JavaScript");
 console.log(3+3);
 console.log("Ujjwal");
//  alert("Hello Ujjwal");// we are using node.js, so alert won't work
 
let name = "Ujjwal";
let age = 25;
let isLoggedIn = true;
// number => 2 pwer 53, string, boolean, null, undefined, BigInt, Symbol=> unique identifier 
// object => collection of key value pairs

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof null); // object (this is a known JavaScript quirk)
console.log(typeof undefined); // undefined
console.log(typeof BigInt(12345678901234567890)); // bigint
console.log(typeof Symbol("unique")); // symbol
