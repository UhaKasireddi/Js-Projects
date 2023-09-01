let image =  document.getElementById("image")

let bulbOn = document.getElementById("bulbon")
let bulbOff = document.getElementById("bulboff")

bulbon.onclick=function(){
    image.src = "bulbOn.jpg";

}

bulboff.onclick=function(){
    image.src = "bulbOff.jpg";
}