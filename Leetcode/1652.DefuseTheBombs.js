var decrypt = function (code, k) {
  const updatedCode = [...code, ...code];
  let defusedArray = [];
  let i = 0;
  let j = 0;
  let temp = 0;
  let windowSize = 0;
  let sum = 0;
  if (k > 0) {
    i = 1;
    j = 1;
    windowSize = k;
  } else if (k < 0) {
    i = code.length + k;
    j = code.length + k;
    windowSize = k * -1;
  } else {
    while (temp < code.length) {
      defusedArray.push(0);
      temp++;
    }
    return defusedArray;
  }

  while (j < updatedCode.length) {
    debugger;
    sum = sum + updatedCode[j];
    if (j - i + 1 === windowSize) {
      defusedArray.push(sum);
      sum = sum - updatedCode[i];
      i++;
      j++;
    }
    if (j - i + 1 < windowSize) {
      j++;
    }
    if (defusedArray.length === code.length) {
      break;
    }
  }
  return defusedArray;
};

console.log(decrypt([1, 2, 3, 4], 0));
