const grid = document.querySelector('.grid');
const clearbtn = document.querySelector('.clearbtn');
const form = document.querySelector('.resizeform')
const DefaultColor = '#fff';

function createGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add("pixel")
        // let pixels = grid.querySelectorAll('div');
        // pixels.forEach((div) => div.remove());
        pixel.style.backgroundColor = DefaultColor;
        pixelHeight = 500 / size;
        pixel.style.height = `${pixelHeight}px`;
        grid.appendChild(pixel);
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = '#333';
        })
    }
}

clearbtn.addEventListener('click', () => {
    let pixels = grid.querySelectorAll('div');
    pixels.forEach((div) => div.style.backgroundColor = DefaultColor)
})

function resetGrid() {
    let pixels = grid.querySelectorAll('div');
    pixels.forEach((div) => div.remove());
}

function changeSize (input) {
    resetGrid();
    createGrid(input);
}

createGrid(16);
