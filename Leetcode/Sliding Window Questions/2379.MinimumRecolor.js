/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */

var minimumRecolors = function (blocks, k) {
    debugger
  const arr = [...blocks];
  let i = 0;
  let j = 0;
  let countW = 0;
  let min = Number.POSITIVE_INFINITY;
  while (j < arr.length) {
    if (arr[j] === "W") countW++;

    if (j - i + 1 === k) {
      min = Math.min(min, countW);
      if (arr[i] === "W") countW--;
      i++;
      j++;
    }

    if (j - i + 1 < k) {
      j++;
    }
  }
  if (min === Number.POSITIVE_INFINITY) min = 0;
  return min;
};

console.log(minimumRecolors("W",1))