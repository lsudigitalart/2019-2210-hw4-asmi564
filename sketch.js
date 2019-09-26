let mouseCircle;
let circleLevel = 1;
let circle1;
let circle2;
let circle3;
let circle4;
let circle5;

function setup() {
  createCanvas(1200, 1200);

  circle1 = [random(50, 150), random(50, 550), random(50, 100)];
  circle2 = [random(300, 500), random(100, 500), random(100, 200)];
  circle3 = [random(750, 1050), random(150, 450), random(200, 300)];
  circle4 = [random(200, 400), random(800, 1000), random(300, 400)];
  circle5 = [random(850, 950), random(850, 950), random(400, 500)];
}

function draw() {
  if (circleIsOverCircle()) {
    grow();
  }

  clear();
  
  if (circleLevel == 6) background(245, 237, 30);
  else background(100, 145, 175);
  fill(255, 255, 255);
  // background circles only show if the currentCircleLevel is <=
  if (circleLevel <= 5) {
    circle(circle5[0], circle5[1], circle5[2]); //draw circle 5
  }
  if (circleLevel <= 4) {
    circle(circle4[0], circle4[1], circle4[2]); //draw circle 4
  }
  if (circleLevel <= 3) {
    circle(circle3[0], circle3[1], circle3[2]); //draw circle 3
  }
  if (circleLevel <= 2) {
    circle(circle2[0], circle2[1], circle2[2]); //draw circle 2
  }
  if (circleLevel <= 1) {
    circle(circle1[0], circle1[1], circle1[2]); //draw circle 1
  }
  noStroke();
  
  if (circleLevel == 6) {
    textSize(48);
    fill(100, 145, 175);
    circle(mouseX, mouseY, circleLevel * 110);
    fill(245, 237, 30);
    text('You Win!', mouseX - 90, mouseY);
  } else {
    fill(245, 237, 30);
      circle(mouseX, mouseY, circleLevel * 110);
  }
}


// check is mouseCircle position is 
// over next level circle
function circleIsOverCircle() {
  if (circleLevel == 1) {
    if (dist(circle1[0], circle1[1], mouseX, mouseY) < circle1[2]) {
      return true;
    }
  } else if (circleLevel == 2) {
    if (dist(circle2[0], circle2[1], mouseX, mouseY) < circle2[2]) {
      return true;
    }
  } else if (circleLevel == 3) {
    if (dist(circle3[0], circle3[1], mouseX, mouseY) < circle3[2]) {
      return true;
    }
  } else if (circleLevel == 4) {
    if (dist(circle4[0], circle4[1], mouseX, mouseY) < circle4[2]) {
      return true;
    }
  } else if (circleLevel == 5) {
    if (dist(circle5[0], circle5[1], mouseX, mouseY) < circle5[2]) {
      return true;
    }
  }
  return false;
}

function grow() {
  circleLevel += 1;
}

function mouseClicked() {
  circleLevel = 1;
  
  circle1 = [random(50, 150), random(50, 550), random(100)];
  circle2 = [random(300, 500), random(100, 500), random(100, 200)];
  circle3 = [random(750, 1050), random(150, 450), random(200, 300)];
  circle4 = [random(200, 400), random(800, 1000), random(300, 400)];
  circle5 = [random(850, 950), random(850, 950), random(400, 500)];
}