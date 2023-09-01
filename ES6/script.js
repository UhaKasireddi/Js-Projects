// ES6 - > ECMA SCRIPT 2015


//spread operator and rest parameter


// // spread operator is used to unpack an array or object in to individual items .




// let arr1= [1,2,3,4,5,6]
//let arr2=[...arr1]
//console.log(arr2)
//console.log(typeof(arr1))
//console.log(arr1==arr2)
// let arr2=[7,8,9,10,11]
// let arr3=[...arr1,...arr2]
// // // // // //copy  // concatenation
// console.log(arr3)


// let car ={
//     name: "Audi",
//     year : "2023",
//     fuel : "diesel"
// }


// let person ={
//     na:"spreadoperator",
//     version:"latest",
//     usagae : "javascript"
// }

// let car2= {...car, color: "black", ...person}

// console.log(car2)


// // funtion calls


// function play(a,b,c){
//     return a+b+c
// }

// let arr=[1,2,3,4,5,6]
// console.log(...arr)
// console.log(play(...arr))


// // ..................................................


// //..............  REST PARAMETERS ...................


// // We can pack the multiple values in to an array
// let [a,b,c,...rest]= [1,2,3,4,5,6,7]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(rest)


// let {name, ...rest}= {name : "car",fuel :"pertrol",color: "black", engine : "2000cc"}
// console.log(name)
// console.log(rest)


// // rest is always at last


// // template literals
// `${variable_name}`




// let name ="Honda"
// console.log("my Car name is Audi")


//  console.log(`my car name is ${name}`)




// //................ TERENARY OPERATOR .......................


// let pass_marks = 35
// let result = pass_marks>=40 ? "Pass" : "fail"
//  console.log(result)




// // ................... SWITCH ......................
// // it is a conditional statement like if else  which is used in taking descisions
// let day =11
// switch(day){
//     case 0 :
//         console.log("Sunday")
//         break;  
//     case 1:
//         console.log("Moday");
//         break;
//     case 2 :
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;  
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5 :
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     default:
//         console.log("Invalid")
//         break;


// }




// // .......................ARROW FUNCTIONS...................


//  let add=(a,b)=>{
//     return (a+b);
//  }


//  console.log(add(3,5))

// let add=(a,b)=> a+b;
// console.log(add(3,5))

// let greet= a=> `Hi ${a}`
// console.log(greet("Uha"))

// let hi = ()=> "Hello hi, How r u"
// console.log(hi())

// let car = name =>{
//     return {
//         carName : name
//     };
// };
// console.log(car("Benz"))

// let car = name => ({carName : name});
// console.log(car("audi"));
