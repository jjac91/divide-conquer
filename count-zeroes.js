function countZeroes(arr) {
  let leftmostIdx = 0;
  let rightmostIdx = arr.length - 1;
  if (arr[leftmostIdx] === 0) {
    return arr.length;
  }
  if (arr[rightmostIdx] === 1) {
    return 0;
  }
  while (leftmostIdx <= rightmostIdx) {
    let currentIdx = Math.floor(leftmostIdx + rightmostIdx / 2);
    let leftIdx = currentIdx - 1;
    let rightIdx = currentIdx + 1;
    console.log(currentIdx)
    if (arr[currentIdx] === 0 && arr[leftIdx] === 1) {
      return arr.length - currentIdx;
    }
    if (arr[currentIdx] === 1 && arr[rightIdx] === 0) {
      return arr.length - currentIdx + 1;
    }
    if (arr[currentIdx] === 0 && arr[leftIdx] === 0) {
      rightmostIdx = currentIdx;
    }
    if (arr[currentIdx] === 1 && arr[rightIdx] === 1) {
      leftmostIdx = currentIdx;
    }
  }
}

module.exports = countZeroes;
