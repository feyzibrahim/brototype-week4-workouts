let read = require("readline-sync");

let num = read.questionInt("Enter a number: ");

let arr = "1";

for (let i = 1; i <= num; i++) {
  console.log(arr);
  arr += i + 1;
}
