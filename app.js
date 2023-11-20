let grid = document.querySelector('.grid');
let clearbtn = document.querySelector('.clearbtn');

grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
grid.style.gridTemplateRows = `repeat(16, 1fr)`;

for (let i = 0; i < 256; i++) {
    let pixel = document.createElement('div');
    pixel.style.backgroundColor = '#000000';
    grid.appendChild(pixel);
}
