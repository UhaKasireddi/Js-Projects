// synchrnous

// alert("funtction1")
// alert("funtction2")
// alert("funtction3")
// alert("funtction4")

// console.log("hi")
// console.log("hello")
// console.log("js")

1// const url ="https://gorest.co.in/public/v2/users"
// fetch(url)
// .then((reponse)=>{
//     return reponse.json();
// })
// .then((jsonData)=>{
//     console.log(jsonData)
// })
//console.log("completed");


// promises
// promise is nothing but a object  it represents the result of operation  
// that will be returned at some point of time in future.. it is used to handle asynchrnous operations .

// const url ="https://gorest.co.in/public/v2/users"
// let output= fetch(url)
// console.log(output)
// console.log('completed')

// fulfilled
// rejected
// pending

// const url ="https://gorest.co.in/public/users"
// fetch(url)
// .then((response)=>{
// return response.json();  // resolve
// })
// .catch((error)=>{
//     console.log(error) // rejected
// })


// promise chaining


// const url ="https://gorest.co.in/public/v2/users"


// fetch(url)
// .then((reponse)=>{
//    return reponse.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })


// console.log("completed")




// asynchrounous -> callback , promise




// const myPromise= ()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Inside the async")
// resolve();
//     }, 3000);
// });}


// console.log(myPromise())


// async await


// const url = "https://gorest.co.in/public/v2/users" ;
// const myPromise = async()=>{
//     const reponse = await fetch(url);
//     console.log(response)
//     const data= await reponse.json();
//     console.log(data)
// }
// myPromise();




// const url = "https://jsonplaceholder.typicode.com/todos" ;


// const myPromise =async() =>{
//     try{
//         const reponse = await fetch(url);
//         const jsonData= await reponse.json();
//         console.log(jsonData)
//     }catch(error) {
//         console.log(error)
//     }
// }
// myPromise();






// const myPromise =()=> {
//     return new Promise((resolve, reject)=>{


//     setTimeout(()=>{
//         resolve("Resolved");
//     }, 1000);


// });}


// console.log(myPromise())


// Async/ Await is a modern way to consume promises .


// Await ->


// console.log("A")
// console.log("B")


// const url = "https://jsonplaceholder.typicode.com/todos" ;
// const result = async ()=>{
//     try{
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
// }catch(error){
//     console.log(error)
// }
// };


// result()








// console.log("operation 1")


// setTimeout(()=>{
//     console.log("operation 2")
// },1)


// console.log("operation 3")


// by using promises we can find out wheather the code (async operations) is sucessfully completed or not.


//promise always return 3 types  1. sucessfull(resolve) 2. rejected 3. pending
