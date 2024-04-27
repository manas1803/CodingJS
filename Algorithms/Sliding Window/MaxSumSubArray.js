const arr = [2, 5, 1, 8, 2, 9, 1];
const k = 3;
const maxNumber = (a, b) => (a >= b ? a : b);
const maxSumSubArray = (arr, k) => {
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  let i = 0;
  let j = 0;
  while (j < arr.length) {
    sum = sum + arr[j];
    if (j - i + 1 === k) {
      maxSum = maxNumber(maxSum, sum);
      sum = sum - arr[i];
      i++;
      j++;
    } else {
      j++;
    }
  }
  return maxSum;
};

const maxSum = maxSumSubArray(arr, k);

console.log("MaxSum is ", maxSum);
