// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId =Symbol('123')

// console.log(id===anotherId);
// const bigNumber = 3456543576654356754n                (BigInt ex)



// Reference (Non primitive)

// Array, Objects, Functions


const heros=["A","B","C"]
let obj ={
    name:"ritik",
    age:20,
}
// console.log(heros);
// console.log(obj);



const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof obj);

// https://262.ecma-international.org/5.1/#sec-11.4.3