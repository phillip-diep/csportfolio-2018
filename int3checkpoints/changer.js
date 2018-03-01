//Creates variables and saves them with DOM elements 
var colorValue = document.getElementById("colorValue");
var colorChange = document.getElementById("colorChange");

//Assigns an event to happen when the button is clicked: the background changes to the color that is typed in the input box
colorChange.addEventListener("click", function() {
    document.body.style.backgroundColor = colorValue.value;
});
