const alchohalName = document.querySelector("h1");
const drinkIngredient = document.querySelector("#cocktailIng");
const drinkIngredient2 = document.querySelector("#cocktailIng2");
const drinkImage = document.querySelector("img");
const drinkingInstruction = document.querySelector(".instruction")
const sectionBody = document.querySelector("section")
const form = document.querySelector('button')



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

    const liquor = stringIngredient.filter(function (a) {
      return a != null;
    });

    while (drinkIngredient.firstChild) {
      drinkIngredient.removeChild(drinkIngredient.firstChild);
    }
    const drinkIng = document.createElement('h1')
    drinkIng.innerText = "Ingredient"
    drinkIngredient.append(drinkIng)

    for (let i = 0; i < liquor.length; i++) {

      const row = document.createElement("div");
      row.classList.add("Ingredient-Row");

      const ingredient = document.createElement("div");
      drinkIngredient.append(ingredient)

      ingredient.innerText = `${i + 1}. ${liquor[i]}`;

      // 

      drinkIngredient.appendChild(row);
      ingredient.classList.add("Ingredient-ID");
    }

    let stringIngredient2 = []

    for (let v in obj) {
      if (v.includes("strMeasure")) {
        stringIngredient2.push(obj[v])
      }
    }
    const measurements = stringIngredient2.filter(function (e) {
      return e != null;
    })

    while (drinkIngredient2.firstChild) {
      drinkIngredient2.removeChild(drinkIngredient2.firstChild);
    }
    const drinkMea = document.createElement('h1')
    drinkMea.innerText = "Measurement"
    drinkIngredient2.append(drinkMea)

    for (let d = 0; d < measurements.length; d++) {
      const row2 = document.createElement("div")
      row2.classList.add("Ingredient-Row2")

      const measuring = document.createElement('div')
      row2.appendChild(measuring)
      measuring.innerText = `${d + 1}. ${measurements[d]}`

      drinkIngredient2.appendChild(row2)
      measuring.classList.add("Ingredient-ID2")
    }

    const cocktail = response.data.drinks[0]
    appendImage(cocktail)

    return cocktail

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

  getCocktailInstruction(drinkName)

  return drinkName
}

function getCocktailInstruction(drinkInstruction) {

  console.log(drinkInstruction)
  drinkingInstruction.textContent = drinkInstruction.strInstructions

  getCocktailMeasurement(drinkInstruction)

  return drinkInstruction
}


form.addEventListener('click', getCocktailImg)

function removeCocktail(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}

