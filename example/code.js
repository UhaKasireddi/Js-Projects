//armstrong number

let numb1 = 1000
let numb2 = 10000

for(let i=numb1; i<=numb2; i++){
    let Sum = 0
    let temp = i
    let l = i.toString().length
    for(let j=0; j<i.toString().length; j++){
        
        let num3 = temp%10
        temp = parseInt(temp/10)
        Sum += Math.pow(num3,l)
    }
    //console.log(Sum)
    if(Sum == i){
        console.log(i)
    }
}

// let l = numb.toString().length
// //console.log(l)
// let Sum = 0
// let temp = numb
// for(let i=0; i<l; i++){
//     let num1 = temp%10
//     temp = parseInt(temp/10)
//     //console.log(temp)
//     Sum += Math.pow(num1,l)
// }
// //console.log(Sum)
// if(Sum == numb){
//     console.log("Given number is an Armstrong number")
// }
// else{
//     console.log("Given number is not an armstrong number")
// }
