// FOrEach loop

const coding = ["JAva","Python","Ruby","C++","Django"];
// as it is callfn it doesn't have its name
// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item)=>{
//      console.log(item);
// })

// function printME(item){
//     console.log(item);
// }
// coding.forEach(printME); //only ref


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding = [
    {
    languageName:"JavaScript",
    languageFileNAme:"JS"
},{
    languageName:"C++",
    languageFileNAme:"cpp"
},{
    languageName:"Python",
    languageFileNAme:"py"
}]; 
myCoding.forEach((item)=>{
    console.log(item.languageFileNAme);
})


