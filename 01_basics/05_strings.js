const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "value") // avoid this type of code 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// ` ` -> backtics
// this whole line called string interpulation
// we can also add like ${name.ToUpperCase} means add method 

const gameName = new String('hitesh-hc')
// write variable value within the string constructor
// string is a object
// this type of declaration specifies that this variable is a string

console.log(gameName[0])  // h
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))    // t
console.log(gameName.indexOf('t')) // 2

const newString = gameName.substring(0 , 4)  // hite
console.log(newString)
// we can declare neg value but in substring func it ignore the - sign

const anotherString = gameName.slice(-8 , 4)  
console.log(anotherString)  // ite

const anotherStringOne = gameName.slice(-7 , 7)  
console.log(anotherStringOne)  // tesh-

const anotherStringTwo = gameName.slice(2 , 6)
console.log(anotherStringTwo) // tesh

const newStringOne = "    hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'))

console.log(url.includes('hitesh'))  // true
console.log(url.includes('sundar'))  // false

// split 1 string into 2 string on basis of -
console.log(gameName.split('s'))
