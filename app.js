const alchohalName = document.querySelector('h1')
const drinkDescription = document.querySelector('.drinking_description')
const drinkIngredient = document.querySelector('drinking_ingredient')
const drinkImage = document.querySelector('img')


const getCocktailImg = async () => {
  try {
    const cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    const response = await axios.get(cocktailURL)
    const cocktail = response.data.drinks[0]
    console.log(cocktail)
    appendImage(cocktail)
    return cocktail

  } catch (e) {
    console.error(e)
  }
}

getCocktailImg()

function appendImage(ImgURL) {
  drinkImage.src = ImgURL.strDrinkThumb

  const drinkName = ImgURL

  getCocktailName(drinkName)
  return ImgURL
}


function getCocktailName(drinkName) {
  alchohalName.textContent = drinkName.strDrink
}

// const getCocktailName = async (drinkName) => {

//   try {
//     const cocktailURLName = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//     const response = await axios.get(cocktailURLName)

//     console.log(response)

//     // const drinkingName = response.data.drinks[0]

//     // appendName(drinkingName)

//   } catch (err) {
//     console.error(err)
//   }

// }

// function appendName(nameURL) {
//   alchohalName.textContent = nameURL.strDrink
// }

// `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`


