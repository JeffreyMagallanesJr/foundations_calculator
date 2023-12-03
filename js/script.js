// Calculator Functions
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

// Operation Function
function operate(firstNumber,operator,secondNumber) {
    return operator(firstNumber,secondNumber);
}

// Display Function
function populateDisplay(number) {
    display.textContent += number;
    displayValue = Number(display.textContent);
}

// Clear Function
function clearDisplay() {
    display.textContent = "";
}

// Initialize Variables
let operator;
let firstNumber;
let secondNumber;
let displayValue;
let display = document.querySelector("#display");

// Add populateDisplay function in each number button
let numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach(function (number) {
    number.addEventListener("click", function() {
        populateDisplay(number.textContent);
    })
});

// Add clearDisplay function in clear button
let clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
    clearDisplay();
});