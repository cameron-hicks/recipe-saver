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

const newRecipe = document.getElementById("submit").addEventListener("click", makeRecipeObject()); //there's a problem with this line
console.log(newRecipe);
localStorage.setItem(newRecipe.title, JSON.stringify(newRecipe)); //error: Cannot read property 'title' of undefined at script.js:31


// title.addEventListener("keyup", (event) => {
//     //console.log(event.currentTarget);
//     //console.log(title.value);
//     localStorage.setItem("title", title.value);
//     localStorage.setItem("instructions", instructions.value);
//     });
// function readLastRecipe() {
//     
// }

// readRecentRecipe();
// console.log(recipe);
// recipe = makeRecipeObject();
// console.log(recipe);

// function storeRecipeInLocalStorage(recipe) {
// 	//takes a recipe object
// 	//stores it in local storage
// 	console.log(recipe);
// }

// storeRecipeInLocalStorage(recipe);
// console.log(recipe);

// function readRecipeFromLocalStorage(title) {
// 	//prints out in html the recipe object saved in local storage with the corresponding title
// 	//get the recipe object with the passed title: localStorage.getItem(....).... 
// 	localStorage.setItemById("readTitle", recipe.title);
// 	localStorage.setItemById("readInstructions", recipe.instructions);
// }

//readRecipeFromLocalStorage("Black Bean Nachos");

//const input = document.getElementById("input");
//input.value = localStorage.getItem("Saved Text");