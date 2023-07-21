let num = 1;

for (let i = 0; i < 4; i++) {
  let row = [];
  for (let j = 0; j <= i; j++) {
    row[j] = num;
    num++;
  }

  let str = "";
  for (let k = 0; k < row.length; k++) {
    str += row[k] + " ";
  }
  console.log(str);
}
