# Chapter 6- Objects

## Method 1: Json like creation of objects

```jsx
let book = {
  title: "javascript for noobs",
  "sub-title": "for all the peoople",
  author: {
    first: "Marco Vinciguerra",
    second: "Peppino",
  },
};
```

## Method 2: creating object with new

```jsx
let obj = new Object();
obj.name = "Marco";
obj.surname = "Vinciguerra";
obj.age = 22;
obj.birthplace = "Bergamo";
console.log(obj);
```

## Method 3: using functions

```jsx
function Automobile(color) {
  this.color = color;
}

var vehicle = Automobile("red");
```

After the creation of the function you have to call the method.

# Evaluations

These evaluations have the same meaning

```jsx
console.log(obj.name);
console.log(obj["name"]);
```

# Deleting properties

```jsx
//Deleting properties of an object
console.log("Before" + JSON.stringify(obj));
delete obj.name;
console.log("After" + JSON.stringify(obj));
```
