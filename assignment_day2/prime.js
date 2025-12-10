const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number: "));

function isPrime(n){
    if(n<=1){
        console.log(`${n} is not prime number`);
    }
    else{
        for(let i=2;i<n;i++){
            if(n%i===0){
                console.log(`${n} is not prime`);
                 return;
            }
            
        }
        console.log(`${n} is prime number`);
    }
}
isPrime(num);