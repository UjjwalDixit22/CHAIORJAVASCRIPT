
const user = {
    username:"Ujjwal",
    price:10999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcomes you to the website`);
        console.log(this);
    },
    id:1
}
// this.username. it means whatever the value of username is there in the  CURRENT CONTEXT it will print it
user.welcomeMessage();
user.username="Vansh"
user.welcomeMessage();

// console.log(this)// 

function chai(){
    let username = "Ujjwal"
    console.log(this.username);  //undefined as this is function and this is used for  objects.
}
chai();

// THis cannot  be fixed via arrow function also
// const tea = () => {
//     let user = "Golu"
//     console.log(this.user);
// }
// tea();




// _____________ARROW FUNCTIONS++++++++++++
// Normal AF
// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(35,36));
 
//Implicit return  AF
const addTwo = (num1,num2) => (num1+num2);
console.log(addTwo(35,36));
// always you have to return objects in parenthesis 