//Creates variables and saves them with DOM elements 
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var calculate = document.getElementById("calculate");
var answer = document.getElementById("answer");

//Adds an event listenr which will run the function when the calculate button is clicked
calculate.addEventListener("click", function(){
    //Redefines the input variables
    var number1 = +num1.value;
    var number2 = +num2.value;
    var op = operator.value;
    
    //Looks for what operator was iputed and runs the calculation for it.
    if (op === "+"){
        answer.innerHTML = number1 + number2;
    } else if (op === "-"){
        answer.innerHTML = number1 - number2;
    } else if (op === "*"){
        answer.innerHTML = number1 * number2;
    } else if (op === "/"){
        answer.innerHTML = number1 / number2;
    } else if (op === "distance"){
        answer.innerHTML = Math.abs(number1) + Math.abs(number2);
    } else if (op === "square root (top #)"){
        answer.innerHTML = Math.sqrt(number1);
    } else if (op === "^"){
        answer.innerHTML = Math.pow(number1,number2);
    } else if (op === "cubic root (top #)"){
        answer.innerHTML = Math.cbrt(number1);
    }
    
})