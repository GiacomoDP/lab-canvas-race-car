
let startScreen = document.querySelector('.game-intro');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const bg = new Image();
bg.src = '../images/road.png'
const car = new Image();
car.src = '../images/car.png'

let carGoingLeft = false;
let carGoingRight = false;
let carX = 210;
let carY = 620;
let carWidth = 80;
let carHeight = 80;
let carSpeedValue = 3;
let carDirectionX = carSpeedValue;
let carDirectiony = carSpeedValue;

let isCarGoingLeft = false;
let isCarGoingRight = false;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

function draw () {
ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
ctx.drawImage(car, carX, carY, carWidth, carHeight)
if (isCarGoingLeft) {
  if (carX > 0) {
  carX -= carSpeedValue;
  }
} else if (isCarGoingRight) {
  if (carX< canvas.width - carWidth) {
    carX += carSpeedValue;
  
  }
}
//if (carGoingLeft) {
  //if (paddleX > 0) {
    //paddleX -= paddleSpeedValue;
  //}
//} else if (isPaddleGoingRight) {
  //if (paddleX < canvas.width - paddleWidth) {
    //paddleX += paddleSpeedValue;
  //}
//}
}
function startGame () {
  canvas.style.display = 'block'
  
draw()
}







