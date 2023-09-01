let historyE1 = document.getElementById("historyE1");
let visionE1 = document.getElementById("visionE1");
let goalsE1 = document.getElementById("goalsE1");

let historyE2 = document.getElementById("historyE2");
let visionE2 = document.getElementById("visionE2");
let goalsE2 = document.getElementById("goalsE2");

historyE1.addEventListener('click', showHistory);
visionE1.addEventListener('click', showVision);
goalsE1.addEventListener('click', showGoals);

function showHistory(){
    historyE2.classList.add("d-block");
    visionE2.classList.remove("d-block");
    goalsE2.classList.remove("d-block");
}

function showVision(){
    historyE2.classList.remove("d-block");
    visionE2.classList.add("d-block");
    goalsE2.classList.remove("d-block");
}

function showGoals(){
    historyE2.classList.remove("d-block");
    visionE2.classList.remove("d-block");
    goalsE2.classList.add("d-block");
}




 