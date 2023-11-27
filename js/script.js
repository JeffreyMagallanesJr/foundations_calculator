function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNumber,operator,secondNumber) {
    // switch(operator) {
    //     case "+":
    //         return add(firstNumber,secondNumber);
    //         break;
    //     case "-":
    //         return subtract(firstNumber,secondNumber);
    //         break;
    //     case "*":
    //         return multiply(firstNumber,secondNumber);
    //         break;
    //     case "/":
    //         return divide(firstNumber,secondNumber);
    //         break;
    // }
    return operator(firstNumber,secondNumber);
}

function displayNumber(number) {
    display.textContent += number;
}

let firstNumber;
let operator;
let secondNumber;

let display = document.querySelector("#display");

let numbers = Array.from(document.querySelectorAll(".number"));

numbers.map(function (number) {
    number.addEventListener("click", function() {
        displayNumber(number.textContent);
    })
});

// let seven = document.getElementById("7");
// let eight = document.getElementById("8");

// seven.addEventListener("click", function() {
//     displayNumber(seven.textContent);
// });
// eight.addEventListener("click", function() {
//     displayNumber(eight.textContent);
// });