const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const arrayOfRecipes = getAllStorage();

//When user clicks the submit button, save the data they've entered as an object with key-value pairs corresponding to the input elements and the values entered into them.
submitButton.addEventListener("click", event => {
    const inputtedValues = {
        title: document.getElementById("title").value,
        vegetarian: document.getElementById("vegetarian").value,
        spicy: document.getElementById("spicy").value,
        healthy: document.getElementById("healthy").value,
        weeknight: document.getElementById("weeknight").value,
        servings: document.getElementById("servings").value,
        time: document.getElementById("time").value,
        ingredients: document.getElementById("ingredients").value,
        instructions: document.getElementById("instructions").value
    };

    // The "debugger" statement on the line below allows you to pause the code's running in dev tools if there's an error and view what's been done so far up to the point of the error.
    // debugger

    // When you need to access this object again, you can do so by referencing its title property with dot notation.
    // localStorage.setItem(`${inputtedValues.title}`, JSON.stringify(inputtedValues));
    save(inputtedValues);

    location.reload();
});

//When user clicks the reset button, refresh the page.
resetButton.addEventListener("click", event => {
    location.reload();
});

arrayOfRecipes.forEach(recipe => {
    // Use JQuery to populate the <ul> element on sidebar div of index.html with the titles of all recipe objects saved in localStorage
    console.log(recipe);
    $("#recipeList").append(`<li><a href="#">${recipe.title}</a></li>`);
})

// custom function to save a recipe to localStorage. Accepts a recipe object. Returns nothing.
function save(recipe){
    localStorage.setItem(`${recipe.title}`, JSON.stringify(recipe));
}

// custom function to load a recipe from localStorage. Accepts a string corresponding to the title of the recipe. Returns an object.
function load(title){
    return JSON.parse(localStorage.getItem(title));
}

// custom function to get all recipe objects stored in the localStorage object. Returns an array of objects.
function getAllStorage() {

    // declare a variable which will hold an array of recipe objects
    const recipes = [];
    //declare an array which will hold strings representing the titles of all the recipes stored in localStorage
    const titlesArray = Object.keys(localStorage);

    //iterate through the array of recipe titles and pass each title to .push() to populate the array of recipe objects with recipe objects 
    titlesArray.forEach(title => {
        recipes.push(load(title));
    });

    return recipes;
}
