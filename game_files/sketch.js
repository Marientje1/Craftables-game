function setup() {
  frameRate(15);
  setSeed();
  createCanvas(WIDTH, HEIGHT);

}

function preload() {
  img = loadImage('./background.png');
}

function draw() {
  image(img, WIDTH, HEIGHT);
}