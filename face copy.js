/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 8;

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
  this.detailColour = [204, 136, 17];
  this.mainColour = [255,255,255,0]; //white
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.mouthColour = [201, 44, 38] //red
  this.eyebrowColour = [50, 168, 82]//joker green
  this.eyeColour = [0,0,0]//black
  this.pupil_Size = 0.6; 

  // eyeColor
  const darkBlue = color(67, 80, 102);
  const darkBrown = color(112, 74, 50);
  const navyGreen = color(103, 112, 62);
  const skyBlue = color(94, 207, 255);
  const lightBlue = color(182, 201, 219);
  const lightHoney = color(219, 169, 111);
  let eyeColor;
  

  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  


  this.draw = function(positions) {
    console.log()

  
/////////////////////////////////head/////////////////////////////////
    // ellipseMode(CENTER);
    // stroke(stroke_color);
    // fill(this.mainColour);
    // ellipse(segment_average(positions.chin)[0], 0, 3, 4);
    // noStroke();
    let face_left = positions.chin[4]; 
    let face_chin = positions.chin[8];
    let face_right = positions.chin[16];
    let right_cheek = positions.chin[2];
    let left_cheek = positions.chin[4];

    //face code modified variation of Bee Huang Project 3
    // variated to be more natrual human with joker esk chin
    beginShape();
    strokeWeight(0.05);
    vertex(face_left[0]-0.4, -0.7)
    
    //2nd beezier
    bezierVertex(-2.5, -4, 2.5, -3.5 , face_right[0], -1);

    //Forehead
    bezierVertex(face_right[0], face_chin[0], 0, 5, face_left[0]-0.4, -0.7);
    endShape();

    //shows blush for females
    //if statement determines if blush is black or white depending on face colour
    if (this.faceColor == 0 && this.showBlush == 1) {
      push();
        fill(50);
        drawSpots();
      pop();
    } else if (this.faceColor == 1 && this.showBlush == 1) {
      push();
        fill(0);
        drawSpots();
      pop();
    }

/////////////////////////////////mouth/////////////////////////////////
    fill(this.mouthColour);
    ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

/////////////////////////////////eyebrows/////////////////////////////////
    fill( this.eyebrowColour);
    stroke( this.eyebrowColour);
    strokeWeight(0.08);
    this.draw_segment(positions.left_eyebrow);
    this.draw_segment(positions.right_eyebrow);

//////////////draw the chin segment using points//////////////
    fill(this.chinColour);
    stroke(this.chinColour);
    this.draw_segment(positions.chin);

    fill(100, 0, 100);
    stroke(100, 0, 100);
    this.draw_segment(positions.nose_bridge);
    this.draw_segment(positions.nose_tip);

    strokeWeight(0.03);

    fill(this.lipColour);
    stroke(this.lipColour);
    this.draw_segment(positions.top_lip);
    this.draw_segment(positions.bottom_lip);

    let left_eye_pos = segment_average(positions.left_eye);
    let right_eye_pos = segment_average(positions.right_eye);

/////////////////////////////////eyes/////////////////////////////////
    noStroke();
    let curEyeShift = 0.04 * this.eye_shift;
    if(this.num_eyes > 0 ) {
      fill(this.eyeColour);
      ellipse(left_eye_pos[0], left_eye_pos[1], 0.6, 0.53);
      ellipse(right_eye_pos[0], right_eye_pos[1], 0.6, 0.53);
      //left pupil
      fill(255);//white
      ellipse(-0.85,-0.9,this.pupil_Size,this.pupil_Size);
      //right pupil
      fill(255);//white
      ellipse(0.85,-0.9,this.pupil_Size,this.pupil_Size);

      // fill(this.mainColour);
      // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
      // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
    }

   // fill(0)
   //ellipse(0,0, 0.5,0.5) center point
   //rect(-2,-2,4.5,4) sizing debug 
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

  ////////////// Factors to edit ////////////
  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
    this.pupil_Size = map(settings[4], 0, 100, 0.2, 0.4);// pupil size
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);
    settings[4] = map(this.pupil_Size, 0.4, 0.2, 0, 100); // pupil size
    return settings;
  }
}
