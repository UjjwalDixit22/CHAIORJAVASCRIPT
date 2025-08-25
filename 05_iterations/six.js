// FOrEach does not return anything is undefined
// const programming = ["Java","Python","C++"];
// const values = programming.forEach((items)=>{
    // console.log(items);
// })
// console.log(values);//undefined
 
// FOr returning values we use filter , map,reduce

// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const val = myNum.filter((num)=> num>4);
// const newNums = myNum.filter((num)=> {
//     return num>4
// });
// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ] 


// using foreach
// const newNumbers = [];
// myNum.forEach((num)=>{
//     if(num>4){
//         newNumbers.push(num)
//     }
// })
// console.log(newNumbers);


// Another example
const books = [
    { title: "Book One", genre: "Fiction", publishYear: 2001, edition: "First" },
    { title: "Book Two", genre: "Non-Fiction", publishYear: 2005, edition: "Second" },
    { title: "Book Three", genre: "Fantasy", publishYear: 2010, edition: "First" },
    { title: "Book Four", genre: "Science Fiction", publishYear: 2015, edition: "Third" },
    { title: "Book Five", genre: "Fiction", publishYear: 2020, edition: "First" },
    { title: "Book Six", genre: "Biography", publishYear: 1995, edition: "Second" },
    { title: "Book Seven", genre: "Horror", publishYear: 1988, edition: "First" },
    { title: "Book Eight", genre: "Romance", publishYear: 2003, edition: "Second" },
    { title: "Book Nine", genre: "Thriller", publishYear: 2018, edition: "First" },
    { title: "Book Ten", genre: "Historical", publishYear: 1999, edition: "Third" }
];
// console.log(books);
// const userBooks =  books.filter((bk)=>{
//     return bk.genre=="Fiction"
// })

// const userBooks = books.filter((bk)=>{
//     return bk.publishYear > 2000;
// })

const userBooks = books.filter((bk)=>{ //return is there as we have open the scope
    return bk.edition=="First";
})
console.log(userBooks);








