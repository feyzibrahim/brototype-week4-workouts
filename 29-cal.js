function calcSum(myArr, callback) {
  let status = myArr;
  let sum = myArr.reduce((a, b) => a + b);

  let isEven = callback(myArr);

  console.log(isEven);
  console.log(status);
  return sum;
}

function callback(myArr) {
  let sum = myArr.reduce((a, b) => a + b);
  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let myArray = [1, 2, 3, 4, 5, 1];
let sumArray = calcSum(myArray, callback);
console.log(sumArray);
