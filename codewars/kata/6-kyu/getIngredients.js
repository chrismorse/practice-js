// https://www.codewars.com/kata/5b6f3284b3d9774bff000026/solutions/javascript

function getIngredients(recipes, final) {
  recipeObj = {};
  for (let i = 0; i < recipes.length; i++) {
    let ingredients = {};
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      ingredients[recipes[i].ingredients[j][0]] = (ingredients[recipes[i].ingredients[j][0]] || 0 ) + recipes[i].ingredients[j][1];
    }
    recipeObj[recipes[i].result] = ingredients;
  }
  

  function addIngredient(returnObj, key, multiplier) {
    if (!recipeObj.hasOwnProperty(key)) {
      returnObj[key] = (returnObj[key] || 0) + multiplier;
    } else {
      for (var k in recipeObj[key]) {
        addIngredient(returnObj, k, recipeObj[key][k] * multiplier );
      }
    }
  }
  
  returnObj = {};

  for (var key in recipeObj[final]) {
    addIngredient(returnObj, key, recipeObj[final][key]);
  }  

  if (Object.keys(returnObj).length === 0) 
    return null;
    
  return returnObj;
}




