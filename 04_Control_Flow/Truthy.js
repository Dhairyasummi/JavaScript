const userEmail = [] // if you use (" ") that means its empty so it wil be considered false and the else statement will executed

if (userEmail) {
    console.log("Got user email");   // now here its [ ] thus if value will eb executed
} else {
    console.log("Don't have user email");   
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}     even here false is a truthy value because they are written in ''

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {          // checks if object is empty
    console.log("Object is empty"); 
}

//false == 0 output will be true
//false == ' ' output will be true
//0 == " "     output will be true

// Nullish Coalescing Operator (??): null undefined  in this these keywords will be ignored and the next one will be printed

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")