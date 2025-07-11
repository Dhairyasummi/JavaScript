// for of

// ["", "", ""]
// [{}, {}, {}]          objects in array

const arr = [1, 2, 3, 4, 5]

//Putting objects inside arrays and accessing values through loops.

for (const num of arr) {           //declaration of for of loop in which before (of) is variable and after (of) is array
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")          // this will not be printed as maps are known for the unique values and remain in same order    

// console.log(map);

for (const [key, value] of map) {          // if you want to print map in for of loop and want output similar to normal mapping output you use [key,values]
    // console.log(key, ':-', value);
}

const myObject = {   // this is a boject
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);              the values of the above object are not defined (output says so)

// }            thus for of dont work here for objects