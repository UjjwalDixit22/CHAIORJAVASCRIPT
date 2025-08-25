

// WHile and doWhile loop

let i = 0; //initialisation
while (i<=10) {
    console.log(`Value of i is ${i}`);
    i = i+2;//updation
}
let myArray = ["Jon Snow", "Ned Stark" , "Tywin Lannister", "Robb Stark" , "JAmie Lannister","Daemon Targeryan"];
let arr = 0;
while(arr<myArray.length){
    console.log(`GOT Poweful Mens has ${myArray[arr]}`);
    arr++;
}

// minimum 1 time work is done the condition is checked
let score =1; // initialisation
// let score =11; // initialisation
do {
    console.log(`Value of score is ${score}`);
    score++; // updation
} while (score<=10);//condition


