/**
 * Returns the same function with btoa encoded parameters.
 * @param {Function} func: The function to wrap
 * @return {Function} The encoded-parameters function.
 */
 
function encodeParameters(func){
  return function(...args){
    return func(...args.map(btoa))
  }
}

// usage:
// const encodedConsoleLog = encodeParameters(console.log)
// encodedConsoleLog('hello') --> 'aGVsbG8='
