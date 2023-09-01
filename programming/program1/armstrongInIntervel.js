// JavaScript Program to Find Armstrong Number in an Interval

let num1 = 1
let num2 = 154
for(let i=num1; i<num2; i++){
    let j = i.toString()
    let l = j.length 
    //console.log(j.length)
    let variable = i
    let SuM = 0 

    while (variable > 0){
        let a = variable%10
        variable = parseInt(variable/10)
        SuM += Math.pow(a,l)
    }
    //console.log(SuM)
    if(SuM == i){
        console.log(i)
    }
}
