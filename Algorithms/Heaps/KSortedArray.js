const kSortedArray = [6, 5, 3, 2, 8, 10, 9];
const k = 3;

const getParentIndex = (index) => Math.floor((index - 1) / 2);

const getLeftChildIndex = (index) => 2 * index + 1;

const getRightChildIndex = (index) => 2 * index + 2;

const swapElements = (heap, index1, index2) => {
  [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
};

const heapifyInsertion = (heap) => {
  let currentIndex = heap.length - 1;
  while (currentIndex > 0) {
    let parentIndex = getParentIndex(currentIndex);
    if (heap[parentIndex] > heap[currentIndex]) {
      swapElements(heap, currentIndex, parentIndex);
      currentIndex = parentIndex;
    } else {
      break;
    }
  }
};

const heapifyDeletion = (heap) => {
  const heapSize = heap.length;
  let currentIndex = 0;
  while (true) {
    let leftChildIndex = getLeftChildIndex(currentIndex);
    let rightChildIndex = getRightChildIndex(currentIndex);
    let minimumIndex = currentIndex;

    if (leftChildIndex < heapSize && heap[leftChildIndex] < heap[minimumIndex])
      minimumIndex = leftChildIndex;

    if (
      rightChildIndex < heapSize &&
      heap[rightChildIndex] < heap[minimumIndex]
    )
      minimumIndex = rightChildIndex;

    if (minimumIndex !== currentIndex) {
      swapElements(heap, currentIndex, minimumIndex);
      currentIndex = minimumIndex;
    } else {
      break;
    }
  }
};

const peekElement = (heap) => {
  if (heap.length === 0) return null;
  const topElement = heap[0];
  let lastElement = heap.pop();
  if (heap.length > 0) {
    heap[0] = lastElement;
    heapifyDeletion(heap);
  }
  return topElement;
};

const insertElementInHeap = (heap, element) => {
  heap.push(element);
  heapifyInsertion(heap);
};

const kSortedArrayResult = (kSortedArray, k) => {
  debugger;
  const result = [];
  const heap = [];
  for (let i = 0; i < kSortedArray.length; ) {
    while (heap.length < k + 1) {
      insertElementInHeap(heap, kSortedArray[i]);
      i++;
    }
    if (heap.length > k) {
      result.push(heap.shift());
    }
  }
  while (heap.length > 0) {
    result.push(heap.shift());
    heapifyInsertion(heap);
  }
  return result;
};

console.log(kSortedArrayResult(kSortedArray, k));
