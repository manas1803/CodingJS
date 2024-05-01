const arr = [3, -1, 1, -3, 5, 3, 6, 7];
const k = 3;

const calculateMaxValuesInSubArrays = (arr, k) => {
  let i = 0;
  let j = 0;
  const maxValueArray = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
  const result = [];

  while (j < arr.length) {
    if (arr[j] > maxValueArray[0]) {
      let temp = maxValueArray[0];
      maxValueArray[0] = arr[j];
      maxValueArray[1] = temp;
    } else if (arr[j] > maxValueArray[1]) {
      maxValueArray[1] = arr[j];
    }
    if (j - i + 1 === k) {
      result.push(maxValueArray[0]);
      if (maxValueArray[0] === arr[i]) {
        maxValueArray[0] = maxValueArray[1];
        maxValueArray[1] = Number.NEGATIVE_INFINITY;
      }
      i++;
      j++;
    }
    if (j - i + 1 < k) {
      j++;
    }
  }
  return result;
};

const calculateMaxValuesInSubArraysBetterApproach = (arr, k) => {
  let i = 0;
  let j = 0;
  const maxValueArray = [];
  const result = [];

  while (j < arr.length) {
    debugger;
    while (
      maxValueArray.length > 0 &&
      maxValueArray[maxValueArray.length - 1] < arr[j]
    ) {
      maxValueArray.pop();
    }
    maxValueArray.push(arr[j]);
    if (j - i + 1 === k) {
      result.push(maxValueArray[0]);
      if (maxValueArray[0] === arr[i]) {
        maxValueArray.shift();
      }
      i++;
      j++;
    }
    if (j - i + 1 < k) {
      j++;
    }
  }
  return result;
};

const solution = calculateMaxValuesInSubArraysBetterApproach(arr, k);
console.log("Solution is ", solution);
