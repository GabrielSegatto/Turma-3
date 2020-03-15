function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let x = getRndInteger(1, 20);
let y = getRndInteger(1, 11);
let z = getRndInteger(11, 21);

console.log('Seus numeros da sorte são ' + y + ' e ' + z);
console.log('O resultado é ' + x );

if ((x == y ) || (x == z)){
    console.log('Ganhou');
} else{
    console.log('Perdeu');
}