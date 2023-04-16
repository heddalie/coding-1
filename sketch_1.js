let objectHeight = 200;
let objectWidth = 200;
let backgroundColor = changeColor

function setup() {
  createCanvas(400, 400);
}

function changingColor(newColor) {
  const elem = document.getElementById("changingColor");
  elem.style.color = newColor;
}

function draw() {
  backgroundColor(changingColor);
  
  //base
  fill("#fff");
  rect(objectHeight - 70, objectWidth - 70, 130, 130);
  
  //screen
  fill("#2d2d2d");
  rect(objectHeight - 60, objectWidth - 60, 110, 20);
  
  //white buttons
  fill("#fff");
  square(objectHeight - 60, objectWidth - 30, 20);
  square(objectHeight - 60, objectWidth, 20);
  square(objectHeight - 60, objectWidth + 30, 20);
  square(objectHeight - 30, objectWidth + 30, 20);
  square(objectHeight - 30, objectWidth, 20);
  square(objectHeight - 30, objectWidth - 30, 20);
  square(objectHeight, objectWidth + 30, 20);
  square(objectHeight, objectWidth, 20);
  square(objectHeight, objectWidth - 30, 20);
  
  //black buttons
  fill("#000");
    square(objectHeight + 30, objectWidth + 30, 20);
    square(objectHeight + 30, objectWidth, 20);
    square(objectHeight + 30, objectWidth - 30, 20);
}
