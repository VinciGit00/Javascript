# Chapter 4- Expressions and operators

## Creation of a matrix

```jsx
//Creation of a matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Access to a specific element of a matrix
console.log(matrix[1][2]);
```

Other examples of expressions of declaration

```jsx
let o = { x: 1, y: 3 };
let a = [o, 4, [5, 6]];
```

## Invocation of expressions

It’s a syntax for calling a function or a method

### Conditional invocation

```jsx
function square(x, log) {
  if (log) {
    log(x);
  }
  return x * x;
}
F;
```
