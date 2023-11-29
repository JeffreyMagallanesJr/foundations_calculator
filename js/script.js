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


const operatorSymbols = ["+","-","*","/"];
const operatorNames = ["add","subtract","multiply","divide"];

let operators = Array.from(document.querySelectorAll(".operator"));

let operatorsSymbols = operators.map(function (item) {
    return item.textContent;
})

let operatorsNames;

operatorsNames = operatorsSymbols.map(function (item) {
    return operatorNames[operatorsSymbols.indexOf(item)];
})

for (i in operatorsNames) {
    console.log(i);
}