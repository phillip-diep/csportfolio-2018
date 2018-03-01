/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1060, 795);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        background(106, 232, 232);

        //Creates an F//
        F = function(x, y) {
            rect(x, y, 30, 125);
            rect(x, y, 85, 30);
            rect(x, y + 50, 73, 30);
        }

        //Creates an R//
        R = function(x, y) {
            rect(x + 100, y, 30, 125);
            rect(x + 100, y, 50, 30);
            triangle(x + 130, y, x + 130, y + 125, x + 207, y + 125);
            ellipse(x + 152, y + 43, 85, 85);
            fill(106, 232, 232);
            stroke(106, 232, 232);
            triangle(x + 130, y + 75, x + 130, y + 125, x + 170, y + 125);
            ellipse(x + 150, y + 43, 30, 30);
            rect(x + 130, y + 27, 15, 30);
            rect(x + 130, y + 125, 40, 1);
        }

        //Creates an U//
        U = function(x, y) {
            stroke(255, 255, 255);
            fill(255, 255, 255);
            ellipse(x + 275, y + 70, 110, 110);
            rect(x + 219, y, 30, 70);
            rect(x + 300, y, 30, 70);
            fill(106, 232, 232);
            stroke(106, 232, 232);
            ellipse(x + 275, y + 70, 50, 50);
            rect(x + 250, y, 49, 70);
        }

        //Creates an I//
        I = function(x, y) {
            stroke(255, 255, 255);
            fill(255, 255, 255);
            rect(x + 350, y, 30, 125);
        }

        //Creates an T//
        T = function(x, y) {
            rect(x + 423, y, 35, 125);
            rect(x + 393, y, 95, 30);
        }

        //Creates the title "Fruit."
        title = function(x, y) {
            stroke(255, 255, 255);
            fill(255, 255, 255);
            F(x, y);
            R(x, y);
            U(x, y);
            I(x, y);
            T(x, y);
            ellipse(x + 500, y + 110, 35, 35)
            //size = 530 by 140//
        }
        title(265, 327.5);

        //The function that defines "lemon" : creates a lemon//
        lemon = function(x, y) {
            //Colors the lemon + its outline//
            stroke(238, 244, 66);
            strokeWeight(10);
            fill(238, 244, 66);

            //Creates the base color lemon//
            ellipse(x, y, 100, 75);
            ellipse(x - 49, y, 25, 25);
            ellipse(x + 45, y, 25, 25);


            //Creates the shadow//
            noFill();
            stroke(218, 224, 46);
            strokeWeight(15);
            arc(x, y + 10, 90, 50, 0, 2);
            arc(x + 45, y, 25, 25, 0, 1.5);
        }

        //The function that defines "watermelon" : creates a watermelon//
        watermelon = function(x, y) {
            //Creates the green part//
            noStroke();
            fill(69, 196, 49);
            ellipse(x, y, 110, 110);

            //Creates the outside pink part//
            fill(255, 201, 212);
            ellipse(x, y, 85, 85);

            //Creates the inside pink part//
            fill(247, 98, 98);
            ellipse(x, y, 70, 70);

            //Creates the seeds//
            fill(0, 0, 0);
            ellipse(x, y + 20, 8, 10);
            ellipse(x, y - 20, 8, 10);
            ellipse(x + 20, y, 10, 8);
            ellipse(x - 20, y, 10, 8);

            ellipse(x + 15, y + 15, 10, 8);
            ellipse(x + 15, y - 15, 10, 8);
            ellipse(x - 15, y + 15, 10, 8);
            ellipse(x - 15, y - 15, 10, 8);
        }

        //The function that defines "avacado" : creates an avacado//
        avacado = function(x, y) {
            stroke(54, 178, 32);
            strokeWeight(10);

            //This creates the outside of the avacado//
            fill(54, 178, 32);
            ellipse(x, y + 15, 100, 100);
            ellipse(x, y - 35, 75, 75);

            //This creates the inside of the avacado//
            fill(88, 210, 88)
            noStroke();
            ellipse(x, y + 15, 90, 90);
            ellipse(x, y - 35, 65, 65);

            //This creates the pit of the avacado//
            fill(120, 90, 50);
            ellipse(x, y + 15, 50, 50)
        }

        //The function that defines "coconut" : creates a coconut//
        coconut = function(x, y) {
            noStroke();
            fill(120, 90, 50);
            ellipse(x, y, 110, 110);

            //Creates the outer white part//
            fill(255, 255, 255);
            ellipse(x, y, 85, 85)

            //Creates the inner grey part//
            fill(220, 220, 220);
            ellipse(x, y, 70, 70);

            //Creates the shadow//
            noFill();
            stroke(190, 190, 190);
            strokeWeight(10);
            arc(x, y, 50, 50, 0, 2);
        }

        //The function that defines "strawberry" : creates a strawberry//
        strawberry = function(x, y) {
            //This creates the base of the strawberry//
            stroke(250, 50, 50);
            fill(250, 50, 50);
            arc(x, y - 20, 80, 140, 0, 3.15)
            ellipse(x, y - 20, 80, 50);

            //This creates the stem and leaves of the strawberry//
            fill(10, 140, 90);
            stroke(10, 140, 90);
            triangle(x - 15, y - 45, x + 15, y - 45, x, y - 25);
            triangle(x - 15, y - 45, x, y - 35, x - 30, y - 25);
            triangle(x + 15, y - 45, x, y - 35, x + 30, y - 25);
            triangle(x - 25, y - 35, x - 10, y - 45, x - 35, y - 45);
            triangle(x + 25, y - 35, x + 10, y - 45, x + 35, y - 45);
            triangle(x - 20, y - 45, x, y - 45, x - 25, y - 60);
            triangle(x + 20, y - 45, x, y - 45, x + 25, y - 60);
            rect(x - 5, y - 70, 10, 25);

            //This creates the seeds of the strawberry//
            fill(255, 250, 190);
            noStroke();
            ellipse(x + 15, y - 10, 8, 10);
            ellipse(x - 15, y - 10, 8, 10);
            ellipse(x, y + 5, 8, 10);
            ellipse(x - 25, y + 5, 8, 10);
            ellipse(x + 25, y + 5, 8, 10);
            ellipse(x - 15, y + 20, 8, 10);
            ellipse(x + 15, y + 20, 8, 10);
            ellipse(x, y + 35, 8, 10);
        }

        //The function that creates a random fruit when a mouse is clicked//
        mouseClicked = function() {
            var fruit = random(15);
            if (fruit <= 3) {
                lemon(mouseX, mouseY);
            }
            else if (fruit >= 4 && fruit <= 6) {
                watermelon(mouseX, mouseY);
            }
            else if (fruit >= 7 && fruit <= 9) {
                avacado(mouseX, mouseY);
            }
            else if (fruit >= 10 && fruit <= 12) {
                coconut(mouseX, mouseY);
            }
            else if (fruit >= 13 && fruit <= 15) {
                strawberry(mouseX, mouseY);
            }
        }

        mouseDragged = function() {
            var fruit = random(15);
            if (fruit <= 3) {
                lemon(mouseX, mouseY);
            }
            else if (fruit >= 4 && fruit <= 6) {
                watermelon(mouseX, mouseY);
            }
            else if (fruit >= 7 && fruit <= 9) {
                avacado(mouseX, mouseY);
            }
            else if (fruit >= 10 && fruit <= 12) {
                coconut(mouseX, mouseY);
            }
            else if (fruit >= 13 && fruit <= 15) {
                strawberry(mouseX, mouseY);
            }
        }

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
