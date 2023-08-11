let cor;
let posicaoHorizontal;
let posicaoVertical;
let tamanho



function setup() {
  
  createCanvas(700, 700);
  background("#B917D4");
   cor = color(random(0,255), random(0,255), random(0,255))
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  tamanho = 50
 
}

function draw() {
  stroke(cor)
  fill(cor)
  circle(posicaoHorizontal, posicaoVertical, tamanho);
 
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal -1
  }
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal += 1
  }
  if(mouseY > posicaoVertical) {
    posicaoVertical += 1
  }
  if(mouseY < posicaoVertical) {
    posicaoVertical -= 1
  }
  if(mouseIsPressed){
    cor=color(random(0,255),random(0,255),random(0,255), random(0,100))
  }

 
 
 
}