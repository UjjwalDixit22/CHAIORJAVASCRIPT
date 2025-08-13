
const score = 400 ; 
const balance = new Number(100); //Defining new Number object
// console.log(balance);
// console.log(typeof balance); // object
// console.log(typeof score); // number

// console.log(balance.toString().length); //here type conversion is happening
// console.log(balance.toFixed(2)); // "100.00" - converts to string with 2 decimal places
// const otherNumber= 2323.8966;//priority is given to the beforedecimal part
// console.log(otherNumber.toPrecision(3));

const hundreads = 1000000;//    10,00,000



// ++++++++++++Maths-----------------

console.log(Math);
console.log(Math.abs(-786)); // converts to positive 786
console.log(Math.ceil(4.3)); // rounds up to 5
console.log(Math.floor(4.9)); // rounds down to 4
console.log(Math.round(4.5)); // rounds to nearest integer, 4.5 rounds to 5
console.log(Math.max(2, 3, 4, 5, 6)); // returns the maximum value, 6
console.log(Math.min(2, 3, 4, 5, 6)); // returns the minimum value, 2
console.log(Math.random()); // generates a random number between 0 and 1
console.log(Math.sqrt(16)); // returns the square root of 16, which is 4
console.log(Math.pow(2, 3)); // returns 2 raised to the power of 3, which is 8
console.log(Math.PI); // returns the value of PI, approximately 3.14159
console.log(Math.E); // returns the value of Euler's number, approximately 2.71828



// ***IMP****
console.log((Math.random() * 10) + 1); // generates a random number between 1 and 10
console.log(Math.random()*6);// generates a random number between 0 and 6

// Generic formula for generating a random number between min and max
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber); // generates a random number between 10 and 20