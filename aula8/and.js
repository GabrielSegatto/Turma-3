function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let x = getRndInteger(1, 11);
let x1 = getRndInteger(11, 21);
let y = getRndInteger(1, 11);
let z = getRndInteger(11, 21);

console.log('Seus numeros da sorte são ' + y + ' e ' + z);
console.log('O resultado é ' + x + ' e ' + x1);

if ((x == y ) || (x1 == z)){
    console.log('Perdeu');
} else{
    console.log('Ganhou!');
}