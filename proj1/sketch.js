/*
OpenWaters is a drawing application that was inspired by the dynamic 
interactions between natural landscapes of the earth with water and 
the sky. Exiting the welcome stage, this application first generates a 
background environment that takes into account and reflects the user's 
time of day (ie. sunset, midday, twilight, and dusk). The user is 
limited to drawing on only the 'land' portion of the canvas, which 
lets the user explore interactions between his/her drawings on 
'land' and their representations in water - to show that reflections do not  
always mirror the landscape. Users are instructed with verbal 
instructions before entering the game; after entering the game, however, 
no more verbal instructions are present, and they are given 3 different
brush options through graphic representations of the brush type, as well
as which keys to hold to select the brush. 
*/

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
var begin = "Press your cursor to begin."
var clear_key = "Press 'C' to clear screen"
var save_key = "Press 'S' to save drawing"

//setup 
function setup() {
	createCanvas(600, 600);
  textFont('Verdana');
  background(bg); //background color
 	h = hour(); //demo: {5, 6, 23};
}

//load intro_text
function intro() {
	noStroke();
  fill(lakeblue)
  if(millis() > 2000) {
  textSize(17);
  textAlign(CENTER);
  text(begin, 300, 280);
  textAlign(LEFT);
  textSize(17);
  text(clear_key, 50, 310);
  text(save_key, 340, 310);
  }
  textAlign(CENTER);
  textSize(32);
  text("Welcome.\n", 300, 250);
  
} 

//load intro special effects
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

//return color for background according to time of day
function getLighting() {
  var i = h; //h:{1-24}
  colorMode(HSB);  // Try changing to HSB.
  var twilight = color(332, 67, 84);
	var dawn = color(300, 12, 97);
  var sunset = color (12, 55, 97);
  var dusk = color(0, 100, 25);
  var midday = '#D1F1FF'
  var midnight = '#00283C';
    if(i>21 || i<5) c = midnight
    else if (i>4 && i <8) c = lerpColor(dawn, twilight, (8-i)/4);
    else if (i>7 && i<16) c = midday;
    else if (i > 15 && i < 22) c = lerpColor(dusk, sunset, (22-i)/6);
   // else c = lerpColor(sunset, midnight, (20-i)/2);
  return c;
}

//return brush color according to time of day
function getStroke() {
  var i = h; //h:{1-24}
  colorMode(HSB);  // Try changing to HSB.
  var twilight = color(38, 20, 100);
	var dawn = color(156, 6, 51);
  var sunset = color (58, 47, 97);
  var dusk = color(42, 36, 100);
  var midday = '#66B0EF';
  var midnight = '#FFFCAF';
    if(i<5) c = midnight
    else if (i>4 && i <9) c = twilight;
    else if (i>8 && i<16) c = midday;
    else {c = sunset;}
  //  else if (i > 1 && i < 22) c = lerpColor(dusk, sunset, (22-i)/6);
   // else c = lerpColor(sunset, midnight, (20-i)/2);
    return c;
}

//sets/resets canvas according to time of day
function setScreen() {
 background(getLighting())
  if(h>5 && h<20) { //if time is during the day
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
  //display palette options
    fill(getStroke())
  	textAlign(LEFT);
  	textSize(20)
  	strokeWeight(30);
    ellipse(266, 43, 30, 30)
  	fill(getLighting());
  	text('d', 259, 50); //'D'
    fill(getStroke())
    text('e', 300, 50); //'E'
    text('r', 340, 50); //'R'
  	noFill();
  	stroke(getStroke())
  	strokeWeight(1);
  	ellipse(306, 44, 20, 20)
  	rect(331, 31, 25, 25);
}

//clickHandler for intro
function mouseClicked() {
  if (stopIntro == false) {
  stopIntro = true;
  setScreen();
  }
}

//eventHandler for clearing and saving
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

//returns brush color in water according to time of day
function getWater() {
 	if(h>6 && h<19) return ('#88CE7B')
  else return ('#19E2BB')
}

//checks if the mouse is in the available drawing area
function mouseInRange() {
 return ((mouseX < 600) && (mouseY < 300) && (mouseX > 0) && (mouseY > 0))
}

//loads intro screen and drawing options
function draw() {
 if(!stopIntro){ //before intro is stopped, draw intro
   draw_ripple();
   intro();
  }
	if(stopIntro==true && mouseIsPressed && mouseInRange()){
  switch(key){
    case 'd': //dense line
      noStroke();
      fill(getStroke());
  		ellipse(mouseX, mouseY, 30, 30);
  		fill(getWater())
  		ellipse(pmouseX-5, 600-pmouseY, 15, 35)
 		 break;
    case 'e': //ellipses stroke
      noFill()
      stroke(getStroke());
  		ellipse(mouseX, mouseY+10, 20, 20);
  		stroke(getWater())
  		ellipse(pmouseX-15, 600-pmouseY, 10, 10)
      break;
    case 'r': //square stroke
      noFill()
      stroke(getStroke());
  		rect(mouseX-12, mouseY-12, 25, 25);
  		stroke(getWater())
  		rect(pmouseX-10, 600-pmouseY-15, 20, 12)
      break;
    default: //thin line
  		stroke(getWater());
  		line(pmouseX-5, (600-pmouseY)*1.05, mouseX+3, (600-mouseY)*1.05);
  		stroke(getStroke())
 		 	noFill();
  		line(pmouseX, pmouseY, mouseX, mouseY)
  }
}
}


