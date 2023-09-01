// object is collection of properties 
// Key Value pair

let car = {
    carName : "Audi",
    _fuel : "Petrol",
    cc140 : "300cc",
    $color : "black",
    sensor:"Yes",
    End : "Topend"
}

//console.log(car)
//console.log(car.cc140)  // dot Notation
//console.log(car["sensor"]) // Bracket notation

let a = "_fuel"
//console.log(car.a) // undefined
//console.log(car[a]) // Petrol

car.speed = "300Kph"
console.log(car)