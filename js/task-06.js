function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('.data-create');
const buttonDestroy = document.querySelector('.data-destroy');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
let boxSize = 30;

buttonCreate.addEventListener('click', () => {

  const numberOfDivs = parseInt(input.value, 10);


  if (!isNaN(numberOfDivs) && numberOfDivs >= 1 && numberOfDivs <= 100) {

    destroyBoxes();
    createBoxes(numberOfDivs);
    input.value = '';
    boxSize = 30;
            
  }

});

function createBoxes(amount) {
  
  
  for (let i = 0; i < amount; i++) {

      const div = document.createElement('div');
    
    div.style.width = boxSize + 'px';
    div.style.height = boxSize + 'px';
    div.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.appendChild(div);

    
  }
}

function destroyBoxes() {
  
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild)
  }
}

buttonDestroy.addEventListener('click', destroyBoxes => {

  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild)
  }
    
})


