const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')    //if we use String() function to define string we can use multiple functions of string

console.log(gameName[0]);
console.log(gameName.__proto__);     //all this methods are stored in __proto__ object


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  //we cant give negative value, it will start from 0
console.log(newString);

const anotherString = gameName.slice(-8, 4)      //we can give negative values in slice if starts from end
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());     //removes the start and end spaces 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) 

console.log(url.includes('sundar'))

console.log(gameName.split('-'));