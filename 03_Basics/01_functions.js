
// function sayMyName(){
//     console.log("U");
//     console.log("J");
//     console.log("J");
//     console.log("W");
//     console.log("A");   
//     console.log("L");
// } //function declaration / definition
// sayMyName //Reference
// sayMyName(); //function call / invocation 

// function addTwoNumbers(a,b){ // function with parameters
//     console.log(a + b);
// }
// addTwoNumbers(5, 10); //function call with arguments 
// const res = addTwoNumbers(5, 10); 
// console.log("Res",res); // undefined because the function does not return anything


function addTwoNumbers(a,b){ // function with parameters
    // let sum = a + b;
    // console.log("Vansh");
    // return sum; // return statement to return the value of sum. and after return statement the function execution stops.
    return a + b;
}
const res = addTwoNumbers(5, 10);
// console.log("Res",res); // undefined because the function does not return anything

 function loginUserMessage(userName = "Sam"){
    if(userName === undefined){ //(!userName) 
        console.log("Please Enter Username");
        return;
    }
    return `${userName} just logged in !!`;
 }
//  const name = loginUserMessage("Ujjwal");
//  console.log(name);
// console.log(loginUserMessage("Ujjwal")); 
console.log(loginUserMessage());  // when you don't define anything then undefined is returned by default
// undefined just logged in !!
console.log(loginUserMessage("Ayushi")); // it will override the default value given in the parameter


