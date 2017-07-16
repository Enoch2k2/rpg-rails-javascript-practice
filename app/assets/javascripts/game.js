var canvas, ctx, startMenuFlag;

const HEIGHT = 600;
const WIDTH = 800;

function initializeGame(){
  // create canvas
  canvas = document.createElement('canvas');
  canvas.style.display = "block";
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.marginLeft = "auto";
  canvas.style.marginRight = "auto";
  debugger;
  // display canvas
  game = document.querySelector('.game');
  game.appendChild(canvas);
  ctx = canvas.getContext('2d');

  // set canvas start style
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // create menu for starting out
  TitleScreen();
}

function TitleScreen(){
  ctx.fillStyle = "white";
  ctx.font="24px Arial";
  ctx.fillText("New Game", (WIDTH/2 - 60),(HEIGHT/2 - 50));
}
