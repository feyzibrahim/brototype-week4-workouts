var a = 0;
var b = 0;
var c = 1;
var sum = 0;

var i = 1;
while (i < 4) {
  sum = a + b + c;
  a = b;
  b = c;
  c = sum;
  console.log(sum);
  i++;
}
