const score  = 400
console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));     // add another 0 number and decimal value after number

const anotherNumber = 123.3456
//console.log(anotherNumber.toPrecision(3));   // give precise or estimated value of the given number 

const hundred = 1000000
//console.log(hundred.toLocaleString());   // add commas to the digits

//+++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));      //convert negaive values in positive
console.log(Math.round(4.6));   // estimate value
console.log(Math.floor(4.9));   //gives lowest nearest value
console.log(Math.ceil(4.1));    // gives highest nearest vale 
console.log(Math.max(2,3,4,64,32));  
console.log(Math.min(23,43,56,742));

console.log(Math.random());
console.log((Math.random()*10) + 1);               // gives a random value (single digit with any decimal) bw 1 and 1=
console.log(Math.floor((Math.random()*10) + 1));  // gives a random value (single digit without any decimal) bw 1 and 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // gives value bw max and min value given
















