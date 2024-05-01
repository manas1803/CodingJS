const heapify = (arr, n, i) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;

  if (largest !== i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    heapify(arr, n, largest);
  }
};

const buildHeap = (arr) => {
  let N = arr.length;
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(arr, N, i);
  }
};

const arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];

buildHeap(arr);

console.log("Heap is ", arr);
