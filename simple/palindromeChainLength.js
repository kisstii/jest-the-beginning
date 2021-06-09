var reverseNumber = function(number) {
  var numberAsString = "" + number
  var numberAsArray = numberAsString.split("")
  var numberAsArrayReversed = numberAsArray.reverse()
  var numberAsStringReversed = numberAsArrayReversed.join("")
  return parseInt(numberAsStringReversed)
}

var isPalindrome = function(number) {
  var numberReversed = reverseNumber(number)
  return number === numberReversed
}

var palindromeChainLength = function(number) {
  if (isPalindrome(number)) {
    return 0
  }

  var stepCounter = 0
  var baseNumber = number
  var reversedNumber = null
  for (var i = 0; i < 100;  i--) {
    stepCounter++
    reversedNumber = reverseNumber(baseNumber)
    var resultOfAddition = baseNumber + reversedNumber
    if (isPalindrome(resultOfAddition)) {
      return stepCounter
    } else {
      baseNumber = resultOfAddition
    }
  }
}

module.exports = palindromeChainLength
