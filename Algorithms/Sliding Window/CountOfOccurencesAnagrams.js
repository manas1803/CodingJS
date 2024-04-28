const string = "abcdforxorfkjhjkbsjvlkoeffforroflojc";
const pattern = "for";

const getStringCharacterCount = (stringArray) => {
  const stringMap = new Map();
  stringArray.forEach((str) => {
    if (stringMap.has(str)) {
      stringMap.set(str, stringMap.get(str) + 1);
    } else {
      stringMap.set(str, 1);
    }
  });
  return stringMap;
};

const countOfAnagarams = (string, pattern) => {
  debugger;
  const stringArray = [...string];
  const patternArray = [...pattern];
  const patternMap = getStringCharacterCount(patternArray);
  let count = patternMap.size;
  let i = 0;
  let j = 0;
  let anagramsCount = 0;
  while (j < stringArray.length) {
    debugger;
    if (patternMap.has(stringArray[j])) {
      patternMap.set(stringArray[j], patternMap.get(stringArray[j]) - 1);
      if (patternMap.get(stringArray[j]) === 0) count--;
    }
    if (j - i + 1 === patternArray.length) {
      if (count === 0) anagramsCount++;
      if (patternMap.has(stringArray[i])) {
        patternMap.set(stringArray[i], patternMap.get(stringArray[i]) + 1);
        if (patternMap.get(stringArray[i]) > 0) count++;
      }
      i++;
      j++;
    } else {
      j++;
    }
  }
  return anagramsCount;
};

const anagramsCount = countOfAnagarams(string, pattern);
console.log("anagramsCount is ", anagramsCount);
