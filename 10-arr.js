let read = require("readline-sync");
let num = read.questionInt("Enter a size of arrays: ");
var arr1 = [];
var arr2 = [];

for (let i = 0; i < num; i++) {
  arr1[i] = read.questionInt(`First [${i}]: `);
}

for (let j = 0; j < num; j++) {
  arr2[j] = read.questionInt(`Second[${j}]: `);
}

console.log("\nArrays Before swapping: ");
console.log(arr1);
console.log(arr2);

for (let k = 0; k < num; k++) {
  let temp = arr1[k];
  arr1[k] = arr2[k];
  arr2[k] = temp;
}

console.log("\nArrays after swapping: ");
console.log(arr1);
console.log(arr2);
