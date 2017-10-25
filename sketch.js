var x = 200
var y = 100
var x1 = 300
var y1 = 500
var x2 = 400
var y2 = 350
var x3 = 500
var y3 = 250
var speed = 3 
var ySpeed = 3
var x1Speed = 4
var y1Speed = 4
var x2Speed = 5
var y2Speed = 5
var x3Speed = 6
var y3Speed = 6
function setup() {
  createCanvas (1200, 800);

  
}

function draw() {
   noStroke();
   
  background (144, 241,255);
  fill (68, 209, 168);
    rect (450, 300, 300, 200);
    
  fill (91, 68, 209);
  ellipse (x, y, 50, 50);
  fill (245, 178, 86);
  ellipse (x1, y1, 50, 50);
  fill (120, 209, 68);
  ellipse (x2, y2, 50, 50);
  fill (176, 129, 245);
  ellipse (x3, y3, 50, 50);
  
  
  
  if (x > width) {
   speed = -3;
  }
  
  if (x < 0) {
    speed = 3;
  }
  
  if (y > height) {
    ySpeed = -3;
  }
  
  if ( y < 0) {
    ySpeed = 3;
  }
  
  if (x1 > width) {
   x1Speed = -4;
  }
  
  if (x1 < 0) {
    x1Speed = 4;
  }
  
  if (y1 > height) {
    y1Speed = -4;
  }
  
  if ( y1 < 0) {
    y1Speed = 4;
  }
  
  if (x2 > width) {
   x2Speed = -5;
  }
  
  if (x2 < 0) {
    x2Speed = 5;
  }
  
  if (y2 > height) {
    y2Speed = -5;
  }
  
  if ( y2 < 0) {
    y2Speed = 5;
  }
  
  if (x3 > width) {
   x3Speed = -6;
  }
  
  if (x3 < 0) {
    x3Speed = 6;
  }
  
  if (y3 > height) {
    y3Speed = -6;
  }
  
  if ( y3 < 0) {
    y3Speed = 6;
  }
  
  x = x + speed;
  
  y = y + ySpeed;
  
  x1 = x1 + x1Speed;
  
  y1 = y1 + y1Speed;
  
  x2 = x2 + x2Speed;
  
  y2 = y2 + y2Speed;
  
  x3 = x3 + x3Speed;
  
  y3 = y3 + y3Speed;
  
  //submarine
  
  fill(255, 255, 101);
  rect (40, 38, 1, 30);
  rect (40, 38, 5, 1);
  ellipse (40, 52, 40, 10);
  ellipse (12.5, 55, 10, 10);
  ellipse (12.5, 65, 10, 10);
  ellipse (40, 52, 40, 10);
  ellipse (40, 60, 60, 20);
  ellipse (10, 60, 10, 0.5);
  
  fill (255);
  ellipse (45, 38.5, 1, 2);
  
  fill (176, 219, 245);
  ellipse (25, 57, 5, 5);
  ellipse (37.5, 57, 5, 5);
  ellipse (50, 57, 5, 5);
  ellipse (66.4, 60, 8, 8);
  

  
 if (mouseIsPressed) {
   fill (222, 99, 86);
   ellipse (25, 57, 5, 5);
  ellipse (37.5, 57, 5, 5);
  ellipse (50, 57, 5, 5);
  ellipse (66.4, 60, 8, 8);
  ellipse (45, 38.5, 1, 2);
  ellipse (a, b, 100, 100);
 }
  
 
a = mouseX
b = mouseY
}