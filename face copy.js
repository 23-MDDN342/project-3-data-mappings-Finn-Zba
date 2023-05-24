/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 8;

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
  this.detailColour = [204, 136, 17];
  this.mainColour = [255,255,255,0]; //white
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.mouthColour = [201, 44, 38] //red
  this.eyebrowColour = [62, 69, 69]//Grey
  this.eyeColour = [0,0,0]//black
  this.pupil_Size = 0.6;
  this.head_Type = 0 
  this.Alien_primary = [118, 188, 101]; //green
  this.Alien_secondary = [207, 29, 106]; //pink
  this.Cyborg_primary = [210, 210, 210]; //grey
  this.Cyborg_secondary = [28, 182, 182]; //blue
  this.Cyborg_tertiary = [62, 69, 69]; //other grey
  
  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */ 

  this.draw = function(positions) {
    console.log()

/////////////////////////////////HEAD/////////////////////////////////
let face_left = positions.chin[4]; 
let face_chin = positions.chin[8];
let face_right = positions.chin[16];
let right_cheek = positions.chin[2];
let left_cheek = positions.chin[4];

        if(this.SkinType == 1) {
          strokeWeight(0.2);
          stroke(0);
          fill(this.Alien_primary); //green
        } else if (this.SkinType == 0) {
          strokeWeight(0.2);
          stroke(0);
          fill(this.Cyborg_primary); //grey
        }

    //face shape code modified variation of Bee Huang Project 3!!!
    // variated to be more natrual human with joker esk chin
    beginShape();
    strokeWeight(0.05);
    //fill(118, 188, 101);
    vertex(face_left[0]-0.4, -0.7)
    
    //2nd beezier
    bezierVertex(-2.5, -4, 2.5, -3.5 , face_right[0], -1);

    //Forehead
    bezierVertex(face_right[0], face_chin[0], 0, 5, face_left[0]-0.4, -0.7);
    endShape();

///////////////////////////////// HEAD END /////////////////////////////////


/////////////////////////////////HAIR/////////////////////////////////

/////////////////////ALIENS/////////////////////
if (this.SkinType == 1){

  /////////FEMALE HAIR/////////
  if(this.head_Type == 0){
    fill(this.Alien_secondary);
    ellipse(0,-2.7,0.3,0.3);//center

    //right side
    ellipse(0.5,-2.6,0.2,0.2);
    ellipse(0.9,-2.4,0.2,0.2);
    ellipse(1.2,-2.2,0.2,0.2);
    ellipse(1.5,-2,0.2,0.2);

    //left side
    ellipse(-0.5,-2.6,0.2,0.2);
    ellipse(-0.9,-2.4,0.2,0.2);
    ellipse(-1.2,-2.2,0.2,0.2);
    ellipse(-1.5,-2,0.2,0.2);
  }

  /////////MALE HAIR/////////
  else if(this.head_Type == 1){
    fill(this.Alien_secondary);
    line(-1,-2.1,0,-2.7);//left
    line(1,-2.1,0,-2.7);//right
    ellipse(0,-2.7,0.4,0.4); //center
    ellipse(1,-2.1,0.2,0.2); //right
    ellipse(-1,-2.1,0.2,0.2); //left
  }

  /////////BALD&HATS/////////
  else if(this.head_Type == 2){
    fill(this.Alien_secondary);
    line(-1,-2.1,1,-2.1);
    ellipse(0,-2.1,0.4,0.4); //center
    ellipse(1,-2.1,0.3,0.3); //right
    ellipse(-1,-2.1,0.3,0.3); //left
  }

}

/////////////////////CYBORGS/////////////////////
if (this.SkinType == 0){
  /////////FEMALE HAIR/////////
  if(this.head_Type == 0){
 

  }

  /////////MALE HAIR/////////
  else if(this.head_Type == 1){
    //line
    line(0,-3,0,-2.1); //top line
    line(-1.8,-1.8,0,-2.1); //left line
    line(1.8,-1.8,0,-2.1); //right line
    //line
    line(0,-3,0,-2.2); //top line
    strokeWeight(0.15);

    fill(this.Cyborg_secondary);
    ellipse(0,-2.1,0.6,0.6); //main ellipse
    strokeWeight(0.05);
    fill(this.Cyborg_secondary);

    //circ
    circle(0,-3,0.3); //top center circle
    circle(1.9,-1.8,0.3); //right circle
    circle(-1.9,-1.8,0.3); //left circle 
    
  }
  /////////BALD&HATS/////////
  else if(this.head_Type == 2){
    fill(this.Cyborg_tertiary);
    ellipse(0,-2.5,2.8,1);
    strokeWeight(0.1);
    stroke(0);
    point(0,-2.1) //center bottom
    point(0,-2.9) //center top
    //left
    point(-0.5,-2.85);
    point(-0.9, -2.75);
    point(-1.2,-2.65); 
    point(-0.5,-2.15);
    point(-0.9, -2.25);
    point(-1.2,-2.45); 

    //right
    point(0.5,-2.85);
    point(0.9, -2.75);
    point(1.2,-2.65); 
    point(0.5,-2.15);
    point(0.9, -2.25);
    point(1.2,-2.45);
  }
}
/////////////////////////////////HAIR END/////////////////////////////////


///////////////////////////////// MOUTH /////////////////////////////////

////////////////ALIEN////////////////
        if(this.SkinType == 1) {
          strokeWeight(0.1);
          stroke(0);
          fill(this.Alien_secondary); //pink
          ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);
           
////////////////CYBORG////////////////
        } else if (this.SkinType == 0) {
          strokeWeight(0.1);
          stroke(0);
          fill(this.Cyborg_secondary);// blue
          push();
          translate(-0.4,0);
          rect(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1, 0.25 * this.mouth_size);
          pop();
        }
 
///////////////////////////////// MOUTH END /////////////////////////////////


///////////////////////////////// EYEBROWS /////////////////////////////////
    fill( this.eyebrowColour);
    stroke( this.eyebrowColour);
    strokeWeight(0.08);

    this.draw_segment(positions.left_eyebrow);
    this.draw_segment(positions.right_eyebrow);

///////////////////////////////// EYEBROWS END /////////////////////////////////


//////////////draw the chin segment using points//////////////
    fill(this.chinColour);
    stroke(this.chinColour);
    this.draw_segment(positions.chin);

///////////////////////////////// NOSE /////////////////////////////////
    fill(this.Cyborg_tertiary); //grey
    stroke(this.Cyborg_tertiary);//grey
    this.draw_segment(positions.nose_bridge);
    this.draw_segment(positions.nose_tip);
///////////////////////////////// NOSE END /////////////////////////////////


///////////////////////////////// LIPS /////////////////////////////////    
    strokeWeight(0.03);

    fill(this.lipColour);
    stroke(this.lipColour);
    //this.draw_segment(positions.top_lip); //default dotted lips
    //this.draw_segment(positions.bottom_lip); //defult dotted lips

///////////////////////////////// LIPS END /////////////////////////////////


///////////////////////////////// EYES /////////////////////////////////
let left_eye_pos = segment_average(positions.left_eye);
let right_eye_pos = segment_average(positions.right_eye);
    noStroke();
    let curEyeShift = 0.04 * this.eye_shift;
    if(this.num_eyes > 0 ) {
      
      fill(this.eyeColour);
      ellipse(left_eye_pos[0], left_eye_pos[1], 0.6, 0.53);
      ellipse(right_eye_pos[0], right_eye_pos[1], 0.6, 0.53);

////////////////ALIEN////////////////
     if(this.SkinType == 1) {
      strokeWeight(0);
      stroke(0);
      fill(this.Alien_secondary); //pink
      ellipse(-0.85,-0.9,this.pupil_Size,this.pupil_Size);
      ellipse(0.85,-0.9,this.pupil_Size,this.pupil_Size);

////////////////CYBORG////////////////
    } else if (this.SkinType == 0) {
      strokeWeight(0);
      stroke(0);
      fill(this.Cyborg_secondary); //blue
      push();
      //angleMode(DEGREES);
      //rotate(45);
      rect(-0.95,-1,this.pupil_Size,this.pupil_Size);
      rect(0.80,-1,this.pupil_Size,this.pupil_Size);
      pop();
    }
    }
  }
///////////////////////////////// EYES END /////////////////////////////////

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
/////////////////////////////////DOTTED FEATURES/////////////////////////////////
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
/////////////////////////////////DOTTED FEATURES END/////////////////////////////////

///////////////////////////////// MAPPING /////////////////////////////////
  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.SkinType = int(map(settings[0], 0, 100, 0, 1));
    this.head_Type = int(map(settings[1], 0, 100, 0, 2));
    this.mouth_size = map(settings[2], 0, 100, 0.5, 4);
    this.pupil_Size = map(settings[4], 0, 100, 0.2, 0.4);// pupil size
    this.eyebrow = int(map(settings[5], 0, 100, 1, 2));
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.SkinType, 0, 1, 0, 100); //metal or skin
    settings[1] = map(this.head_Type, 0, 2, 0, 100); //
    settings[2] = map(this.mouth_size, 0, 5, 0, 50); //mouth size
    settings[4] = map(this.pupil_Size, 0.4, 0.2, 1, 100); // pupil size
    settings[5] = map(this.eyebrow, 1, 2, 0, 100);
    return settings;
  }
}
///////////////////////////////// MAPPING END /////////////////////////////////