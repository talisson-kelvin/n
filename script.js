const frases = [
  "Você é minha heroína favorita 💙",
  "Com você tudo é mais divertido 🕷️",
  "Feliz mesversário, minha Lalah!",
  "Hoje o mundo é seu!",
  "Você merece todas as teias do carinho 🕸️",
  "Sempre estarei aqui por você 💖",
  "Meu orgulho, minha amiga incrível",
  "Você ilumina meus dias como a cidade do Aranha ✨",
  "Tátá te acha o máximo!"
];

const botao = document.getElementById("botaoCoracao");
botao.addEventListener("click", () => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  const bolha = document.createElement("div");
  bolha.textContent = frase;
  bolha.style.position = "fixed";
  bolha.style.bottom = "80px";
  bolha.style.right = "30px";
  bolha.style.background = "#222";
  bolha.style.color = "#fff";
  bolha.style.padding = "10px 15px";
  bolha.style.borderRadius = "10px";
  bolha.style.boxShadow = "0 0 10px rgba(255,255,255,0.3)";
  bolha.style.zIndex = 9999;
  document.body.appendChild(bolha);

  setTimeout(() => {
    bolha.remove();
  }, 3000);
});
