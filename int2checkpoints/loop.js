/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        background(70, 55, 94);

        for (var i = 25; i < width; i += 50) {
            for (var j = 25; j < height; j += 50) {
                //This will randomize the radius of each circle: there is a range from 10px to 50px//
                var radius = random(10, 50);

                //This will randomize the three values of the RGB color of the circles' outline//
                var color1 = random(70, 160);
                var color2 = random(80, 90);
                var color3 = random(100, 120);

                //This will randomize the three values of the RGB color of the circles//
                var color4 = random(150, 200);
                var color5 = random(90, 100);
                var color6 = random(90);

                //This will randomize the thickness of the outline of each circle//
                var thickness = random(5, 15);

                //This determines the color of each circle's outline//
                stroke(color1, color2, color3);

                //This determines the thickness of each circle's outline//
                strokeWeight(thickness);

                //This determines the color of each circle//
                fill(color4, color5, color6);

                //This will create one circle//
                ellipse(i, j, radius, radius);
            }
        }

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
