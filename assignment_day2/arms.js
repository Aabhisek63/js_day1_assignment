const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number: "));

function isArmstrong(num) {
    let str = num.toString();
    let digits = str.length;
    let sum = 0;

    for (let i = 0; i < digits; i++) {
        sum += Math.pow(Number(str[i]), digits);
    }

    if (sum === num) {
        console.log(`${num} is an Armstrong number`);
    } else {
        console.log(`${num} is NOT an Armstrong number`);
    }
}

isArmstrong(num);
