const prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let op = prompt("Enter operator (+, -, *, /): ");

function calculate(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
    return "Invalid operator";
}

console.log("Result =", calculate(a, b, op));
