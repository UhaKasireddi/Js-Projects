const prompt = require("prompt-sync")()

let Num = parseInt(prompt("Enter Number : "));

function add(num){
    if(num > 0){
        return num + add(num-1);
    }
    else{
        return num; 
    }
}

console.log(add(Num))

// let addition = (a)=>sum(a)
// console.log(addition(Num))