var canvas, ctx;

const HEIGHT = 600;
const WIDTH = 800;
function initializeGame(){
  // grab canvas
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');

  debugger;
  // set start point
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}
