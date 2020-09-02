// Add event listeners so that on keyup the user's progress in each form element will be saved in local storage.
/*
const title = document.getElementById("title");
title.addEventListener("keyup", event => {
    localStorage.setItem("title", title.value);
    console.log("Saved in local storage: " + title);
});
*/

// Initialize an array and fill it with the html form elements.
const formElements = [
    title = document.getElementById("title"),
    vegetarian = document.getElementById("vegetarian"),
    spicy = document.getElementById("spicy"),
    healthy = document.getElementById("healthy"),
    weeknight = document.getElementById("weeknight"),
    servings = document.getElementById("servings"),
    time = document.getElementById("time"),
    ingredients = document.getElementById("ingredients"),
    instructions = document.getElementById("instructions")
];

console.log(formElements);

// Iterate through the array of the form elements, getting each element's value from local storage and populating the html form with these values so that if the user navigates away from teh page, when they return the page holds their progress.
formElements.forEach(elem => {
    // throws error: Cannot set property 'value' of null
    document.getElementById(`{elem}`).value = localStorage.getItem(`{elem}`);
});

// Make an event listener creator function that can invoke addEventListener on any form element you pass it. Takes one parameter, form element. (though i could also write it with an event type parameter if I wanted to use the same listener creator function for submit button functionality.)
// PROBLEM: Isn't working properly for my booleans -- nothing logs for them. Is it because the keyup event doesn't apply to them?
function listenerCreator(elem){
    elem.addEventListener("keyup", event => {
        localStorage.setItem(`${elem}`, elem.value);
        console.log(`Event listener created for ${elem}.`);
        console.log(`Value saved in local storage: ` + elem.value);
    });
}

// Iterate through an array of the form elements, invoking the event listener creator on each one to set each's value in local storage.
formElements.forEach(elem => {listenerCreator(elem)});

// Turn form input into recipe objects that can be saved in local storage under the title of the recipe. 
const protoRecipe = {
    title: "", //string
    vegetarian: false, //boolean
    spicy: false, //boolean
    healthy: false, //boolean
    weeknight: false, //boolean
    servings: "", //string
    time: "", //string
    ingredients: ``, //string
    instructions: `` //string
};

// Console logs for testing
// console.log(protoRecipe);
// saveRecipe(protoRecipe);
// console.log(window.localStorage.getItem(protoRecipe.title));

//Optional TO-DO: Replace this strategy for creating an object with one of the more scaleable approaches I learned in JS The Hard Parts.
// TO-DO: Try using the array formElements to initialize the object.
function recipeCreator() {
    const recipe = Object.create(protoRecipe);
    recipe.title = document.getElementById("title"),
    recipe.vegetarian = document.getElementById("vegetarian"),
    recipe.spicy = document.getElementById("spicy"),
    recipe.healthy = document.getElementById("healthy"),
    recipe.weeknight = document.getElementById("weeknight"),
    recipe.servings = document.getElementById("servings"),
    recipe.time = document.getElementById("time"),
    recipe.ingredients = document.getElementById("ingredients"),
    recipe.instructions = document.getElementById("instructions")
    return recipe;
}

// TO-DO: Maybe this should be a method on the protoRecipe?
function saveRecipe(recipeObj){
    localStorage.setItem(recipeObj.title, JSON.stringify(recipeObj));
    console.log("Recipe saved to local storage.");
}

// Loads the recipe stored in local storage to all the input fields on the html form
function showLocalStorage(title) {
    const storageContents = window.localStorage.getItem(title);
    return storageContents;
}


// Test object creator function
// const newRecipe = document.getElementById("submit").addEventListener("click", event => recipeCreator()); //there's a problem with this line; returns undefined
// console.log(newRecipe);
// localStorage.setItem(newRecipe.title, JSON.stringify(newRecipe)); //error: Cannot read property 'title' of undefined at script.js:31. This means I haven't set the recipe object's properties correctly or more generally haven't created the object properly; the object is undefined and the title is undefined. Or, it could mean I'm not accessing the object's property appropriately.

/* Question:
Since I'm already saving the inputs in local storage, when the user clicks "Submit" button, instead of making an object from what's been entered into the input elements, can I make an object from what's been saved in local storage? What are the pros and cons of each strategy? */



// Previous work I did:

/*
//Get a recipe object from local storage and save in a variable named recipeSoFar.
const recipeSoFar = localStorage.getItem("recipeSoFar");
//Assign all the form elements' values to the values saved in recipeSoFar.
title.value = recipeSoFar.title;
*/

/*
title.addEventListener("keyup", (event) => {
    //console.log(event.currentTarget);
    //console.log(title.value);
    localStorage.setItem("title", title.value);
    localStorage.setItem("instructions", instructions.value);
    });
function readLastRecipe() {
    
}

readRecentRecipe();
console.log(recipe);
recipe = recipeCreator();
console.log(recipe);

function storeRecipeInLocalStorage(recipe) {
	//takes a recipe object
	//stores it in local storage
	console.log(recipe);
}

storeRecipeInLocalStorage(recipe);
console.log(recipe);

function readRecipeFromLocalStorage(title) {
	//prints out in html the recipe object saved in local storage with the corresponding title
	//get the recipe object with the passed title: localStorage.getItem(....).... 
	localStorage.setItemById("readTitle", recipe.title);
	localStorage.setItemById("readInstructions", recipe.instructions);
}

readRecipeFromLocalStorage("Black Bean Nachos");

const input = document.getElementById("input");
input.value = localStorage.getItem("Saved Text");
*/