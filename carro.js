//codigo do carro

let xCarro = [600, 600, 600, 660, 600, 600];
let yCarro = [40, 96, 150, 212, 263, 318];
let velocidadeCarros = [3.5, 2, 3.2, 4, 2.9, 1.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemDosCarros.length; i++){
    image(imagemDosCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
    for(let i = 0; i < imagemDosCarros.length; i++){
    xCarro [i] -= velocidadeCarros [i];
  }
}

function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < imagemDosCarros.length; i++){
      if (passouTodaTela(xCarro[i])){
      xCarro[i] = 600}
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}