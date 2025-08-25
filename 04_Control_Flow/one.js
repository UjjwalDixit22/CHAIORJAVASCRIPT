// Control flow 

// if
const isUserLoggedIn= true;
const temperature = 41;
if(temperature<50){
    console.log("Temperature is less than 50");
}else{
console.log("temperature is greater than 50");
}
console.log("!00% Executed");

// if(2==="2"){
//     console.log("executed");
// } 

// >,<,>=,<=,==,!=,===
const score = 200;
if(score>100){
    const power = "Fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);//if we do use var then it will not give error but it is wrong practise

const age = 25;

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else if (age >= 20 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}



