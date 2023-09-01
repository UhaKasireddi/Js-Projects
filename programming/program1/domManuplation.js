let containerElement= document.getElementById("container");

let headingElement=document.createElement("h1") //<h1></h1>

headingElement.textContent= "Welcome to Dom Manipulations"

containerElement.appendChild(headingElement)

let paraElement = document.createElement("p")

paraElement.textContent = "DOM stands for Document Object Model"

containerElement.appendChild(paraElement)

