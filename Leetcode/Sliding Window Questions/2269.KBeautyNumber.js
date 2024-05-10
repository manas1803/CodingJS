var divisorSubstrings = function (num, k) {
  const strNum = num.toString().split("");
  let i = 0;
  let j = 0;
  let count = 0;
  let subStrNum = [];
  let subNum = 0;
  debugger;
  while (j < strNum.length) {
    subStrNum.push(strNum[j]);
    if (j - i + 1 === k) {
      subNum = Number(subStrNum.join(""));
      if (num % subNum === 0) count++;
      subStrNum.shift();
      i++;
      j++;
    }
    if (j - i + 1 < k) {
      j++;
    }
  }
  return count;
};

console.log(divisorSubstrings(240, 2));
