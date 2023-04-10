//console.log(2 > 1)
//console.log(2 >= 1)
//console.log(2 <= 1)
//console.log(2 < 1)
//console.log(2 == 1)
//console.log(2 != 1)

console.log("2" > 1)  // true -> js converts this "2" into number
console.log("02" > 1) // true

console.log(null > 0)  // false
console.log(null == 0) // false
console.log(null >= 0) // true

/*
the reason is that an equality check == and comparisons > < >= <= work differently.
Comparison converts null into number, treating it as 0 
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0)  // false
console.log(undefined > 0)   // false
console.log(undefined < 0)  //false

/* **AVOID this null and undefined comparisons because readability issue.**
strict cherck ===
=== -> checks data and data type both
== -> checks only data
*/

console.log("2" == 2)  // true
console.log("2" === 2) // false