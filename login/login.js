// var nome = "aleatorio"       - não usar
// let nome = "aleatorio"       - ele pode mudar no meio do código
// const nome = "aleatorio"     - é constante, não muda

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

btnSenha.addEventListener("click", function() {
    alert("Cliquei o botão!");
});