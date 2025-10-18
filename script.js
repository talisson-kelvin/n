// Lista muito maior de mensagens motivacionais
const mensagensCoracao = [
    "Vai dar certo, como sempre.",
    "Você é mais forte do que pensa.",
    "Mesmo nas curvas mais difíceis, você continua acelerando.",
    "Tudo passa, e o melhor ainda está por vir.",
    "Você é a calmaria em meio ao caos.",
    "Cada passo, mesmo pequeno, é uma vitória.",
    "Respira fundo… e lembra que você consegue.",
    "Seu sorriso ilumina mais do que você imagina.",
    "As tempestades passam e deixam o sol brilhar mais forte.",
    "Confia no seu coração, ele sabe o caminho.",
    "Não desista, os melhores dias ainda estão por vir.",
    "Você é luz, mesmo nos dias nublados.",
    "Sei que é difícil, mas você já superou tanta coisa.",
    "Continue acreditando em você, sempre.",
    "Cada curva da vida te deixa mais forte e sábia."
];

// Evento do botão flutuante
document.getElementById("botao-flutuante").addEventListener("click", () => {
    const msg = mensagensCoracao[Math.floor(Math.random() * mensagensCoracao.length)];
    const p = document.getElementById("mensagem-flutuante");
    p.textContent = msg;
    p.style.display = "block";
    setTimeout(() => { p.style.display = "none"; }, 5000);
});

// Botão versículo bíblico
document.getElementById("botao-biblia").addEventListener("click", () => {
    const versiculos = [
        "O Senhor é meu pastor; nada me faltará. – Salmos 23:1",
        "Entrega o teu caminho ao Senhor; confia nele, e ele o fará. – Salmos 37:5",
        "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus. – Isaías 41:10",
        "O Senhor é a minha luz e a minha salvação; a quem temerei? – Salmos 27:1"
    ];
    const versiculo = versiculos[Math.floor(Math.random() * versiculos.length)];
    document.getElementById("versiculo").textContent = versiculo;
});

// Salvar desabafo no localStorage
function salvarDesabafo() {
    const text = document.getElementById("desabafo").value;
    if (text.trim() === "") return;
    let desabafos = JSON.parse(localStorage.getItem("desabafos")) || [];
    desabafos.push(text);
    localStorage.setItem("desabafos", JSON.stringify(desabafos));
    document.getElementById("desabafo").value = "";
    mostrarDesabafos();
}

function mostrarDesabafos() {
    const desabafos = JSON.parse(localStorage.getItem("desabafos")) || [];
    const container = document.getElementById("desabafos-salvos");
    container.innerHTML = desabafos.map(d => `<p>💌 ${d}</p>`).join("");
}

function limparDesabafo() {
    localStorage.removeItem("desabafos");
    document.getElementById("desabafos-salvos").innerHTML = "";
    document.getElementById("desabafo").value = "";
    alert("Todos os desabafos foram limpos ❤️");
}

mostrarDesabafos();

// Próxima corrida ao clicar no capacete
document.getElementById("capacete").addEventListener("click", () => {
    const proximaCorrida = "Grande Prêmio dos Estados Unidos - 19 de outubro de 2025 ";
    document.getElementById("proxima-corrida").textContent = "🏁 " + proximaCorrida;
});

// Efeito de pétalas caindo
const petalsContainer = document.querySelector('.petals');
setInterval(() => {
    const petal = document.createElement('div');
    petal.textContent = "🌸";
    petal.style.position = 'absolute';
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.fontSize = (Math.random() * 15 + 15) + 'px';
    petal.style.animation = `fall ${Math.random() * 5 + 5}s linear`;
    petalsContainer.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 10000);
}, 500);

// Texto da carta
const mensagemCarta = `
Clara ❤️

Eu queria começar dizendo que você é uma pessoa muito especial pra mim. 
Sei que, hoje, talvez eu tenha falado ou feito coisas que não saíram como eu queria, 
e se isso te fez sentir que eu não gosto das suas brincadeiras ou que não quero estar por perto… me desculpa, de verdade.

A verdade é que eu gosto muito de conversar contigo e com o nosso espelho 
e nunca foi minha intenção te fazer pensar o contrário.

Sobre o grupo do espelho… eu sei que tenho estado mais afastado, mas não é porque não quero me aproximar pelo contrário. 
Às vezes eu fico meio perdido, sem saber como entrar nas conversas, e isso me faz parecer distante. 
Mas a verdade é que eu gosto muito da nossa amizade e quero estar mais presente.

Eu gosto muito quando fazemos trabalhos da escola juntos. Parece simples, mas pra mim é um dos momentos em que consigo interagir mais com você, 
me sentir parte, ajudar o grupo e compartilhar algo bom. Esses momentos são importantes pra mim, 
porque me lembram que, mesmo nos dias corridos ou confusos, ainda existem pessoas com quem vale a pena estar.

Se em algum momento eu te fiz sentir menos importante, ou se pareci indiferente, quero que saiba que não era o que eu queria transmitir. 
Eu admiro muito quem você é sua forma de lidar com as coisas, seu jeito único de ver o mundo, e até suas brincadeiras, 
que, no fundo, sempre trazem leveza e arrancam um sorriso, mesmo quando os dias não estão fáceis.

Então… me desculpa. Por qualquer mal entendido, por qualquer silêncio mal interpretado. 
Quero muito que a gente continue rindo, conversando e criando momentos que daqui a um tempo a gente olhe pra trás e pense: “valeu a pena”.

Você é importante pra mim, Clara. E eu não quero que isso se perca. 

Vai dar certo ❤️
`;

// Abrir carta
function abrirCartaSecreta() {
    document.getElementById("cartaSecretaModal").style.display = "block";
    escreverTexto("textoCarta", mensagemCarta, 30);
}

// Fechar carta
function fecharCartaSecreta() {
    document.getElementById("cartaSecretaModal").style.display = "none";
}

// Efeito máquina de escrever
function escreverTexto(elementId, text, speed) {
    let i = 0;
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = "";
    function type() {
        if (i < text.length) {
            elemento.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

/* ========================= */
/* MUNDO MÁGICO (Noite - tela inteira) */
/* ========================= */

const abrirMundoBtn = document.getElementById('abrirMundoBtn');
const mundoModal = document.getElementById('mundoMagicoModal');
const fecharMundoBtn = document.getElementById('fecharMundoBtn');
const ytEmbed = document.getElementById('ytEmbed');
const trackBtns = document.querySelectorAll('.track-btn');
const emotionalLines = document.querySelectorAll('.emotional-line');
const mundoCanvas = document.getElementById('mundoCanvas');
const heartMessage = document.getElementById('heartMessage');

let ctx, width, height, animationId;

// === Configuração Canvas ===
function resizeCanvas() {
    width = mundoCanvas.clientWidth;
    height = mundoCanvas.clientHeight;
    mundoCanvas.width = width * devicePixelRatio;
    mundoCanvas.height = height * devicePixelRatio;
    ctx && ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

function initCanvas() {
    if (!mundoCanvas) return;
    ctx = mundoCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

// === Coração vibrante e contínuo ===
// === Coração roxo formado por linhas, com fundo rosa e pausa ===
function drawHeartLines(progress) {
    ctx.clearRect(0, 0, width, height);
    const cx = width / 2;
    const cy = height / 2;
    const size = Math.min(width, height) * 0.28;

    // Fórmula do coração
    function heart(t) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        return { x: cx + (x * size / 32), y: cy - (y * size / 32) };
    }

    const lines = 160; // quantidade de linhas de fundo
    const tMax = Math.PI * 2 * progress;

    // === Linhas de fundo rosa (suaves) ===
    for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const startAngle = (i / lines) * Math.PI * 2;
        const rx = cx + Math.cos(startAngle) * (size * 1.8);
        const ry = cy + Math.sin(startAngle) * (size * 1.8);
        ctx.moveTo(rx, ry);

        for (let t = 0; t <= tMax; t += 0.05) {
            const pos = heart(t);
            ctx.lineTo(pos.x, pos.y);
        }

        ctx.strokeStyle = "rgba(255, 105, 180, 0.4)"; // rosa suave
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // === Linha principal roxa (mais grossa e brilhante) ===
    ctx.beginPath();
    for (let t = 0; t <= tMax; t += 0.01) {
        const pos = heart(t);
        if (t === 0) ctx.moveTo(pos.x, pos.y);
        else ctx.lineTo(pos.x, pos.y);
    }
    ctx.strokeStyle = "rgba(186, 85, 211, 0.95)"; // roxo vibrante (mediumorchid)
    ctx.shadowColor = "rgba(186, 85, 211, 0.8)";
    ctx.shadowBlur = 12;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // limpa o brilho pro resto do canvas
    ctx.shadowBlur = 0;
}

// === Animação com pausa entre loops ===
function animateHeart() {
    let start = null;
    const drawDuration = 4000; // 4s desenhando
    const pauseDuration = 1500; // 1.5s de pausa
    let pausing = false;

    function step(ts) {
        if (!start) start = ts;
        const elapsed = ts - start;
        const cycle = drawDuration + pauseDuration;
        const progress = (elapsed % cycle) / drawDuration;

        if (elapsed % cycle < drawDuration) {
            pausing = false;
            drawHeartLines(progress);
        } else if (!pausing) {
            pausing = true;
            drawHeartLines(1); // mantém o coração completo na pausa
        }

        animationId = requestAnimationFrame(step);
    }

    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(step);
}

// === Textos emocionais ===
function showEmotionalLines() {
    emotionalLines.forEach((el, idx) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 700 + idx * 800);
    });
}

// === Abrir e Fechar Mundo ===
abrirMundoBtn && abrirMundoBtn.addEventListener('click', () => {
    mundoModal.style.display = 'block';
    mundoModal.setAttribute('aria-hidden', 'false');

    // inicializa o canvas e limpa ele pra garantir que aparece certinho
    initCanvas();
    ctx && ctx.clearRect(0, 0, width, height);

    setTimeout(() => {
        animateHeart();
        showEmotionalLines();
    }, 350);
});


fecharMundoBtn && fecharMundoBtn.addEventListener('click', () => {
    if (animationId) cancelAnimationFrame(animationId);
    ctx && ctx.clearRect(0, 0, width, height);

    // remove linhas e reseta textos
    emotionalLines.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(10px)';
    });

    // esconde o modal
    mundoModal.style.display = 'none';
    mundoModal.setAttribute('aria-hidden', 'true');

    // pausa o YouTube
    ytEmbed && (ytEmbed.src = ytEmbed.src.replace('&autoplay=1', ''));
});


// === Mudar música ===
trackBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (!id) return;
        ytEmbed.src = `https://www.youtube.com/embed/${id}?rel=0&autoplay=1`;
    });
});

// Redimensionar canvas dinamicamente
window.addEventListener('resize', () => {
    if (mundoModal.style.display === 'block') resizeCanvas();
});

// ESC para sair
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mundoModal.style.display === 'block') {
        fecharMundoBtn.click();
    }
});

/* ======= MÓDULO RESPIRA (SUBSTITUIÇÃO NÃO INTRUSIVA) ======= */
/* Este bloco só define funções e listeners para o modal Respira.
   Não remove nem altera outras funcionalidades do script original. */

(function(){
  // safely query elements, return null if missing
  const $ = id => document.getElementById(id);

  const abrirRespiraBtn = $('abrirRespiraBtn');
  const fecharRespiraBtn = $('fecharRespiraBtn');
  const respiraModal = $('respiraModal');
  const iniciarRespiraBtn = $('iniciarRespiraBtn');
  const pararRespiraBtn = $('pararRespiraBtn');
  const respiraCirculo = $('respiraCirculo');
  const respiraTexto = $('respiraTexto');
  const respiraContador = $('respiraContador');
  const fraseFinal = $('fraseFinal');
  const painelSom = $('painelSom');
  const somSim = $('somSim');
  const somNao = $('somNao');
  const audioRespira = $('audioRespira');

  if (!respiraModal || !respiraCirculo) {
    // required elements missing — não ativa módulo
    console.warn('Respira: elementos necessários não encontrados. Módulo não inicializado.');
    return;
  }

  // fases configuráveis
  const fases = [
    { nome: 'Inspira… 🌿', duracao: 4, scale: 1.35, bg: 'radial-gradient(circle, #b69cff 20%, #d8b4fe 100%)' },
    { nome: 'Segura… 🤍', duracao: 7, scale: 1.0,  bg: 'radial-gradient(circle, #fff6fb 10%, #fff0f7 100%)' },
    { nome: 'Expira… 🌸', duracao: 8, scale: 0.92, bg: 'radial-gradient(circle, #ffc6d9 20%, #ffb3c6 100%)' }
  ];

  let cicloTimer = null;
  let contadorTimer = null;
  let faseAtiva = false;
  let faseIndex = 0;

  function abrirModal() {
    respiraModal.style.display = 'block';
    respiraModal.setAttribute('aria-hidden', 'false');
    if (respiraTexto) respiraTexto.textContent = 'Pronta?';
    if (respiraContador) respiraContador.textContent = '';
    respiraCirculo.style.transform = 'scale(1)';
    if (pararRespiraBtn) pararRespiraBtn.style.display = 'none';
    if (iniciarRespiraBtn) iniciarRespiraBtn.style.display = 'inline-block';
  }

  function fecharModal() {
    pararSessao();
    respiraModal.style.display = 'none';
    respiraModal.setAttribute('aria-hidden', 'true');
  }

  function executarFase(i) {
    clearInterval(contadorTimer);
    const fase = fases[i];
    let restante = fase.duracao;
    if (respiraTexto) respiraTexto.textContent = fase.nome;
    if (respiraContador) respiraContador.textContent = `(${restante}s)`;
    // animação do círculo: ajusta transform e background com transição correspondente
    respiraCirculo.style.transition = `transform ${fase.duracao}s ease-in-out, background ${fase.duracao}s ease-in-out`;
    respiraCirculo.style.transform = `scale(${fase.scale})`;
    respiraCirculo.style.background = fase.bg;
    // contador por segundo
    contadorTimer = setInterval(() => {
      restante--;
      if (respiraContador) respiraContador.textContent = `(${Math.max(restante,0)}s)`;
      if (restante <= 0) {
        clearInterval(contadorTimer);
        faseIndex = (i + 1) % fases.length;
        // pequena pausa natural entre fases
        setTimeout(() => executarFase(faseIndex), 120);
      }
    }, 1000);
  }

  function iniciarSessao() {
    if (faseAtiva) return;
    faseAtiva = true;
    faseIndex = 0;
    if (iniciarRespiraBtn) iniciarRespiraBtn.style.display = 'none';
    if (pararRespiraBtn) pararRespiraBtn.style.display = 'inline-block';
    executarFase(faseIndex);
    // timer de reinício do ciclo completo
    const total = fases.reduce((s,f) => s + f.duracao, 0);
    cicloTimer = setInterval(() => { faseIndex = 0; executarFase(0); }, total * 1000);
  }

  function pararSessao() {
    faseAtiva = false;
    clearInterval(cicloTimer);
    clearInterval(contadorTimer);
    if (pararRespiraBtn) pararRespiraBtn.style.display = 'none';
    if (iniciarRespiraBtn) iniciarRespiraBtn.style.display = 'inline-block';
    if (respiraTexto) respiraTexto.textContent = 'Pronta?';
    if (respiraContador) respiraContador.textContent = '';
    respiraCirculo.style.transition = 'transform .6s ease-in-out';
    respiraCirculo.style.transform = 'scale(1)';
    if (fraseFinal) { fraseFinal.style.opacity = 0; }
    try { if (audioRespira) { audioRespira.pause(); audioRespira.currentTime = 0; audioRespira.src = audioRespira.src; } } catch(e){}
  }

  // Event listeners (guardados com checks de existência)
  if (abrirRespiraBtn) abrirRespiraBtn.addEventListener('click', abrirModal);
  if (fecharRespiraBtn) fecharRespiraBtn.addEventListener('click', fecharModal);
  if (iniciarRespiraBtn) iniciarRespiraBtn.addEventListener('click', () => {
    // perguntar opcional sobre som se painelSom existir
    if (painelSom && typeof painelSom.style !== 'undefined') {
      painelSom.style.display = 'flex';
      painelSom.setAttribute('aria-hidden','false');
    } else {
      iniciarSessao();
    }
  });
  if (somSim) somSim.addEventListener('click', () => {
    if (painelSom) { painelSom.style.display = 'none'; painelSom.setAttribute('aria-hidden','true'); }
    if (audioRespira) {
      audioRespira.src = 'ruido marrom.mp3';
      audioRespira.volume = 0.28;
      audioRespira.play().catch(()=>{});
    }
    iniciarSessao();
  });
  if (somNao) somNao.addEventListener('click', () => {
    if (painelSom) { painelSom.style.display = 'none'; painelSom.setAttribute('aria-hidden','true'); }
    iniciarSessao();
  });
  if (pararRespiraBtn) pararRespiraBtn.addEventListener('click', () => {
    pararSessao();
    if (fraseFinal) {
      fraseFinal.style.opacity = 1;
      fraseFinal.textContent = 'Sessão pausada — respire quando quiser 💖';
      setTimeout(() => { fraseFinal.style.opacity = 0; }, 3500);
    }
  });

  // fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (painelSom && painelSom.style.display === 'flex') {
        painelSom.style.display = 'none'; painelSom.setAttribute('aria-hidden','true');
      } else if (respiraModal && respiraModal.style.display === 'block') {
        fecharModal();
      }
    }
  });

})(); // fim IIFE do módulo Respira
/* ======= FIM MÓDULO RESPIRA ======= */
/* 📌 Mural dos Sonhos */
const adicionarMetaBtn = document.getElementById('adicionarMetaBtn');
const novaMetaInput = document.getElementById('novaMeta');
const listaMetas = document.getElementById('listaMetas');

function carregarMetas() {
  const metas = JSON.parse(localStorage.getItem('metasClara')) || [];
  listaMetas.innerHTML = "";
  metas.forEach((meta, i) => {
    const div = document.createElement('div');
    div.className = 'meta-item';
    div.textContent = meta;
    div.addEventListener('click', () => removerMeta(i));
    listaMetas.appendChild(div);
  });
}

function salvarMeta(meta) {
  const metas = JSON.parse(localStorage.getItem('metasClara')) || [];
  metas.push(meta);
  localStorage.setItem('metasClara', JSON.stringify(metas));
  carregarMetas();
  alert("Você plantou uma nova esperança 🌱");
}

function removerMeta(i) {
  const metas = JSON.parse(localStorage.getItem('metasClara')) || [];
  metas.splice(i, 1);
  localStorage.setItem('metasClara', JSON.stringify(metas));
  carregarMetas();
  alert("Mais um passo concluído. Orgulhe-se disso 💖");
}

adicionarMetaBtn.addEventListener('click', () => {
  const meta = novaMetaInput.value.trim();
  if (!meta) return;
  salvarMeta(meta);
  novaMetaInput.value = "";
});

carregarMetas();
