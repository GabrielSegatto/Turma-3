function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function Jogar(){
  var umNum = prompt("Um numero entre 1 e 37");
  var umaCor = prompt("vermelho ou preto?");

  let text = "";
  let n = getRndInteger(1, 37);
  let cores = ['vermelho', 'preto'];
  let x = Math.round(Math.random());
  let cor = cores[x];

  if((umNum === n) && (umaCor === cor)){
    resultado = 'ganhou';
  }else{
    resultado = 'perdeu';
  }

  text = (`O resultado foi ${n} ${cor}. 
          Você apostou ${umNum} ${umaCor}.
          Você ${resultado}!`);

  document.getElementById('resultado').innerText = text;
}