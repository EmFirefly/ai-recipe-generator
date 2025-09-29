function generateRecipe(event) {
    event.preventDefault();
    let dishIngredients = document.getElementById('ingredients').value;
    alert(`Generating recipe with ${dishIngredients}...`);
    let recipeCard = document.getElementById('recipe-output');
    recipeCard.classList.remove('hidden');
    console.log("Fetching recipe for ingredients:", dishIngredients);

    let apiKey = "c343f7ad59a34b869622edabd5cba895";
    let apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${dishIngredients}&number=1&addRecipeInformation=true&addRecipeInstructions=true`;
    
    axios.get(apiUrl).then(updateRecipeCard);

}

function updateRecipeCard(response) {
    let recipeID = response.data[0].id; 
    let recipeInformation = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=c343f7ad59a34b869622edabd5cba895`;

    console.log("Full response:", response.data);  

    let dishName = document.querySelector(".dish-name");
    let dishImage = document.querySelector(".recipeImage");
    let dishTime = document.querySelector(".dish-stats");
    let dishType = document.querySelector(".dish-type");
    let dishLink = document.querySelector(".dish-link");

   
    
    dishName.innerHTML = response.data[0].title;
    dishImage.src = response.data[0].image;

    axios.get(recipeInformation).then(console.log("Fetching detailed recipe information...") || function(infoResponse) {
        console.log("Detailed recipe information:", infoResponse.data);
        dishTime.innerHTML = `⏱ ${infoResponse.data.readyInMinutes} min`;
        dishType.innerHTML = ` ${infoResponse.data.dishTypes}`;
        dishLink.href = infoResponse.data.sourceUrl;
    });

}


let recipeInputForm = document.getElementById('recipeInputForm');
recipeInputForm.addEventListener('submit', generateRecipe);