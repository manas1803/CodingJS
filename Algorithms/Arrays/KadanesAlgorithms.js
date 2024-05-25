const arr = [-2, -7, 1, 3, 5, 9, 1, -8, -19];

const maximumSumSubarray = (arr) => {
  let maxGlobal = arr[0];
  let maxCurrent = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
  }
  return maxGlobal;
};

const maximumSumSubarrayWithIndexes = (arr) => {
  let maxGlobal = arr[0];
  let maxCurrent = arr[0];
  let left = 0;
  let right = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxCurrent + arr[i]) {
      left = i;
      right = i;
      maxCurrent = arr[i];
    } else {
      maxCurrent = maxCurrent + arr[i];
    }
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
      right = i;
    }
  }
  return [maxGlobal, left, right];
};

console.log("Maximum sum subarray is ", maximumSumSubarray(arr));
console.log("Maximum sum subarray is ", maximumSumSubarrayWithIndexes(arr));
