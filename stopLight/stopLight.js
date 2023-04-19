function setup(){
	createCanvas(800, 300);
}

function draw() {
	background(220);
	fill(0,0,0);
    rect(350, 50, 100, 200)
    fill(192,192,192)
    circle(400, 90, 50);
    circle(400, 150, 50);
    circle(400, 210, 50);
  
  if(mouseX < 100) {
    fill(255,0,0)
	circle(400, 90, 50);
} else if (mouseX < 700) {
    fill(255,255,0)
	circle(400, 150, 50);
} else {
	fill(0,255,0);
	circle(400, 210, 50);
}
}