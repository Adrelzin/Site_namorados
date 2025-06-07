document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById("meubotao");
    const mensagem = document.getElementById("mensagem");
    const body = document.body;

    botao.addEventListener("click", function() {
        botao.classList.add("hidden");
        setTimeout(function() {
            mensagem.classList.add("visible");
            body.style.backgroundImage = "url('fundo.jpg')";
        }, 300);
    });
});
