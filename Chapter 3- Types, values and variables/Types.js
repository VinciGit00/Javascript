//Numbers
let a = 2;

let b = 0.3 - 0.02;
console.log("b: " + b);

//Dates and time as a timestamp
let date = Date.now();
console.log(date);

//Text
//Declaration of a string of a text variable
let stringa = "hello world";

//Working with Strings
//Length of a string
stringa.length;

let cutword = stringa.substring(1, 4);
console.log(cutword);

//Boolean values
let evaluation = a === 5;
console.log(evaluation);

//Destructuring assignement
let [x, y] = [1, 2];
// You don't have to use let because the variable is already declared
[x, y] = [x + 1, y + 1];
[x, y] = [y, x];
