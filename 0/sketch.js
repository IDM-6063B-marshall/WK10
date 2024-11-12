// TODO: add color and mouseover
//       classify it
//in other programming languages they use "my" or "self" but here it's "this"
//this code is now encapsulated in a class and in fact the class code
//could even go in its own file. easy to google this 

let blinks = [];

class Blinky {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visible = false;
    this.period = random(100, 1000);
    this.changed = 0;
    this.diam = 50;
    this.mocolor = color(0, 0, 0);
  }
  update() {
    //copied from draw but changed mBlink to this bc its inside this class
    if (millis() - this.changed > this.period) {
      this.visible = !this.visible;
      this.changed = millis();
    }
    this.mouseOver = dist(mouseX, mouseY, this.x, this.y) < this.diam / 2;
  }
  draw() {
    if (this.visible || this.mouseOver) {
      if (this.mouseOver) {
        fill(this.mocolor);
      } else {
        fill(255);
      }
      ellipse(this.x, this.y, this.diam);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < blinks.length; idx++) {
    let mBlink = blinks[idx];
    mBlink.update();
    mBlink.draw();
  }
}

function mousePressed() {
  blinks.push(new Blinky(mouseX, mouseY)); //pass mousex and mousey through Blinky every time I click
}
