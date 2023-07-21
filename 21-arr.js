let read = require("readline-sync");

let arr = [];

let len = read.questionInt("Enter the array limit: ");

for (let i = 0; i < len; i++) {
  arr[i] = read.questionInt(`[${i}]:`);
}

let mul = [];

for (let i = 0; i < len - 1; i++) {
  mul[i] = arr[i] * arr[i + 1];
}

console.log(mul);
