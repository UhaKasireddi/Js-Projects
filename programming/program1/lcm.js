const prompt = require("prompt-sync")()

let a = parseInt(prompt("enter value 1: "));
let b = parseInt(prompt("enter value 2: "));
let hcf = 1

for(let i=1; i<=a && i<=b; i++){
    if(a%i==0 && b%i==0){
        hcf = i 

    }

}
//console.log(hcf)
let lcm = (a*b)/hcf
console.log(`LCM of ${a}, ${b} is ${lcm}`)