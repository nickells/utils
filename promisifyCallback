const promisifyCallbackFunction = ( func ) => {
  return ( ...args ) => {
    return new Promise(( resolve, reject ) => {
      return func( ...args, ( err, data ) => {
        if ( err ) reject( err )
        resolve( data )
      })
    })
  }
}
