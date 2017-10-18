/* Adds something to a nested object and creates the path to it if doesn't yet exist */

function addDataAtNestedKey( root, keyName, data ) {
  const nestedKeys = keyName.split( '.' )

  let currentReference = root
  nestedKeys.forEach(( key, index ) => {
    if ( !currentReference[ key ]) currentReference[ key ] = {}
    if ( index === nestedKeys.length - 1 ) currentReference[ key ] = data
    else currentReference = currentReference[ key ]
  })
}
