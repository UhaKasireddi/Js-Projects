let a= [1,2,3,4,5,6]
let b = a.map((each_element)=> each_element+5)
console.log(b)
let c = a.map((each_element) => each_element*2)
console.log(c)

let d = a.filter((each_element) => each_element >=4 )
console.log(d)

let e = a.reduce((accumulator, current_value) => accumulator+current_value )
console.log(e)

let f = a.map((each_element) => each_element*2).filter((each_element) => each_element > 5).reduce((accumulator, current_value)=> accumulator+current_value)
console.log(f)