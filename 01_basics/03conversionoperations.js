let score = "44"

console.log(typeof score)
console.log(typeof Number(score))

// let Score = "33abc"
// console.log(typeof Score)
// let valueInNumber = Number(Score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
/*string
number
string
number
NaN



null => 0
undefined =>NaN*/

//Boolean => empty string false  any string true

//let someNumber = 33

//let StringNumber = String(someNumber)

/*----------------------Operation-------------------- */


//console.log("2">1)          //comparison will convert string to number but not recommend as output 
                        //as output is not predictable

//comparison converts variable but = cant do it

// console.log(null>0)
// console.log(null ==0)
// console.log(null>=0)


//=== strict comparison

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id===anotherid)   //ans is false 
                               //even if value is same inside symbol it is treated as different value