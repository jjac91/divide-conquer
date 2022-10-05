function findRotationCount(arr) {
  let firstValue = arr[0];
  let lastValue = arr[arr.length - 1];
  if (lastValue > firstValue) {
    return 0;
  } else {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
      let currentIdx = Math.floor((leftIndex + rightIndex) / 2);
      if (arr[currentIdx] < arr[currentIdx - 1]) {
        return currentIdx;
      } else if (arr[currentIdx] > arr[currentIdx - 1]) {
        leftIndex = currentIdx + 1;
      } else {
        rightIndex = currentIdx - 1;
      }
    }
  }
}

module.exports = findRotationCount;
