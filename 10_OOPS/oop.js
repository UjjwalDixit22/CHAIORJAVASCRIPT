
const user = {
    userName:"Ujjwal",
    loginCount:23,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got userDetails from database")
        console.log(`Username: ${this.userName}`);
        console.log(this);// getUserDetails: [Function: getUserDetails] 
        
        
    }
}
console.log(user);
console.log(user.userName);
console.log(user.loginCount);
console.log(user.signedIn);
console.log(user.getUserDetails());

// Constructor Function
// const PromiseOne = new Promise();//new is the constructor Function
// const Date = new Date();//alow to create multiple new context  instances from one object literal

function User(username,loginCount,isLoggedin){
    this.username=username;
    this.loginCount= loginCount;
    this.isLoggedin = isLoggedin;
    // return this;
}
const details = new User("Vansh",23,false);
// console.log(details);
const detail = new User("Vanshh",27,false);
console.log(details);

// console.log(detail);

// console.log(details);

// constructor̥ fns gives u new copy everytime  