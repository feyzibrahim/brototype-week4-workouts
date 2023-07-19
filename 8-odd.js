var read = require("readline-sync");

var num = read.questionInt("Enter a number: ");
var sum = 0;

for (let i = 0; i <= num; i++) {
  sum += i % 2 == 0 ? 0 : i;
}

console.log("Sum of odd numbers = " + sum);
