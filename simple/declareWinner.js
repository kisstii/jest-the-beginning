function declareWinner(fighter1, fighter2, firstAttacker) {
  var firstFighter
  var secondFighter
  if (firstAttacker === fighter1.name) {
    firstFighter = fighter1
    secondFighter = fighter2
  } else {
    firstFighter = fighter2
    secondFighter = fighter1
  }
  for (var i = 0; i > -1; i++) {
    var isEven = i % 2 == 0
    if (isEven) {
      secondFighter.health = secondFighter.health - firstFighter.damagePerAttack
      if (secondFighter.health <= 0) {
        return firstFighter.name
      }
    } else {
       firstFighter.health = firstFighter.health - secondFighter.damagePerAttack
      if (firstFighter.health <= 0) {
        return secondFighter.name
      }
    }
  }
}

module.exports = declareWinner
