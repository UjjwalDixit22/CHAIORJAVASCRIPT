// let score = "33abcd";
// let score = null;
// let score = undefined;
// console.log(typeof score); // number
// let valueinNumber = Number(score);
// console.log(valueinNumber); // 33
// console.log(typeof valueinNumber); // number


// 33=> 33
// "33abcd" => NaN (Not a Number)
// null => 0
// undefined => NaN 
// boolean => 0 or 1

// let isloggedin = 1;
// let checkloggedin = Boolean(isloggedin);
// console.log(checkloggedin); // true
// console.log(typeof checkloggedin); // boolean

// 1=> true
// 0=> false
// "Ujjwal" => true
// "" => false


// let someNumber = 45;
// let stringNumber = String(someNumber);
// console.log(stringNumber); // "45"
// console.log(typeof stringNumber); // string



//*****************************OPERATIONS*********************************

// let value = 8;
// let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(5%2); 


let str1 = "Ujjwal";
let str2 = " Dixit";
let fullName = str1 + str2;
console.log(fullName); // "Ujjwal Dixit"


console.log("1"+2); // "12"
console.log(1+"2");// "12"
console.log("1"+2+2); // "122"
console.log(1+2+"2"); // "32"

// let num = "";
// console.log(+num);

// Prefix and postfix increment and decrement
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

