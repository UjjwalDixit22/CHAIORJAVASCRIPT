// FETCH
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
//      A Promise is in one of these states:
//     pending: initial state, neither fulfilled nor rejected.
//     fulfilled: meaning that the operation was completed successfully.
//     rejected: meaning that the operation failed.


// fetch ('https://somthjing.com' ).then() .catch() -finally()|

 const promise = new Promise(function(resolve,reject){
// Do  async task
// DB calls , network calls
setTimeout(()=>{
console.log("Async task Complete");
resolve(); // if success
},1000)
// make a promise 
})

// consume the p romis
promise.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    // Do  async task
    setTimeout(function(){
        console.log("Async task Complete");
        resolve(); // if success
    },1000);
}).then(function(){
    console.log("Promise consumed");
})


const promiseThree = new Promise(function(resolve,reject){
    console.log("Passing Data");
    setTimeout(function(){
    resolve({username:"Ujjwal",age:25});//no isue in passing data
    },1000);
})
promiseThree.then(function(user){
    console.log(user);  
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username:"Ujjwal",age:25});//no isue in passing data
        }else{
            reject("Error : Something went wrong");
        }
    },1000)
})
// const username = promiseFour.then(function(user){ //cannot do this to return data
promiseFour.then(function(user){
    // console.log(user);
    return user.username;
    // Here comes Chaining then value comes to second then value
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Finally will execute no matter what");
})

// finally is like default it will happpen no matter what

 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = false;
        let error = true;
        if(!error){
            resolve({username:"Javascript",password:"132"});//no isue in passing data
        }else{
            reject("Error : JS went wrong");
        }
    },1000)
 })
//  new syntax with async as it only deals with resolve and .then
    async function consumePromiseFive(){
        try {
            const res = await promiseFive //you have to take it in variable you can't use () as it is object
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    } 
    consumePromiseFive();


// async function getUsers(){
//     try {
//     const responsE = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data  = await responsE.json();  // it also returns a promise so we have to await it as it takes a lot of time
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getUsers();
// then and catch method
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log("Err:",err);
    })

// In the next video we will learn how this url comes first in the output and all the above code is executing later
 