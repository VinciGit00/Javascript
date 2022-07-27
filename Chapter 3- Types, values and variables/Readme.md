# Chapter 3- Types, values and variables

Types can be divided in primitive objects and object types.

Primitive objects include numbers and strings of text

## Numbers

The format for representing numbers is 64 bit float representation.

Declaration of a number

```jsx
let a = 2;

let b = 0.3 - 0.02;
console.log("b: " + b);
```

## Dates and time

The format of the date is done in timestamp

```jsx
let date = Date.now();
console.log(date);
```

## Text

```jsx
let stringa = "hello world";
```

### Working with Strings

- Length of a String

```jsx
stringa.length;
```

### Substring

```jsx
let cutword = stringa.substring(1, 4);
console.log(cutword);
```

## Boolean values

You have to use === to make evaluations

```jsx
let a = 2;

//Boolean values
let evaluation = a === 5;
console.log(evaluation);
```

# Declaration of variables

In modern javascript variables are declared with let and const keyboard. It’s a good programming practice to assign an initial value to your variables when you declare them.

The keyword const is used for the constants → they don’t change with time (like final operator).

## Variables declaration with var

Var and let are 2 different meanings.

# Destructuring assignement

In destructuring assignement the value on the left is an array and you assign their corrisponding values on the right.

Example

```jsx
//Destructuring assignement
let [x, y] = [1, 2];
// You don't have to use let because the variable is already declared
[x, y] = [x + 1, y + 1];
[x, y] = [y, x];
```
