// Object based Syntax (Rare and Weird)
const User = {
    _email: "yahoo.in",
    _password: "123abc",

    // Getter and Setter (you can apply these on your variables they automatically becomes methods as name of their variables)
    // trying to get val outside the class use getter
    get emaill(){
        return `${this._email.toUpperCase()} COnverted!`;
    },
    set emaill(val){
        this._email = val;
    }
}
const tea = Object.create(User);
console.log(tea.emaill);
