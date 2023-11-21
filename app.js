const grid = document.querySelector('.grid');
const clearbtn = document.querySelector('.clearbtn');
let size = 16;

function clearGrid (size) {

    grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
    grid.style.gridTemplateRows = `repeat(16, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = '#000000';
        pixelHeight = 700 / size;
        pixel.style.height = `${pixelHeight}px`
        grid.appendChild(pixel);
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = '#ffffff'
        })
    }
}

clearGrid(size);
