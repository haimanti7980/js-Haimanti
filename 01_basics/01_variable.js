const accountId = 123456
let accountEmail= "hoi@gmail.com"
var accountName = "Hoi"
accountCity = "kolkata"  //avoid this type of declaration

let accountState;

let a = 10
console.log(a)
 a = 15
{
    let a = 12
    console.log(a)
}
console.log(a)

/*
accountId/ account_id/ account_Id (same) but use accountId
it is also possible to declare a variable without defining variable type but avoid this
Don't use var because of issue in block scope and functional scope
*/

//accountId = 3456

console.log(accountId);

console.table([accountId, accountEmail,accountName, accountCity, accountState])