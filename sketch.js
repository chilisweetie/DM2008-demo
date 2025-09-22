let radiusA = 20;
let radiusB = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let d = dist(mouseX, mouseY, 200,200);
  
  if (d < radiusA + radiusB){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(200,200,radiusA *2);
  ellipse(mouseX,mouseY,radiusB *2);
}
