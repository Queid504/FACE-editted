let r1;
let r2;
let r3;
let r4;
let r5;
let r6;
let c01;
let c02;
let c03;
let c1;
let c2;
let c3;
let n1;
let m1;
let m2;
let b1;
let b2;
let my1;
let mh2;

function setup() {
  createCanvas(400, 400);
  //=====================================================
  //Random Factors
  r1 = random(160, 320);
  r2 = random(160, 360);
  r3 = random(160, 320);
  r4 = random(160, 360);
  r5 = random(160, 320);
  r6 = random(160, 360);
  c01 = random(0, 255);
  c02 = random(0, 255);
  c03 = random(0, 255);
  c1 = random(132, 255);
  c2 = random(98, 204);
  c3 = random(94, 153);
  n1 = random(20, 40);
  m1 = random(140, 160);
  m2 = random(240, 260);
  b1 = random(200, 400);
  b2 = random(200, 400);
  my1 = random(220, 240);
  mh2 = random(230, 250);
}
//=====================================================
function mousePressed() {
  //Random Factors
  r1 = random(160, 320);
  r2 = random(160, 360);
  r3 = random(160, 320);
  r4 = random(160, 360);
  r5 = random(160, 320);
  r6 = random(160, 360);
  c01 = random(0, 255);
  c02 = random(0, 255);
  c03 = random(0, 255);
  c1 = random(132, 255);
  c2 = random(98, 204);
  c3 = random(94, 153);
  n1 = random(20, 40);
  m1 = random(140, 160);
  m2 = random(240, 260);
  b1 = random(200, 400);
  b2 = random(200, 400);
  my1 = random(220, 240);
  mh2 = random(230, 250);

}

function draw() {
  background(220);
  
  Bodee();
  Face();
}

function Bodee (){
  fill(c1 - 50, c2 - 50, c3 - 50);
  ellipse(200, 300, b1, b2 + 100);
}

function Face (){
  noStroke();
  //Face Shape
  fill(c1, c2, c3);
  ellipse(200, 170, r1, r2);
  //Ears
  fill(c1, c2, c3);
  ellipse(100, 170, r1 / 3, r2 / 3);
  ellipse(300, 170, r1 / 3, r2 / 3);
  //Inside the Ear
  stroke(0);
  fill(c1 - 20, c2 - 20, c3 - 20);
  ellipse(90, 170, r1 / 7, r2 / 7);
  ellipse(310, 170, r1 / 7, r2 / 7);
  //Eyes
  noStroke();
  fill(255);
  ellipse(150, 130, r3 / 3.5, r4 / 3.5);
  ellipse(250, 130, r3 / 3.5, r4 / 3.5);
  //Iris 
  fill(c01, c02, c03);
  ellipse(150, 130, r5 / 8, r6 / 8);
  ellipse(250, 130, r5 / 8, r6 / 8);
  //Eyes
  fill(0);
  ellipse(150, 130, r5 / 12, r6 / 12);
  ellipse(250, 130, r5 / 12, r6 / 12);
  //Nose
  fill(c1 - 30, c2 - 30, c3 - 30);
  rect(190, 175, 20, n1, 20);
  rect(180, 185, 40, n1 - 10, 40);
  //Mouth
  fill(c1 - 50, c2 - 50, c3 - 50);
  quad(m1, my1, m2, my1, 220, mh2, 180, mh2);
  //Cheeks
  fill(c1 + 20, c2 + 20, c3 + 20);
  ellipse(140, 175, r1 / 5, r2 / 13);
  ellipse(260, 175, r1 / 5, r2 / 13);
}

function Phrase() {
  
}