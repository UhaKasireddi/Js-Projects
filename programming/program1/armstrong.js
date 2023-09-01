//checking given number is armstrong number or not

let num = "92727" 
let l = num.length
//console.log(l)
//console.log(parseInt(num/10))
let variable = num
let sUm = 0

while (variable > 0){
    let a = variable%10
    
    sUm += Math.pow(a,l)

    variable = parseInt(variable/10)
}
//console.log(sUm)

if(sUm == num){
    console.log("Armstrong Number")
}
else{
    console.log("Not an Armstrong Number")
}