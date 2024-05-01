const getParentIndex = (index) => Math.floor((index - 1) / 2);

const getLeftChildIndex = (index) => 2 * index + 1;
const getRightChildIndex = (index) => 2 * index + 2;

const swapElements = (heap, index1, index2) => {
  let swappedElement = heap[index1];
  heap[index1] = heap[index2];
  heap[index2] = swappedElement;
};

const heapifyInsertion = (heap) => {
  let currentIndex = heap.length - 1;
  while (currentIndex > 0) {
    let parentIndex = getParentIndex(currentIndex);
    if (heap[currentIndex] < heap[parentIndex]) {
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

    if (
      leftChildIndex < heapSize &&
      heap[leftChildIndex] < heap[minimumIndex]
    ) {
      minimumIndex = leftChildIndex;
    }

    if (
      rightChildIndex < heapSize &&
      heap[rightChildIndex] < heap[minimumIndex]
    ) {
      minimumIndex = rightChildIndex;
    }

    if (minimumIndex !== currentIndex) {
      swapElements(heap, currentIndex, minimumIndex);
      currentIndex = minimumIndex;
    } else {
      break;
    }
  }
};

const extractMinimum = (heap) => {
  if (heap.length === 0) return null;
  const minimum = heap[0];

  let lastElement = heap.pop();
  if (heap.length > 0) {
    heap[0] = lastElement;
    heapifyDeletion(heap);
  }
  return minimum;
};

const insertElementsInHeap = (heap, element) => {
  heap.push(element);
  heapifyInsertion(heap);
};

const minHeap = [];
insertElementsInHeap(minHeap, 10);
insertElementsInHeap(minHeap, 5);
insertElementsInHeap(minHeap, 20);
insertElementsInHeap(minHeap, 8);
insertElementsInHeap(minHeap, 15);

const min = extractMinimum(minHeap);

console.log("minHeap is ", minHeap);

console.log("Minimum element is ", min);
