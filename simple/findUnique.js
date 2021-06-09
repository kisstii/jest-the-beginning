function findUniq(numbers) {
  var firstNumber = numbers[0]
  var secondNumber = numbers[1]
  var defaultNumber
  if (firstNumber === secondNumber)  {
    defaultNumber = firstNumber
    for (var i = 0; i < numbers.length; i++) {
      var currentNumber = numbers[i]
      if (currentNumber !== defaultNumber) {
        return currentNumber
      }
    }
  } else {
    var thirdNumber = numbers[2]
    if (thirdNumber === secondNumber) {
      return firstNumber
    } else {
      return secondNumber
    }
  }
}

module.exports = findUniq
