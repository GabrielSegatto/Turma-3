
// ARRAYS
// pop
// O método pop remove o último elemento do vetor e o retorna como resultado.
//  Nesse caso o array original é alterado.
//  let vetor1 = new Array(1, 2, 3, 2, 7);
//  let ultimo = vetor1.pop();

// push
// O push é usado para adicionar um ou vários elementos, 
// recebidos como parâmetro, no final do vetor que o invoca.
//  A seguir temos um exemplo utilizando o mesmo vetor da Listagem 5. 
//  Nele inserimos os valores 9 e 5 no final do vetor.
// let  vetor1 = new Array(1, 2, 3, 2, 7);
//     vetor1.push(9, 5);

// unshift
// A função unshit funciona semelhante à push, 
// mas o invés de inserir elementos no final do array, 
// os insere no início. 
// Podem ser passados um ou vários elementos como parâmetro.

//     let vetor1 = new Array(-1, 0 ,1, 2, 3, 4, 5);
//     let texto = vetor1.unshift(10);

// reverse
// Como o nome sugere, o método reverse inverte os elementos de um vetor,
//  fazendo com que o último se torne o primeiro, 
//  o primeiro se torne o último e os intermediários sigam a mesma lógica. 
//  A chamada a este método não requer nenhum parâmetro.
// let vetor1 = new Array(1, 2, 3, 4, 5);
//     vetor1.reverse();

// shift
// Esta função remove o primeiro elemento de um vetor qualquer e o retorna como resultado.
// Assim como no pop, o vetor que origina a chamada a este método fica alterado após sua execução.
// let vetor1 = new Array(1, 2, 3, 4, 5);
// let primeiro = vetor1.shift();


// indexOf
// Esta função recebe como parâmetro um valor a ser localizado no array e retorna,
//     caso ele seja encontrado, a sua posição na lista.
// A contagem das posições inicia em zero e não em um como estamos acostumados em nosso dia - a - dia.
// Caso o elemento não seja localizado, o retorno é o valor - 1.


// let vetor1 = new Array(1, 2, 3, 4, 5);
// let indice = vetor1.indexOf(3);


// join
// A função join pode ser chamada de duas formas: 
// Na primeira não são informados parâmetros e o retorno é um string contendo todos os elementos do vetor separados por vírgula.
// Na segunda chamada é informado um texto para ser vir como separador, 
// e o retorno é semelhante à primeira forma, 
// mas no lugar das vírgulas é exibido o separador indicado.


// let vetor1 = new Array(1, 2, 3, 4, 5);
// let elementos = vetor1.join(“-“);

// sort
// Este método, de nome sugestivo, ordena os elementos do vetor. 
// A chamada mais simples a essa função não requer parâmetros e ordena no array e ordem crescente.
// Uma chamada mais complexa recebe uma função de ordenação como parâmetro,
//     esta função define o cálculo a ser considerado na comparação entre dois elementos.

// let vetor1 = new Array(3, 2, 1, 5, 4);
// vetor1.sort();

// splice
// Até aqui o splice é o método mais complexo apresentado, 
// ele serve para remover e/ou adicionar items de/em um vetor. 
// A chamada a este método requer dois ou vários (três ou mais) parâmetros.

// O primeiro parâmetro representa a posição do elemento a ser removido (começando do zero) 
// O segundo indica a quantidade de elementos a serem removidos do vetor, 
// a partir da posição indicada.
// Caso não se deseje remover nenhum item, basta passar 0 (zero) como segundo parâmetro. 
// No exemplo a seguir o segundo e o terceiro elementos são removidos:

//     let vetor1 = new Array(1, 2, 3, 4, 5);
//     vetor1.splice(1,2);


// Caso se deseje apenas inserir elementos em determinada posição, 
// basta informá-la como primeiro parâmetro, 
// informar 0 (zero) no segundo e, a partir daí, 
// informar o(s) elemento(s) a ser(em) adicionado(s).

//     let vetor1 = new Array(1, 2, 3, 4, 5);
//     vetor1.splice(1, 0, 9, 8);
