const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;

const firstNegativeNumber = (arr, k) => {
  let negativeNumbersQueue = [];
  let resultArray = [];
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] < 0) {
      negativeNumbersQueue.push(arr[j]);
    }
    if (j - i + 1 === k) {
      if (negativeNumbersQueue.length === 0) resultArray.push(0);
      resultArray.push(negativeNumbersQueue[0]);
      if (arr[i] === negativeNumbersQueue[0]) negativeNumbersQueue.shift();
      i++;
      j++;
    } else {
      j++;
    }
  }
  return resultArray;
};

const resultantArray = firstNegativeNumber(arr, k);
console.log("Solution is ", resultantArray);
