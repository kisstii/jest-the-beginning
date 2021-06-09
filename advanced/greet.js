function greet(age) {
  const now = new Date()
  const isMorning = now.getHours() < 10
  const isEvening = now.getHours() > 17

  if (isMorning) {
    if (age < 30) {
      console.log("Heyho!")
    } else {
      console.log("Good morning")
    }
  }

  else if (isEvening) {
    if (age < 30) {
      console.log("Hello...")
    } else {
      console.log("Good evening")
    }
  }

  else {
    if (age < 30) {
      console.log("Hi")
    } else {
      console.log("Good day")
    }
  }
}

module.exports = greet
