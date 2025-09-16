const botao1 = document.getElementById("point");
const men1 = document.getElementById("mensagem-point");

botao1.addEventListener("click", function() {
    men1.textContent = "Você pressionou o botão de point.";
});
