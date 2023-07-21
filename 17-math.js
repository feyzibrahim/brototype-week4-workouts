let read = require("readline-sync");

class Calc {
  addition() {
    var a = read.questionInt("Enter a: ");
    var b = read.questionInt("Enter b: ");
    console.log("Sum: " + parseInt(a + b));
  }
  subtract() {
    var a = read.questionInt("Enter a: ");
    var b = read.questionInt("Enter b: ");
    console.log("Subtract: " + parseInt(a - b));
  }
  multiply() {
    var a = read.questionInt("Enter a: ");
    var b = read.questionInt("Enter b: ");
    console.log("Product: " + a * b);
  }
  divide() {
    var a = read.questionInt("Enter a: ");
    var b = read.questionInt("Enter b: ");
    console.log("Reminder: " + a / b);
  }
}

var choice = 0;

const calc = new Calc();

while (choice != -1) {
  console.log(
    "Choose option from below list: \n1.Addition \n2.Subtract \n3.Multiply \n4.Division \n5.Exit"
  );
  choice = read.questionInt("Enter your choice: ");
  switch (choice) {
    case 1:
      calc.addition();
      break;
    case 2:
      calc.subtract();
      break;
    case 3:
      calc.multiply();
      break;
    case 4:
      calc.divide();
      break;
    case 5:
      choice = -1;
      break;

    default:
      console.log("Incorrect choice!!");
      break;
  }
}
