const quickSort = arr => {
  if (arr.length <= 1) return
  const pivotIndex = Math.floor(arr.length / 2)
  const piovt = arr.splice(pivotIndex, 1)[0]
  let left = [],
    right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < piovt) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([piovt], quickSort(right))
}
