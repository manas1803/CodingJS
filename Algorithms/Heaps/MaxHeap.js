const getParentIndex = (index) => Math.floor((index - 1) / 2);

const swapElements = (heap, index1, index2) => {
  [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
};

const heapifyInsertion = (heap) => {
  let currentIndex = heap.length - 1;
  while (currentIndex > 0) {
    let parentIndex = getParentIndex(currentIndex);
    if (heap[parentIndex] < heap[currentIndex]) {
      swapElements(heap, currentIndex, parentIndex);
      currentIndex = parentIndex;
    } else {
      break;
    }
  }
};

const heapifyDeletion = (heap) => {
  let currentIndex = 0;
  const heapSize = heap.length;
  while (true) {
    let leftChild = 2 * currentIndex + 1;
    let rightChild = 2 * currentIndex + 2;
    let maximumIndex = currentIndex;

    if (leftChild < heapSize && heap[leftChild] > heap[maximumIndex]) {
      maximumIndex = leftChild;
    }

    if (rightChild < heapSize && heap[rightChild] > heap[maximumIndex]) {
      maximumIndex = rightChild;
    }

    if (maximumIndex !== currentIndex) {
      swapElements(heap, currentIndex, maximumIndex);
      currentIndex = maximumIndex;
    } else {
      break;
    }
  }
};

const extractMaximumElement = (heap) => {
  if (heap.length === 0) return null;
  const maximum = heap[0];
  let lastElement = heap.pop();
  if (heap.length > 0) {
    heap[0] = lastElement;
    heapifyDeletion(heap);
  }
  return maximum;
};

const insertElementsInHeap = (heap, element) => {
  heap.push(element);
  heapifyInsertion(heap);
};

const maxHeap = [];
insertElementsInHeap(maxHeap, 10);
insertElementsInHeap(maxHeap, 5);
insertElementsInHeap(maxHeap, 20);
insertElementsInHeap(maxHeap, 8);
insertElementsInHeap(maxHeap, 15);

const max = extractMaximumElement(maxHeap);

console.log("MaxHeap is ", maxHeap);

console.log("Maximum element is ", max);
