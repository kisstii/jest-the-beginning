function maxDiff(list) {
  if (list.length === 0 || list.length === 1) {
    return 0
  }

  var smallestNumber = list[0]
  var largestNumber = list[0]

  for (var i = 0; i < list.length; i++) {
    var currentNumber = list[i]
    if (currentNumber < smallestNumber) {
      smallestNumber = currentNumber
    }
    if (currentNumber > largestNumber) {
      largestNumber = currentNumber
    }
  }

  return largestNumber - smallestNumber
}

module.exports = maxDiff
