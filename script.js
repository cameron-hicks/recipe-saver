const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const arrayOfRecipes = getAllStorage();

//TODO: Saved recipe objects are not appending to the corresponding <ul> on /Display/index.html, only on /index.html.
// Use JQuery to populate the <ul> element on sidebar div of index.html with the titles of all recipe objects saved in localStorage. Will execute on page load.
arrayOfRecipes.forEach(recipe => {
    console.log(recipe);
    $("#recipeList").append(`<li><a href="/Display/index.html">${recipe.title}</a></li>`);
});

try{
//When user clicks the submit button, save the data they've entered as an object with key-value pairs corresponding to the input elements and the values entered into them. Append the new recipe title to the <ul> of recipe titles on the html pages. Refresh the page.
submitButton.addEventListener("click", event => {
    
    //Declare a variable to hold an array of all the ids of input elements whose values you want to use to make a recipe object.
    const formElements = ["title", "vegetarian", "spicy", "healthy", "weeknight", "servings", "time", "ingredients", "instructions"];
    //Declare an empty object to be populated with key-value pairs corresponding to the id of the input element and the value entered there.
    const inputtedValues = {};

    //Iterate through the array of input elements. Get the value entered in each one and add the key-value pair to the empty object.
    formElements.forEach(elem => {
        inputtedValues[elem] = document.getElementById(elem).value
    });

    // The "debugger" statement on the line below allows you to pause the code's running in dev tools if there's an error and view what's been done so far up to the point of the error.
    // debugger

    // When you need to access this object again, you can do so by referencing its title property with dot notation.
    // localStorage.setItem(`${inputtedValues.title}`, JSON.stringify(inputtedValues));
    save(inputtedValues);


    //Refresh the page.
    location.reload();
});


//When user clicks the reset button, refresh the page. Don't save data.
resetButton.addEventListener("click", event => {
    location.reload();
});
}
catch(err) {
    console.log("No submit or reset button on this page.");
}

//When user clicks an <a> element in the sidebar, load /Display/index.html and invoke loadDisplay, passing it the recipe object that has a title property matching the anchor text.
//Wrap in a try-catch. If there is no recipe object corresponding to the anchor text, it'll show an erorr message.
try {
    arrayOfObjects.forEach(obj => {
        const anchor = document.getElementById(obj.title);
        anchor.addEventListener("click", event => {
            loadDisplay(obj.title);
        });
    });

    /*
    //dummy variable to stand in for anchor elements
    const anchor = document.getElementById("anchorA");
    anchor.addEventListener("click", event => {
        //TODO: What attributes does an anchor element have? I want to try accessing using dot notation an attribute that will return the anchor text.
        const recipeTitle = anchor.value;
        console.log(recipeTitle);
        //Load the recipe title from localStorage using my custom load function, which accepts a string corresponding to the object's title property.
        const recipe = load(recipeTitle);
        loadDisplay(recipeTitle);
    });
    */
}
catch(err) {
    console.log("Error attaching event listeners to anchors");
}

//Accepts a string corresponding to the title property of a recipe object. Populates the <p>s on /Display/index.html with the recipe object's values.
function loadDisplay(recipeTitle){
    //load the recipe object with the matching title property
    const recipe = load(recipeTitle);

    document.getElementById("displayTitle").value = recipe.title;
    document.getElementById("displayServings").value = recipe.servings;
    document.getElementById("displayTime").value = recipe.time;
    document.getElementById("displayIngredients").value = recipe.ingredients;
    document.getElementById("displayInstructions").value = recipe.instructions;
}


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
