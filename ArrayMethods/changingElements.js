//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits[0] = "Kiwi";
//console.log(fruits)  // [ 'Kiwi', 'Orange', 'Apple', 'Mango' ]
//fruits[fruits.length] = "Kiwi";
//console.log(fruits.length) // 5
//console.log(fruits) // [ 'Kiwi', 'Orange', 'Apple', 'Mango', 'Kiwi' ] 
//delete fruits[0]
//console.log(fruits)  // [ <1 empty item>, 'Orange', 'Apple', 'Mango', 'Kiwi' ]
//console.log(fruits[0])  // undefined

//const names = ["raj", "uha", "seetha", "rani"]
//const newArray = fruits.concat(names)
//console.log(newArray) // [<1 empty item>,'Orange','Apple','Mango','Kiwi','raj','uha','seetha','rani']

//const hobbies = ["reading", "writing", "dancing", "playing"]
//const newArray2 = fruits.concat(names,hobbies)
//console.log(newArray2)

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");
fruits2.splice(0, 1);
console.log(fruits2)

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits3.slice(1,3);
console.log(citrus)
console.log(fruits3.sort())
console.log(fruits3.reverse())