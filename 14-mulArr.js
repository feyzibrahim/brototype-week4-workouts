let read = require("readline-sync");

let size = read.question("Enter the size of the arrays: ");

let arr1 = [];

console.log("\nEnter the elements in first array: ");
for (let i = 0; i < size; i++) {
  let rows = [];
  for (let j = 0; j < size; j++) {
    rows[j] = read.questionInt(`arr[${i}][${j}]: `);
  }
  arr1.push(rows);
}

let arr2 = [];

console.log("\nEnter the elements in second array: ");
for (let i = 0; i < size; i++) {
  let rows = [];
  for (let j = 0; j < size; j++) {
    rows[j] = read.questionInt(`arr[${i}][${j}]: `);
  }
  arr2.push(rows);
}

console.log("First array: ");
var pri = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    pri += arr1[i][j] + " ";
  }
  pri += "\n";
}

console.log(pri);

console.log("Second array: ");
var pre = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    pre += arr2[i][j] + " ";
  }
  pre += "\n";
}

console.log(pre);

console.log("Sum array: ");
var pre = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    pre += arr1[i][j] + arr2[i][j] + " ";
  }
  pre += "\n";
}

console.log(pre);
