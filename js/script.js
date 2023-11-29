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

function displayNumber(number) {
    display.textContent += number;
}

const operatorSymbols = ["+","-","*","/"];
const operatorNames = ["add","subtract","multiply","divide"];
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