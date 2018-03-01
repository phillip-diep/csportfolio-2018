//Creates variables and saves them with DOM elements 
var AmericanBull = document.getElementById("AmericanBull");
var Bulldog = document.getElementById("Bulldog");
var Boxer = document.getElementById("Boxer");
var FrenchBull = document.getElementById("FrenchBull");
var description = document.getElementById("description");

//Looks for the event of a mouse hover over the element and then displays the text and makes the pictuer larger
AmericanBull.addEventListener("mouseover", function() {
    description.innerHTML = "<h3> American Bulldog </h3> <p> The American Bulldog is larger in size. There are generally considered to be two types of American Bulldog, the Johnson type and the Scott type, named after the breeders who were influential in developing them, John D. Johnson and Allen Scott. These are more commonly known as Classic or Bully type and Standard or Performance type. The American Bulldog was first bred in the 1800s when the continental United States was first beginning to form.</p>";
    document.getElementById("AmericanBull").style.width = "300px";
    document.getElementById("AmericanBull").style.height = "300px";
})
//Reverts the image back to the original size when the mouse is not over the image
AmericanBull.addEventListener("mouseout", function() {
    document.getElementById("AmericanBull").style.width = "200px";
    document.getElementById("AmericanBull").style.height = "200px";
})
//Looks for the event of a mouse hover over the element and then displays the text and makes the pictuer larger
Bulldog.addEventListener("mouseover", function() {
    description.innerHTML = "<h3> Bulldog </h3> <p> The Bulldog of today has developed since the initial bull-baiting days, inasmuch as characteristics of the breed (such as the underbite, size of the head and width of shoulder) have been accentuated by selective breeding. The term &quotBulldog&quot is the correct name for the breed, although they are often referred to as &quotEnglish Bulldogs&quot or &quotBritish Bulldogs&quot. </p>";
    document.getElementById("Bulldog").style.width = "400px";
    document.getElementById("Bulldog").style.height = "300px";
})
//Reverts the image back to the original size when the mouse is not over the image
Bulldog.addEventListener("mouseout", function() {
    document.getElementById("Bulldog").style.width = "280px";
    document.getElementById("Bulldog").style.height = "200px";
})
//Looks for the event of a mouse hover over the element and then displays the text and makes the pictuer larger
Boxer.addEventListener("mouseover", function() {
    description.innerHTML = "<h3> Boxer </h3> <p> Bred from the Bullenbeisser and the Old English Bulldog, the Boxer was originally used for bull and bear baiting. </p>";
    document.getElementById("Boxer").style.width = "400px";
    document.getElementById("Boxer").style.height = "300px";
})
//Reverts the image back to the original size when the mouse is not over the image
Boxer.addEventListener("mouseout", function() {
    document.getElementById("Boxer").style.width = "280px";
    document.getElementById("Boxer").style.height = "200px";
})
//Looks for the event of a mouse hover over the element and then displays the text and makes the pictuer larger
FrenchBull.addEventListener("mouseover", function() {
    description.innerHTML = "<h3> French Bulldog </h3> <p> The French Bulldog emerged as Bulldogs that were bred with Toy Bulldogs by the artistic community in Paris. They average 10 to 12 kilograms (22 to 26 lb). Their physical appearance is characterized by naturally occurring 'bat ears' that are pointy and stick straight up. Their tails are naturally short, not cropped. Otherwise, their body shape is similar to that of a Bulldog. </p>";
    document.getElementById("FrenchBull").style.width = "400px";
    document.getElementById("FrenchBull").style.height = "300px";
})
//Reverts the image back to the original size when the mouse is not over the image
FrenchBull.addEventListener("mouseout", function() {
    document.getElementById("FrenchBull").style.width = "280px";
    document.getElementById("FrenchBull").style.height = "200px";
})
