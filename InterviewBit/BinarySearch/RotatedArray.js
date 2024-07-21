function findMin(A) {
  let low = 0;
  let high = A.length - 1;
  let n = A.length;

  while (low <= high) {
    debugger
    let mid = Math.floor((low + high) / 2);
    let prev = (mid - 1) % n;
    let next = (mid + 1+n) % n;
    if (A[mid] < A[prev] && A[mid] < A[next]) {
      return A[mid];
    }
    else if(A[mid]<=A[high]){
        high=mid-1
    }
    else if(A[mid]>=A[low]){
        low=mid+1
    }
  }
  return A[0];
}
const ans = findMin([ 5137, 5525, 9511, 13269, 16255, 16700, 19870, 23034, 29247, 29934, 34583, 41585, 42598, 44113, 46035, 50147, 50737, 57084, 65916, 76905, 84098, 85912, 92081, 92257, 95449 ])
console.log(ans)