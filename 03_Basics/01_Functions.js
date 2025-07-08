
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()         execution of function 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2                 
    // return result
    return number1 + number2         // after return nothing is printed
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){          // this gives a default paramenter value
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`       // here `` are used for string interpolation
}

// console.log(loginUserMessage("hitesh"))     here hitesh refer to as the argument of the function
// console.log(loginUserMessage("hitesh"))     if you dint passa argument and just write (" ") then just logged in will be executed  but if its () then undefined just logged in will be printed


function calculateCartPrice(val1, val2, ...num1){     /// here the ... operator is called rest / spread 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))    there are multiple value for 1 argument thus we use ... op which solve the problem 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]                  // this prints the value of array at index 1
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));