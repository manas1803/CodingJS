/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  let sum = 0;
  let counter = 3;
  let partitonSum = 0;
  for (let i = 0; i < arr.length; i++) sum = aum + arr[i];
  if (sum % 3 !== 0) return false;
  partitonSum = sum / 3;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum === partitonSum) {
      counter--;
      if (counter === 1 && i < arr.length - 1) {
        return true;
      }
      sum = 0;
    }
  }
  return false;
};

console.log(
  canThreePartsEqualSum([
    -9, -8, -8, 6, -10, 8, -2, -3, 9, 4, -2, 1, 7, 8, 6, -4, 5, 5, -2, -8, 4, 7,
    3, -4, 4, 5, 2, 8, 3, -5,
  ])
);
