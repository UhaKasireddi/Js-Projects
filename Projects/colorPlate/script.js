const colorInput = document.getElementById('colorInput');
const addColorButton = document.getElementById('addColor');
const colorPalette = document.getElementById('colorPalette');


addColorButton.addEventListener('click', addColor);


function addColor() {
    const colorValue = colorInput.value;
    //console.log(colorValue)


    if (colorValue) {
        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = colorValue;
        colorBox.classList.add('color-box');
        colorPalette.appendChild(colorBox);
    }
}


