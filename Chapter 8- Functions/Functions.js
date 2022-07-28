//Definition of a function
function euclideanDistance(x, y) {
  return Math.sqrt(Math.abs(x * x - y * y));
}

let result = euclideanDistance(4, 2);
console.log(result);

//Arrow function
//Arrow functions are a compact syntax to create functions
let sum = (x, y) => x + y;
let sum2 = sum(1, 2);
console.log(sum2);

let squares = [1, 2, 3, 4].map((x) => x * x);
console.log(squares);
