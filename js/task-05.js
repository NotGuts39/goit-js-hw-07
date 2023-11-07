function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');


button.addEventListener('click', el => {

 
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  span.style.color = randomColor;
  span.style.backgroundColor = randomColor;




  
  
})