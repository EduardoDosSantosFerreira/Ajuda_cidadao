    // Variáveis para armazenar a posição anterior do scroll e a barra de navegação
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    // Função para controlar o scroll
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        
        // Se o usuário rolar para baixo, a navbar desaparece
        if (prevScrollPos < currentScrollPos) {
            navbar.style.top = "-100px"; // Esconde a navbar (ajuste o valor para o tamanho da sua navbar)
        } else {
            navbar.style.top = "0"; // Mostra a navbar
        }
        
        prevScrollPos = currentScrollPos;
    };
