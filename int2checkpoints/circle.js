/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

xpos=0;
ypos=0;
thickness = 5;
blue_value = 89;
radius = 30;
draw = function() {
    //A row of green circles will move diagonally down towards the right//
    fill(50,175,89);
    stroke(142,60,170);
    strokeWeight(5);
    ellipse(xpos,ypos,30,30);
    xpos += 20;
    ypos += 10;
    
    //a row of green circles will move diagonally down towards the right AND the line thickness will increase by 1 pixel each circle//
    strokeWeight(thickness);
    ellipse(xpos - 20,ypos + 75,30,30);
    thickness ++;
    
    //a row of circles will move diagonally down towards the right AND the color will change from green to blue//
    fill(50,175,blue_value)
    strokeWeight(5);
    ellipse(xpos - 20,ypos + 150,30,30);
    blue_value += 10;
    
    //a row of green circles will move diagonally down towards the right AND decrease in size//
    fill(50,175,89)
    ellipse(xpos - 20,ypos + 225,radius,radius);
    radius --;
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
