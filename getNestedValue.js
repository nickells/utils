function getNestedValue(string, context){
  var values = string.split('.');
  return values.reduce(function(current,next){
    return current[next];
  }, context)
}
