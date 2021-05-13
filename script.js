const Container = document.querySelector('#Container');
const Choosebutton = document.querySelector('#choosebtn');
const Clearbutton = document.querySelector('#clearbtn');
let Cell = []
squaresPerSide = 16;

Container.addEventListener('click', function() { togglePen() });
Choosebutton.addEventListener('click', Choosebutton);


 function Grid () {
     let cells = squaresPerSide * squaresPerSide;
     for (let i = 0; i < cells; i++) {
         Cell[i] = document.createElement('div');
         Cell[i].classList.add('cell');
         Cell[i].addEventListener('mouseover', changeColor);

         Container.appendChild(Cell[i]);
    }
} 
Grid();
function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function clearGrid() {
    const gridArray = Array.from(Container.childNodes);
    gridArray.forEach((element) => {
      Container.removeChild(element);
    });
}
clearGrid;
