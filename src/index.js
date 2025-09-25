
function generateRecipe(event) {
    event.preventDefault();
    let dishIngredients = document.getElementById('ingredients').value;
    alert(`Generating recipe with ${dishIngredients}...`);
    let recipeCard = document.getElementById('recipe-output');
    recipeCard.classList.remove('hidden');

    let apiKey = "c343f7ad59a34b869622edabd5cba895";
    let apiUrl = `https://api.apileague.com/search-recipes?api-key=${apiKey}&query=${dishIngredients}`;


    axios.get(apiUrl).then(updateRecipeCard);
}

function updateRecipeCard(response) {
    let dishType = document.querySelector('.dish-type');
    let recipeImage = document.querySelector('.recipe-image');
    let prepTime = document.querySelector('.prep-time');
    let dishName = document.querySelector('.dish-name');

    console.log(response.data);
}
    
let recipeInputForm = document.getElementById('recipeInputForm');
recipeInputForm.addEventListener('submit', generateRecipe);
