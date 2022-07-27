//Creation of a matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Access to a specific element of a matrix
console.log(matrix[1][2]);

let o = { x: 1, y: 3 };
let a = [o, 4, [5, 6]];

//Conditional invocation
function square(x, log) {
  if (log) {
    log(x);
  }
  return x * x;
}
