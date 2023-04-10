// Dates

const myDate = new Date();
console.log(myDate)
console.log(myDate.toDateString()) // print date with dayname
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())  // print date only without time
console.log(myDate.toLocaleString())  //print date with time

console.log(typeof myDate)

const myCreatedDate = new Date(2023, 0, 23) // passing value 
// here month starts with 0 as jan
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())

const myNewDate = new Date(2023, 0, 23 , 5, 3)
console.log(myNewDate.toLocaleString())

// for dd-mm-yy formate
const myNewDateOne = new Date("2023-1-14") 
//const myNewDateOne = new Date("1-12-2023") // in India we use as mm-dd-yy
// here dd-mm-yy fomate month starts with1 as jan
console.log(myNewDateOne.toLocaleString())


const myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime())
// getting in ms 

console.log(Date.now()/1000)
// converted in seconds

console.log(Math.floor(Date.now()))
// now precision will not print

const newDate = new Date()

console.log(newDate)
console.log(newDate.getMonth()) // starts month with 0 as Jan
console.log(newDate.getDay())  // starts day with 0 as Sunday

console.log(newDate.getMonth() + 1)
// for avoiding month confusion we can add 1 then 
//it will be started with 1 as Jan

// `${newDate.getDay()} is the date and the time is`

//customize date using localstring method
const newDateOne = newDate.toLocaleString('default', {
    weekday: "narrow"
    //weekday: "long"
})
console.log(newDateOne)