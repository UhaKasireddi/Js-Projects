let inputElementE1 = document.createElement("input")

document.body.appendChild(inputElementE1)

// inputElementE1.addEventListener('keydown',()=>{
//     console.log("DownKey pressed")

// })

// inputElementE1.addEventListener('keyup', ()=>{
//     console.log("Key up pressed")
// })

inputElementE1.addEventListener('keypress',()=>{
    console.log("key pressed")
})