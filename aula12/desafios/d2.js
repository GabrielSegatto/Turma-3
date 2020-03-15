function calcular(){
    console.log('teste')
    let altura = document.getElementById('alt').value;
    let largura = document.getElementById('lar').value;
    let profundidade = document.getElementById('pro').value;

    litros = altura * largura * profundidade
    litros *= 1000

    document.getElementById('lit').innerText = `${litros} litros`
}
function calcular(){
let altura = document.getElementById("altura").value;
let largura = document.getElementById("largura").value;
let profundidade = document.getElementById("profundidade").value;

litros = altura * largura * profundidade;
litros = litros * 1000;

document.getElementById("total").innerText =  `${litros} litros`
}

