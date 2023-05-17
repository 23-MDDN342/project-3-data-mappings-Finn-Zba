/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(1, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

////background
// image by Andrea Stöckel
//retrived from https://www.publicdomainpictures.net/en/view-image.php?image=463287&picture=galaxy-cosmos-stars-outer-space 
const bg_color1 = [51, 50, 46];
let img;
function preload() {
  img = loadImage('space.jpg');
  image(img,0,0,960,500);
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(img);
  noStroke();


///////// Grid settings /////////
  // draw a 3x1 grid of faces
  //This is the council of masks

  let w = canvasWidth / 3;
  let h = canvasHeight / 1;
  for(let i=0; i<3; i++) {
    for(let j=0; j<1; j++) {
      let y = h+0  + h*i;
      let x = w+0 + w*j;
      let m = 1;
    
    
///////// Face 1 (Uno-Uno) /////////    
      if (i === 0) {

        let eye_value = int(random(1,4));
        let tilt_value = int(random(15, -15));
        let mouth_value = int(random(1, 4));
        let feather_value = int(random(1,4));
        let Fdet_value = int(random(0,4));
        let Brow_value = int(random(1,4));
        let Ear_value = int(random(1,4));
        if(i < 1) {
          eye_value = int(random(1,4));  
          tilt_value = random(15, -15);
          mouth_value = int(random(1, 4));
          feather_value = int(random(1,4));
          Fdet_value = int(random(0,4));
          Brow_value = int(random(0,4));  
          Ear_value = int(random(0,4));
        
        }
        // Face 1 (center)
        stroke(5);
        push();
        translate(x+150, y-250);
        scale(w/30, h/35);
        stroke(5);
        UnoUno(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value);
        pop();

        //Face 2 (right)
        push();
        translate(x+450, y-200);
        scale(w/30, h/35);
        tilt_value = int(random(-20, 0));
        DvaDva(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value);
        pop();


       //Face 3 (left)
        push();
        translate(x-150, y-200);
        scale(w/30, h/35);
        tilt_value = int(random(0, 20));
        üçüç(tilt_value, eye_value, mouth_value, feather_value, Fdet_value,Brow_value, Ear_value)
        pop();
;

      }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
}
  }
}