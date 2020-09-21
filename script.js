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


// console.log(formElements);

const submitButton = document.getElementById("submit");

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
    // console.log(formElements);
    // debugger
    // When you need to access this object again, you can do so by referencing its title property with dot notation.
    localStorage.setItem(`${inputtedValues.title}`, JSON.stringify(inputtedValues));
});

console.log(JSON.parse(localStorage.getItem("Black Bean Nachos")));

