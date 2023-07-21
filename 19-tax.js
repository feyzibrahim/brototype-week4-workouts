let read = require("readline-sync");

let inc = read.questionInt("Enter your annual income: ");

let tax = 0;
if (inc <= 250000) {
  tax = 0;
} else if (inc <= 500000) {
  tax = (inc * 5) / 100;
} else if (inc <= 1000000) {
  tax = (inc * 20) / 100;
} else {
  tax = (inc * 30) / 100;
}

console.log("Income tax amount = " + tax);
