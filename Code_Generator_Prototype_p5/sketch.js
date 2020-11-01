// Code Generator First Visual Prototype

let xco, yco; // coordinates
let rad, yoff;
let sha = []; // shape array
let shaval; // random shape value
let atri = []; // style array
let artival; // random style value

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  xco = width / 2;
  yco = height / 2 + 25;
  rad = width / 4;
  yoff = height / 16;

  sha = ['ellipse', 'rect', 'line'];
  shaval = 'ellipse';
  atri = ['fill', 'stroke', 'strokeWeight'];
  atrival = 'fill';
}

function draw() {
  background(220);

  // title text
  noStroke();
  fill(0);
  text('Code Generator First Visual Prototype', width / 2, height - (yoff + 15));
  text('Click to randomly generate new Code!', width / 2, height - yoff);

  // text display conditions
  if (shaval == 'line' && atrival !== 'strokeWeight') {
    noStroke();
    fill(0);
    text(atrival + '(0);', width / 2, yoff);
    text(shaval + '(' + xco + ', ' + yco + ', ' + xco + ', ' + rad + ');', width / 2, yoff + 15);

  } else if (shaval !== 'line' && atrival == 'strokeWeight') {
    noStroke();
    fill(0);
    text(atrival + '(10);', width / 2, yoff);
    text(shaval + '(' + xco + ', ' + yco + ', ' + xco + ', ' + rad + ');', width / 2, yoff + 15);

  } else if (shaval == 'line' && atrival == 'strokeWeight') {
    noStroke();
    fill(0);
    text(atrival + '(10);', width / 2, yoff);
    text(shaval + '(' + xco + ', ' + yco + ', ' + xco + ', ' + rad + ');', width / 2, yoff + 15);

  } else {
    noStroke();
    fill(0);
    text(atrival + '(0);', width / 2, yoff);
    text(shaval + '(' + xco + ', ' + yco + ', ' + rad + ', ' + rad + ');', width / 2, yoff + 15);
  }

  console.log(shaval, atrival);

  // sketch conditionals
  noFill();
  noStroke();
  if (shaval == 'ellipse' && atrival == 'fill') {
    fill(0);
    ellipse(xco, yco, rad, rad);
  } else if (shaval == 'ellipse' && atrival == 'stroke') {
    stroke(0);
    ellipse(xco, yco, rad, rad);
  } else if (shaval == 'ellipse' && atrival == 'strokeWeight') {
    stroke(0);
    strokeWeight(10);
    ellipse(xco, yco, rad, rad);
  } else if (shaval == 'rect' && atrival == 'fill') {
    fill(0);
    rect(xco, yco, rad, rad);
  } else if (shaval == 'rect' && atrival == 'stroke') {
    stroke(0);
    rect(xco, yco, rad, rad);
  } else if (shaval == 'rect' && atrival == 'strokeWeight') {
    stroke(0);
    strokeWeight(10);
    rect(xco, yco, rad, rad);
  } else if (shaval == 'line' && atrival == 'fill') {
    fill(0);
    line(xco, yco, xco, rad);
  } else if (shaval == 'line' && atrival == 'stroke') {
    stroke(0);
    line(xco, yco, xco, rad);
  } else if (shaval == 'line' && atrival == 'strokeWeight') {
    stroke(0);
    strokeWeight(10);
    line(xco, yco, xco, rad);
  }
}

function mousePressed() { //interaction
  shaval = random(sha);
  atrival = random(atri);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}