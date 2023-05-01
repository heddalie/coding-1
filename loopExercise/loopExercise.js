let circleColor;

function setup(){
    createCanvas(140, 100);
    background(220);
    circleColor = color(255, 0, 0);
}

function draw(){
    for(let y = 10; y < 100; y += 20){
      for(let x = 10; x < 140; x += 20){
        let r = random(2, 8);
        circle(x, y, r);
      }
    }
    noLoop();
  }

function keyPressed(){
    if(key == 'r'){
        circleColor = color(255, 0, 0);
    } else if (key == 'g'){
        circleColor = color(0, 255, 0);
    } else if (key == 'b'){
        circleColor = color(0, 0, 255);
    }
    loop();
}

/* the code technically works, but i think there is something wrong here as the color is not changing.
i can't really figure out what's wrong here, as there is no error messages in console either. */