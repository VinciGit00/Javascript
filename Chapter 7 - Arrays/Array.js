//Creating array
//Empty
let empty = [];
//Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
//Mix
let mix = [1.2, true, "String"];

//Spread operator
let a = [1, 2, 3];
let b = [0, ...a, 4];

//Other way to construct arrays
//Array constructor
let array = new Array();

//With a specific size
let array2 = new Array(10);

//Insert into an array data
let arrayInsert = [];
//Insert a String
arrayInsert[0] = "Ciao";
//Insert a number
arrayInsert[1] = 1;
//Insert a boolean
arrayInsert[2] = true;

console.log(arrayInsert);

//Length of an array
console.log(arrayInsert.length);

//Iterating arrays
let letters = ["a", "b", "c", "d", "e"];
for (let letter in letters) {
  //console.log(letter);
}

//Multidimensional arrays
let Multidimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Dimensione: " + Multidimensional.length);
//Iterating elements
for (let x = 0; x < Multidimensional.length; x++) {
  for (let y = 0; y < Multidimensional.length; y++) {
    console.log(Multidimensional[x][y]);
  }
}

//Flattening arrays
//Very interesting
let toFlat = [1, [2, 3]];
toFlat = toFlat.flat();
console.log(toFlat);

let toFlat2 = [1, [2, [3]]];
toFlat2 = toFlat2.flat();
console.log(toFlat2);
