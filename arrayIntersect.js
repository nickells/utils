function arrayIntersect(arr1, arr2) {
  const longerArr = arr1.length > arr2.length ? arr1 : arr2
  const shorterArr = longerArr === arr1 ? arr2 : arr1
  
  const wordsMap = {}

  longerArr.forEach(item => {
    if (!wordsMap[item]) wordsMap[item] = true
    else return
  })
  
  return shorterArr.filter(item =>
    !!wordsMap[item]
  )
}
