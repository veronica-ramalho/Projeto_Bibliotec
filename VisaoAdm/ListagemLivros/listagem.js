const livros = document.querySelectorAll(".livro");
const btnAnterior = document.getElementById("pagina-anterior");
const btnProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//* Configuração da paginação
const livrosPorPagina = 4; // define quantos livros seão mostado em cada página
let paginaAtual = 1; // guarda qual página está sendo exibida, começando na página 1

//* Calculad o total de páhinas
// divide a quantidade total de livros pela quantidde de páginas
// Math.ceil() -> arrendonda o resultado para cima
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

//* Função responsavel por mostrar a página (atualizar os elementos)
function mostrarPagina()
{
    // Descobre o indice do primeiro livro que deve aparecer
    const inicio = (paginaAtual - 1) * livrosPorPagina;
    const fim = inicio + livrosPorPagina; //descobre até onde os livros devem ser exibidos

    // Percorre toda a lista de livros encontrados no HTML
    // "livro" representa o elementos atual
    // "posicao" representa a posição desse livro na lista
    livros.forEach((livro, posicao) => {
        // Verifica se o indice do livro está dentro o intervalo da página atual
        if(posicao >= inicio && posicao < fim) // se estiver dentro do intervalo, mostra o livro
            livro.style.display = "grid"; 
        else
            livro.style.display = "none"; // se não estiver, esonde o livro
    })

    numeroPagina.textContent = paginaAtual; // Atualiza no HTML o número da p´gina atual

    // Inicialmente, consideramos "fim" como posição do ultimo livro mostrado
    let ultimoLivro = fim;

    if(ultimoLivro > livros.length) // se o valor ultrapassar a quantidade real de livos, usamos a quantidadde total
        ultimoLivro = livros.length;

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`;
}

// EVENTO DE CLICK NO BOTÃO DE PRÓXIMA PÁGINA

btnProxima.addEventListener("click", () => {
    if(paginaAtual < totalPaginas) // Só permite avançar se ainda existir uma próxima página
    {
        paginaAtual++;
        mostrarPagina(); // Atualiza os livo exibidos na tela
    }
})

//EVENTO DE CLICK NO BOTÃO D PÁGINA ANTERIOR
btnAnterior.addEventListener("click", () => {
    if(paginaAtual > 1) // Só permite voltar se não estivermos na primeira página
    {
        paginaAtual--;
        mostrarPagina();
    }
})

// Quando a página carregar, precisamos executar a função de mostrar página uma vez para esconder
// os livros que não pertencem a primeira página
mostrarPagina();