const accountId = 12341
let accountMail = "dhairya.summi@hmail.com"
var accountPass = "9845"
accountCity = "Delhi"  // it could be used but should not be used as it is not a good practice 
let accountState; // not defined but it could be defined later on

// accountId = 2 //not allowed as this is constant and its value cannot be changed

accountMail = "dhairyaboy21@gmail.com"
accountPass = "1209"
accountCity = "New Delhi"

console.log(accountId);

/* prefer not use var because of the issue of block scope and functonal scope */

console.table([accountId , accountMail , accountPass , accountCity , accountState])