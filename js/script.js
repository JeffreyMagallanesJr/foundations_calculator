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
    return window[operator](firstNumber,secondNumber);
}

// Display Function
function populateDisplay(number) {
    display.textContent += number;
    displayValue = Number(display.textContent);
}

// Clear Display Function
function clearDisplay() {
    display.textContent = "";
}

// Clear All Function
function clearAll() {
    operator = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
    displayValue = undefined;
    display.textContent = "";
}

// Initialize Variables
let operator;
let firstNumber;
let secondNumber;
let displayValue;
let display = document.querySelector("#display");
let oldNumber = false;

// Add populateDisplay function in each number button
let numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach(function (number) {
    number.addEventListener("click", function() {
        if (oldNumber) {
            clearDisplay();
            oldNumber = false;
            populateDisplay(number.textContent);
        } else {
            populateDisplay(number.textContent);
        }
    })
});

// Add clearAll function in clear button
let clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
    clearAll();
});

let operatorButtons = Array.from(document.querySelectorAll(".operator"));
operatorButtons.forEach(function (operatorButton) {
    operatorButton.addEventListener("click", function() {
        if (firstNumber) {
            secondNumber = displayValue;
            firstNumber = operate(firstNumber,operator,secondNumber);
            operator = operatorButton.id;
            clearDisplay();
            display.textContent = firstNumber;
            oldNumber = true;
        } else {
            firstNumber = displayValue;
            operator = operatorButton.id;
            oldNumber = true;
        }
    });
});

let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", function() {
    secondNumber = displayValue;
    display.textContent = operate(firstNumber,operator,secondNumber);
    oldNumber = false;
});