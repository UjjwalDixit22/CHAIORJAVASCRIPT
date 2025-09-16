// 
function setUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
}
const chai = new createUser("Golu","qwe@gmail.com","1234")
console.log(chai);//createUser { email: 'qwe@gmail.com', password: '1234' }
 

