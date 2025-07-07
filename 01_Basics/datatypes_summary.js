// primitive 

// 7 ypes of primitivev data structure :- string , number , boolean , null , undefined , symbol , bigInt

const score = 100
const score1 = 100.03

const isLoggedIn = true 
const outsideTemp = null
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInteger = 2325755325n
console.log(typeof bigInteger);

// reference (non primitive)

// arrays , functions , functions

const heros = ["shaktiman" , "naggraj" , "doga" ]
{
    name: "Dhairya"
    age = 18
}

let myFunction = function(){
    console.log("Hello i am dhairya summi");
}

//  type of val        return type 
//    undefined         datatype
//    null               object
//    boolean           boolean 
//    number            number 
//    string            string


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/* stack takes primitive data types , it returns the copy of the data type 
    
   heaps takes the non primitive data type , and if you keep any value there you get the reference 
*/

let myName = "Dhairya"
let anotherName = myName
anotherName = "Shruti"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "dhairya.summi@gmail.com",
    upi: "drq",
}
let userTwo  = userOne
userTwo.email = "fragger.com"

console.log(userOne.email);
console.log(userTwo.email);







