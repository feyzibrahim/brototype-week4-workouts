let read = require("readline-sync");

let num = read.questionInt("Enter the size of array: ");

let arr = [];

for (let i = 0; i < num; i++) {
  arr[i] = read.questionInt(`Array[${i}]: `);
}

for (let j = 0; j < num; j++) {
  for (let k = j; k < num; k++) {
    if (arr[j] < arr[k]) {
      let temp = arr[j];
      arr[j] = arr[k];
      arr[k] = temp;
    }
  }
}

console.log(arr);
