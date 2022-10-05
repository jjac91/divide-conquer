function sortedFrequency(arr, val) {
  let firstIdx = findFirst(arr, val);
  console.log(firstIdx, "first idx");
  if (firstIdx === -1) {
    return -1;
  }
  let lastVal = findLast(arr, val);
  return lastVal - firstIdx + 1;
}

function findFirst(arr, val) {
  let rightmostIdx = arr.length - 1;
  let leftmostIdx = 0;
  while (leftmostIdx <= rightmostIdx) {
    let currentIdx = Math.floor((rightmostIdx + leftmostIdx) / 2);
    if (
      (arr[currentIdx] === val && currentIdx === 0) ||
      (arr[currentIdx] === val && arr[currentIdx - 1] < val)
    ) {
      return currentIdx;
    } else if (arr[currentIdx] >= val) {
      rightmostIdx = currentIdx - 1;
    } else {
      leftmostIdx = currentIdx + 1;
    }
  }
  return -1;
}

function findLast(arr, val) {
  let rightmostIdx = arr.length - 1;
  let leftmostIdx = 0;
  while (leftmostIdx <= rightmostIdx) {
    let currentIdx = Math.floor((rightmostIdx + leftmostIdx) / 2);
    if (
      (arr[currentIdx] === val && currentIdx === arr.length - 1) ||
      (arr[currentIdx] === val && arr[currentIdx + 1] > val)
    ) {
      return currentIdx;
    } else if (arr[currentIdx] <= val) {
      leftmostIdx = currentIdx + 1;
    } else {
      rightmostIdx = currentIdx - 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
