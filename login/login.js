// var nome = "aleatorio"       - não usar
// let nome = "aleatorio"       - ele pode mudar no meio do código
// const nome = "aleatorio"     - é constante, não muda

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

console.log(campoSenha.type);

btnSenha.addEventListener("click", function() {
    // if(campoSenha.type == "password")
    //     campoSenha.type = "text";
    // else
    //     campoSenha.type = "password";

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"; // ? -> significa sim _____ : -> significa não
});