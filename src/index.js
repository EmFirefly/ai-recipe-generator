
function generateRecipe(event) {
    event.preventDefault();
    alert("Generating recipe...");
    let recipeCard = document.getElementById('recipe-output');
    recipeCard.classList.remove('hidden');
    let dishIngredients = document.getElementById('ingredients').value;
    let dishType = document.querySelector('.dish-type');
    let recipeImage = document.querySelector('.recipe-image');
    let prepTime = document.querySelector('.prep-time');
    let dishName = document.querySelector('.dish-name');

    let apiUrl = `https://api.apileague.com/search-recipes?api-key=${apiKey}&query=${dishIngredients}`;
    let apiKey = "c216e869423c458596a2918307079d87";
}
    
let recipeInputForm = document.getElementById('recipeInputForm');
recipeInputForm.addEventListener('submit', generateRecipe);
