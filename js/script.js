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
    return operator(firstNumber,secondNumber);
}

function populateDisplay(number) {
    display.textContent += number;
    displayValue = Number(display.textContent);
}

let firstNumber;
let operator;
let secondNumber;
let displayValue;

let display = document.querySelector("#display");

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