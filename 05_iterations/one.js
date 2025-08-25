
// For loop (cmd+D for duplicates)

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
// console.log("Loop Ended");


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop : ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*'+ j + '=' + i*j);
    }
}
// console.log("END");

let myArray = ["Flash","BatMan", "SuperMan"];
for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];   
    // const element = index;   
    // console.log(element);
}
console.log(myArray.length);//3

 
// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i ==5){
//         console.log('Detected 5');
//         break; //after this the loop will be exit
//     }
//     console.log(`Value of i is ${i}`);
     
// }

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log('Detected 5');
        // break; //after this the loop will be exit
        continue //continue for one condition
    }
    console.log(`Value of i is ${i}`);
     
}
// Output
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// Value of i is 7 
// .......