var read = require("readline-sync");

var num = read.questionInt("Enter a number: ");

for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i} `);
}
