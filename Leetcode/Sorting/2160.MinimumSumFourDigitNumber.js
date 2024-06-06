/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const arr = [];
  while (num > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  arr.sort((a, b) => a - b);
  return (arr[0] * 10) + (arr[1] * 10) + arr[2] + arr[3];
};

console.log(minimumSum(2932))