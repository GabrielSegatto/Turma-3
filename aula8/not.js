function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let x = getRndInteger(1, 11);
let y = getRndInteger(1, 11);

console.log('Seu numero da sorte é ' + y);
console.log('O resultado é ' + x);

if (x != y){
    console.log('Perdeu');
} else{
    console.log('Ganhou!!!');
}