const alchohalName = document.querySelector("h1");
const drinkDescription = document.querySelector(".drinking_description");
const drinkIngredient = document.querySelector("#cocktailIng");
const drinkImage = document.querySelector("img");

const getCocktailImg = async () => {
  try {
    const cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const response = await axios.get(cocktailURL);

    let stringIngredient = [];
    let obj = response.data.drinks[0];
    for (let x in obj) {
      if (x.includes("strIngredient")) {
        stringIngredient.push(obj[x]);
      }
    }
    console.log(obj);
    const measurements = stringIngredient.filter(function (a) {
      return a != null;
    });

    for (let i = 0; i < measurements.length; i++) {
      // console.log(measurements)
      const row = document.createElement("div");
      row.classList.add("Ingredient-Row");

      const ingredientList = document.createElement('ul')
      const ingredient = document.createElement("li");

      // const ingredient = document.createElement("div");
      row.appendChild(ingredientList)
      ingredientList.appendChild(ingredient);
      ingredient.innerText = measurements[i];

      drinkIngredient.appendChild(row);
      ingredient.classList.add("Ingredient-ID");
    }

    // for (let v in obj) {
    //   if(v.includes(""))
    // }

    // console.log(measurements);

    const cocktail = response.data.drinks[0]
    // console.log(cocktail)
    appendImage(cocktail)

    return measurements;
  } catch (e) {
    console.error(e);
  }
};

getCocktailImg();


function appendImage(ImgURL) {
  drinkImage.src = ImgURL.strDrinkThumb

  const drinkName = ImgURL

  getCocktailName(drinkName)
  return ImgURL
}


function getCocktailName(drinkName) {
  alchohalName.textContent = drinkName.strDrink


}

function getCocktailMeasurment() {

}
