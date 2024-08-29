function setup() {
  createCanvas(400, 400);
  background("#071D97");
}

function draw() {
  fill("#00BCD4");
  stroke("white")
if(mouseIsPressed) { rect(mouseX, mouseY, 20, 20);}
}
