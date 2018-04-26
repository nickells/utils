// resolves when you do something N amount of times

const counter = ( max ) => {
  let count = 0
  let _onComplete

  const _check = () => {
    if ( count === max ) {
      _onComplete()
    }
  }

  return {
    add: () => {
      count++
      _check()
    },
    waitForComplete: () => {
      return new Promise(( resolve ) => _onComplete = resolve )
    },
  }
}
