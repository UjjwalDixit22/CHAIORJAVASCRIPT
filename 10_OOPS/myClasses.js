

// class User{
//     constructor(username,email,password){

//         this.username = username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai","chai@gmail.com",12345);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// BEhind the scene
function User(username , email,password){
    this.username = username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return`${this.username.toLowerCase()}`
}
const tea = new User("TEA","tea@gmail.com",123);
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUserName());

