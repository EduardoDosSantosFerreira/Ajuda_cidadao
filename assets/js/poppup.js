document.addEventListener("DOMContentLoaded", function() {
  // Mostrar o pop-up após 40 segundos com animação suave
  setTimeout(function() {
    const popupChat = document.getElementById('popupChat');
    popupChat.classList.remove('d-none');
    popupChat.style.opacity = 0;
    popupChat.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      popupChat.style.opacity = 1;
    }, 10);
  }, 20000); // 40 segundos
  
  // Mostrar o áudio 3 segundos após a mensagem com animação suave
  setTimeout(function() {
    const audioMessage = document.getElementById('audioMessage');
    audioMessage.classList.remove('d-none');
    audioMessage.style.opacity = 0;
    audioMessage.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      audioMessage.style.opacity = 1;
    }, 10);
  }, 35000); // 43 segundos no total
  
  // Enviar a mensagem para o WhatsApp
  document.getElementById('sendMessage').addEventListener('click', function() {
    const userMessage = document.getElementById('userMessage').value;
    if (userMessage.trim() !== "") {
      const whatsappUrl = `https://wa.me/5513996679977?text=${encodeURIComponent(userMessage)}`;
      window.open(whatsappUrl, '_blank');
    }
  });

  // Funcionalidade de minimizar o chat
  document.getElementById('minimizeChat').addEventListener('click', function() {
    const chatPopup = document.getElementById('popupChat');
    chatPopup.classList.toggle('minimized');
  });
});
