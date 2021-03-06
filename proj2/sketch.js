/*
A cute system of planets free-floating in the universe complemented by 
space ripples and a big green ring. Synced to the first 30 seconds of 
Mariana by Childs
*/

//initialize planet objects

var Sun = {
  r: 255,
  g: 153,
  b: 51,
  size: 50,
  dist: 0
};
var Mercury = {
  r: 128,
  g: 128,
  b: 128,
  size: 2,
  dist: 47
};
var Venus = {
  r: 204,
  g: 102,
  b: 0,
  size: 5,
  dist: 49
};
var Earth = {
  r: 0,
  g: 108,
  b: 204,
  size: 4,
  dist: 68
};
var Mars = {
  r: 102,
  g: 51,
  b: 0,
  size: 3,
  dist: 80
};
var Saturn = {
  r: 102,
  g: 102,
  b: 0,
  size: 8,
  dist: 100
};
var Jupiter = {
  r: 204,
  g: 102,
  b: 0,
  size: 5,
  dist: 150
};
var Uranus = {
  r: 0,
  g: 153,
  b: 153,
  size: 4,
  dist: 170
};
var Neptune = {
  r: 0,
  g: 0,
  b: 153,
  size: 4,
  dist: 185
};
//declare array of planet objects
var ss = [Sun, Mercury, Venus, Earth, Mars, Saturn, Jupiter, Uranus, Neptune];
var analyzer; //amp
var fft; //freq
var r = 255,
  g = 245,
  b = 245;
var arr = new Array(10); //declare array of ripples 

for (var ct = 0; ct < arr.length; ct++) { //initialize ripple sizes to zero
  arr[ct] = 0;
}

function preload() {
  song = loadSound('Mariana.mp3');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fft = new p5.FFT();
  fft.setInput(song);
  background('white');
}

function setOrbit() {
  push()
  noStroke();
  ambientLight(100);
  directionalLight(mouseX, mouseY, 0, 0.5, 0, 0, 0.5); //mouse controls light direction
  var rms = analyzer.getLevel();
  /*
  for each planet object, set its distance from the origin, and sync its size to the amp
  */
  for (var i = 0; i < ss.length; i++) { 
    ambientMaterial(ss[i].r, ss[i].g, ss[i].b, 100);
    translate(ss[i].dist / 2, ss[i].dist, 0);
    rotateZ(frameCount * 0.001);
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.001);
    sphere(ss[i].size + rms * ((180 - ss[i].dist) / 2));
  }
  pop()
}

function setBackground() {
  push()
  for (var j = -295; j <= 300; j += 95) { //draw little dots in the background
    for (var k = -295; k <= 300; k += 95) {
      if (j != -10 || k != -10) {
        fill(r, g, b);
        ellipse(j, k, 5, 5);
      }
    }
  }
  var spectrum = fft.analyze() // get amp
  if (spectrum[0] != 0 && g > 150 && b > 200) {
    g += random(-spectrum[0] / 10, spectrum[0] / 20); //change dot color when not quiet
    b += random(-spectrum[0] / 10, spectrum[0] / 20);
  } else {
    g = 255; //if quiet (freq = 0), show no dots
    b = 255;
  }
  pop();
}


function torus_() {
  push();
  noStroke();
  ambientLight(100);
  directionalLight(mouseX, mouseY, 0, 0, 0, 0, 0.5);
  fill(0, 43, 34, 70);
  var rms = analyzer.getLevel(); //get amp
  translate(0, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(150 + rms * 100, 5); //sync ring size to amp
  pop();
}


function rip1() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[0] + 150, 2);
  arr[0] += 20;
  pop();
}

function rip2() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[1] + 150, 2);
  arr[1] += 20;
  pop();
}

function rip3() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[2] + 150, 2);
  arr[2] += 20;
  pop();
}

function rip4() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[3] + 150, 2);
  arr[3] += 20;
  pop();
}

function rip5() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[4] + 150, 2);
  arr[4] += 20;
  pop();
}

function rip6() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[5] + 150, 2);
  arr[5] += 20;
  pop();
}

function rip7() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[6] + 150, 2);
  arr[6] += 20;
  pop();
}

function rip8() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[7] + 150, 2);
  arr[7] += 20;
  pop();
}

function rip9() {
  push()
  stroke(0, 0, 102);
  translate(0, 0, 0);
  torus(arr[8] + 150, 2);
  arr[8] += 20;
  pop();
}

function draw() {
  orbitControl(); //move controls plane
  setOrbit(); //planets
  torus_(); //ring
  if (millis() > 2600) {
    rip1();
  }
  if (millis() > 6375) {
    rip2();
  }
  if (millis() > 6700) {
    rip9();
  }
  if (millis() > 10750) {
    rip3();
  }
  if (millis() > 11550) {
    rip4();
  }
  if (millis() > 14700) {
    rip5();
  }
  if (millis() > 15300) {
    rip6();
  }
  if (millis() > 15700) {
    rip7();
  }
  if (millis() > 16000) {
    rip8();
    setBackground(); //after percussion comes in
  }
}
