const checkboxes  = document.querySelectorAll('input[type="checkbox"]');
const statusRetirada = document.querySelectorAll(".status");

checkboxes.forEach((caixinha, indice, lista) => {
    // // corpo da função
    // console.log("caixinha: ", caixinha);
    // console.log("indice: ", indice);
    // console.log("lista: ", lista);

    caixinha.addEventListener("change", () => {
        if(caixinha.checked == true)
        {
            statusRetirada[indice].classList.remove("aguardar");
            statusRetirada[indice].classList.add("retirado");
            statusRetirada[indice].textContent = "Retirado";
        }
        else
        {
            statusRetirada[indice].classList.remove("retirado");
            statusRetirada[indice].classList.add("aguardar");
            statusRetirada[indice].textContent = "Aguardando Retirada";
        }
    })
})