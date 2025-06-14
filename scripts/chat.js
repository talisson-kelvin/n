const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");

const API_KEY = "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";

// Histórico da conversa para manter o contexto
let conversationHistory = [
  {
    role: "system",
    content: `Você é um médico virtual chamado SaúdeJá.
Seu trabalho é simular uma triagem médica simples, fazendo perguntas uma de cada vez para entender o problema do usuário.

1. Sempre pergunte uma coisa por vez, como:
  - "Quais são os seus sintomas?"
  - "Você tem alguma alergia a medicamentos?"
  - "Você tem alguma condição pré-existente?"
  - "Qual sua idade?"

2. Após cada resposta, continue com a próxima pergunta.

3. Só recomende algo simples depois de entender o suficiente. Seja cauteloso.

4. Encaminhe para um médico apenas se a situação for grave.

5. Use linguagem simples e acolhedora.`
  }
];

async function sendToAI(message) {
  conversationHistory.push({ role: "user", content: message });

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: conversationHistory
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Erro ao processar resposta.";

  // Adiciona resposta da IA ao histórico
  conversationHistory.push({ role: "assistant", content: reply });

  return reply;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "message self-end bg-blue-100 text-right p-3 rounded-xl max-w-[70%] ml-auto";
  userMsg.textContent = text;
  chat.appendChild(userMsg);
  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  const loadingMsg = document.createElement("div");
  loadingMsg.className = "message bg-white p-3 rounded-xl max-w-[70%] text-gray-400 italic";
  loadingMsg.textContent = "Pensando...";
  chat.appendChild(loadingMsg);
  chat.scrollTop = chat.scrollHeight;

  try {
    const reply = await sendToAI(text);
    loadingMsg.remove();

    const iaMsg = document.createElement("div");
    iaMsg.className = "message bg-white p-3 rounded-xl max-w-[70%] text-gray-800 shadow whitespace-pre-line";
    iaMsg.textContent = reply;
    chat.appendChild(iaMsg);
    chat.scrollTop = chat.scrollHeight;
  } catch (err) {
    loadingMsg.remove();
    const errorMsg = document.createElement("div");
    errorMsg.className = "message bg-red-100 text-red-700 p-3 rounded-xl max-w-[70%]";
    errorMsg.textContent = "Erro ao se conectar à IA.";
    chat.appendChild(errorMsg);
  }
});
