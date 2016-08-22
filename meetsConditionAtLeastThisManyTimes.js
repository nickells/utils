function meetsConditionAtLeastThisManyTimes(array, predicate, howManyTimes) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) count++
    if (count === howManyTimes) return true
  }
  return false
}
