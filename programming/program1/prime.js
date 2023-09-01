// Checking given number is Prime or Not

let a = 10

let count = 0 

for(let i=1; i<=a; i++){
    //console.log(i)
    if(a%i==0){
        count++
    }
}
//console.log(count)
if (count > 2){
    console.log("Given Number is not a Prime Number")
}
else{
    console.log("Given Number is Prime Number")
}