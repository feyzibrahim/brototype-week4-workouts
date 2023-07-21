let read = require("readline-sync");

let prime = read.question("Enter a number: ");

let count = 0;
for (let i = 2; i < prime; i++) {
  if (prime % i == 0) {
    count++;
    break;
  }
}

if (count != 0) console.log("Number is not prime");
else console.log("Number is prime");
