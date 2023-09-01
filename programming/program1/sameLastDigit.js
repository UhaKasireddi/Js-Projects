// Checking having same last digit or not

let a = "8"
let b = "35"
let c = "428"

let aa = a%10
let bb = b%10
let cc = c%10

if (aa==bb && aa==cc){
    console.log("Last digits are Equal")
}
else{
    console.log("Last digits are not Equal")
}