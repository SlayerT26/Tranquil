//Create all the request and responses for the Alchohal API

const alchohalName = document.querySelector("h1");
const drinkIngredient = document.querySelector("#cocktailIng");
const drinkIngredient2 = document.querySelector("#cocktailIng2");
const drinkImage = document.querySelector("img");
const drinkingInstruction = document.querySelector(".instruction")
const sectionBody = document.querySelector("section")
const form = document.querySelector('button')

// Start the beginning of the API.
// Grabbing the image fist

const getCocktailImg = async () => {
  try {
    const cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const response = await axios.get(cocktailURL);

    let stringIngredient = [];
    let obj = response.data.drinks[0];


    // Create a for loop to grab the string ingredients.
    // Items were not in array. All seperate variable. Need to make into an array
    for (let x in obj) {
      if (x.includes("strIngredient")) {
        stringIngredient.push(obj[x]);
      }
    }

    const liquor = stringIngredient.filter(function (a) {
      return a != null;
    });

    // Create an equation to remove previous data after eventlistener has been clicked
    while (drinkIngredient.firstChild) {
      drinkIngredient.removeChild(drinkIngredient.firstChild);
    }
    // Create new elements to add data too
    const drinkIng = document.createElement('h1')
    drinkIng.innerText = "Ingredient"
    drinkIngredient.append(drinkIng)
    // Create a for loop to go through each variable with info and stop when the info has stopped
    for (let i = 0; i < liquor.length; i++) {

      const row = document.createElement("div");
      row.classList.add("Ingredient-Row");

      // Append info too created elements
      const ingredient = document.createElement("div");
      drinkIngredient.append(ingredient)

      ingredient.innerText = `${i + 1}. ${liquor[i]}`;

      drinkIngredient.appendChild(row);
      ingredient.classList.add("Ingredient-ID");
    }
    // Creating a second array for measurements
    // All measurements have there own variables. Need to make them into an array
    let stringIngredient2 = []

    for (let v in obj) {
      if (v.includes("strMeasure")) {
        stringIngredient2.push(obj[v])
      }
    }
    const measurements = stringIngredient2.filter(function (e) {
      return e != null;
    })

    // Create an equation to remove previous data after eventlistener has been clicked
    while (drinkIngredient2.firstChild) {
      drinkIngredient2.removeChild(drinkIngredient2.firstChild);
    }

    // Create new elements to add data too
    const drinkMea = document.createElement('h1')
    drinkMea.innerText = "Measurement"
    drinkIngredient2.append(drinkMea)

    // Create a for loop to go through each variable with info and stop when the info has stopped
    for (let d = 0; d < measurements.length; d++) {
      const row2 = document.createElement("div")
      row2.classList.add("Ingredient-Row2")

      // Append info too created elements
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

// Grabbing image and attaching onto image varialbe
function appendImage(ImgURL) {
  drinkImage.src = ImgURL.strDrinkThumb
  const drinkName = ImgURL

  getCocktailName(drinkName)
  return ImgURL
}

// Grabbing name off the image and attacthing it to the name varialbe
function getCocktailName(drinkName) {
  alchohalName.textContent = drinkName.strDrink

  getCocktailInstruction(drinkName)

  return drinkName
}
// Grabbing instructions to make the cocktail
function getCocktailInstruction(drinkInstruction) {

  console.log(drinkInstruction)
  drinkingInstruction.textContent = drinkInstruction.strInstructions

  getCocktailMeasurement(drinkInstruction)

  return drinkInstruction
}

// Adding an eventListener to shuffle a new drink


form.addEventListener('click', getCocktailImg)

function removeCocktail(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}

