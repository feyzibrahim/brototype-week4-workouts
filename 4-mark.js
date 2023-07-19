var read = require("readline-sync");

var mark = read.questionInt("Enter your mark: ");

var msg = mark >= 50 ? "Passed" : "Failed";

console.log(msg);
