// Immediately Invoked Function Expressions (IIFE)

(function chai(){              // this is how IIFE are declared
    // named IIFE
    console.log(`DB CONNECTED`);  
})();//(this colon marks the end of IIFI)                         // as we see here two ()() are declared in first () we give function defination and the second () is execution

//global scope pollution gives problem so to remove the global scope variables/pollution IIFI are used

( (name) => {                                 // IIFI using arrow function  
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//The above IIFI is unnamed IIFI