// arrays

const myArr =[0, 1, 2, 3, 5]

const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[2])
// Array index starts with 0 

myArr.push(6)  // add new number in the array by passing the value
myArr.push(7)
myArr.pop() 
// it will delete the last value of the array and not passing any value
console.log(myArr)

myArr.unshift(9)
// insert value in the 1 st index and other value index will be changed
//it is time consuming for many data but here only 5 or 6 data so no problem
console.log(myArr)

myArr.shift()
// delete 1st index value and not passing any argument
console.log(myArr) // 9 is deleted from the array

console.log(myArr.includes(10))
//will print as true/false, checking whether 10 is present in the array or not

console.log(myArr.indexOf(3))
console.log(myArr.indexOf(19)) //-1
//because 19 is not present in the array so giving as -1

const newArr = myArr.join()
// it converts array to string datatype but value will be same

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
//showing value of index 1 and 2 not included 3 index

console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
/* print value of index 1 , 2 and 3 but it changed the original array 
it splits the array while using splice method
*/
console.log(myn2)

console.log("C ", myArr)
// here in output you can see now the splice method index value is deleted 

