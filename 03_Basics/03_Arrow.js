const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);     // $ is used to refer outside the function
        console.log(this);            // this shows the context of the function printed 
    }

}

// user.welcomeMessage()
// user.username = "sam"      context is changed
// user.welcomeMessage()      this username will change to sam 

// console.log(this);         here we are in node environment (this) is is referencing to empty object thus it will print {}

// function chai(){
//        console.log(this);  if this is try to printed without any other values then it will print all the values like in window varaible        
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {                 declaration of explicit arrow function having return type
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2       declaration of implicit return arrow function without the use of return and {}   

// const addTwo = (num1, num2) => ( num1 + num2 )    no return required in () also only return required in { }

const addTwo = (num1, num2) => ({username: "hitesh"}) // here if you only use {} you will not return anything and it will be undefined but object is returned opnlyh when its wrapped in parenthesis ()


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()