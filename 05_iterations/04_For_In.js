//the objects are not printed by forof loop to solve this we use forin loop which can print objects also

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//forin loop
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]   //aaray

for (const key in programming) {           //however for in loop printonly index of the array instead of the values
    //console.log(programming[key]);       to solve this its written like this (programming[key])
}

// const map = new Map()                  
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {               maps are not iteratable so it wont return any value in output
//     console.log(key);
// }