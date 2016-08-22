function countWords(str, matchCharacters = [' ', ',', '\n', '.']) {
  const obj = {}
  let prevIdx = 0
  for (let i = 0; i <= str.length; i++) {
    if (matchCharacters.indexOf(str[i]) !== -1 || i === str.length) {
      const thisKey = str.slice(prevIdx, i)
      prevIdx = i + 1
      if (obj[thisKey]) obj[thisKey]++
      else obj[thisKey] = 1
    }
  }
  return obj
}
