let a = 1;
let b = -4;
let c = 5;

delta = b * b;
delta = delta - ( 4 * a * c );
delta = Math.sqrt(delta);


x = -b + delta;
x = x / (2 * a);

resultadoPositivo = x;
x = 0;

x = -b - delta;
x = x / (2 * a);

resultadoNegativo = x;

console.log(`O resultado + foi ${resultadoPositivo} 
            e o negativo foi ${resultadoNegativo} `);
