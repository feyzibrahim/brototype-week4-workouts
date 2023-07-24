let read = require("readline-sync");

let limit = read.questionInt("Enter Limit of Array: ");
var a = [];
var a2 = [];
var sum = [];
function getArray() {
  for (let i = 0; i < limit; i++) {
    a[i] = [];
    for (let j = 0; j < limit; j++) {
      a[i][j] = read.questionInt(
        `Enter value of array1 ${i} & ${j} position: `
      );
    }
  }
  for (let i = 0; i < limit; i++) {
    a2[i] = [];
    for (let j = 0; j < limit; j++) {
      a2[i][j] = read.questionInt(
        `Enter value of array2 ${i} & ${j} position: `
      );
    }
  }
}
function displayArray() {
  console.log(sum);
}

function sumArray() {
  for (let i = 0; i < limit; i++) {
    sum[i] = [];
    for (let j = 0; j < limit; j++)
      sum[i][j] = Number(a[i][j]) + Number(a2[i][j]);
  }
}

getArray();
sumArray();
displayArray();
