

// Functions with objects and array in javascript

function calculateCartPrice(val1,val2,...num1){ //(...num1) -> [ 2, 34, 12, 345 ]
    return num1
}
// console.log(calculateCartPrice(2)); 
console.log(calculateCartPrice(2,34,12,345)); // 2 to make it correct use REST operator ... [ 2, 34, 12, 345 ]
console.log(calculateCartPrice(2,34,12,345));//[ 12, 345 ]

// How we pass Object in the function
// const user = {
//     name:"Tobelorne",
//     price:999
// }
// function handleObject(anyObject){
//     console.log(`userName is ${anyObject.name} and price is ${anyObject.price}`);
// }
// handleObject(user) //userName is Tobelorne and price is 999

const user = {
    name:"Tobelorne",
    prices:999
}
function handleObject(anyObject){
    console.log(`userName is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(user) //userName is Tobelorne and price is undefined.  here we have to check typesaftey
// you can also pass the object like below
handleObject({
    name:"DairyMilkSilkOreo",
    price:999
})

const myNewArray = [200,400,600,900,90];
function returnSecondValue(getArray){
    return getArray[4];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,900,800]));
