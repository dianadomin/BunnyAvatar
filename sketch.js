let angleEye = 10;
let mic;
let angleEar = 0;
let x = 500;
let y = 50;
let snow1;
let snow2;
let snow3;
let snow4;
let snow5;
let snow6;


function setup() {
  createCanvas(400, 400);
  background(230, 230, 230);
  angleMode(DEGREES);

  mic = new p5.AudioIn()
  mic.start();

  snow1 = new Snow(280, 54, -20, 0.20);
  snow2 = new Snow(250, 270, 10, 0.20);
  snow3 = new Snow(140, 40, -5, 0.15);
  snow4 = new Snow(125, 275, 10, 0.15);
  snow5 = new Snow(30, 275, 10, 0.15);
  snow6 = new Snow(20, 275, 15, 0.15)


}

function draw() {
  //console.log("mic level" + mic.getLevel()); //shows microphone level

  micLevel = mic.getLevel();
  angleEye = map(mic.getLevel(), 0, 50, 356, 0);

  //console.log("mouse x is:"+ mouseX);//Shows what the mouse values are 
  //console.log("mouse y is:"+ mouseY);


  background(230, 230, 230);
  angleMode(DEGREES);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();


  snow1.move();
  snow2.move();
  snow3.move();
  snow4.move();
  snow5.move();

  drawCloud1();
  drawTail(-10, -10, -2); //xPos,yPos, Angle Rotation
  drawBackLeg();
  drawFrontLeg();
  drawBackEar(angleEar);
  drawBunnyBody();
  //bunnyBody(200, 200, width *.6, height *.5);
  drawEye(micLevel * 100);
  drawPupil(angleEye);
  drawForwardEar(angleEar);
}

function mousePressed() {
  //if the position of the mouse is inside this region then do this
  //syntax statement is

  if (mouseX > width * 0.1 && mouseX < width * 0.8 && mouseY > height * 0.15 && mouseY < height * 0.65) {
    console.log("mouse beep in here");
    angleEar = 4;

  }
}

function mouseReleased() {
  angleEar = 0;
}

function drawTail(xPos, yPos, rotation) {
  //Tail
  push();
  stroke(255, 255, 255)
  rotate(rotation);
  fill(255, 255, 255);
  circle(50, 240, 75);
  pop();
}

function drawBackLeg() {
  //Back leg
  fill(218, 204, 235);
  rect(90, 250, 50, 70);
}

function drawFrontLeg() {
  //Front leg
  fill(218, 204, 235);
  rect(250, 250, 50, 70);
}

function drawBackEar(rotation) {
  //back Ear
  push();
  fill(218, 204, 235);
  rotate(rotation);
  beginShape();
  vertex(width * 0.5, height * 0.4);
  vertex(width * 0.6, height * 0.3);
  vertex(width * 0.2, height * 0.1);
  endShape(CLOSE);
  pop();


}

function drawBunnyBody(xPos, yPos, rotation) {
  //Main Bunny Body Shape 
  //push();
  fill(218, 204, 235);
  stroke(255, 255, 255);
  ellipseMode(CENTER);
  ellipse(200, 200, width * 0.6, height * 0.5);
  //pop();
}

function drawEye() {
  //Eye
  fill(254, 254, 255);
  circle(280, 190, 50);
}

function drawPupil(rotation) {
  //Pupil
  push();
  stroke(255, 255, 255);
  fill(1, 1, 1);
  translate (2, 2);
  rotate(rotation);
  ellipse(280, 210, 30, 30);
  ellipseMode(CENTER);
  pop();
}

function drawForwardEar(rotation) {
  //Foward Ear
  push();
  stroke(255, 255, 255);
  fill(218, 204, 235);
  rotate(rotation);
  beginShape();
  vertex(width * 0.4, height * 0.4);
  vertex(width * 0.5, height * 0.3);
  vertex(width * 0.1, height * 0.1);
  endShape(CLOSE);
  pop();
}

function drawCloud1() {
  stroke(222, 233, 255);
  fill(130, 151, 158);
  ellipse(x, y, 200, 90);
  x -= 1;
  y += 0;
}