
// for of (Array specific loop)

// const arr = [1,2,3,4,5];
// for(const num of arr){  // num is the iterator and arr is the object
//     console.log(num);
// }

const greetings = "HEllo WOrld!!"

for(let greet of greetings){
    // if(greet == " "){
        // break;
        // continue;
    // }
    // console.log(greet);
}


// Maps
const map = new Map()
map.set("IN", "INDIA");  //key-value
map.set("US", "UNITED STATES OF AMERICA")
map.set("JAP", "JAPAN")
map.set("US", "UNITED STATES OF AMERICA")
// known for unique values
console.log(map);
// for(let keys of map){. => [ 'IN', 'INDIA' ]
// [ 'US', 'UNITED STATES OF AMERICA' ]
// [ 'JAP', 'JAPAN' ]
for(let [keys,value] of map){ // destruct the array
    console.log(keys,'=>',value);
}
// Output below
// IN => INDIA
// US => UNITED STATES OF AMERICA
// JAP => JAPAN

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


// Objects cannot work with for of

const myObj = {
    'game1':'NBA2k',
    'game2':'efootball2026',
    'game3':'TheWalkingDead',
    'game4':'TheConquestofWesteros'
}
for(let game of myObj){
    console.log(game);
    // TypeError: myObj is not iterable
}





