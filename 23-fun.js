let read = require("readline-sync");

function main() {
  let limit = read.questionInt("Enter Limit of Array: ");
  var a = [];
  function getArray() {
    for (let i = 0; i < limit; i++) {
      a[i] = [];
      for (let j = 0; j < limit; j++) {
        a[i][j] = read.questionInt(
          `Enter value of array ${i} & ${j} position: `
        );
      }
    }
  }
  getArray();
  function displayArray() {
    for (let i = 0; i < limit; i++) {
      for (let j = 0; j < limit; j++) {
        console.log(`${a[i][j]}`);
      }
    }
  }
  displayArray();
}
main();
