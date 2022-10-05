function findFloor(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  if (val < arr[leftIndex]) {
    return -1;
  }
  while (leftIndex <= rightIndex) {
    let currentIdx = Math.floor((leftIndex + rightIndex) / 2);
    if (
      arr[currentIdx] < val &&
      (currentIdx === rightIndex || arr[currentIdx + 1] > val)
    ) {
      return arr[currentIdx];
    } else if (arr[currentIdx] < val) {
      leftIndex = currentIdx + 1;
    } else {
      rightIndex = currentIdx - 1;
    }
  }
}

module.exports = findFloor;
