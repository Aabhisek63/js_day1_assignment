const prompt = require('prompt-sync')();
 let a=Number(prompt("Enter the number "));
 let b=Number(prompt("Enter the number "));
 let c=Number(prompt("Enter the number "));
 if(a>=b && a>=c){
    console.log(`${a} is the max`);
 }
 else if(b>=a && b>=c){
    console.log(`${b} is the max`);
 }
 else{
    console.log(`${c} is the max`);
 }