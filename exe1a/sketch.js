function setup() { 
  createCanvas(100, 100);
  background('#2ecc71')

} 


function draw_stem() {
  strokeWeight(3);
  stroke('white');
  var stem_white = line (40, 40, 80,80);
  stroke('#2ecc71');
  var stem1 = line(32, 32, 71, 72);
  var stem2 = line(50, 50, 30, 47);
  var stem3 = line(50, 50, 48, 30);
  var stem4 = line(62, 62, 34, 60);
  var stem5 = line(62, 62, 62, 35);
  var stem6 = line();
}

function draw_body() {
  noStroke();fill('white');
  //left side
  beginShape();
  curveVertex(20, 20);
  curveVertex(20, 20);
  curveVertex(22, 30);
  curveVertex(30, 70);
  curveVertex(75,75);
  curveVertex(70,70);
  endShape();
  //right side
  beginShape();
  curveVertex(20, 20);
  curveVertex(20, 20);
  curveVertex(30, 22);
  curveVertex(70, 30);
  curveVertex(75,75);
  curveVertex(70,70);
  endShape();
  //cover the bottom to make it less pointy
  fill('#2ecc71');
  var block = triangle(65, 78, 75, 70, 80,80); 
  
}


function draw() { 
  
  draw_body();
  //call stem last (on top of body)
  draw_stem();

}