let incBtnE1 = document.getElementById("incbtn")
let decBtnE1 = document.getElementById("decbtn")

let imageE1 = document.getElementById("image")

let W1 = imageE1.width 
let H1 = imageE1.height

incBtnE1.addEventListener('click', ()=>{
    W1 += 5
    H1 += 5 

    let updatedWidth = W1 + "px"
    let updatedHeight = H1 + "px"

    imageE1.style.width = updatedWidth
    imageE1.style.height = updatedHeight

    console.log(W1)
    console.log(H1)
})

decBtnE1.addEventListener('click', ()=>{
    W1 -= 5
    H1 -= 5 

    let updatedWidth = W1 + "px"
    let updatedHeight = H1 + "px"
    
    imageE1.style.width = updatedWidth
    imageE1.style.height = updatedHeight

    console.log(W1)
    console.log(H1)
})