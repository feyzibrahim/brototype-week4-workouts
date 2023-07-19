let read = require("readline-sync");

let str = read.question("Enter a string: ");
let count = 0;
let len = str.length - 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[len]) {
    count++;
  }
  len--;
}

if (count === str.length) console.log("Entered string is palindrome");
else console.log("Entered string is not a palindrome");
