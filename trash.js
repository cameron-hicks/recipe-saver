//TO-DO: make manual save() and load() functions. Instead of adding event listeners and getting and setting items in local storage with one line of code and a loop that iterates through an array holding all of the form elements, I'll need to handle each form element individually, since the checkboxes are booleans and need to be handled in a different way from the string inputs. Scroll towards end of file for some work I've already done towards this refactoring. https://stackoverflow.com/questions/26628812/localstorage-how-to-save-a-checkbox

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

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", event => {
    console.log(formElements.forEach(elem => elem.value));
});

// Iterate through the array of the form elements, getting each element's value from local storage and populating the html form with these values so that if the user navigates away from teh page, when they return the page holds their progress.
formElements.forEach(elem => {
    // throws error: Cannot set property 'value' of null. Possible clue: I have mixed booleans and strings.
    document.getElementById(`{elem}`).value = localStorage.getItem(`{elem}`);
});

// Make an event listener creator function that can invoke addEventListener on any form element you pass it. Takes one parameter, form element. (though i could also write it with an event type parameter if I wanted to use the same listener creator function for submit button functionality.)
// PROBLEM: Isn't working properly for my booleans -- nothing logs for them. Is it because the keyup event doesn't apply to them? 
function listenerCreator(elem){
    
    /*
    //TODO: Look up documentation for typeof. What is the proper syntax to use it? 
    if (elem typeof === Boolean) {
        //TODO: Look up documentation for JSON.stringify(). Does it return a string? Or does it change the variable it's called on into a string? If it returns a string, I will need to declare a variable, say elemToPass, and assign that variable to the return result of stringify().
        JSON.stringify(elem);
    }
    */

    elem.addEventListener("keyup", event => {
        localStorage.setItem(`${elem}`, elem.value);
        console.log(`Event listener created for ${elem}.`);
        console.log(`Value saved in local storage: ` + elem.value);
    });
}

// Iterate through an array of the form elements, invoking the event listener creator on each one to set each's value in local storage.
formElements.forEach(elem => listenerCreator(elem));

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

//Optional TO-DO below: Replace this strategy for creating an object with one of the more scaleable approaches I learned in JS The Hard Parts, eg making a class.

class Recipe{
    constructor(){
       //default values for each property
        this.title = "", //string
        this.vegetarian = false, //boolean
        this.spicy = false, //boolean
        this.healthy = false, //boolean
        this.weeknight = false, //boolean
        this.servings = "", //string
        this.time = "", //string
        this.ingredients = ``, //string
        this.instructions = `` //string
    }
    save(){
        //Save the instance to localStorage.
    }
    load() {
        //Get the instance from localStorage.
    }
    download(){
        //Download the instance as an HTML file.
    }
    print(){
        //Print the instance as an HTML file.
    }
}

// BELOW: Making recipe objects with functions instead of a class.

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
    const storageContents = localStorage.getItem(title);
    return storageContents;
}


// Test object creator function
// const newRecipe = document.getElementById("submit").addEventListener("click", event => recipeCreator()); //there's a problem with this line; returns undefined
// console.log(newRecipe);
// localStorage.setItem(newRecipe.title, JSON.stringify(newRecipe)); //error: Cannot read property 'title' of undefined at script.js:31. This means I haven't set the recipe object's properties correctly or more generally haven't created the object properly; the object is undefined and the title is undefined. Or, it could mean I'm not accessing the object's property appropriately.

/* Question:
Since I'm already saving the inputs in local storage, when the user clicks "Submit" button, instead of making an object from what's been entered into the input elements, can I make an object from what's been saved in local storage? What are the pros and cons of each strategy? */