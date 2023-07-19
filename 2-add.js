var read = require("readline-sync");

var num1 = read.questionInt("Enter a integer Number: ");
var num2 = read.questionFloat("Enter a float Number: ");

console.log("Sum of the two: " + (num1 + num2));
