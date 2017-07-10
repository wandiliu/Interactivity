//bool flag handles transitions
var stopIntro = false;

//colors
var babyblue = '#F4FBFF'
var teal = '#67DBF0'
var lakeblue = '#AAA9E3'
var w = 'white'
var salmon = '#FF9F9F'
var c;

//background setting
var bg = w


//text setting
var clear_key = "Press 'C' to clear screen"
var save_key = "Press 'S' to save drawing"
var btn_txt = "See Reflection"
var b_btn = "Hold 'B' for bold"
var e_btn = "Hold 'E' for ellipse"
var r_btn = "Hold 'R' for square"

function setup() {
	createCanvas(600, 600);
  textFont('Verdana');
  background(bg); //background color
 	h = hour()
}

//intro_text
function intro() {
  fill(lakeblue)
  stroke(lakeblue)
  if(millis() > 2000) {
  textSize(17);
  textAlign(CENTER);
  text("Press your cursor to begin.", 300, 280);
  textAlign(LEFT);
  textSize(17);
  text(clear_key, 50, 310);
  text(save_key, 340, 310);
  }
  textAlign(CENTER);
  textSize(32);
  text("Welcome.\n", 300, 250);
} 

//intro special effects
function draw_ripple() {
  noStroke();
  if(millis() > 1300) {
 	fill('#FFDCD8');
  ellipse(300, 600, 500, 500);
  }
    if(millis() > 1000){
  fill('#F1AFBD');
  ellipse(300, 600, 400, 400);
  }
    if(millis() > 700){
  fill('#D597D6');
  ellipse(300, 600, 300, 300);
  }
  	if(millis() > 300){
  fill('#A7AAE1');
  ellipse(300, 600, 200, 200);
  }
  
  if(millis() > 200) {
    fill('#A091D6');
  ellipse(300, 600, 100, 100);
  }
  
} 

function getLighting() {
  var i = hour(); //h:{1-24}
  colorMode(HSB);  // Try changing to HSB.
  var twilight = color(332, 67, 84);
	var dawn = color(300, 12, 97);
  var sunset = color (12, 55, 97);
  var dusk = color(0, 100, 25);
  var midday = color (198, 35, 100);
  var midnight = '#00283C';
    if(i>21 || i<5) c = midnight
    else if (i>4 && i <10) c = lerpColor(dawn, twilight, (8-i)/4);
    else if (i>9 && i<16) c = midday;
    else if (i > 15 && i < 22) c = lerpColor(dusk, sunset, (22-i)/6);
   // else c = lerpColor(sunset, midnight, (20-i)/2);
  return c;
}

function setScreen() {
 background(getLighting())
  if(h>6 && h<19) {
  fill(salmon)
  noStroke()
  ellipse(60, 60, 60, 60)
  fill('#D6F2EF');
 	quad(0, 300, 600, 300, 600, 600, 0, 600);
	fill('#EDC7EA')
  ellipse(60,600-60, 60,60);
  }
  else{
     background(getLighting())
  fill('#FFF09F')
  noStroke()
  fill('#3C2F4A');
 	quad(0, 300, 600, 300, 600, 600, 0, 600);
  for (var i = 0; i < 60; i++) {
  	var px = random(599);
  	var py = random(0, 120);
  	var r=random(2,5);
    fill('#FDFFC9')
		ellipse(px, py, r, r);
    ellipse(px, 600-py, r, r);
  }
}
    fill(getLand())
  	textAlign(LEFT);
  	textSize(20)
  	strokeWeight(30);
    ellipse(266, 43, 30, 30)
  	fill('black');
  	text('d', 260, 50);
    fill(getLand())
    text('e', 300, 50);
    text('r', 340, 50);
  	noFill();
  	stroke(getLand())
  	strokeWeight(1);
  	ellipse(306, 44, 20, 20)
  	rect(331, 31, 25, 25);
}


function mouseClicked() {
  if (stopIntro == false) {
  stopIntro = true;
  setScreen();
  }
}

function keyTyped() {
	switch(key){
    case 'c':
      setScreen();
      break;
    case 's':
      saveCanvas('OpenWaters','.png')
      break;
    default:
      strokeWeight(1);
            }}


function draw() {
 if(!stopIntro){ //before intro is stopped, draw intro
   draw_ripple();
   intro();
  }
if(stopIntro==true && mouseIsPressed && mouseInRange()){

  switch(key){
    case 'd':
      noStroke();
      fill(getLand());
  		ellipse(mouseX, mouseY, 30, 30);
  		fill(getWater())
  		ellipse(pmouseX-5, 600-pmouseY, 15, 35)
 		 break;
    case 'e':
      noFill()
      stroke(getLand());
  		ellipse(mouseX, mouseY+10, 20, 20);
  		stroke(getWater())
  		ellipse(pmouseX-15, 600-pmouseY, 10, 10)
      break;
    case 'r':
      noFill()
      stroke(getLand());
  		rect(mouseX-12, mouseY-12, 25, 25);
  		stroke(getWater())
  		rect(pmouseX-10, 600-pmouseY-15, 20, 12)
      break;
    default:
  stroke(getWater());
  line(pmouseX-5, (600-pmouseY)*1.05, mouseX+3, (600-mouseY)*1.05);
  stroke(getLand())
  noFill();
  line(pmouseX, pmouseY, mouseX, mouseY)
            }
}
}

function getLand() {
  if(h>6 && h<19) return ('#AABFCC')
  else return ('#EAEAEA')
}

function getWater() {
 	if(h>6 && h<19) return ('#88CE7B')
  else return ('#19E2BB')
}


function mouseInRange() {
 return ((mouseX < 600) && (mouseY < 300) && (mouseX > 0) && (mouseY > 0))
}
