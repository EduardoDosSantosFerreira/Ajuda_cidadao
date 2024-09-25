let fontSize = 1;
function aumentarTexto() {
    if (fontSize < 3) {
        fontSize += 0.1;
        document.body.style.fontSize = fontSize + 'em';
    }
}
function diminuirTexto() {
    if (fontSize > 0.7) {
        fontSize -= 0.1;
        document.body.style.fontSize = fontSize + 'em';
    }
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}