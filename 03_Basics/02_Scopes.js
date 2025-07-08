let a = 300    //declaredas global scope

if(true) {                     
    let a = 10
    const b = 20
    //var c = 30
    console.log("inner" , a);  //here a could be printed coz its inside the local or blocked scope  
}
console.log(a);
//console.log(a);   // here both the value of a and b will cause error becoz they are declared in scope and outside the scope  
//console.log(b);
//console.log(c);   //but c will be printed even after present inside the scope(local scope) thas why we dont use var

// when you see scope in the window browser in console then global scope is diff and global scope in coding enviornment is different

function one(){
    const username = "Dhairya"

    function two(){              // its just like a icecream rule that child can take ice cream from parent but parent cannot take from child
        const webSite = "Youtube"// in same way funciton2 can acces variables from 1 but 1 cannot from 2 so basically 1 acts as global scope for function2 
        console.log(username);
    }
    //console.log(webSite);
    two()
}
one()

if(true){
    const userName = "Dhairya"
    if(userName === "Dhairya"){
        const webSite = "Youtube"
        console.log(userName + webSite);      
    }
    //console.log(webSite);   this will generate error coz website is variable of 2function and its scope lies within its own func
}
//console.log(userName);      this will generate error coz username is variable of the function1 and its scope lies within its own func

console.log(addOne(5));      //  it can also be accesed before the declaration of the functions 
function addOne(num){
    return num+1
}
//console.log(addTwo(5));             this will generate error and will not be executed like in line 38 due to the variance in declaration as its value is holded in a variable 
const addTwo = function(num){       // it can also be declared like this also and its sometimes called expressions|| {hoisting} concept
    return num+2
}
