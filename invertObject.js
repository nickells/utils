function invertObject(parentsToChild) {
  const parentKeys = Object.keys(parentsToChild)
  const childToParent = {}
  parentKeys.forEach(parentKey => {
    const children = Object.keys(parentsToChild[parentKey])
    children.forEach(child => {
      if (!childToParent[child]) childToParent[child] = {}
      if (!childToParent[child][parentKey]) {
        childToParent[child][parentKey] = parentsToChild[parentKey][child]
      }
    })
  })
  return childToParent
}
