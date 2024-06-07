const merge = (left, right, arr) => {
  let l = left.length;
  let r = right.length;
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < l && j < r) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < l) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < r) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

const mergeSort = (arr) => {
  const n = arr.length;
  if(n<2) return arr
  const left = [];
  const right = [];
  let k = 0;
  let mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }

  for (let i = mid; i < n; i++) {
    right[k] = arr[i];
    k++;
  }

  mergeSort(left);
  mergeSort(right);
  merge(left,right,arr)

  return arr;
};

console.log(mergeSort([2,4,1,6,8,5,3,7]))
