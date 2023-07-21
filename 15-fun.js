let read = require("readline-sync");

let size = read.question("Enter the size of the arrays: ");

var arr = [];

readArray();
display();

function readArray() {
  for (let i = 0; i < size; i++) {
    arr[i] = read.questionInt(`${i}: `);
  }
}

function display() {
  console.log(arr);
}
