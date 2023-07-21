let read = require("readline-sync");

let wt = read.questionInt("Enter marks in written test: ");

let le = read.questionInt("Enter marks in Lab exam: ");

let as = read.questionInt("Enter marks in Assignments: ");

let og = (wt * 70) / 100 + (le * 20) / 100 + (as * 10) / 100;

console.log("Overall marks: " + og);
