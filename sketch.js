let radiusA = 80;
let radiusB = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  let d = dist(mouseX, mouseY, windowWidth/2,windowHeight/2);
  
  if (d < radiusA + radiusB){
    fill(0);
  } else {
    fill(255,0,0);
  }
  ellipse(windowWidth/2,windowHeight/2,radiusA *2);
  ellipse(mouseX,mouseY,radiusB *2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if (key === "f" || key === "F"){
    let fs = fullscreen();
    fullscreen(!fs);
    }
}