console.log("weather.jk is live!");
class Snow {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation
    this.size = _size
  }

  display() {
    // Snowball

    push();
    fill(255, 255, 255);
    stroke(217);
    strokeWeight(10);
    translate(this.xPos, this.yPos);
    rotate(this.rotation);

    //scaling&Size
    scale(this.size);
    circle(20, 20, 150);
    pop();
  }

  move() {
    //this.angle++ is for this.rotation = this.rotation + 1;

    this.rotation++;

    if (this.yPos <= height * 1.0) {
      this.yPos += 5;
    } else {
      this.yPos = 0;
    }
    if (this.xPos <= width * 1.0) {
      this.xPos += 1;
    } else {
      this.xPos = 0;
    }
  }
}