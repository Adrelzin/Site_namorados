document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById("meubotao");
    const mensagem = document.getElementById("mensagem");
    const fundoAnimado = document.getElementById("fundo-animado");

    botao.addEventListener("click", function() {

        botao.classList.add("hidden");
    
        fundoAnimado.classList.remove("fundo-escondido");
        fundoAnimado.classList.add("fundo-visivel");
        
        setTimeout(function() {
            mensagem.classList.add("visible");
        }, 200);
    });
});
