function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let facil = [
    {pergunta:"Qual é a sigla do elemento Ouro",
    resposta:[
        {res:"Ou", coe:"e"},
        {res:"Or", coe:"e"},
        {res:"Au", coe:"c"},
        {res:"Ne", coe:"e"}
    ]},
    {pergunta:"Qual é a capital do Brasil",
    repsosta:[
        {res:"Sãp Paulo", coe:"e"},
        {res:"Brasilia", coe:"c"},
        {res:"Rio de Janeiro", coe:"e"},
        {res:"Minas Gerais", coe:"e"}
    ]},
    {pergunta:"Qual é a estrutura molecular da agua",
    resposta:[
        {res:"O2H", coe:"e"},
        {res:"L(AG)", coe:"e"},
        {res:"B2A4", coe:"e"},
        {res:"H2O", coe:"c"}
    ]},
    {pergunta:"Qual é o resultado da conta 2+2x5?",
    resposta:[
        {res:"20", coe:"e"},
        {res:"12", coe:"c"},
        {res:"225", coe:"e"},
        {res:"18", coe:"e"}
    ]},
    {pergunta:"A qual clase o ser humano pertence?",
    resposta:[
        {res:"Mamifero", coe:"c"},
        {res:"Oviparo", coe:"e"},
        {res:"Primata", coe:"e"},
        {res:"Araquinideo", coe:"e"}
    ]}
];

let medio = [
    {pergunta:"Quanto tempo leva para a luz do Sol chegar a Terra?",
    resposta:[
        {res:"0.2 sec", coe:"e"},
        {res:"1 h ", coe:"e"},
        {res:"60 min", coe:"e"},
        {res:"8 min", coe:"c"}
    ]},
    {pergunta:"",
    resposta:[
        {res:"", coe:"e"},
        {res:"", coe:"e"},
        {res:"", coe:"c"},
        {res:"", coe:"e"}
    ]},
    {pergunta:"",
    resposta:[
        {res:"", coe:"e"},
        {res:"", coe:"e"},
        {res:"", coe:"c"},
        {res:"", coe:"e"}
    ]},
    {pergunta:"",
    resposta:[
        {res:"", coe:"e"},
        {res:"", coe:"e"},
        {res:"", coe:"c"},
        {res:"", coe:"e"}
    ]}
];

let dificil = [
    {pergunta:"",
    resposta:[
        {res:"", coe:"e"},
        {res:"", coe:"e"},
        {res:"", coe:"c"},
        {res:"", coe:"e"}
    ]},
    {pergunta:"",
    resposta:[
        {res:"", coe:"e"},
        {res:"", coe:"e"},
        {res:"", coe:"c"},
        {res:"", coe:"e"}
    ]},
    {pergunta:"",
    resposta:[
        {res:"", coe:"e"},
        {res:"", coe:"e"},
        {res:"", coe:"c"},
        {res:"", coe:"e"}
    ]},
    {pergunta:"",
    resposta:[
        {res:"", coe:"e"},
        {res:"", coe:"e"},
        {res:"", coe:"c"},
        {res:"", coe:"e"}
    ]}
];

let contador = 0;

function newQuestion(){
    contador += 1;
    if (contador<= 2){
        dificuldade = facil;
    }else if(contador <= 4){
        dificuldade = medio;
    }else{
        dificuldade = dificil;
    }

    n = aleatorio(0, 4);
    while( n == historico){
        n = aleatorio(0, 4);
    }
    historico = n;

    document.getElementById("questao").innerText = dificuldade[n].pergunta;

    document.getElementById("r0").value = dificuldade[n].resposta[0].res;
    document.getElementById("r1").value = dificuldade[n].resposta[1].res;
    document.getElementById("r2").value = dificuldade[n].resposta[2].res;
    document.getElementById("r3").value = dificuldade[n].resposta[3].res;
}

function pontuar(x){
    selecionado = dificuldade[n].resposta[x].coe;
    if (selecionado == "c"){
        if (dificuldade == facil){
            pontos += 20
        }else if (dificuldade == medio){
            pontos += 30
        }else if (dificuldade == dificil){
            pontos += 50
        }
    }
}