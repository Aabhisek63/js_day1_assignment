const prompt = require('prompt-sync')();

let flag = true;

while (true) {
    let choice = prompt("Press Enter to toggle flag (or type exit): ");

    if (choice === "exit") break;

    flag = !flag;
    console.log("Flag is now:", flag);
}
