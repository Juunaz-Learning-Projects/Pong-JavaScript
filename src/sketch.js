//Variáveis: Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Variáveis: Velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis: Raquete

let xRaquete = 5;
let yRaquete = 150;
let raqueteComp = 10;
let raqueteAlt = 90;

//Variáveis: Raquete do Oponente

let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velocidadeYOp;

//Variáveis: Placar do Jogo
let meusPontos = 0;
let pontosOp = 0;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOp, yRaqueteOp);
  movimentaRaquete1();
  movimentaRaqueteOp();
  verificaColisaoR1();
  colisaoRaquetesBib(xRaquete, yRaquete);
  colisaoRaquetesBib(xRaqueteOp, yRaqueteOp);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
    rect(x, y, raqueteComp, raqueteAlt)
  }
  
function movimentaRaquete1(){
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
}
  
function verificaColisaoR1() {
  if(xBolinha - raio < xRaquete + raqueteComp && yBolinha - raio < yRaquete + raqueteAlt && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  } 
} 

function colisaoRaquetesBib(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComp, raqueteAlt, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOp() {
  velocidadeYOp = yBolinha - yRaqueteOp - raqueteComp / 2 - 20;
  yRaqueteOp += velocidadeYOp;
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOp, 470, 26);
}

function marcaPonto() {
  if(xBolinha > 590) {
    meusPontos += 1;
  }
  if(xBolinha < 10) {
    pontosOp +=1;
  }
}