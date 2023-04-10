/*
JavaScript is a dynamically typed language. 
Because data type will automatically assigned at the time of compilation 
or code execution.

Primitive 
7 types -> String , Number , Boolean , null, undefined , Symbol , BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)  // false

const bigNumber = 122687789632556322n;  //if add n means bigInt
console.log(bigNumber)


/*
Reference (Non-Primitive)
3 types -> Array , Objects , Functions
*/

// Array
const heros = ["Shaktiman" , "Naagraj" , "doga"]

// objects
// {
//     name: "Hoi",
//     age: 24,
// }

let myObj = {
    name: "Hoi",
    age: 24,
    sex: "F",

}

// functions

const myFunction = function(){
    console.log("Hello World")
}

// typeof

console.log(typeof bigNumber)  // bigInt

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function (it is also called a s Object Funtion)
       Object  =>  object
*/

// ********************MEMORY**********************

/*
Stack(Primitive), Heap(Non-Primitive)
*/

let myYoutubeNmae = "hiteshchoudharydotcom"
let anotherName = myYoutubeNmae 

anotherName = "chaiaurcode"

console.log(myYoutubeNmae) // hiteshchoudharydotcom
console.log(anotherName)   // chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl", 
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)

