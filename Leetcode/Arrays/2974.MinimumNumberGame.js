/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < nums.length) {
    result.push(nums[j]);
    result.push(nums[i]);
    i = i + 2;
    j = j + 2;
  }
  return result;
};
