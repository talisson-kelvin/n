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
