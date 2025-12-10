const prompt = require('prompt-sync')();
 let a=prompt("Enter the string ");
 
function stringLength(str) {
    return str.length;
}

console.log("Length =", stringLength(a));
