
// GLobal and Local Scope

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
 
// var c = 300;  //still output is 30   this is the problem with var
let a = 389;//GLobalScope
if(true){ //Block scope
    let a = 10;
const b = 20;
console.log("Inner",a);

// var c = 30;
// c = 30; // still the problem is same
}
console.log(a);
// console.log(b); 
// console.log(c);//30 as scope is not here it should not be printed ..

// In code enviroment with node the scope is different as in console of the browser there is course scope

