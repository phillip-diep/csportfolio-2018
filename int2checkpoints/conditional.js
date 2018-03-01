/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        var radius = 50;
        draw = function() {
            background(200, 200, 200);
            strokeWeight(10);

            if (mouseX > 200) {
                //This will make a black shape if the mouse is at the right half of the canvas//
                fill(0, 0, 0)
            }
            else {
                //This will make a green shape if the mouse is at the left half of the canvas//
                fill(54, 213, 56);
            }

            if (mouseY > 200) {
                //This will make a pink outlined shape if the mouse is at the bottom half of the canvas//
                stroke(244, 66, 249);
            }
            else {
                //This will make a blue outlined shape if the mouse is at the top half of the canvas//
                stroke(69, 69, 244);
            }

            if (mouseX > 175 && mouseX < 225) {
                //This will make a rectangle if the mouse is inbetween the x range of 175 and 225//
                rect(mouseX - radius / 2, mouseY - radius / 2, radius, radius)
            }
            else {
                //This will make a circle if the mouse is not inbetween the x range of 175 and 225//
                ellipse(mouseX, mouseY, radius, radius);
            }
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
