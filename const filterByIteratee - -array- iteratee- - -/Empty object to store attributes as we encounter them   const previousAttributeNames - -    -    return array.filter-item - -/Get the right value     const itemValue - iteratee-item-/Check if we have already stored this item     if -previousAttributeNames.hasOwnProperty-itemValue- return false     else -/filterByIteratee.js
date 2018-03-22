const filterByIteratee = (array, iteratee) => {

  // Empty object to store attributes as we encounter them
  const previousAttributeNames = {

  }

  return array.filter(item => {
    // Get the right value
    const itemValue = iteratee(item)

    // Check if we have already stored this item
    if (previousAttributeNames.hasOwnProperty(itemValue)) return false
    else {
      // Store the item so next time we encounter it we filter it out
      previousAttributeNames[itemValue] = true
      return true  
    }
  })
}
