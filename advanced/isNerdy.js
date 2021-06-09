const isNerdy = async (id) => {
  try {
    const response = await fetch(`http://api.icndb.com/jokes/${id}`)
    const joke = await response.json()
    if (joke.type === "success") {
      return joke.categories.includes("nerdy")
    }
    else if (joke.type === "NoSuchQuoteException") {
      return null
    } else {
      console.log(joke.type)
      throw "Unknown type"
    }
  } catch (e) {
    console.log(e)
    return null
  }
}

module.exports = isNerdy
