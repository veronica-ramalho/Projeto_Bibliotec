const menu = document.getElementById("menu"); //pegando o elemento pelo ID

//estamos pegando o elemento de forma generica -pode ser classe (precisar trazer o ponto) 
//ou pode ser ID (precisa trazer o #)
const navMenu = document.querySelector(".navegacao"); 

menu.addEventListener("click", function() {
    if(navMenu.className == "navegacao")
        navMenu.className = "navegacao ativo";
    else
        navMenu.className = "navegacao";
})