var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var radius = 10;
var dragging = false;

context.lineWidth = radius*2;

var putPoint = function(e){

  if (dragging){
    // creating a line connecting all the dots

    context.lineTo(e.clientX, e.clientY);
    context.stroke();

    // 0 radians --> rightmost angle of the circle

    context.beginPath();
    // context.arc(x, y, radius, startAngle, endAngle, [antiClockwise]);

    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
    context.fill();

    // creating a path at the end, after drawing the circle
    context.beginPath();

    // move to current mouse position
    context.moveTo(e.clientX, e.clientY);
  }

};

var engage = function(e) {
  dragging = true;
  putPoint(e);
};

var disengage = function() {
  dragging = false;
  context.beginPath();
};

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);
