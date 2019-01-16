
// Built in Objects - Refer MozDevNet

// Math
let result = Math.random() * 52 ;
result = Math.trunc(result); // removes the decimal points 

// Date
let resultdate = new Date();

// String
let resultString = "Hello World !";

resultString = resultString.toLocaleLowerCase();

// Number

let resultNumber = 0/0;

/** Results  */
console.log(result);
console.log(resultdate);
console.log(resultString);
console.log(Number.isNaN(resultNumber));
