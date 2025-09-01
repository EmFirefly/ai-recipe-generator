let generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function(event) {
    event.preventDefault();
    let ingredients = document.getElementById("ingredients").value;
    console.log("Ingredients:", ingredients);
});
