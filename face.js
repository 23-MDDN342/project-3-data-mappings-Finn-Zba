/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 7;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

// This where you define your own face object
function Face() {
  // these are state variables for a face
  // (your variables should be different!)
  this.tilt_value = 0
  this.eye_value = 1
  this.mouth_value = 1
  this.feather_value = 1
  this.Fdet_value = 1
  this.Brow_value = 1
  this.Ear_value = 1
  this.Pup_value = 1

  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  


  this.draw = function(positions) {
  


  let headSize = 10;
  let eyeSize = 2;
  let centerX = 0;
  let Iy = -1;
  let distactBetweenEyes = 3;
  let MouthDrop = 7;
  let arrweight = 0.3; //stroke weight best working for arrangement
  let Bcolor = [75, 80, 87]; //backfave color
  let Dcolor = [234, 122, 244];

  push();
  scale(0.3);


    ////////////// Rotate face (slider 1) //////////////
    angleMode(DEGREES);
    rotate(this.tilt_value);
    strokeWeight(arrweight);

   ////////////// Ear detail (slider 7) //////////////

  //top ears
  if (this.Ear_value === 2 ) {
    //left side
    fill(Dcolor);
    line(-7,-8,-7,0);
    ellipse(-7,-8,1,1);

    //right side
    line(7,-8,7,0);
    ellipse(7,-8,1,1);   
  }

  // side
  if (this.Ear_value === 1 ) {
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

  if (this.Ear_value === 3 ) {
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
if (this.mouth_value < 2) {
  fill(255);
  rect(-2.5,3,5,1.5);
}

////// round rect //////
if (this.mouth_value > 1) {
  fill(255);
  rect(-2, 3, 4, 1, 0.2);
} 

////// circle //////
fill(255); //white
stroke(0); //black
if (this.mouth_value > 2.9 ) {
  fill(255); // white
  push();
  textSize(5)
  rotate(-90)
  text(']', -4, 1.5);
  pop();
}

////////////// Eye shape (slider 3) /////////////

////// 2 traditonal eyes //////
if (this.eye_value === 1 || this.eye_value == 3) {
  strokeWeight(arrweight);
  stroke(0);
  fill(234, 122, 244); 
  line(0,-2.5,2,-1.5);//right
  line(0,-2.5,-2,-1.5);//left
  ellipse(centerX, Iy-0.5, eyeSize,eyeSize);

 
}
////// middle eye //////
if (this.eye_value >= 2) {
  fill(234, 122, 244); 
  stroke(0);
  ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
  ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
}

////////////// Head detail (slider 4) //////////////
  // super anntenas
  stroke(0);
  if (this.feather_value === 1) {
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
  if (this.feather_value === 2) {
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
  if (this.feather_value === 3) {
    line(0,-7, 3, -9.5);
    line(-3,-9.5, 0, -7);
    fill(Dcolor);
    //strokeWeight(arrweight)
    ellipse(0,-7,1,1);
 
     ////////////// Face detail (slider 5) //////////////
 if (this.Fdet_value <= 1) {
  stroke(arrweight-0.5);
  fill(Dcolor);
  line(-2,-1,0.5,2); //left
  line(2,1,-0.5,-2); //left

  
  ellipse(0, -6, 1,1); // top dot
  ellipse(0,1.5,1.5,1.5)//bottom dot

}

////// ellipe details //////
if (this.Fdet_value === 2) {
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
if (this.Fdet_value === 3) {
  push();
  fill(Dcolor);
  textSize(2);
  rotate(90);
  text('{', -2.5, 3.5);
  text('{', -2.5, -2.5);
  pop();
}

  }

  ////////////// Eyebrow detail (slider 6) //////////////
//////Angry/////
if (this.Brow_value > 2) {
  stroke(arrweight-0.8);
  fill(Dcolor);
  rotate(-15);
  rect(2, -2, 3,0.5); //right eyebrow
  rotate(30);
  rect(-4.5, -2, 3,0.5); //left eyebrow
}

//////Doted//////
if (this.Brow_value < 2) {
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
if (this.Brow_value === 2) {
  stroke(arrweight-0.8);
  fill(Dcolor);
  rect(-4.3, -2.5, 2.8,0.5); //Left eyebrow
  rect(1.7, -2.5, 2.8,0.5);  //right eyebrow
}
    pop();
  }

  
  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
 //////////////Dots on features//////////////
  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.tilt_value = int(map(settings[0], 0, 100, -45, 45));
    this.eye_value = int(map(settings[1], 0, 100, 1, 4));
    this.mouth_value = int(map(settings[2], 0, 100, 1, 4));
    this.feather_value = int(map(settings[3], 0, 100, 0, 4));
    this.Fdet_value = int(map(settings[4], 0, 100, 0, 4));
    this.Brow_value = int(map(settings[5], 0, 100, 1, 4));

  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = int(map(this.tilt_value, -45, 45, 0, 100));
    settings[1] = int(map(this.eye_value, 1, 4, 0, 100));
    settings[2] = int(map(this.mouth_value, 1, 4, 0, 100));
    settings[3] = int(map(this.feather_value, 1, 4, 0, 100));
    settings[4] = int(map(this.Fdet_value, 0, 4, 0, 100));
    settings[5] = int(map(this.Brow_value, 1, 4, 0, 100)); 

    return settings;
  }
}

