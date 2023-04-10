let score = "33";
console.log(score);  // 33
console.log(typeof score); // string 

let valueNumber = Number(score);
console.log(valueNumber)   // 33
console.log(typeof valueNumber)  // number

let newScore ="33abc"
console.log(typeof newScore)  // string
let newValue = Number(newScore)
console.log(newValue)  // NaN
console.log(typeof newValue) // number

/* convert into number
"33" => 33
"33abc" => NaN  *typeof NaN is number
Null => 0
undefined => NaN (not a number)
true => 1 (boolean value); false => 0
let score= "Hoi" => Nan
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  // true

/*
convert into Boolean
1 => true ; 0 => false 
any number like 50 => true
""(empty string) => false 
"Hoi" => true
*/

let someNumber = 33

let stringNumber = String(someNumber) 
console.log(stringNumber)  // 33
console.log(typeof stringNumber)  // string


//****************Operations********************
console.log("Hellooooooooooooooo")

let value = 3
let negvalue = -value
console.log(negvalue)  // -3
console.log(typeof negvalue)  // number

console.log(2+2)  // 4
console.log(2-2)  // 0
console.log(2*2)  // 4
console.log(2**3) // 8
console.log(2/3)  // 0.66666666
console.log(2%3)  // 2

let str1 = "Hello"
let str2 = "Hoi"

let str3 = str1 + str2
console.log(str3)  // HelloHoi

let str4 = str1 + " " + str2
console.log(str4) // Hello Hoi

/*
let str1 = "Hello"
let str2 = " Hoi"

let str3 = str1 + str2
console.log(str3)  // Hello Hoi
*/

console.log("1" + 2)     // 12
console.log(1 + "2")     // 12
console.log("1" + "2")   // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32

// console.log((3 * 4) % 5 + 3)  // use parenthesis always within 1 operation

console.log(true)  // true
console.log(+true) // 1 -> because true itself is a boolean 0
// console.log(true+) -> throwing error
console.log(+"")  // 0 -> not use this type of code

/*let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1)  -> 4
AVOID this type of code it should be readable
*/

let gameCounter = 100
gameCounter++
console.log(gameCounter)  // 101

let newCounter = 100
//console.log(++newCounter) -> 101
++newCounter
console.log(newCounter)  // 101

let counter = 10
let counterPostfix = counter++
// postfix increase itself value only
console.log(counterPostfix)  // 10
console.log(counter)      // 11

let counter2 = 30
let counterPrefix = ++counter2
// prefix increase both value itself and variable 
console.log(counterPrefix)  // 31
console.log(counter2)      // 31
