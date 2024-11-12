// // TODO: classify it
// //built in class in p5js => vector
// //check this code w/ Thiago's

// class Movey {
//   //to make something a class add this. change : to = and put ; at end of lines
//   constructor(x, y) {
//     this.pos = createVector(x, y);
//     this.vel = createVector(random(-10, 10), random(-10, 10));
//     this.rad = random(15, 25);
//   }

//   updateAndDraw(others) {
//     // make this receive an array "others"
//     this.pos.add(this.vel); //updates first vector by adding second vector
//     //get used to vectors as a single thing instead of something with an x and y

//     if (this.pos.x > width - this.rad || this.pos.x < 0 + this.rad) {
//       this.vel.x *= -1;
//     }

//     // we are checking when the circle hits the end of the canvas and reversing the directions

//     if (this.pos.y > height - this.rad || this.pos.y < 0 + this.rad) {
//       this.vel.y *= -1;
//     }

//     let overlap = false;
//     for (let idx = 0; idx < others.length; idx++) {
//       //for each circle look at all circles
//       let otherMovey = others[idx];
//       let dist = p5.Vector.dist(this.pos, otherMovey.pos); // give two vectors insteaf of x, y, x, y)
//       let lookingAtMyself = this.pos == otherMovey.pos;
//       overlap = dist < this.rad + otherMovey.rad && !lookingAtMyself; //this will always be true for itself so we have to exclude itself
//   if (overlap){
// break;
//   }

//   if (overlap){
//     fill (255, 0, 0)
//   } else {
//     fill (255, 255, 255)
//   }

//     }
//     ellipse(this.pos.x, this.pos.y, 2 * this.rad);
//   }
// }

// let moves = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();
// }

// function draw() {
//   background(200, 20, 120);
//   for (let idx = 0; idx < moves.length; idx++) {
//     let mMove = moves[idx];
//     mMove.updateAndDraw();
//   }
// }

// function mousePressed() {
//   moves.push(new Movey(mouseX, mouseY));
// }

// function keyPressed() {
//   moves.push(new Movey(width / 2, height / 2));
// }

// TODO: classify it

//add bloops to this..... something is hinky


class Movey {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.rad = random(15, 25);
    this.bloop = loadSound("../assets/bloop-0.mp3");
    this.bloop.playmode = ("Until Done") 
  }

  updateAndDraw(others) {
    this.pos.add(this.vel);

    if (this.pos.x > width - this.rad || this.pos.x < this.rad) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.rad || this.pos.y < this.rad) {
      this.vel.y *= -1;
    }

    let overlap = false;

    for (let idx = 0; idx < others.length; idx++) {
      let otherMovey = others[idx];
      let dist = p5.Vector.dist(this.pos, otherMovey.pos);
      let lookingAtMyself = this.pos == otherMovey.pos;

      overlap = dist < this.rad + otherMovey.rad && !lookingAtMyself;

      if (overlap) {
        break;
      }
    }

    if (overlap) {
      this.bloop.play
      fill(255, 0, 0);
      // bloopSound.play();
    } else {
      fill(255);
    }

    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let moves = [];
// let bloops = [];

// function preload() {
//   bloops.push(loadSound("../assets/bloop-0.mp3"));
//   bloops.push(loadSound("../assets/bloop-1.mp3"));
//   bloops.push(loadSound("../assets/bloop-2.mp3"));
//   bloops.push(loadSound("../assets/bloop-3.mp3"));
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < moves.length; idx++) {
    let mMove = moves[idx];
    mMove.updateAndDraw(moves);
  }
}

function mousePressed() {
  moves.push(new Movey(mouseX, mouseY));
}

function keyPressed() {
  moves.push(new Movey(width / 2, height / 2));
}
