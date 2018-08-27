/* A wrapper for pure functions that are called more than once, effectively memoizing its output */

const cachePureFunction = ( func ) => {
  const functionData = {}
  return ( ...args ) => {
    const key = args.join( '.' )
    if ( !functionData[ key ]) {
      functionData[ key ] = func( ...args )
    }
    return functionData[ key ]
  }
}
