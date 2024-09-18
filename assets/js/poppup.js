document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('popupChat').classList.remove('d-none');
    }, 6000); // 20 segundos
    
    document.getElementById('sendMessage').addEventListener('click', function() {
      const userMessage = document.getElementById('userMessage').value;
      if (userMessage.trim() !== "") {
        const whatsappUrl = `https://wa.me/5513996679977?text=${encodeURIComponent(userMessage)}`;
        window.open(whatsappUrl, '_blank');
      }
    });
  });
  