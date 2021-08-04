const drinkName = document.querySelector('.drink_name')
const drinkDescription = document.querySelector('.drinking_description')
const drinkIngredient = document.querySelector('drinking_ingredient')
const drinkImage = document.querySelector('img')


const getCocktailImg = async () => {
  try {
    const cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    const response = await axios.get(cocktailURL)
    const image = response.data.drinks[0].strDrinkThumb

    appendImage(image)
  } catch (e) {
    console.error(e)
  }
}

getCocktailImg()

function appendImage(ImgURL) {

  drinkImage.src = ImgURL

}

