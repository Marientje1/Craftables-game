// variables
let terrain = []; 
let tileSize = 20;
let width, height;
let scale = 0.05;
let terrainSeed = 0;
let WIDTH, HEIGHT;


function setup() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  canvas = createCanvas(WIDTH, HEIGHT);
  // fetch seed from url
  let params = new URLSearchParams(window.location.search);
  terrainSeed = params.get('seed') ? parseInt(params.get('seed')) : Math.floor(Math.random() * 1000000);
  
  // set random and noise seeds
  
  width = canvas.width / tileSize;
  height = canvas.height / tileSize;
  generateTerrain();
  frameRate(15);
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

function draw() {
  background(135, 206, 235); // Sky blue
  noStroke();
  
  // Draw terrain
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (terrain[x] && terrain[x][y] !== undefined) {
        let val = terrain[x][y];
        if (val > 0.6) {
          fill(100, 100, 100); // Stone
        } else if (val > 0.3) {
          fill(139, 90, 43); // Dirt
        } else {
          fill(34, 139, 34); // Grass
        }
        rect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}

function windowResized() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  resizeCanvas(WIDTH, HEIGHT);
  width = canvas.width / tileSize;
  height = canvas.height / tileSize;
}