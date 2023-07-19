var arr = [1, 2, 2, 3, 3, 3, 4, 5, 4, 4, 4];
var dup = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    var skip = false;
    if (i != j) {
      if (dup.length > 0) {
        for (let k = 0; k < dup.length; k++) {
          if (arr[j] === dup[k]) {
            skip = true;
          }
        }
      }

      if (skip) continue;

      if (arr[i] === arr[j]) {
        dup.push(arr[j]);
      }
    }
  }
}

console.log(dup);
