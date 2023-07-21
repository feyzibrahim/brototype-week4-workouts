let read = require("readline-sync");

var n = read.questionInt("Enter a number: ");

var fac = [];
for (var i = 2; i < n; i++) {
  if (n % i === 0) {
    fac.push(i);
  }
}
fac.forEach((f) => {
  if (Number.isInteger(Math.sqrt(f))) {
    fac.pop(f);
  }
});

console.log(fac);
// console.log(ss);
