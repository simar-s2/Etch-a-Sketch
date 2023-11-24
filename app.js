// HTML elements selction and variables
const grid = document.querySelector('.grid');
const clearbtn = document.querySelector('.clearbtn');
const form = document.querySelector('.resizeform');
const colorbtn = document.querySelector('.colorbtn')
const rainbowbtn = document.querySelector('.rainbowbtn');
const DefaultColor = '#fff';
let mode = 'default';

// funciton to create grid
function createGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = DefaultColor;
        pixelHeight = 500 / size;
        pixel.style.height = `${pixelHeight}px`;
        grid.appendChild(pixel);

        //different mode event listeners
        colorbtn.addEventListener('click', () => {
            mode = 'default';
        })
        rainbowbtn.addEventListener('click', () => {
            mode = 'rainbow';
        })

        //changing color of a pixel depending on the mode
        pixel.addEventListener('mouseover', () => {
            if(mode == 'default') {
                pixel.style.backgroundColor = '#333';
            }
            else if (mode == 'rainbow'){
                red = Math.floor(Math.random() * 256 );
                green = Math.floor(Math.random() * 256 );
                blue = Math.floor(Math.random() * 256 );
                pixel.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }
        })
    }
}

// Event listener for clear button
clearbtn.addEventListener('click', () => {
    let pixels = grid.querySelectorAll('div');
    pixels.forEach((div) => div.style.backgroundColor = DefaultColor);
})

// Function to reset the Grid
function resetGrid() {
    let pixels = grid.querySelectorAll('div');
    pixels.forEach((div) => div.remove());
}

// Function to change the size of the grid
function changeSize (input) {
    resetGrid();
    createGrid(input);
}

// Calling creategrid function for the first time
createGrid(16);

