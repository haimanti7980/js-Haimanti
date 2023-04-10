const score = 400
console.log(score)  // 400

const balance = new Number(100)
console.log(balance)  //  [Number: 100]
// it's clearly defined that it is a number by using new object 

console.log(balance.toString()) // convert as a string
console.log(balance.toString().length) 
// now this is a string so we can use string properties also

console.log(balance.toFixed(2))
// print 2 number after presicion(.) 

const anotherNumber = 23.896
console.log(anotherNumber.toPrecision(3))  // 23.9

const anotherNumberTwo = 123.896
console.log(anotherNumberTwo.toPrecision(3)) // 124 
// (.8 thats why convert as round figure)

console.log(anotherNumberTwo.toPrecision(4)) // 123.9
console.log(anotherNumberTwo.toPrecision(2)) // 1.2e+2
//2 means 12 but precision is after 3 thats why showing this output

const hundreds = 1000000

console.log(hundreds.toLocaleString()) // 1,000,000
// by defaul calculate by US standards
console.log(hundreds.toLocaleString('en-IN')) //India standards 10,000,00


// +++++++++++++++ Math ++++++++++++++++

console.log(Math)  // Math is an object 
// Object [Math] {}

console.log(Math.abs(-4))  // 4
// take only absolute value ignoring sign

console.log(Math.abs(4))  // 4

console.log(Math.round(4.6))  // 5
console.log(Math.round(4.2))  // 4

console.log(Math.ceil(4.3))  // 5
//take upper value always
console.log(Math.floor(4.9)) //4
//only lower value means before precision

console.log(Math.min(4, 6, 8, 2))
console.log(Math.max(4, 6, 8, 2))

console.log(Math.random())
// value range is 0 to 1 randomly generated and tends to 1

console.log(Math.random()*10)
//but also getting number 0 to 9 

console.log((Math.random()*10) + 1)
// to avoid getting 0 before precision

/** NEED number without precision **/
console.log(Math.floor(Math.random()*10) + 1)


/** NOW NEED number between 10 to 20 only **/
// declare min and max value
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)))

/** NEED number between 10 to 20 **/
console.log(Math.floor(Math.random()*(max - min + 1)) + min )
// minimum 10 is needed thats why add with min value