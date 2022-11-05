
var n = 100;
var xPos = []; 
var yPos = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255, 218, 115); 
  strokeWeight(8); 
}

function draw() {
  background(0);
  
  xPos[n-1] = mouseX; 
  yPos[n-1] = mouseY; 
  for (var i=0; i<(n-1); i++) {

    line(xPos[i], yPos[i], xPos[i+1], yPos[i+1]); 
    xPos[i]=xPos[i+1]; 
    yPos[i]=yPos[i+1]; 
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }