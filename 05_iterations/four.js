
// Objects iterations through forIn loop

const myObject = {
    js:'javaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}
for (const key in myObject) {
    // console.log(key);
    // js
// cpp
// rb
// swift
    // console.log(myObject[key]);
// javaScript
// C++
// Ruby
// Swift by apple
console.log(`${key} shortcut is for ${myObject[key]}`);
// js shortcut is for javaScript
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for Swift by apple
}


// For In loop for array


 const programming = ["Java","C++","Python","C#"];
 for(const key in programming){
    console.log(key);  //0,1,2,3,4 -> keys
    console.log( programming[key]);//values
 }

 