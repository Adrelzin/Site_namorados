const botaoInicial = document.getElementById('botao-inicial');
        const mensagemPrincipal = document.getElementById('mensagem-principal');
        const fundoAnimado = document.getElementById('fundo-animado');
        const circuloContainer = document.getElementById('circulo-container');
        const botaoAvancar1 = document.getElementById('botao-avancar-1');

        function criarEfeitoPiscar(classeEfeito) {
            const elementoPiscar = document.createElement('div');
            elementoPiscar.classList.add(classeEfeito);
            document.body.appendChild(elementoPiscar);
            return elementoPiscar;
        }

        function removerElemento(elemento, delay) {
            setTimeout(() => {
                if (elemento && elemento.parentNode) {
                    elemento.remove();
                }
            }, delay);
        }

        botaoInicial.addEventListener('click', function() {
            botaoInicial.classList.add('hidden');
            fundoAnimado.classList.add('fundo-visivel');
            
            setTimeout(() => {
                mensagemPrincipal.classList.remove('hidden');
                mensagemPrincipal.classList.add('visible');
            }, 800);
        });

        botaoAvancar1.addEventListener('click', function() {
            const piscar = criarEfeitoPiscar('piscar-effect');
            
            setTimeout(() => {
                removerElemento(piscar, 0);
                
                mensagemPrincipal.classList.remove('visible');
                mensagemPrincipal.classList.add('hidden');
                fundoAnimado.classList.remove('fundo-visivel');
                document.body.classList.add('tela-rosa');
                circuloContainer.classList.add('circulo-visible');
            }, 2000);
        });
