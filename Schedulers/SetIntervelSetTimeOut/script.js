let count = 0
let uniqueId = setInterval(function(){
  console.log(count)
  count += 1
},1000)

//clearInterval(uniqueId)








// // call back funtion is nothing but a function which passes to another function as an argument.
// //  function myDisplayer(something) {
// //      document.getElementById("demo").innerHTML = something;
// //    }
 
// //  function myCalculator(num1, num2, myCallback) {
// //     let sum = num1 + num2;
// //      myCallback(sum);
// //      console.log(sum)
// //    }
 
// //  myCalculator(5, 5, myDisplayer);

// // let timerCount = 0;

// // const intervalId = setInterval(() => {
// //   console.log(`Timer: ${timerCount} seconds`);
// //   timerCount++;

// //   if (timerCount === 10) {
// //     clearInterval(intervalId);
// //     console.log("Timer stopped.");
// //   }
// // }, 1000);

// // Example: Display a message every 2 seconds
// let intervalId = setInterval(() => {
//   console.log("This message will be displayed every 2 seconds.");
// }, 2000);

// // Stop the interval after 10 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped.");
// }, 100000);







// // let uniqueId=setTimeout(function(){
// //   console.log("bomb blast")
// // }, 10000)


// // clearTimeout(uniqueId)
