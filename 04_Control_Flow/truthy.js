
// const userEmail = "u@ujjwal.ai";
// const userEmail = "";
const userEmail = [];//empty array
if (userEmail) {
    console.log(`Got user Email: ${userEmail}`);
}
else{
    console.log("Don't get userEmail"); //const userEmail= ""
}

// When you assume that string has some value it is truthy.
// Falsy values -> false , 0, null,undefined,NaN,-0,BigInt0n
// Truthy values -> "0" , 'false' , " ",[],{},function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// false == 0 => true
// false == '' => true
// 0=='' => true

// Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
console.log(val1);//5 , 10

// Ternary Operator

// condition ? true : false
const iceTeaPrice = 10;
iceTeaPrice>=80?console.log("Less than 80"):console.log("More than 80")



