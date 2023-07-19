var x = 121;

var num = x;
var sum = 0;
while (num != 0) {
  var rem = num % 10;
  console.log(rem);
  sum = sum * 10 + rem;
  num = num / 10;
}
