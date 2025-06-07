document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById("meubotao");
    const mensagem = document.getElementById("mensagem");
    const body = document.body;

    botao.addEventListener("click", function() {
        // Esconde o coração
        botao.classList.add("hidden");
        
        // Mostra a mensagem com efeito
        setTimeout(function() {
            mensagem.classList.add("visible");
            body.style.backgroundColor = "#fff9f9";
        }, 300);
    });
});