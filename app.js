const alchohalName = document.querySelector('h1')
const drinkDescription = document.querySelector('.drinking_description')
const drinkIngredient = document.querySelector('.cocktailIng')
const drinkImage = document.querySelector('img')


const getCocktailImg = async () => {
  try {
    const cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    const response = await axios.get(cocktailURL)

    let stringIng = []
    let obj = response.data.drinks[0]
    for (let x in obj) {
      if (x.includes("strMeasure")) {
        stringIng.push(obj[x]);
      }
    }
    // console.log(stringIng)

    const measurements = stringIng.filter(function (a) {
      return a != null;
    })

    for (let i = 0; i < measurements.length; i++) {
      // console.log(measurements)

      drinkIngredient.append(measurements)
      drinkIngredient.innerText = measurements[i]

    }
    console.log(measurements)


    // const cocktail = response.data.drinks[0]
    // console.log(cocktail)
    // appendImage(cocktail)
    // return cocktail

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

