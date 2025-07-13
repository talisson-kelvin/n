const frases = [
  "Você é incrível, Lalah!",
  "Nunca se esqueça de como você é especial.",
  "Nosso universo é único! 🕸️",
  "Tátá sempre vai estar aqui por você. 💗",
  "Feliz mesversário, minha aranha favorita! 🕷️",
  "Cada detalhe foi feito com carinho só pra você!",
  "Você é o coração do Lalahverso!",
  "Tátá te admira muito. Muito mesmo.",
  "Você é tão única que merecia um universo só seu. E ele existe!",
  "Nada nesse universo se compara ao brilho que você traz pra minha vida.",
  "Se eu pudesse, criaria mil versões desse site só pra te fazer sorrir. 💫",
  "Hoje o Lalahverso brilha só pra você!",
  "Você tem superpoderes: encanta, acalma e alegra o mundo ao redor.",
  "Tá tudo aqui porque você merece se sentir amada, sempre.",
  "Ei Lalah, obrigada por existir no meu universo. 🌟"
];

const heartButton = document.getElementById("heartButton");
heartButton.addEventListener("click", () => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  alert(frase);
});

// Botão da Surpresa
const surpresaBtn = document.getElementById("surpresaButton");
surpresaBtn.addEventListener("click", () => {
  alert("🌟 SURPRESA 🌟\nVocê é a heroína mais linda de todo o Lalahverso! Obrigada por existir.");
});

// Botão de Superpoder
const superBtn = document.getElementById("superButton");
superBtn.addEventListener("click", () => {
  document.body.classList.add("super-bg");
  alert("💥 Superpoder Ativado! Agora você emana luz e carinho por onde passa. Continue sendo essa pessoa mágica!");
  setTimeout(() => {
    document.body.classList.remove("super-bg");
  }, 4000);
});
