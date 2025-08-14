
// arrays
const myArr = [0,1, 2, 3, 4, 5];
// or using the Array constructor
// const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[0]); // 1

// Array methods
// console.log(myArr.length); // 5
// console.log(myArr.push(6)); // 6 (new length of the array)
// console.log(myArr); // [1, 2, 3, 4, 5, 6]
// console.log(myArr.pop()); // 6 (removes the last element)
// console.log(myArr); // [1, 2, 3, 4, 5]
// console.log(myArr.shift()); // 1 (removes the first element)
// console.log(myArr); // [2, 3, 4, 5]
// console.log(myArr.unshift(0)); // 5 (new length of the array)
// console.log(myArr); // [0, 2, 3, 4, 5]
// console.log(myArr.includes(3)); // true (checks if 3 is in the array) if false then -1
// console.log(myArr.indexOf(3)); // 2 (index of 3 in the


// const hey = myArr.join();
// console.log(myArr);
// console.log(hey); // "0,2,3,4,5" (joins array elements into a string) array)
// console.log(typeof myArr);
// console.log(typeof hey); // "0,2,3,4,5" (joins array elements into a string) array)

// slice and splice
console.log("A",myArr);

const myn1 = myArr.slice(1, 3); // [2, 3] (creates a new array from index 1 to 2) 3 is not included 
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1, 3); // [2, 3, 4] (removes elements from index 1 to 3) 3 is not included
console.log("C",myArr); // [0, 5] (original array is modified)
console.log(myn2);

// Splice changes the array in place, while slice returns a new array without modifying the original.
// Slice is used to create a new array from a portion of the original array, while splice
// is used to remove or replace elements in the original array.