const marvel = ["Thanos","Loki","Hulk"];
const dc = ["Superman","Batman","Flash"];
// marvel.push(dc);
// console.log(marvel);   
// Output: ["Thanos", "Loki", "Hulk", ["Superman", "Batman", "Flash"]]
// console.log(marvel[3][2]); // Output: "Flash" (accessing nested array element)


const newHeros = marvel.concat(dc);
console.log(newHeros);
// Output: ["Thanos", "Loki", "Hulk", "Superman", "Batman", "Flash"]
// console.log(newHeros[3]); // Output: "Superman" (accessing element from concatenated array) 

const allHeros = [...marvel, ...dc];
console.log(allHeros);
// Output: ["Thanos", "Loki", "Hulk", "Superman", "Batman", "Flash"]


const anotherArray = [1, 2, 3, 4, 5,[34,45,22],6,[4,8,9,[2,3,4]]];
const flatArray = anotherArray.flat(Infinity); // Flattens the array to a depth of 2
console.log(flatArray);


console.log(Array.from("Ujjwal&Vansh")); // Converts a string to an array of characters
console.log(Array.isArray("Ujjwal&Vansh")); // false (checks if the input is an array)

// console.log(Array.from({name: Ujjwal, age: 20})); //Intresting
// Converts an object to an array of its values here you have to specify the object as an array


let score1 = 1028;
let score2 = 1029;
let score3 = 1030;
let score4 = 1031;

console.log(Array.of(score1,score2,score3));//Return new array with the given set of Arguments. [ 1028, 1029, 1030 ]
