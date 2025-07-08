// const tinderUser = new Object()      // singleton object
const tinderUser = {}                   // non singleon object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                     // here we have given objects in objects
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}                                 // we access values with the help of the . operator 

// console.log(regularUser.fullname.userfullname.firstname);     // we are accesing the objects in objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                            // this will give the same problem as in array if we try to concat the values of 2 arrays     
// const obj3 = Object.assign({}, obj1, obj2, obj4)       // this will make appear the object as declared in a single object only 
// we take {} in an object.assign as an empty array in thestarting such that it acts as a target and after these the other objects acts as a source


const obj3 = {...obj1, ...obj2}             // we mostly use this syntax jsut like in arrays
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email   // this means you want to accces first value which is an object and t hen we use an . as it is use to acces the values inside the object

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));             this returns all the keys inside the mentioned object
// console.log(Object.values(tinderUser));           this returns all the values inside the mentioned object 
// console.log(Object.entries(tinderUser));          this make the array of the key and the values related with the key

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));     checks if the n=mentioned property is there in the object or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course   // this syntax is also used to acces the object and we can directly access this by calling its name 

// console.log(courseInstructor);
console.log(instructor);

//the value mentioned above is a json and it is similar to objects declared by {} but the diff is u have to put everything in string(keys and values) like done below

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
