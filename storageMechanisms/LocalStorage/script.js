localStorage.setItem("name", "Uha")
localStorage.setItem("gender", "Female")
localStorage.setItem("role", "reactJs")

let a = localStorage.getItem("role")
localStorage.removeItem("gender")
console.log(a)
localStorage.clear()