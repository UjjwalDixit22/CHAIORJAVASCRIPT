
// const tinderUser = new Object (). //No diff but it is a singleton object 
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser); 

const regularUser = {
    email:"chatgpt@gmail.com",
    fullName : {
        userFullNAme: {
            firstName: "Golu",
            lastName: "Dixit"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullName.userFullNAme.firstName);


const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

// const obj3 = Object.assign({}, obj1, obj2); // Merging two objects using Object.assign
// console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }


const mergedObj = {...obj1, ...obj2}; // Merging two objects using spread
console.log(mergedObj); // { a: 1, b: 2, c


// When value come from databases. then it comes like this ..

const users = [
    {
        id : 1,
        name: "Ujjwal",
    },
    {
        id : 2,
        name: "Vansh",
    },
    {
        id : 3,
        name: "Golu",
    }
]
console.log(users[1]);

console.log(tinderUser); 
console.log(Object.keys(tinderUser)); // Returns an array of keys in the object.[ 'id', 'name', 'isLoggedIn' ] here we can use loop and get valuee etc
console.log(Object.values(tinderUser)); // Returns an array of values in the object. [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs in the object
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] 

console.log(tinderUser.hasOwnProperty("id")); // true (checks if the object has a property with the specified key)

