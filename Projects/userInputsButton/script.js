let btnE1 = document.getElementById("button")

let bgColor = document.getElementById("bgColor")
let fontSize = document.getElementById("fontSize")
let fontColor = document.getElementById("fontColor")
let fontWeight = document.getElementById("fontWeight")
let paddingP1 = document.getElementById("paddingP1")
let borderRadius = document.getElementById("borderRadius")

btnE1.addEventListener('click',()=>{
    btnE1.style.backgroundColor = bgColor.value 
    btnE1.style.fontSize = fontSize.value + "px"
    btnE1.style.color = fontColor.value
    btnE1.style.fontWeight = fontWeight.value +"px"
    btnE1.style.padding = paddingP1.value + "px"
    btnE1.style.borderRadius = borderRadius.value + "px"
})