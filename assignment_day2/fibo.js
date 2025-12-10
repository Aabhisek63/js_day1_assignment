const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number of terms: "));

let a = 0, b = 1;

console.log(a);
if (n > 1) console.log(b);

for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}
