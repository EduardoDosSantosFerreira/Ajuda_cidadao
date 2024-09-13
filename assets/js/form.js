
    function mostrarFormulario() {
        document.getElementById("formHelp").style.display = "block";
    }

    function fecharFormulario() {
        document.getElementById("formHelp").style.display = "none";
    }

    function enviarWhatsApp() {
        // Capturando os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const problema = document.getElementById('problema').value;

        // Verifica se os campos estão preenchidos
        if (nome && cpf && problema) {
            // Criando a mensagem automática
            const mensagem = `Olá, meu nome é ${nome}, meu CPF é ${cpf}, e estou com o seguinte problema: ${problema}`;

            // Número de telefone fixo
            const telefone = '13996679977'; // Formato internacional (sem espaços ou caracteres especiais)

            // URL do WhatsApp com número e mensagem
            const url = `https://wa.me/55${telefone}?text=${encodeURIComponent(mensagem)}`;

            // Redirecionar para a URL do WhatsApp, preenchendo automaticamente a mensagem
            window.open(url, '_blank');
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    }

    function formatName(input) {
        // Remove qualquer caractere que não seja uma letra
        input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    
        // Capitaliza a primeira letra de cada palavra
        input.value = input.value.replace(/\b\w/g, char => char.toUpperCase());
    }
    
    function validateCPF(input) {
        // Remove caracteres não numéricos
        input.value = input.value.replace(/\D/g, '');
    
        // Verifica se o comprimento é 11
        if (input.value.length > 11) {
            input.value = input.value.slice(0, 11);
        }
    }
    