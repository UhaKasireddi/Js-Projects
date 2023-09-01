let buttonE1 = document.getElementById("button")
let imageE1 = document.getElementById("dog")
imageE1.classList.add("imageSize")

buttonE1.addEventListener("click", toggleFunction)

let isImage = true

function toggleFunction(){
    if(isImage == true){
        imageE1.src = "cat.jpg"
        
    }

    else{
        imageE1.src = "dog.jpg"
    }

    isImage = !isImage
}