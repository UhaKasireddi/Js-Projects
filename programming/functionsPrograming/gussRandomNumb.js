const prompt = require("prompt-sync")()

function gussNumber(){
    let gussedNum = Math.ceil(Math.random()*10);
    let Num = parseInt(prompt("Guss a number from 1 to 10 : "));

    //return gussedNum;
    while(Num != gussedNum){
        Num = parseInt(prompt("Guss a number from 1 to 10 : "));
    }
    if(Num == gussedNum){
        console.log("Your guss is correct")
    }

}
//console.log(gussNumber())
gussNumber()
