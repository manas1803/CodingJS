/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const leftArray = leftSumArray(nums);
  const rightArray = rightSumArray(nums);
  const result = [];
  for (let i = 0; i < leftArray.length; i++) {
    result[i] = Math.abs(leftArray[i] - rightArray[i]);
  }
  return result;
};

const leftSumArray = (nums) => {
  const leftArray = [0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    leftArray.push(sum);
  }
  leftArray.pop();
  return leftArray;
};

const rightSumArray = (nums) => {
  debugger;
  const rightArray = [0];
  let sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    sum = sum + nums[i];
    rightArray.unshift(sum);
  }
  rightArray.shift();
  return rightArray;
};
