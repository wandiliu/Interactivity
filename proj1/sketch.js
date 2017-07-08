/*
initial state: setup background & variables
*/

//bool flag handles transitions
var stopIntro = false;
var buttonPressed = false;
var canDraw = false;

//colors
var babyblue = '#F4FBFF'
var teal = '#67DBF0'
var lakeblue = '#053A55'
var w = 'white'
var salmon = '#FF9F9F'

//background setting
var bg = lakeblue
var h

//text setting
var intro_text = "Welcome.\nPress your cursor to begin."
var btn_txt = "See Reflection"


function setup() {
	createCanvas(600, 600);
  textFont('Trebuchet MS');
  background(bg); //background color
 	h = hour()
}
//intro special effects
function draw_ripple() {
  noStroke();
  if(millis() > 1300) {
 	fill('#3A6479');
  ellipse(303, 300, 500, 500);
  }
    if(millis() > 1000){
  fill('#597C8E');
  ellipse(303, 300, 400, 400);
  }
    if(millis() > 700){
  fill('#7894A3');
  ellipse(303, 300, 300, 300);
  }
  	if(millis() > 300){
  fill('#95ABB7');
  ellipse(303, 300, 200, 200);
  }
  
  if(millis() > 200) {
    fill('#B2C2CA');
  ellipse(300, 300, 100, 100);
  }
}
//intro_text
function intro() {
  if(millis() > 2000) {
  textSize(21);
  textAlign(CENTER);
 	fill(lakeblue);
  text("Press your cursor to begin.", 300, 320);
  }
  textSize(32);
  textAlign(CENTER);
 	fill(lakeblue);
  text("Welcome.\n", 300, 300);
}

//button's text
function buttonText() {
  textSize(21);
  textAlign(CENTER);
 	fill(w);
  text(btn_txt, 300, 457);

}
//'See Reflection' Button
function btn() {
	fill(teal)
  noStroke();
  var btn = quad(150, 425, 450, 425, 450, 475, 150, 475);
  buttonText();
}

//check if mouse is in button's position
function mouse_on_btn() {
	if ((mouseX < 450) && (mouseY < 475) && (mouseX > 150) && (mouseY > 425)) return true;
}


function light() {
 background(babyblue)
  fill(salmon)
  noStroke()
  ellipse(60, 60, 60, 60)
  //from = color(202, 4, 100);
	//to = color(0, 38, 100);
  //var c = lerpColor(to, from, 0.90);  
  fill('#D6F2EF');
 	quad(0, 300, 600, 300, 600, 600, 0, 600);
	fill('#EDC7EA')
  ellipse(60,600-60, 60,60);
  

}

function dark() {
  background('#00283C')
  fill('#FFF09F')
  noStroke()
  ellipse(60, 60, 60, 60)
  fill('#3C2F4A');
 	quad(0, 300, 600, 300, 600, 600, 0, 600);
	fill('#FDFFC9')
  ellipse(60, 600-60, 60,60);

	
}

function getLand() {
  if(h>6 && h<19) return ('#AABFCC')
  else return ('#EAEAEA')
}

function getWater() {
 	if(h>6 && h<19) return ('#88CE7B')
  else return ('#19E2BB')
}
//handles mouse operations 
function mouseClicked() {
  if (stopIntro == false) {
  stopIntro = true;
  canDraw = true;
  if(h>6 && h<19)light();
  else dark()
  strokeWeight(4)
	line(0, 300, 600, 300);
  
  }
  
  if(mouse_on_btn()==true){ //if mouse clicked on the button
    opa=0;
    buttonPressed=true; //button was pressed
    console.log("button pressed")
    canDraw=false;
  }

}

function draw_rect() {

  
}
/*

function draw() { 

  
  if(stopIntro){
  	background(babyblue);
  }
  
  if(!buttonPressed && stopIntro) { //btn(); 
    art();} //before the button is pressed, button remains there
	
  
}

*/

function draw() {
 if(!stopIntro){ //before intro is stopped, draw intro
  	draw_ripple();
       intro();
  }
  
if (stopIntro==true && !buttonPressed) {
  noStroke();
//  fill(255, 255, 255, opa);  
 // quad(0, 300, 600, 300, 600, 600, 0, 600);
  //console.log("made a rectangel"); 
  //btn();
}
  
function mouseInRange() {
 return ((mouseX < 600) && (mouseY < 300) && (mouseX > 0) && (mouseY > 0))
}
  
if(stopIntro==true && mouseIsPressed && mouseInRange()){
   //stroke('black');
   //strokeWeight(2);
   //line(pmouseX, pmouseY, mouseX, mouseY);
  stroke(getWater());
  strokeWeight(1);
  line((pmouseX+5)*1.3, 600-pmouseY, (mouseX)*1.2, 600-mouseY);
  stroke(getLand())
  noFill();
  strokeWeight(1)
  ellipse(mouseX, mouseY, 15, 15)

}
  
}
