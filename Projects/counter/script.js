let valueC1 = document.getElementById("valueSpan");
let buttonIncrease = document.getElementById("buttonIncrease");
let buttonDecrease = document.getElementById("buttonDecrease");
let buttonReset = document.getElementById("buttonReset");

buttonReset.addEventListener('click', reset);
buttonIncrease.addEventListener('click', increase);
buttonDecrease.addEventListener('click', decrease);

function reset() {
    valueC1.textContent = 0;
    updateColor();
}

function increase() {
    let v1 = parseInt(valueC1.textContent) + 1;
    valueC1.textContent = v1;
    updateColor();
}

function decrease() {
    let v1 = parseInt(valueC1.textContent) - 1;
    valueC1.textContent = v1;
    updateColor();
}

function updateColor() {
    let v1 = parseInt(valueC1.textContent);
    valueC1.classList.remove("color1", "color2", "color3");

    if (v1 === 0) {
        valueC1.classList.add("color1");
    } else if (v1 > 0) {
        valueC1.classList.add("color2");
    } else if (v1 < 0) {
        valueC1.classList.add("color3");
    }
}
