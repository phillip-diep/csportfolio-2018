var video = document.getElementById("video");
var opening = document.getElementById("opening");
var start = document.getElementById("start");
var input = document.getElementById("input");
var error = document.getElementById("error");
var exitAlert = document.getElementById("exitAlert");
var thicknessAbout = document.getElementById("thicknessAbout");
var thicknessExplain = document.getElementById("thicknessExplain");
var thickness = document.getElementById("thickness");
var cookingAbout = document.getElementById("cookingAbout");
var cookingExplain = document.getElementById("cookingExplain");
var cooking = document.getElementById("cooking");
var cook = document.getElementById("cook");
var loading = document.getElementById("loading");
var side1 = document.getElementById("side1");
var side2 = document.getElementById("side2");
var output = document.getElementById("output");

function startDelete() {
    opening.style.display = "none";
}

function inputFadeIn() {
    input.style.opacity = "1";
}

start.addEventListener("click", function() {
    opening.style.opacity = "0";
    input.style.display = "flex";
    error.style.display = "block"
    setTimeout(startDelete, 500);
    setTimeout(inputFadeIn, 510);
});

thicknessAbout.addEventListener("mouseover", function() {
    thicknessExplain.style.display = "block"
})
thicknessExplain.addEventListener("mouseout", function() {
    thicknessExplain.style.display = "none"
})

cookingAbout.addEventListener("mouseover", function() {
    cookingExplain.style.display = "block"
})
cookingExplain.addEventListener("mouseout", function() {
    cookingExplain.style.display = "none"
})

function inputDelete() {
    input.style.display = "none"
}

function loadingFadeIn() {
    loading.style.opacity = "1";
}

function loadingDelete() {
    loading.style.display = "none"
}

function outputTransition() {
    loading.style.opacity = "0"
    output.style.display = "block"
}

function outputFadeIn() {
    video.pause();
    output.style.opacity = "1"
}

exitAlert.addEventListener("click", function() {
    error.style.top = "-37vw";
});

cook.addEventListener("click", function() {
    var meatSize = thickness.value * 100;

    if (meatSize > 200) {
        error.style.top = "0";
    }
    else {
        error.style.display = "none";
        input.style.opacity = "0";
        loading.style.display = "flex";
        video.play();
        setTimeout(inputDelete, 500);
        setTimeout(loadingFadeIn, 510);
        setTimeout(outputTransition, 5000);
        setTimeout(loadingDelete, 5500);
        setTimeout(outputFadeIn, 5510);
    }

    if (cooking.value === "Rare" && meatSize <= 50) {
        side1.innerHTML = "<h4> 2 minutes </h4>";
        side2.innerHTML = "<h4> 2 minutes </h4>";
    }
    else if (cooking.value === "Rare" && meatSize <= 75) {
        side1.innerHTML = "<h4> 4 minutes </h4>";
        side2.innerHTML = "<h4> 2 minutes </h4>";
    }
    else if (cooking.value === "Rare" && meatSize <= 100) {
        side1.innerHTML = "<h4> 5 minutes </h4>";
        side2.innerHTML = "<h4> 3 minutes </h4>";
    }
    else if (cooking.value === "Rare" && meatSize <= 125) {
        side1.innerHTML = "<h4> 5 minutes </h4>";
        side2.innerHTML = "<h4> 4 minutes </h4>";
    }
    else if (cooking.value === "Rare" && meatSize <= 150) {
        side1.innerHTML = "<h4> 6 minutes </h4>";
        side2.innerHTML = "<h4> 4 minutes </h4>";
    }
    else if (cooking.value === "Rare" && meatSize <= 175) {
        side1.innerHTML = "<h4> 7 minutes </h4>";
        side2.innerHTML = "<h4> 5 minutes </h4>";
    }
    else if (cooking.value === "Rare" && meatSize <= 200) {
        side1.innerHTML = "<h4> 8 minutes </h4>";
        side2.innerHTML = "<h4> 6 minutes </h4>";
    }

    if (cooking.value === "Med. Rare" && meatSize <= 50) {
        side1.innerHTML = "<h4> 3 minutes </h4>";
        side2.innerHTML = "<h4> 2 minutes </h4>";
    }
    else if (cooking.value === "Med. Rare" && meatSize <= 75) {
        side1.innerHTML = "<h4> 4 minutes </h4>";
        side2.innerHTML = "<h4> 3 minutes </h4>";
    }
    else if (cooking.value === "Med. Rare" && meatSize <= 100) {
        side1.innerHTML = "<h4> 5 minutes </h4>";
        side2.innerHTML = "<h4> 4 minutes </h4>";
    }
    else if (cooking.value === "Med. Rare" && meatSize <= 125) {
        side1.innerHTML = "<h4> 6 minutes </h4>";
        side2.innerHTML = "<h4> 5 minutes </h4>";
    }
    else if (cooking.value === "Med. Rare" && meatSize <= 150) {
        side1.innerHTML = "<h4> 7 minutes </h4>";
        side2.innerHTML = "<h4> 5 minutes </h4>";
    }
    else if (cooking.value === "Med. Rare" && meatSize <= 175) {
        side1.innerHTML = "<h4> 8 minutes </h4>";
        side2.innerHTML = "<h4> 6 minutes </h4>";
    }
    else if (cooking.value === "Med. Rare" && meatSize <= 200) {
        side1.innerHTML = "<h4> 9 minutes </h4>";
        side2.innerHTML = "<h4> 8 minutes </h4>";
    }

    if (cooking.value === "Medium" && meatSize <= 50) {
        side1.innerHTML = "<h4> 4 minutes </h4>";
        side2.innerHTML = "<h4> 2 minutes </h4>";
    }
    else if (cooking.value === "Medium" && meatSize <= 75) {
        side1.innerHTML = "<h4> 5 minutes </h4>";
        side2.innerHTML = "<h4> 3 minutes </h4>";
    }
    else if (cooking.value === "Medium" && meatSize <= 100) {
        side1.innerHTML = "<h4> 6 minutes </h4>";
        side2.innerHTML = "<h4> 4 minutes </h4>";
    }
    else if (cooking.value === "Medium" && meatSize <= 125) {
        side1.innerHTML = "<h4> 7 minutes </h4>";
        side2.innerHTML = "<h4> 5 minutes </h4>";
    }
    else if (cooking.value === "Medium" && meatSize <= 150) {
        side1.innerHTML = "<h4> 7 minutes </h4>";
        side2.innerHTML = "<h4> 6 minutes </h4>";
    }
    else if (cooking.value === "Medium" && meatSize <= 175) {
        side1.innerHTML = "<h4> 8 minutes </h4>";
        side2.innerHTML = "<h4> 7 minutes </h4>";
    }
    else if (cooking.value === "Medium" && meatSize <= 200) {
        side1.innerHTML = "<h4> 10 minutes </h4>";
        side2.innerHTML = "<h4> 8 minutes </h4>";
    }

    if (cooking.value === "Well Done" && meatSize <= 50) {
        side1.innerHTML = "<h4> 5 minutes </h4>";
        side2.innerHTML = "<h4> 3 minutes </h4>";
    }
    else if (cooking.value === "Well Done" && meatSize <= 75) {
        side1.innerHTML = "<h4> 7 minutes </h4>";
        side2.innerHTML = "<h4> 5 minutes </h4>";
    }
    else if (cooking.value === "Well Done" && meatSize <= 100) {
        side1.innerHTML = "<h4> 8 minutes </h4>";
        side2.innerHTML = "<h4> 6 minutes </h4>";
    }
    else if (cooking.value === "Well Done" && meatSize <= 125) {
        side1.innerHTML = "<h4> 9 minutes </h4>";
        side2.innerHTML = "<h4> 7 minutes </h4>";
    }
    else if (cooking.value === "Well Done" && meatSize <= 150) {
        side1.innerHTML = "<h4> 10 minutes </h4>";
        side2.innerHTML = "<h4> 8 minutes </h4>";
    }
    else if (cooking.value === "Well Done" && meatSize <= 175) {
        side1.innerHTML = "<h4> 11 minutes </h4>";
        side2.innerHTML = "<h4> 9 minutes </h4>";
    }
    else if (cooking.value === "Well Done" && meatSize <= 200) {
        side1.innerHTML = "<h4> 13 minutes </h4>";
        side2.innerHTML = "<h4> 11 minutes </h4>";
    }
});
