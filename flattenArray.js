function flattenArray(arr){
  while (isMultiDimensional(arr)){
    arr = arr.reduce((arr,elems)=>{
      arr = arr.concat(elems);
      return arr;
    },[])
  }
  return arr;
}

function isMultiDimensional(arr){
  if (!Array.isArray(arr)) return false;
  return arr.some(Array.isArray);
}
