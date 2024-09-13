
function contactUs(titulo) {
    // Número de WhatsApp fixo
    var telefone = '5513996679977'; // número no formato internacional

    // Mensagem a ser enviada via WhatsApp
    var mensagem = `Olá, estou interessado em ${titulo}.`;
    
    // URL para enviar a mensagem via WhatsApp
    var url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    
    // Redireciona o usuário para o WhatsApp com a mensagem pronta
    window.open(url, '_blank');
}

document.getElementById('show-more-icon').addEventListener('click', function() {
    var servicosExtra = document.getElementById('servicos-extra');
    var icon = document.getElementById('show-more-icon');
    
    if (servicosExtra.style.display === 'none') {
        servicosExtra.style.display = 'flex'; // Use 'flex' para manter o layout em coluna
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        icon.style.marginTop = '20px'; // Ajusta a posição do ícone para baixo
    } else {
        servicosExtra.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        icon.style.marginTop = '0'; // Volta a posição do ícone para o topo
    }
});
