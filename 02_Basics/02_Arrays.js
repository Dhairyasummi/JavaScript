const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)  //they could take the complete other array as a array ofa nother array 

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  //this concatenate these 2 arrays and return value in new aray
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this also works in the same way as the concat but this could help do for more than 2 array 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))          // checks if it is array or not   
console.log(Array.from("Hitesh"))            // converts to array 
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    // of returns a new array with a set of elements 

//type Array. to get all the feartures of the array