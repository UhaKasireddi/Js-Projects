console.log(number) // undefined
var number=50

function print(){
    var square = number * number
    console.log(square) // 2500
}

print()
console.log(number) // 50

// variable redeclaration 

var number = 100
console.log(number) // 100

// reassigning the value

number = 200
console.log(number)


function print2(){
    var square2 = num1 * num1 
    console.log(square2) //NaNa
     
    var num1 = 5

    var square3 = num1 * num1 
    console.log(square3) // 25
}

print2()