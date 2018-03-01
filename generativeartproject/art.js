/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1000, 500);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        //Colors the background blue//
        background(167, 238, 255)

        //Defines the function Party which creates the text "Party!"//
        function Party(x, y, r1, g1, b1, r2, g2, b2) {
            P(x, y, r1, g1, b1, r2, g2, b2);
            A(x + 150, y, r1, g1, b1, r2, g2, b2);
            R(x + 350, y, r1, g1, b1, r2, g2, b2);
            T(x + 550, y, r1, g1, b1);
            Y(x + 750, y, r1, g1, b1);
            exclaim_mark(x + 950, y, r1, g1, b1);
        }
        //Defines the function P which creates the letter "p"//
        function P(x, y, r1, g1, b1, r2, g2, b2) {
            noStroke();
            fill(r1, g1, b1);
            rect(x, y, 50, 225);
            ellipse(x + 90, y + 75, 150, 150);
            rect(x, y, 90, 150);

            fill(r2, g2, b2);
            ellipse(x + 90, y + 75, 50, 50);
            rect(x + 50, y + 50, 40, 50);
        }
        //Defines the function A which creates the letter "a"//
        function A(x, y, r1, g1, b1, r2, g2, b2) {
            noStroke();
            fill(r1, g1, b1);
            triangle(x, y + 225, x + 180, y + 225, x + 90, y);
            triangle(x + 50, y + 225, x + 130, y + 225, x + 90, y + 110);

            fill(r2, g2, b2);
            quad(x + 50, y + 225, x + 130, y + 225, x + 120, y + 200, x + 60, y + 200);
            triangle(x + 90, y + 110, x + 75, y + 150, x + 105, y + 150);
        }
        //Defines the function R which creates the letter "r"//
        function R(x, y, r1, g1, b1, r2, g2, b2) {
            noStroke();
            fill(r1, g1, b1);
            rect(x, y, 50, 225);
            ellipse(x + 90, y + 75, 150, 150);
            rect(x, y, 90, 150);
            quad(x + 165, y + 225, x + 105, y + 225, x + 45, y + 125, x + 105, y + 125)

            fill(r2, g2, b2);
            ellipse(x + 90, y + 75, 50, 50);
            rect(x + 50, y + 50, 40, 50);
        }
        //Defines the function T which creates the letter "t"//
        function T(x, y, r, g, b) {
            noStroke();
            fill(r, g, b)
            rect(x, y, 165, 50);
            rect(x + 57.5, y, 50, 225);
        }
        //Defines the function Y which creates the letter "y"//
        function Y(x, y, r, g, b) {
            noStroke();
            fill(r, g, b);
            rect(x + 57.5, y + 150, 50, 75);
            quad(x + 58, y + 150, x + 108, y + 150, x + 50, y, x, y);
            quad(x + 58, y + 150, x + 108, y + 150, x + 165, y, x + 115, y);
        }
        //Defines the function exclaim_mark which creates the character "!"//
        function exclaim_mark(x, y, r, g, b) {
            noStroke();
            fill(r, g, b);
            rect(x, y, 50, 150);
            rect(x, y + 175, 50, 50);
        }

        //Outlines for a balloon object that will create a balloon//
        function Balloon(xpos, ypos, r, g, b) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.r = r;
            this.g = g;
            this.b = b;
            this.draw = function() {
                noFill();
                stroke(0, 0, 0);
                strokeWeight(3);
                bezier(this.xpos, this.ypos + 70, this.xpos + 50, this.ypos + 160, this.xpos - 100, this.ypos + 160, this.xpos, this.ypos + 350);
                noStroke();
                fill(this.r, this.g, this.b);
                ellipse(this.xpos, this.ypos, 100, 120);
                triangle(this.xpos, this.ypos + 50, this.xpos + 10, this.ypos + 75, this.xpos - 10, this.ypos + 75);
                stroke(255, 255, 255);
                strokeWeight(10);
                arc(this.xpos + 20, this.ypos - 10, 25, 50, -1.5, 0);
            }
        }

        //Creates an array that will contain the values of each individual balloon//
        var balloons = []

        //Creates a for loop that creates Balloon objects eith random position and color values and pushes them into the balloons array//
        for (var b = 0; b < 500; b++) {
            balloons.push(new Balloon(random(0, 1000), random(height, 100000), random(255), random(255), random(255)));
        }

        //Defines functions that draw the 3 different types of clouds//
        function cloud1(x, y) {
            ellipse(x, y, 100, 100);
            ellipse(x - 50, y, 50, 50);
            ellipse(x + 45, y, 75, 75);
        }

        function cloud2(x, y) {
            ellipse(x, y, 100, 100);
            ellipse(x + 50, y + 20, 45, 45);
            ellipse(x - 50, y, 60, 75);
        }

        function cloud3(x, y) {
            ellipse(x, y, 100, 100);
            ellipse(x - 60, y, 90, 90);
            ellipse(x + 50, y - 25, 50, 50);
        }

        //Defines the value of each cloud's x position, which will be used to animate each cloud differently//
        cloud1x = 0;
        cloud4x = 0;
        cloud2x = 0;
        cloud5x = 0;
        cloud3x = 0;
        cloud6x = 0;

        //Draws the normal animations//
        draw = function() {
            //Creates a background each frame//
            background();

            //Colors the clouds white//
            fill(255);
            stroke(255);
            //Creates the first cloud//
            cloud1(cloud1x, 100);
            //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
            if (cloud1x < width) {
                cloud1x += 10;
            }
            else if (cloud1x >= width) {
                cloud1x = 0;
            }
            //Creates the second cloud//
            cloud1(cloud2x, 450);
            //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
            if (cloud2x < width) {
                cloud2x += 12;
            }
            else if (cloud2x >= width) {
                cloud2x = 0;
            }
            //Creates the third cloud//
            cloud2(cloud3x, 250);
            //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
            if (cloud3x < width) {
                cloud3x += 14;
            }
            else if (cloud3x >= width) {
                cloud3x = 0;
            }
            //Creates the fourth cloud//
            cloud2(cloud4x, 50);
            //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
            if (cloud4x < width) {
                cloud4x += 16;
            }
            else if (cloud4x >= width) {
                cloud4x = 0;
            }
            //Creates the fifth cloud//
            cloud3(cloud5x, 400);
            //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
            if (cloud5x < width) {
                cloud5x += 18;
            }
            else if (cloud5x >= width) {
                cloud5x = 0;
            }
            //Creates the sixth cloud//
            cloud3(cloud6x, 320);
            //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
            if (cloud6x < width) {
                cloud6x += 20;
            }
            else if (cloud6x >= width) {
                cloud6x = 0;
            }

            //Calls for all of the created ballons in the balloons array and animates them to rise//
            for (var i = 0; i < balloons.length; i++) {
                balloons[i].draw();

                //changes the speed of the ballons based on where the mouse is//
                if (mouseY < 150) {
                    balloons[i].ypos -= 10;
                }
                else if (mouseY > 350) {
                    balloons[i].ypos -= 2.5;
                }
                else {
                    balloons[i].ypos -= 5;
                }
            }
        }

        //Engages "party mode" (flashing colors & faster speeds) when the mouse is clicked//
        mouseClicked = function() {
            draw = function() {
                //Randomly assigns a value to the r,g, and b values of the background and the text//
                r1 = random(255);
                g1 = random(255);
                b1 = random(255);
                r2 = random(255);
                g2 = random(255);
                b2 = random(255);

                //Randomly changes the color of the background (!!FLASHING!!) //
                background(r2, g2, b2);
                //Creates the text "Party!" - The random values before are used to change the color of the text (!!FLASHING!!)//
                Party(0, 200, r1, g1, b1, r2, g2, b2);

                //Randomly changes the color of the clouds//
                cloudr = random(255);
                cloudg = random(255);
                cloudb = random(255);
                fill(cloudr, cloudg, cloudb);
                stroke(cloudr, cloudg, cloudb);

                //Creates the first cloud//
                cloud1(cloud1x, 100);
                //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
                if (cloud1x < width) {
                    cloud1x += 200;
                }
                else if (cloud1x >= width) {
                    cloud1x = 0;
                }
                //Creates the second cloud//
                cloud1(cloud2x, 450);
                //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
                if (cloud2x < width) {
                    cloud2x += 240;
                }
                else if (cloud2x >= width) {
                    cloud2x = 0;
                }
                //Creates the third cloud//
                cloud2(cloud3x, 250);
                //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
                if (cloud3x < width) {
                    cloud3x += 280;
                }
                else if (cloud3x >= width) {
                    cloud3x = 0;
                }
                //Creates the fourth cloud//
                cloud2(cloud4x, 50);
                //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
                if (cloud4x < width) {
                    cloud4x += 320;
                }
                else if (cloud4x >= width) {
                    cloud4x = 0;
                }
                //Creates the fifth cloud//
                cloud3(cloud5x, 400);
                //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
                if (cloud5x < width) {
                    cloud5x += 360;
                }
                else if (cloud5x >= width) {
                    cloud5x = 0;
                }
                //Creates the sixth cloud//
                cloud3(cloud6x, 320);
                //Animates the cloud to move right untill it hits the edge of the screen, where it will then restart//
                if (cloud6x < width) {
                    cloud6x += 400;
                }
                else if (cloud6x >= width) {
                    cloud6x = 0;
                }

                //calls for all of the created ballons in the balloons array and animates them to rise//
                for (var i = 0; i < balloons.length; i++) {
                    balloons[i].draw();

                    //changes the speed of the ballons based on where the mouse is//
                    if (mouseY < 150) {
                        balloons[i].ypos -= 100;
                    }
                    else if (mouseY > 350) {
                        balloons[i].ypos -= 25;
                    }
                    else {
                        balloons[i].ypos -= 50;
                    }
                }
            }
        }
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
