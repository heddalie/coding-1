function setup(){
	createCanvas(800, 300);
	textAlign(CENTER, CENTER);
}

function draw() {
	background(220);
	fill(237, 34, 93);
	textSize(48);
  
  if(mouseX < 100) {
	text('FIRST C. TRUE', width/2, height/2);
} else if (mouseX > 700) {
	text('SECOND C. TRUE', width/2, height/2);
  } else if (mouseX == 400) {
    fill(37, 83, 56)
    textSize(400);
	text('nice', width/2, height/2);
} else {
	fill(23, 34, 93);
	textSize(60);
	text('FALSE', width/2,height/2);
}
}