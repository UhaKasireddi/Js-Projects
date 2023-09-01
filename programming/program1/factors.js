const prompt = require("prompt-sync")()

let a = parseInt(prompt("Enter Number: "));

for(let i=1; i<=a; i++){
    if(a%i==0){
        console.log(i)
    }
}