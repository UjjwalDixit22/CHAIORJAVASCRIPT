
// Function based Syntax
// Here we are using getter and setter to get and set the value of email and password
// Here we are using _ before email and password to make it private so that it can't be accessed directly
// We can access it only through getter and setter
// We can also use defineProperty method to define getter and setter
// Here we are using Object.defineProperty method to define getter and setter
// Here we are using this as first parameter as they don't have access to that and second parameter is the property we want to define
// Third parameter is an object where we define get and set methods
// We can also use class based syntax to define getter and setter
// In class based syntax we don't need to use Object.defineProperty method
// We can directly define get and set methods in the class
// But in function based syntax we need to use Object.defineProperty method to define getter and setter

function User(email,password){
    this._email=email;
    this._password=password;

    // As function is also a object we can use defineProperty method where it define getter and setter here pass this as they don't have access to that and send which property you want to define
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(val){
            this._email=val;
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(val){
            this._password=val;
        }
    })
}
const Caffee = new User("yahoo.in234","123Abcde");
console.log(Caffee.email);
console.log(Caffee.password);


 