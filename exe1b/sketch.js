// Bill is a little bird with a unique sense of style
// who wears a waffle cone as a hat. He is upset that nobody takes him 
// seriously. But let's face it, he looks like a cross between
// a construction worker and an upside-down mermaid.

function setup() { 
  createCanvas(600, 600);
  background('#f26650'); //this is a good color for the angry bird
  //also makes the bird look like a yield sign/traffic cone
} 

//triangular face with cheeks 
function face() {
  noFill();
  stroke('white'); strokeWeight(10);
  var face = triangle(300, 100, 100, 500, 500, 500);
  var cheekl = ellipse(150, 400, 50, 10);
  var cheek2 = ellipse(450, 400, 50, 10);
}

//bird beak
function mouth() {
  fill('white');
 var mouth = ellipse(300, 420, 120, 40);
  stroke('#f26650');
	var teeth1 = line(250, 420, 350, 420); 
}

//angry = upward curve
function eyes() {
 stroke('white');
  noFill();
 var eyer = arc(420, 300, 200, 150, PI/3, PI/2, OPEN);
  var eyel = arc(180, 300, 200, 150, PI/2, 2*PI/3, OPEN);
}

//waffle cone
function hair() {
   stroke('white');
  noFill();
 var main = arc(300, 100, 400, 400,  PI/3,2*PI/3, OPEN);
	var h1 = line(285, 140, 350, 290);
  var h2 = line (265,170, 310, 300);
  var h3 = line(245, 220, 265, 290);
  var w1 = line (315, 140, 240, 286);
  var w2 = line (335, 170, 270, 295);
  var w3 = line (350, 210, 300, 295);
  var w4 = line (370, 240, 340, 295);
}

function draw() { 
  face();
  mouth();
  eyes();
  hair();
}