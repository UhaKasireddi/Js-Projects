//console.log(number) // Cannot access number before initialization

let number = 50

function print(){

    let square = number * number 

    if (number <60){
        var largerNumber = 80
        let anotherLargeNumber = 100

        console.log(square) // 2500

    }

    console.log(largerNumber) // 80
    //console.log(anotherLargeNumber)  // anotherLargeNumber is not defined
}

print()

let num1 = 60 
console.log(num1) 

//redeclaration
//let num1 = 70
//console.log(num1) // Error num1 has already declared


//reassigning 
num1 = 70
console.log(num1) // 70