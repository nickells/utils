const pipeFunctions = (...arrayOfFunctions) => 
  startVal => 
    arrayOfFunctions.reduce((lastVal, currFunc) => 
      currFunc(lastVal)
    , startVal)
