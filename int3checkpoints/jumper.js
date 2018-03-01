//Creates variables and saves them with DOM elements
var jumper = document.getElementById("jumper")

//Changes the position of the button to be absolute
jumper.style.position = "absolute";

//Creates an event where the buttom moves to a random place when the mouse is moved
jumper.addEventListener("mousemove", function() {
    jumper.style.top = Math.random() * 600 + "px"
    jumper.style.left = Math.random() * 1000 + "px"
})
