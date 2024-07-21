const arr = [1, 3, 5, 6];
function searchInsert(arr, num) {
  let low = 0;
  debugger
  let high = arr.length - 1;
  let result = -1;
  if (arr.length === 1) return 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      result = mid;
      break;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (result === -1) result = high;
  return result;
}

const ans = searchInsert(arr, 7);
console.log(ans);
