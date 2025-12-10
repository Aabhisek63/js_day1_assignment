const prompt = require('prompt-sync')();

function checkEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}

let age = Number(prompt("Enter your age: "));
console.log(checkEligibility(age));
