# Chapter 7- Arrays

## Creating arrays

```jsx
//Creating array
//Empty
let empty = [];
//Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
//Mix
let mix = [1.2, true, "String"];
```

## Spread operator

```jsx
let a = [1, 2, 3];
let b = [0, ...a, 4];
```

Comment: the script insert the array a in b when you use …a

# Other way to construct arrays

## Array constructor

```jsx
//Array constructor
let array = new Array();

//With a specific size
let array2 = new Array(10);
```

# Adding elements to an array

## Writing into an array

```jsx
//Insert into an array data
let arrayInsert = [];
//Insert a String
arrayInsert[0] = "Ciao";
//Insert a number
arrayInsert[1] = 1;
//Insert a boolean
arrayInsert[2] = true;

console.log(arrayInsert);
```

## Length of an array

```jsx
console.log(arrayInsert.length);
```

# Sparse array

A sparse array is one in which the elements do not have contiguos indexes starting at 0.

## Iterating arrays

```jsx
let letters = ["a", "b", "c", "d", "e"];
for (let letter in letters) {
  console.log(letter);
}
```

# Multidimensional arrays

## Declaration of multidimensional arrays

```jsx
let Multidimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

## Iterating elements of an multidimensional array

```jsx
for (let x = 0; x < Multidimensional.length; x++) {
  for (let y = 0; y < Multidimensional.length; y++) {
    console.log(Multidimensional[x][y]);
  }
}
```

# Flattening arrays

## [a,[b,c]] type arrays

```jsx
let toFlat = [1, [2, 3]];
toFlat = toFlat.flat();
console.log(toFlat);
```

It appears [1,2,3]

```jsx
let toFlat2 = [1, [2, [3]]];
toFlat2 = toFlat2.flat();
console.log(toFlat2);
```

It appears [1,2,[3]]
