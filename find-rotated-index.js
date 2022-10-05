function findRotatedIndex(arr, val) {
  let leftmostIdx = 0;
  let rightmostIdx = arr.length - 1;
  let leftMiddleIdx = Math.floor((leftmostIdx + rightmostIdx) / 2);
  let rightMiddleIdx = Math.ceil((leftmostIdx + rightmostIdx) / 2);
  console.log("leftmiddle", leftMiddleIdx, "leftmiddleval", arr[leftMiddleIdx], "rightmiddle", rightMiddleIdx, "rightmiddleval", arr[rightMiddleIdx])

  if(val>=arr[leftmostIdx]){
    rightmostIdx=leftMiddleIdx
  }else{
    leftmostIdx=rightMiddleIdx
  }
  while(leftmostIdx<=rightmostIdx){
    let currentIdx = Math.floor((leftmostIdx+rightmostIdx)/2)
    console.log(currentIdx, leftmostIdx, rightmostIdx)
    if(arr[currentIdx]<val){
        leftmostIdx = currentIdx+1
    }
    if(arr[currentIdx]>val){
        rightmostIdx=currentIdx-1
    }
    if(arr[currentIdx]===val){
        return currentIdx
    }
  }
  return -1
}

module.exports = findRotatedIndex;
