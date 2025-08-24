
// GLobal and Local Scope

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
 
// var c = 300;  //still output is 30   this is the problem with var
// let a = 389;//GLobalScope
// if(true){ //Block scope
//     let a = 10;
// const b = 20;
// console.log("Inner",a);

// var c = 30;
// c = 30; // still the problem is same
// }
// console.log(a);
// console.log(b); 
// console.log(c);//30 as scope is not here it should not be printed ..

// In code enviroment with node the scope is different as in console of the browser there is course scope

// ++++++++++++Scope level and mini hoisting in javascript *************

// two can take username as he is child function for him one is global 
function one(){
    const username = "Hitesh";
    function two(){
        const website= "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

if (true){
    const username= "Ujjwal";
    if(username==="Ujjwal"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++Intresting Concept++++++++++
function add(num){
    return num+1;
}
console.log(add(5));//this statement can be written above before declartion and it will print the ans but the addtwo one cannot be written above for that we have to learn hoisting concept
// both are functions but the second one is called as Expression as in javascripts variables can hold functions also
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(6));
