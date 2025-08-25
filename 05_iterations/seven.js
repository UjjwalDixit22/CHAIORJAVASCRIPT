// map , reduce

const myNum = [1,2,3,4,5,6,7,8,9,10];
//  add 10 to each number in array

// let newNums = myNum.map((num)=>{
//     return num + 10;
// })

// Chaining(using 2-3 methods together)
 
// let newNums = myNum.map((num)=> num *10).map((num)=> num + 1)
let newNums = myNum.map((num)=> num *10). //result of 1st function is passed to other method
map((num)=> num + 1)
.filter((num)=>{
    return num >=50;//[ 51, 61, 71, 81, 91, 101 ]
})

// console.log(newNums);

// Reduce

const nums = [1,2,3];
// const mytotal = nums.reduce((acc,currVal)=>{
//     console.log(`acc: ${acc} and currVal is ${currVal}`);
//     return acc + currVal
// },0)
const mytotal = nums.reduce((acc,curr)=> acc+curr, 0) //6
console.log(mytotal); 

// Shopping Cart
const shoppingCart = [
    { itemName: "Laptop", price: 1000 },
    { itemName: "Phone", price: 500 },
    { itemName: "Headphones", price: 100 },
    { itemName: "Keyboard", price: 50 },
    { itemName: "Mouse", price: 25 }
];

const totalCost = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(`Total cost: $${totalCost}`);
