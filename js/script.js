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

let firstNumber;
let operator;
let secondNumber;

let display = document.getElementById("display");
let seven = document.getElementById("seven");

display.textContent += 1;