const { object } = require("webidl-conversions");

//Method 1
let book = {
  title: "javascript for noobs",
  "sub-title": "for all the peoople",
  author: {
    first: "Marco Vinciguerra",
    second: "Peppino",
  },
};

//Method 2: creating object with new
let obj = new Object();
obj.name = "Marco";
obj.surname = "Vinciguerra";
obj.age = 22;
obj.birthplace = "Bergamo";
console.log(obj);
console.log("-------------------------");

//Method 3: using functions

function Automobile(color) {
  this.color = color;
}

var vehicle = Automobile("red");

//Evaluations
console.log(obj.name);
console.log(obj["name"]);

//Deleting properties of an object
console.log("Before" + JSON.stringify(obj));
delete obj.name;
console.log("After" + JSON.stringify(obj));
