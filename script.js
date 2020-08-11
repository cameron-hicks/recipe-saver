//const recipe = { title: "Black Bean Nachos", body: "recipe here" };
//I'll use this function to make a recipe object for each user-generated recipe, where title and body are variables whose values are set by strings intered in input and textarea elements where the user types their recipe's title and instructions.

const recipe = {
    title,
    ingredients,
    instructions
};

console.log(recipe);

title.addEventListener("keyup", (event) => {
    //console.log(event.currentTarget);
    //console.log(title.value);
    localStorage.setItem("title", title.value);
    localStorage.setItem("instructions", instructions.value);
    });

    function makeRecipeObject() {
        return {
            title = document.getElement("title"), //is it okay that the property and the variable have the same name?
            ingredients = document.getElement("ingredients"),
            instructions = document.getElement("instructions")
        };
    }

function readLastRecipe() {
    localStorage.setItemById("readTitle", recipe.title);
    localStorage.setItemById("readInstructions", recipe.instructions);
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

//readRecipeFromLocalStorage("Black Bean Nachos");

//const input = document.getElementById("input");
//input.value = localStorage.getItem("Saved Text");