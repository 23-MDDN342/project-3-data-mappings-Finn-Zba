/*
 * This file should contain code that draws your faces.
 * All three faces are here and devided into different sections
 */

//////////////Start of face 1 (Uno-Uno) //////////////
function UnoUno(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value, Pup_value) {
  const bg_color3 = [122, 67, 43];
  const fg_color3 = [58, 31, 4];

  let headSize = 10;
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -4;
  let distactBetweenEyes = 3;
  let MouthDrop = 7;
  let arrweight = 0.3; //stroke weight best working for arrangement
  
  ////////////// Rotate face (slider 1) //////////////
  angleMode(DEGREES);
  rotate(tilt_value);
  strokeWeight(arrweight);


////////////// Ear detail (slider 7) //////////////

////// Diamond //////
if (Ear_value < 2 ) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  ellipse(-5.5, -4, 2, 2);//left ear
  ellipse(5.4, -4, 2, 2);//left ear
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  
  //rotate squares into diamonds
  push();
  fill(224, 27, 27);//red
  rotate(45);//degrees
  square(-5.5, 3.7, 1);//left earring diamond
  square(3.3, -6, 1);//right earring diamond
  pop();
}

////// ball //////
if (Ear_value === 3) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  ellipse(-5.5, -4, 2, 2);//left ear
  ellipse(5.4, -4, 2, 2);//right ear
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  fill(224, 27, 27); //red
  ellipse(-6.5, -0.5, 1, 1);//left earring ball
  ellipse(6.5, -0.5, 1, 1);//right earring ball
}

////// Tri //////
if (Ear_value > 1) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  ellipse(-5.5, -4, 2, 2);//left ear
  ellipse(5.4, -4, 2, 2);//right ear
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  line(-6.5,-4,-6.5,-1); //left earring
  line(6.4,-4,6.5,-1); //right earring
  fill(56, 214, 39);//Green
  triangle(-6.5, -1, -7, 0, -6, 0 ); //left tri
  triangle(6.5, -1, 7, 0, 6, 0 );// right tri
}

////////////// head shape //////////////
 // ellipse(centerX, 0, headSize, headSize);
  fill(207, 146, 93); //brown
  stroke(0); //black
  triangle(-4.7,3.1,0,6.5,4.7,3.1); //bottom half of mask
  //quad(-4.8,3,-2,6,3,6,4.9,3);
  rect(-5, -7, headSize, headSize); //top half of mask
  
////////////// Mouth shape (slider 2) //////////////

////// Rect //////
   if (mouth_value < 2) {
     fill(255);
     rect(-2.5,1,5,1.5);
   }
 
 ////// round rect //////
   if (mouth_value > 1) {
     fill(255);
     rect(-2, 1.5, 4, 1, 0.2);
   } 

   ////// circle //////
   fill(255); //white
   stroke(0); //black
   if (mouth_value > 2.9 ) {
     fill(255); // white
     ellipse(0,1.5,4.5,2.5); 
   }
////////////// Eye shape (slider 3) //////////////
  
////// 2 traditonal eyes //////
  if (eye_value === 1 || eye_value == 3) {
    strokeWeight(arrweight);
    stroke(0);
    fill(234, 242, 170); //creamish
    ellipse(centerX, Iy, eyeSize,eyeSize);
   
  }
////// middle eye //////
  if (eye_value >= 2) {
    fill(234, 242, 170); //creamish
    stroke(0);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  ////////////// Head detail (slider 4) //////////////
  // singular feather
  fill(bg_color3);
  stroke(0);
  if (feather_value >= 1) {
    //fill(0);                 
    line(0,-7, 0,-10);
    line(0,-7, 0, -5)
  }

////// triple black feather //////
  if (feather_value >= 2) {
    fill(0);
    stroke(0);
    line(0,-7, 0,-10);
    line(0,-7, 3, -10);
    line(-3,-10, 0, -7);
  }

  ////// triple feather (multi) //////
  if (feather_value >= 3) {
    fill(0);
    stroke(224, 27, 27); //red
    line(0,-7, 3, -10);
    stroke(255, 251, 0); //yellow
    line(-3,-10, 0, -7);
    stroke(56, 214, 39); // green
    line(0,-7, 0,-10);
  }

  ////////////// Face detail (slider 5) //////////////
  if (Fdet_value <= 1) {
    stroke(arrweight-0.5);
    fill(56, 214, 39);
    ellipse(0, -6, 1,1)
  }

////// tri details //////
  if (Fdet_value === 2) {
    stroke(0);
    fill(56, 214, 39);
    triangle(-4,-1,-3,-2.8,-2,-1);
    triangle(4,-1,3,-2.8,2,-1);
  }
////// {} //////
  if (Fdet_value === 3) {
    push();
    fill(56, 214, 39);
    textSize(2);
    rotate(90);
    text('{', -2.5, 3.5);
    text('{', -2.5, -2.5);
    pop();
  }
 
////////////// Eyebrow detail (slider 6) //////////////

//////Upwards/////
if (Brow_value > 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rotate(-15);
  rect(2.5, -4.5, 3,0.5); //Left eyebrow
  rotate(30);
  rect(-5, -4.5, 3,0.5); //right eyebrow
}

//////Downwards//////
if (Brow_value < 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rotate(-15);
  rect(-3, -6.5, 3,0.5); //Left eyebrow
  rotate(30);
  rect(0, -6.5, 3,0.5); //right eyebrow
}

//////side? (idk how to describe it)//////
if (Brow_value === 2) {
  stroke(arrweight-0.8);
  fill(224, 27, 27);
  rect(-4.3, -5.5, 2.8,0.5); //Left eyebrow
  rect(1.7, -5.5, 2.8,0.5);  //right eyebrow
}

////////////// Pupil detail (slider 8) //////////////

////// Black //////
if (Pup_value === 1){
  noStroke();
  fill(0);
  ellipse(-3,-4,0.5,0.5);
  ellipse(3,-4,0.5,0.5);
}

////// White //////
if(Pup_value === 3){
  noStroke();
  fill(255);
  ellipse(-3,-4,0.5,0.5);
  ellipse(3,-4,0.5,0.5);
}

////// Empty //////
if(Pup_value === 2){
////// This is purposly empty //////
}

////////////// Beard detail (slider 9) //////////////
}
////////////// end of face 1 (Uno-Uno)//////////////


////////////// start of face 2 (Dva-Dva) //////////////

function DvaDva(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value, Pup_value) {
  let headSize = 10;
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -1;
  let distactBetweenEyes = 3;
  let MouthDrop = 7;
  let arrweight = 0.3; //stroke weight best working for arrangement
  let Bcolor = [75, 80, 87]; //backfave color
  let Dcolor = [234, 122, 244];

  ////////////// Rotate face (slider 1) //////////////
  angleMode(DEGREES);
  rotate(tilt_value);
  strokeWeight(arrweight);


  ////////////// Ear detail (slider 7) //////////////

  //top ears
  if (Ear_value === 2 ) {
    //left side
    fill(Dcolor);
    line(-7,-8,-7,0);
    ellipse(-7,-8,1,1);

    //right side
    line(7,-8,7,0);
    ellipse(7,-8,1,1);   
  }

  // side
  if (Ear_value === 1 ) {
    //right side top
    fill(Dcolor);
    line(8,6,5,0);
    ellipse(8,6,1,1);

    //left side
    line(-9,-6,-1,0);
    ellipse(-9,-6,-1,1);

    //right side bottom
    line(8,-6,5,0);
    ellipse(8,-6,1,1); 

    //left side bottom
    line(-8,6,-7,5);
    ellipse(-8,6,1,1); 
  }

  if (Ear_value === 3 ) {
    //left side
    fill(Dcolor);
    line(-7,-8,-7,0);
    ellipse(-7,-8,1,1);

    //right side
    line(7,-8,7,0);
    ellipse(7,-8,1,1); 
    //right side top
    fill(Dcolor);
    line(8,6,5,0);
    ellipse(8,6,1,1);

    //left side
    line(-9,-6,-1,0);
    ellipse(-9,-6,-1,1);

    //right side bottom
    line(8,-6,5,0);
    ellipse(8,-6,1,1); 

    //left side bottom
    line(-8,6,-7,5);
    ellipse(-8,6,1,1); 
  }
  ////////////// Face shape//////////////
  stroke(arrweight)
    fill(Bcolor);
    //ellipse(0,-3, 9,9);
    triangle(0,-8,-7,-5,7,-5);
    rect(-7.5,-5,15,10,1);
    triangle(-7, 5, -5, 9, -3, 5);//left fang
    rect(-5,5,2,4.1) //left fang
   
    triangle(7, 5, 5, 8.8, 5, 5);//right fang
    rect(3,5,2,4.1)//right fang

    //rect(-5,-5,10,7,1);
    //rect(-4,2,2,3);

  

////////////// Mouth shape (slider 2) //////////////

////// Rect //////
if (mouth_value < 2) {
  fill(255);
  rect(-2.5,3,5,1.5);
}

////// round rect //////
if (mouth_value > 1) {
  fill(255);
  rect(-2, 3, 4, 1, 0.2);
} 

////// circle //////
fill(255); //white
stroke(0); //black
if (mouth_value > 2.9 ) {
  fill(255); // white
  push();
  textSize(5)
  rotate(-90)
  text(']', -4, 1.5);
  pop();
}

////////////// Eye shape (slider 3) /////////////

////// 2 traditonal eyes //////
if (eye_value === 1 || eye_value == 3) {
  strokeWeight(arrweight);
  stroke(0);
  fill(234, 122, 244); 
  line(0,-2.5,2,-1.5);//right
  line(0,-2.5,-2,-1.5);//left
  ellipse(centerX, Iy-0.5, eyeSize,eyeSize);

 
}
////// middle eye //////
if (eye_value >= 2) {
  fill(234, 122, 244); 
  stroke(0);
  ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
  ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
}

////////////// Head detail (slider 4) //////////////
  // super anntenas
  stroke(0);
  if (feather_value === 1) {
    fill(0);
    stroke(0);
    //line(0,-7, 0,-9);
    line(0,-7, 3, -9.5);
    line(-3,-9.5, 0, -7);
    fill(Dcolor);
    //strokeWeight(arrweight)
    ellipse(-4,-5.7,0.5,0.5);//left lower dot
    ellipse(-1.5,-6.7,0.5,0.5);// left upper dot
    ellipse(4,-5.7,0.5,0.5);//right lower dot
    ellipse(1,-6.7,0.5,0.5);//right upper dot   
  }

////// Triple dot //////
  if (feather_value === 2) {
    fill(Dcolor);
    stroke(0);
    strokeWeight(0.3)
    line(-4,-4,4,-4);
    ellipse(-4,-4,1,1);
    ellipse(-0,-4,1,1);
    ellipse(4,-4,1,1);
    fill(Dcolor);
    //ellipse(0,-5,1,1);
  }

  ////// duo antenna //////
  if (feather_value === 3) {
    line(0,-7, 3, -9.5);
    line(-3,-9.5, 0, -7);
    fill(Dcolor);
    //strokeWeight(arrweight)
    ellipse(0,-7,1,1);
 

  }
 ////////////// Face detail (slider 5) //////////////
 if (Fdet_value <= 1) {
  stroke(arrweight-0.5);
  fill(Dcolor);
  line(-2,-1,0.5,2); //left
  line(2,1,-0.5,-2); //left

  
  ellipse(0, -6, 1,1); // top dot
  ellipse(0,1.5,1.5,1.5)//bottom dot

}

////// ellipe details //////
if (Fdet_value === 2) {
  stroke(0);
  fill(Dcolor);
  strokeWeight(arrweight);
  //left detail
  line(-3,2,-3,0);
  ellipse(-3,2,1,1);

  //right detail
  line(3,2,3,0);
  ellipse(3,2,1,1);

}
////// {} //////
if (Fdet_value === 3) {
  push();
  fill(Dcolor);
  textSize(2);
  rotate(90);
  text('{', -2.5, 3.5);
  text('{', -2.5, -2.5);
  pop();
}

////////////// Eyebrow detail (slider 6) //////////////
//////Angry/////
if (Brow_value > 2) {
  stroke(arrweight-0.8);
  fill(Dcolor);
  rotate(-15);
  rect(2, -2, 3,0.5); //right eyebrow
  rotate(30);
  rect(-4.5, -2, 3,0.5); //left eyebrow
}

//////Doted//////
if (Brow_value < 2) {
  stroke(arrweight-0.8);
  fill(Dcolor);
  strokeWeight(arrweight-0.1)
  ///left///
  ellipse(-4, -2.5, 0.5,0.5); //left eyebrow left
  ellipse(-3, -3, 0.5,0.5); //left eyebrow center
  ellipse(-2, -2.5, 0.5,0.5); //left eyebrow right


  //right//
  ellipse(4, -2.5, 0.5,0.5); //right eyebrow left
  ellipse(3, -3, 0.5,0.5); //right eyebrow center
  ellipse(2, -2.5, 0.5,0.5); //right eyebrow right
}

//////side? (idk how to describe it)//////
if (Brow_value === 2) {
  stroke(arrweight-0.8);
  fill(Dcolor);
  rect(-4.3, -2.5, 2.8,0.5); //Left eyebrow
  rect(1.7, -2.5, 2.8,0.5);  //right eyebrow
}


  }
////////////// End of face 2 (Dva-Dva) //////////////


////////////// Start of face 3 (üç-üç)//////////////
function üçüç(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value, Pup_value) {

  let headSize = 10;
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -4;
  let distactBetweenEyes = 3;
  let MouthDrop = 7;
  let arrweight = 0.3; //stroke weight best working for arrangement
  let Mcolor = [255, 217, 114];

  ////////////// Rotate face (slider 1) //////////////
  angleMode(DEGREES);
  rotate(tilt_value);
  strokeWeight(arrweight);

////////////// Ear detail (slider 7) //////////////

////// Diamond //////
if (Ear_value < 2 ) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  line(-7.5,-5.5,-7.4,1); //left earring
  
  //rotate squares into diamonds
  push();
  fill(Mcolor);//cream
  rotate(45);//degrees
  square(-5.5, 5, 1);//left earring diamond
  pop();
}

////// ball //////
if (Ear_value === 3) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  line(-7.5,-5,-7.5,-1); //left earring
  line(7.5,-5,7.5,-1); //right earring
  fill(Mcolor); //cream
  ellipse(-7.5, -0.5, 1, 1);//left earring ball
  ellipse(7.5, -0.5, 1, 1);//right earring ball
}

////// Tri //////
if (Ear_value > 1) {
  strokeWeight(arrweight);
  noFill();
  //fill(224, 27, 27);
  line(-7.5,-5,-7.5,-1); //left earring
  line(7.5,-5,7.5,-1); //right earring
  fill(Mcolor);//cream
  triangle(-7.5, -1, -8, 0, -7, 0 ); //left tri
  triangle(7.5, -1, 8, 0, 7, 0 );// right tri
}


////////////// head shape //////////////
  fill(255);
  ellipse(0,-5,15,10);
  noStroke();
  stroke(0);
  noFill();
  ellipse(0,5,5,5);//bottom shelf of face shape
  fill(255); //Brown
  ellipse(0,-1,12,12)//top half of face shape

////////////// Mouth shape (slider 2) //////////////

////// higher mouth //////
if(mouth_value > 1){
  fill(Mcolor);
  ellipse(0,2,1);
}

////// lower mouth //////
if(mouth_value < 2){
  fill(Mcolor);
  ellipse(0,0,1);
}

////// triple //////
if(mouth_value === 3){
  fill(Mcolor);
  ellipse(0,2,1);
  //ellipse(1,2,1);
}

////////////// Eye shape (slider 3) //////////////

////// Normal eyes //////
if (eye_value >1) {
  fill(Mcolor);
  ellipse(-3, 0, 3);
  ellipse( 3, 0, 3);
}

////// Single eye //////
if (eye_value <2) {
  fill(Mcolor);
  ellipse(0, 0, 2);
}

if (eye_value ===3) {
  fill(Mcolor);
  ellipse(-3, 0, 3);
  ellipse( 3, 0, 3);
}

////////////// Head detail (slider 4) //////////////
  // singular feather
  stroke(0);
  if (feather_value === 1) {
    fill(0);
    stroke(0);
    //line(0,-7, 0,-9);
    line(0,-7, 3, -9.5);
    line(-3,-9.5, 0, -7);
    fill(Mcolor);
    //strokeWeight(arrweight)
    ellipse(-6,-5,0.5,0.5);//left upper dot
    ellipse(-4,-7,0.5,0.5);// left lower dot
    ellipse(6,-5,0.5,0.5);//right upper dot
    ellipse(4,-7,0.5,0.5);//right lower dot   
  }

////// triple black feather //////
  if (feather_value === 2) {
    fill(0);
    stroke(0);
    line(0,-7, 0,-10);
    line(0,-7, 3, -9.5);
    line(-3,-9.5, 0, -7);
    fill(Mcolor);
    ellipse(0,-5,1,1);
  }

  ////// triple feather (dotted) //////
  if (feather_value === 3) {
    fill(0);
    ellipse(-6,-5,0.5,0.5);//left upper dot
    ellipse(-4,-7,0.5,0.5);// left lower dot
    ellipse(-2,-9,0.5,0.5);// left top dot
    ellipse(6,-5,0.5,0.5);//right upper dot
    ellipse(4,-7,0.5,0.5);//right lower dot   
    ellipse(2,-9,0.5,0.5);// left top dot

  }

////////////// Face detail (slider 5) //////////////
if (Fdet_value <= 1) {
  stroke(arrweight-0.5);
  fill(Mcolor);
  noStroke();
  ellipse(-3, 3, 0.5,0.5) //left eye
  ellipse(-3, 2, 0.5,0.5) //left eye
  ellipse(3, 3, 0.5,0.5) //right eye
  ellipse(3, 2, 0.5,0.5) //right eye
}

////// tri details //////
if (Fdet_value === 2) {
  stroke(0);
  fill(Mcolor);
  push();
  rotate(180);
  triangle(-4,-1,-3,-2.8,-2,-1);
  triangle(4,-1,3,-2.8,2,-1);
  pop();
}
////// <> //////
if (Fdet_value === 3) {
  push();
  fill(Mcolor);
  textSize(1);
  rotate(-90);
  //due to rotation x/y is reversed
  text('<', -2.5, 3.2); //right side
  text('<', -2.5, -3); //left side
  pop();
}

////////////// Eyebrow detail (slider 6) //////////////

//////Angry/////
if (Brow_value > 2) {
  stroke(arrweight-0.8);
  fill(Mcolor);
  rotate(-15);
  rect(2, -2, 3,0.5); //right eyebrow
  rotate(30);
  rect(-4.5, -2, 3,0.5); //left eyebrow
}

//////Mono//////
if (Brow_value < 2) {
  stroke(arrweight-0.8);
  fill(Mcolor);
  rotate(-15);
  //rect(-3, -3, 3,0.5); //right eyebrow
  rotate(15);
  rect(-5, -2.5, 10,0.5); //left eyebrow
}

//////side? (idk how to describe it)//////
if (Brow_value === 2) {
  stroke(arrweight-0.8);
  fill(Mcolor);
  rect(-4.3, -2.5, 2.8,0.5); //Left eyebrow
  rect(1.7, -2.5, 2.8,0.5);  //right eyebrow
}

}
////////////// End of face 3 (üç-üç) //////////////