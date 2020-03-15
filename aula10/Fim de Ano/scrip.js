// Primeiro vamos criar a função logar
function logar(){

    //Agora vamos pegar as informações digitadas pelo usuario
    let usuarioText = document.getElementById("usuario").value;
    let senhaText = document.getElementById("senha").value;

    // Vamos criar duas listas

    //Uma com todos os usuarios
    let usuarios = ['Gabriel','Alunos']
    //E uma com todas as senhas
    let senhas = ['ADigital','AlunoDigital']

    //Vamos ver se o texto digitado está em nossa lista

    //Para isso vamos comparar com todos os usuarios cadastrados
    for (i in usuarios){
        //Vamos validar a informação
        //SE texto da pagina = ao usuario cadastrado
        if (usuarioText === usuarios[i]){
            //Se a senha digitada = a senha cadastrada
            sucesso = true;
            if (senhaText === senhas[i]){
                //Casso o usuario e a senha estajam corretos o usuario é redirecionado
                window.location.href = 'sucesso.html';
            }else{
                alert("Senha incorreta");
                return;
            }
        }
    }
}