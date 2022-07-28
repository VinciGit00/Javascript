# Chapter 8- Functions

# Definition of a function

```jsx
//Definition of a function
function euclideanDistance(x, y) {
  return Math.sqrt(Math.abs(x * x - y * y));
}

let result = euclideanDistance(4, 2);
console.log(result);
```

# Arrow function

Arrow functions are a compact syntax to create functions

```jsx
let squares = [1, 2, 3, 4].map((x) => x * x);
console.log(squares);
```
