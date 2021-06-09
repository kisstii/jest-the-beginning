var uniqueInOrder=function(iterable){
  var result = []
  for (var i = 0; i < iterable.length; i++) {
    var currentElement = iterable[i]
    var latestInResult = result[result.length-1]
    if (!latestInResult) {
      result.push(currentElement)
    } else {
      if (latestInResult != currentElement) {
        result.push(currentElement)
      }
    }
  }
  return result
}

module.exports = uniqueInOrder
