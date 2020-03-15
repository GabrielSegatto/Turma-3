let x = 0;
x = 11;
console.log(x);

if ((x = 12) || (x = 10)){
    console.log('Correto');
} else{
    console.log('Acho que não');
}