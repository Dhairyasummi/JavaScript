let score = 33
let score1 = "23" // simillarly try for null , undefined and bollean

console.log(typeof score);
console.log(typeof (score1));

let valueInNumber = Number(score1)
console.log(typeof score1);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN but type is number after conversion 
// true  => 1 ; false => 0

let isLoggedIn = 1 // simmilarly for "" , dhairya etc
let bollIsLog = Boolean(isLoggedIn)

console.log(bollIsLog);

// 1 => true , 0 => false
// "" => false  
// "dhairya" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

