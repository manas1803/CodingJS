const maximumSubArrayWithSumK = (arr, k) => {
  let i = 0;
  let j = 0;
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;
  while (j < arr.length) {
    sum = sum + arr[j];
    if (sum < k) {
      j++;
    } else if (sum === k) {
      max = Math.max(max, j - i + 1);
      j++;
    } else {
      while (sum > k) {
        sum = sum - arr[i];
        i++;
      }
      j++;
    }
  }
  return max;
};

const arr = [4, 1, 1, 1, 2, 3, 5];
console.log(maximumSubArrayWithSumK(arr, 5));
