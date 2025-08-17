
const accountId = 12214532;
let accountEmail = "udixit3647@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";

// accountId=2;  not allowed 
accountEmail = "Vansh@gmail.com";
accountPassword = "67890";
accountCity = "Mumbai";
// console.log(accountEmail);
// console.log(accountId);
 /* prefer not to use var because of block scope and functional scope issue*/ 
 let accountState;  // undefined
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]); 