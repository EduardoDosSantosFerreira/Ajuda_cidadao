// Função genérica para bloquear eventos
function bloquearEvento(event) {
    event.preventDefault();
    return false;
}

// Bloqueia o menu de contexto (botão direito do mouse)
document.addEventListener('contextmenu', bloquearEvento, false);

// Bloqueia teclas específicas e atalhos (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+C, Ctrl+V, Ctrl+X)
document.addEventListener('keydown', function(e) {
    const teclasBloqueadas = [123, 73, 85, 67, 86, 88, 44]; // F12, Ctrl+Shift+I, Ctrl+U, Ctrl+C, Ctrl+V, Ctrl+X, Print Screen
    const combinacoesTeclas = e.ctrlKey && (e.keyCode === 73 || e.keyCode === 85 || e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 88);

    if (teclasBloqueadas.includes(e.keyCode) || combinacoesTeclas || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        bloquearEvento(e);
    }
}, false);

// Bloqueia a inspeção via console (verifica o uso de ferramentas de desenvolvedor)
(function() {
    setInterval(function() {
        if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
            bloquearEvento(); // Interrompe se Firebug estiver ativo
        }
        if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof console.profiles === "object" && console.profiles.length > 0)) {
            bloquearEvento();
            console.clear();
        }

        try {
            const devtools = /./;
            devtools.toString = function() {
                throw "DevTools bloqueado!";
            };
            console.log('%c', devtools);
        } catch (err) {
            bloquearEvento();
        }
    }, 100);
})();

// Bloqueia a seleção de texto, arrastar elementos e copiar/colar/cortar com mouse
['selectstart', 'dragstart', 'copy', 'cut', 'paste'].forEach(function(eventName) {
    document.addEventListener(eventName, bloquearEvento, false);
});

// Bloqueia o uso de teclas de função (F1 a F12) e navegação (setas, Home, End, etc.)
document.addEventListener('keydown', function(e) {
    const teclasFuncao = e.keyCode >= 112 && e.keyCode <= 123;  // F1 a F12
    const teclasNavegacao = e.keyCode >= 33 && e.keyCode <= 40; // PageUp, PageDown, setas, Home, End

    if (teclasFuncao || teclasNavegacao) {
        bloquearEvento(e);
    }
}, false);

// Bloqueia teclas de sistema como Ctrl, Alt, Shift se usadas sozinhas
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.altKey || e.shiftKey) {
        bloquearEvento(e);
    }
}, false);

// Medida adicional: Detecta se o inspetor de elementos está sendo usado
(function() {
    const devToolsOpened = function() {
        console.clear();
        return bloquearEvento(); // Bloqueia se ferramentas de desenvolvedor forem abertas
    };

    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            devToolsOpened();
        }
    });

    console.log(element);
})();
