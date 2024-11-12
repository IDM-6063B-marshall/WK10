// TODO: add other files
// TODO: add sound to exercise 1

// need to add a script library to index to be able to use sound (see line 5 in this sketch's index)

let bloops = [];

function preload() {
  bloops.push(loadSound("../assets/bloop-0.mp3"));
  bloops.push(loadSound("../assets/bloop-1.mp3"));
  bloops.push(loadSound("../assets/bloop-2.mp3"));
  bloops.push(loadSound("../assets/bloop-3.mp3"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 20, 120);
}

function mouseClicked() {
  mBloop = random(bloops);
  mBloop.play();
}
