//Quardratic Equation solving 
// Formula x=(-b+-(sqrrootb^2-4ac))/2a

let a = 1
let b = -6
let c = 9

let square = Math.pow(b,2)
//console.log(square)

let foureAC = (4*a*c)
//console.log(foureAC)

let square_foureAC = square - foureAC
//console.log(square_foureAC) 

let root = Math.sqrt(square_foureAC)
//console.log(root)

let r1 = (-b+root)/(2*a)
console.log(r1)
let r2 = (-b-root)/(2*a)
console.log(r2)


