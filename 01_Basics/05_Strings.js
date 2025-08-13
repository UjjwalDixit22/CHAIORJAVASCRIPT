const name = "Ujjwal";
const repoCount = 50;
console.log(typeof name); // string
// console.log(name+repoCount+"value");  //outdated way of concatenation
// String interpolation

console.log(`My name is ${name} and I have ${repoCount} repositories.`); // modern way using template literals

const names = new String("Ujjwal-Dixit");  
console.log(typeof names); // String object
console.log(names.length); // 12 (length of the string)
console.log(names[0]); // "U"
console.log(names.__proto__); // String prototype object it is not empty it has a lot of fns inside 

console.log(names.toUpperCase()); // "UJJWAL DIXIT"
console.log(names.toLowerCase()); // "ujjwal dixit"
console.log(names.length); //include whitespaces as well

console.log(names.charAt(3));
console.log(names.indexOf("D")); 

const newString = names.substring(0,5);  //5-1=4
console.log(newString); // "Ujjwa" (substring from index 0 to 5)

const anotherString = names.slice(3,6); //3 include 6 not include
console.log(anotherString);


// Trim and replace methods

const newStr = "   Ujjwal   "
console.log(newStr.trim()); // "Ujjwal" (removes leading and trailing whitespace)
const url = "https//hitesh%20.com";
console.log(url.replace("%20","!"));

console.log(url.includes("hitesh")); // true (checks if the string contains "hitesh")
console.log(names.split("-",2));