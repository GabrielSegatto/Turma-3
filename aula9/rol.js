function jogar(){
var umNum = prompt("Escolha um numero de 1 a 37");
var umaCor = prompt("Vermelho ou Preto?");

var cores = ["Vermelho", "Preto"];
x = Math.round(Math.random());
cor = cores[x];

function numeroAleatorio (NumMin, NumMax){
    n = Math.random();
    n = n * (NumMax - NumMin);
    n = Math.round(n);
    n = n - NumMin;
    return n;
}

numero = numeroAleatorio(1, 37);

if ((umaCor = cor) || (umNum = numero)){
    resultado = "Ganhou!";
} else{
    resultado = "Perdeu!";
}

var placar = `Você apostou em ${umNum} ${umaCor}
              O resultado foi ${numero} ${cor}
              Você ${resultado}`;

document.getElementById("resultado").innerText = placar;
}
