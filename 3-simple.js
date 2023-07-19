var read = require("readline-sync");

var p = read.questionInt("Enter a Principal Amount: ");
var r = read.questionFloat("Enter a Interest Rate: ");
var n = read.questionFloat("Enter a Number of Years: ");

var si = (p * r * n) / 100.0;

console.log("Simple Interest: " + si);
