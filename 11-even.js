let read = require("readline-sync");
let num = read.questionInt("Enter a size of array: ");
var arr1 = [];

for (let i = 0; i < num; i++) {
  arr1[i] = read.questionInt(`Array value [${i}]: `);
}

let count = 0;

for (a of arr1) {
  if (a % 2 == 0) count++;
}

console.log("Number of even numbers: " + count);
