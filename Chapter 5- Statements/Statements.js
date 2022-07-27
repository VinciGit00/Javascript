function Conditionalstatement(a, b) {
  if (a == 0 || b == 2) {
    //code
  } else {
    //code
  }
}

function Switch(n) {
  switch (n) {
    case 1:
      print(1);
      break;
    case 1:
      print(1);
      break;

    case 1:
      print(1);
      break;

    default:
      print("More than 1");
      break;
  }
}

//Loop statements
//These functions are void functions because there'isnt a return method
function WhileStatement(a) {
  do {
    a++;
  } while (a < 10);
}

function ForStatement(a) {
  for (i = 0; i < 10; i++) {
    //Code
  }
}

// Exceptions
//Try-catch expressions
function Excpeptions() {
  try {
    //Code
  } catch (e) {
    //code
  }
}

//Classes
class Circle {
  constructor(radius) {
    this.r = radius;
  }
  Area() {
    return 3.14 * this.r * this.r;
  }
  Cirumnference() {
    return 2 * 3.14 * this.r;
  }
}
