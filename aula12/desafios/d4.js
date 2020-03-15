let carros = ['X1', 'Veloster', 'HB20'];
let preco = ['R$ 191.950', 'R$ 66.700', 'R$ 43.990']

function daValorCaro(){
lista = document.getElementById('listaCarros').options.text;
    for (x in carros){
        if (carros[x] === lista){
            document.getElementById('precoCarro').innerText = preco[x];
        }
    }
}

