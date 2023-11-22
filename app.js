const grid = document.querySelector('.grid');
const clearbtn = document.querySelector('.clearbtn');
const form = document.querySelector('.resizeform')

function createGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add("pixel")
        // let pixels = grid.querySelectorAll('div');
        // pixels.forEach((div) => div.remove());
        pixel.style.backgroundColor = '#000';
        pixelHeight = 700 / size;
        pixel.style.height = `${pixelHeight}px`;
        grid.appendChild(pixel);
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = '#fff';
        })
    }
}

clearbtn.addEventListener('click', () => {
    let pixels = grid.querySelectorAll('div');
    pixels.forEach((div) => div.style.backgroundColor = '#000')
})

createGrid(16);
