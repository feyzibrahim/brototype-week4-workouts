var arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var len = arr.length;

for (var i = 0; i < len; i++) {
  for (var j = 0; j < len; j++) {
    if (i != j && arr[i] == arr[j]) {
      for (var k = j; k < len; k++) {
        arr[k] = arr[k + 1];
      }
      i--;
      len--;
    }
  }
}

for (var k = 0; k < len; k++) {
  console.log(arr[k]);
}
