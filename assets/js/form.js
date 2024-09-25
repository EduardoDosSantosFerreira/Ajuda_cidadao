const nomesInvalidos = [
  "admin",
  "macaco",
  "perereca",
  "piroca",
  "pika",
  "xibiu",
  "pau",
  "penis",
  "peroca",
  "cachorro",
  "viado",
  "otário",
  "idiota",
  "imbecil",
  "otaria",
  "buceta",
  "caralho",
  "merda",
  "porra",
  "puta",
  "puto",
  "arrombado",
  "bosta",
  "cu",
  "desgraça",
  "foda",
  "fuder",
  "bicha",
  "biscate",
  "boquete",
  "bucetuda",
  "cuzão",
  "escroto",
  "filho da puta",
  "piranha",
  "prostituta",
  "rola",
  "safado",
  "vagabunda",
  "vagabundo",
  "babaca",
  "boceta",
  "bosta",
  "cabra safado",
  "cabra safada",
  "cagão",
  "cagona",
  "cuzinho",
  "escrota",
  "fudido",
  "fudida",
  "merdinha",
  "nojento",
  "nojenta",
  "otário",
  "otária",
  "pau no cu",
  "pinto",
  "pintudo",
  "pintuda",
  "porcaria",
  "safada",
  "safado",
  "trouxa",
  "vaca",
  "xana",
  "xoxota",
  "xonga",
  "bichinha",
  "boiola",
  "boiolinha",
  "boizinho",
  "bofe",
  "bofinho",
  "bofe de elite",
  "bofe escândalo",
  "bofe louco",
  "bofe piriguete",
  "bofe safado",
  "bofe viado",
  "bofe viadinho",
  "bofe viadão",
  "preto",
  "neguinho",
  "crioulo",
  "escravo",
  "favelado",
  "mucama",
  "mulato",
  "pardo",
  "zulu",
  "xanão",
];

function mostrarFormulario() {
  const form = document.getElementById("formHelp");
  form.style.display = "block";
  form.style.opacity = 0;
  form.style.transition = "opacity 0.5s ease-in-out";
  setTimeout(() => {
    form.style.opacity = 1;
  }, 10);
}

function fecharFormulario() {
  const form = document.getElementById("formHelp");
  form.style.opacity = 0;
  form.style.transition = "opacity 0.5s ease-in-out";
  setTimeout(() => {
    form.style.display = "none";
  }, 500);
}

function enviarWhatsApp() {
  // Capturando os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const problema = document.getElementById("problema").value;

  // Verifica se os campos estão preenchidos e se o CPF tem 11 dígitos
  if (nome && cpf && problema) {
    if (nomesInvalidos.includes(nome.toLowerCase())) {
      alert("Por favor, insira um nome válido!");
      return;
    }
    if (cpf.length === 11 && !/^(.)\1*$/.test(cpf)) {
      // Criando a mensagem automática
      const mensagem = `Olá, meu nome é ${nome}, meu CPF é ${cpf}, e estou com o seguinte problema: ${problema}`;

      // Número de telefone fixo
      const telefone = "5513996679977"; // Formato internacional (sem espaços ou caracteres especiais)

      // URL do WhatsApp com número e mensagem
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
        mensagem
      )}`;

      // Redirecionar para a URL do WhatsApp, preenchendo automaticamente a mensagem
      window.open(url, "_blank");
    } else {
      alert(
        "Por favor, insira um CPF válido com 11 dígitos e que não tenha todos os números iguais!"
      );
    }
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}

function formatName(input) {
  // Remove qualquer caractere que não seja uma letra
  input.value = input.value.replace(/[^a-zA-Z\s]/g, "");

  // Capitaliza a primeira letra de cada palavra
  input.value = input.value.replace(/\b\w/g, (char) => char.toUpperCase());

  // Limita o nome a 35 caracteres
  if (input.value.length > 35) {
    input.value = input.value.slice(0, 35);
  }
}

function validateCPF(input) {
  // Remove caracteres não numéricos
  input.value = input.value.replace(/\D/g, "");

  // Verifica se o comprimento é 11
  if (input.value.length > 11) {
    input.value = input.value.slice(0, 11);
  }
}


