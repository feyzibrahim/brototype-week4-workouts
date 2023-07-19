var read = require("readline-sync");

var mark = read.questionInt("Enter your total percentage: ");

var grade;

if (mark >= 90) grade = "A";
else if (mark >= 80) grade = "B";
else if (mark >= 70) grade = "C";
else if (mark >= 60) grade = "D";
else if (mark >= 50) grade = "E";
else grade = "Failed";

console.log(grade);
