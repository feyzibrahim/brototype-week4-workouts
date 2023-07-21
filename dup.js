var nums = [1, 2, 2, 3, 3, 3, 4, 5, 4, 4, 4];

var findDup = (array) =>
  array.filter((arr, index) => array.indexOf(arr) === index);

console.log(findDup);
