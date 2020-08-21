let recipe = {
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

console.log(recipe);

//To-do: Replace this strategy for creating an object with one of the more scaleable approaches I learned in JS The Hard Parts.
function makeRecipeObject() {
    return {
        title: document.getElementById("title"),
        vegetarian: document.getElementById("vegetarian"),
        spicy: document.getElementById("spicy"),
        healthy: document.getElementById("healthy"),
        weeknight: document.getElementById("weeknight"),
        servings: document.getElementById("servings"),
        time: document.getElementById("time"),
        ingredients: document.getElementById("ingredients"),
        instructions: document.getElementById("instructions")
    };
}

const newRecipe = document.getElementById("submit").addEventListener("click", event => makeRecipeObject()); //there's a problem with this line
console.log(newRecipe);
localStorage.setItem(newRecipe.title, JSON.stringify(newRecipe)); //error: Cannot read property 'title' of undefined at script.js:31. This means I haven't set the recipe object's properties correctly or more generally haven't created the object properly; the object is undefined and the title is undefined.

// To-do: Build a function that will use a keyup event listener to save the user's text to local storage while they type, so that if they accidentally close the tab or the submit button fails their recipe won't be lost. Use one of the strategies I learned in the JS The Hard Parts lecture to facilitate scalability. I'm probably not using "this" correctly.
/*
function saveProgressToLocalStorage() {
    this.addEventListener("keyup", event => {
        localStorage.setItem(`${this}`, this.value);
    })
    return console.log(this.currentTarget);
}
*/

/* Next step would be to call function saveProgressToLocalStorage on each input element on the form, eg:
document.getElementById("title").saveProgressToLocalStorage();
vegetarian: document.getElementById("vegetarian").saveProgressToLocalStorage();
The question is how to do this while obeying DRY. */

/* Here's a question:
Since I'm already saving these inputs in local storage, when the user clicks "Submit" button, instead of making an object from what's been entered into the input elements, can I make an object from what's been saved in local storage? What are the pros and cons of each strategy? */


/* Previous work I did:
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
recipe = makeRecipeObject();
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