var countGoodSubstrings = function (s) {
  const str = s.split("");
  const windowSize = 3;
  let i = 0;
  let j = 0;
  let result = 0;
  const mappedCharacters = new Map();
  while (j < str.length) {
    if (mappedCharacters.has(str[j])) {
      mappedCharacters.set(str[j], mappedCharacters.get(str[j]) + 1);
    } else {
      mappedCharacters.set(str[j], 1);
    }
    if (j - i + 1 === windowSize) {
      if (mappedCharacters.size === windowSize) {
        result++;
      }
      mappedCharacters.set(str[i], mappedCharacters.get(str[i]) - 1);
      if (mappedCharacters.get(str[i]) === 0) mappedCharacters.delete(str[i]);
      i++;
      j++;
    }
    if (j - i + 1 < windowSize) {
      j++;
    }
  }
  return result;
};

console.log(countGoodSubstrings("xyzzaz"));
