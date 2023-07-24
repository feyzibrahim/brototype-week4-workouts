let read = require("readline-sync");

let my_height = read.question("Enter Your Height: ");
my_height = Number(my_height);
try {
  if (isNaN(my_height)) {
    throw "notANumberError";
    return;
  }
  if (my_height >= 70) {
    throw "HugeHeightError";
    return;
  }
  if (my_height <= 2) {
    throw "tinyHeightError";
    return;
  }
  console.log(my_height);
} catch (err) {
  console.log(err);
}
