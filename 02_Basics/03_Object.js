// singleton
// Object.create

// object literals

const mySym = Symbol("key1")  // declaration of symbol

// declaration of object
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // this is how to declare symbol as a symbol in object if you remove [] it would be a string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)    // this is not a apt way to 
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                        // when this is written the valeus cannot be updated after this 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);                         //like here we tyna update the value of the email but it wont update 

JsUser.greeting = function(){                  //to add any thing like here greeting we type function
    console.log("Hello JS user");
}                                              // however if you freeze the object then it wont take any valiues so u will not be able to add functon in object
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);    // if you want to reference the name with the function use `` with the this and add the reference like here its name
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());            // you have to use () with the function if you will not it will return thte reference of the function