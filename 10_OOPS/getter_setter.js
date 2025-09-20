class User{
    constructor(email,pass){
        this.email=email;
        this.pass=pass;
    }
    // Getter and Setter (you can apply these on your variables they automatically becomes methods as name of their variables)
    // trying to get val outside the class use getter
    get pass(){
        return this._pass.toUpperCase();
    }
    // Have to define setter also it is important
    // Don't return setters
    set pass(val){
        this._pass=val;
    }


    get email(){
        return `${this._email.toUpperCase()} COnverted!`;
    }
    set email(val){
        this._email = val;
    }


}
const newUser = new User("y@yahoo.in","abc");//ABC
console.log(newUser.pass);
console.log(newUser.email);

