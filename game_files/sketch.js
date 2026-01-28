// variables
let terrain = []; 
let tileSize = 20;
let width, height;
let scale = 0.05;
let terrainSeed = 0;


function setup() {
  // Get seed from URL parameters
  let params = new URLSearchParams(window.location.search);
  terrainSeed = params.get('seed') ? parseInt(params.get('seed')) : Math.floor(Math.random() * 1000000);
  
  // Set seeds for reproducible terrain
  randomSeed(terrainSeed);
  noiseSeed(terrainSeed);
  
  frameRate(15);
  setSeed();
  createCanvas(WIDTH, HEIGHT);
  width = canvas.width / tileSize;
  height = canvas.height / tileSize;
  generateTerrain();
}

function generateTerrain() { // generate terrain using Perlin noise
  for (let x = 0; x < width; x++) {
    terrain[x] = [];
    for (let y = 0; y < height; y++) {
      let noiseValue = noise(x * scale, y * scale);
      terrain[x][y] = noiseValue;
    }
  }

}

function preload() {
  img = loadImage('./background.png');
}



function draw() {
  image(img, WIDTH, HEIGHT);
}