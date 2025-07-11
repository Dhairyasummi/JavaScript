const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})     works similar to the filter methord     

const newNums = myNumers
                .map((num) => num * 10 )         //this is chaining of maps 
                .map( (num) => num + 1)         //the value of the array will start from 10 ...
                .filter( (num) => num >= 40)    //checks what is greater 

console.log(newNums);