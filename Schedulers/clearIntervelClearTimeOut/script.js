// Example: Display a message after 3 seconds
// let count = 1
// let timeoutId = setTimeout(() => {
//   console.log("This message will be displayed after 3 seconds.");
  
// }, 3000);
// count += 1
// // Cancel the timeout before it triggers
// if (count === 10) {
//   clearTimeout(timeoutId);
//   console.log("Timeout canceled.");
// }

let uniqueId=setTimeout(function(){
    console.log("bomb blast")
  }, 10000)
  
  
  clearTimeout(uniqueId)
  












// const box = document.getElementById("box");
// let position = 0;
// let intervalId;

// function animateBox() {
//   position += 5;
//   box.style.left = position + "px";

//   if (position >= 200) {
//     clearInterval(intervalId);
//     console.log("Animation stopped.");
//   }
// }

// intervalId = setInterval(animateBox, 50);
