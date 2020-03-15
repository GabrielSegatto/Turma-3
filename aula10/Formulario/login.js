function login(){
    let idade = document.getElementById("idade").value;
    let senha = document.getElementById("senha").value;

    if (idade < 18){
        alert("Volte em alguns anos");
    } else{
        if (senha != "senha"){
            alert("Senha incorreta")
        }else{
            window.location.href = "sucesso.html"
        }
    }
}