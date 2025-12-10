const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

console.log("1. Add");
console.log("2. Sub");
console.log("3. Mul");
console.log("4. Div");

let choice = Number(prompt("Enter your choice: "));

switch (choice) {
    case 1:
        console.log("Result:", num1 + num2);
        break;

    case 2:
        console.log("Result:", num1 - num2);
        break;

    case 3:
        console.log("Result:", num1 * num2);
        break;

    case 4:
        console.log("Result:", num1 / num2);
        break;

    default:
        console.log("Invalid Choice");
}
