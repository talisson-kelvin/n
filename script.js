// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Frases do coração
const phrases = [
  "Você é minha heroína preferida 🕸️",
  "Sempre vou te proteger, Lalah 🕷️❤️",
  "Nossa amizade é mais forte que vibranium!",
  "Se eu fosse o Aranha, você seria minha MJ 🕷️💋",
  "Com grandes amigas, vêm grandes momentos!",
  "Você me puxa pra cima quando o mundo vira de cabeça pra baixo 🕸️"
];

function showPhrase() {
  const box = document.getElementById('phrase-box');
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  box.innerText = random;
  box.style.display = 'block';
  setTimeout(() => { box.style.display = 'none'; }, 6000);
}

// Teia animada (Canvas)
const canvas = document.getElementById("webCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawWeb(x, y) {
  ctx.strokeStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * (2 * Math.PI);
    const xEnd = x + Math.cos(angle) * 30;
    const yEnd = y + Math.sin(angle) * 30;
    ctx.moveTo(x, y);
    ctx.lineTo(xEnd, yEnd);
  }
  ctx.stroke();
}

document.addEventListener("click", function(e) {
  drawWeb(e.clientX, e.clientY);
});
// Texto da carta
const letterText = `Querida Lalah,

Nosso caminho teve um momento estranho, um afastamento que não nasceu da gente, mas que mesmo assim deixou marcas em mim.
Eu tentei me aproximar, tentei falar… mas parecia que minhas palavras se perdiam no vento, e confesso que isso me deixou frustrado.
A sensação de não ser ouvido machuca, ainda mais quando se trata de alguém tão importante para mim.

Mas hoje, no nosso mês-versário de amizade, eu quero que essa carta seja diferente.
Quero que ela seja um abraço em forma de palavras.
Porque apesar de tudo, o que fica no meu coração é a alegria de ter você na minha vida, de compartilhar momentos que são únicos e que me fazem acreditar na força da nossa conexão.

Obrigado por existir, por ser quem é, e por me permitir viver essa amizade.
Que a gente continue criando histórias, mesmo quando a vida tenta nos afastar.
Você é muito especial pra mim, Lalah. 🕸️❤️`;

function showLetter() {
  const container = document.getElementById("letter-container");
  const letter = document.getElementById("letter");
  const textBox = document.getElementById("letter-text");

  // Se já estiver aberto → fecha
  if (container.classList.contains("open")) {
    container.classList.remove("open");
    letter.classList.remove("open");
    textBox.textContent = "";
    return;
  }

  // Abre
  container.classList.add("open");
  setTimeout(() => { letter.classList.add("open"); }, 300);

  // Efeito máquina de escrever
  textBox.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < letterText.length) {
      textBox.textContent += letterText.charAt(i);
      i++;
      setTimeout(typeWriter, 35);
    }
  }
  setTimeout(typeWriter, 1000); // começa após a carta abrir
}

// Conectar botão
document.addEventListener("DOMContentLoaded", () => {
  const letterBtn = document.getElementById("letter-button");
  if (letterBtn) {
    letterBtn.addEventListener("click", showLetter);
  }
});
