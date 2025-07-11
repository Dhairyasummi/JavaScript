const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){            declaration for forEach
//     console.log(val);
// } )

// coding.forEach( (item) => {               using arrow function
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)      paramenter passsed here is printme which prints the item

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);               access to index and array
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )