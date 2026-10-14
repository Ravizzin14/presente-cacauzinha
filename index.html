/*
 * PERSONALIZAÇÃO DO SITE
 * Ajuste relationshipStart para a data real do namoro.
 */
const CONFIG = {
  relationshipStart: "2026-03-13T00:00:00",
  songTitle: "Imprevisto — Yago Oproprio ft. Rô Rosa",
  audioFile: "",
  quiz: [
    {
      question: "Qual é uma das coisas que eu mais amo em você?",
      answers: ["Seu jeitinho e sua personalidade", "Só quando você concorda comigo 😅", "Não sei, me conta!"],
      correct: 0,
      message: "É isso, meu amor! Seu jeitinho é uma das coisas que te fazem tão especial. ♡"
    },
    {
      question: "Qual é o meu presente favorito?",
      answers: ["Passar tempo com você", "Um planeta inteiro", "Uma montanha de tarefas"],
      correct: 0,
      message: "Acertou! Um momento contigo vale muito pra mim. 🌙"
    },
    {
      question: "Quantos meses estamos comemorando?",
      answers: ["5 meses", "7 meses", "17 meses"],
      correct: 1,
      message: "Sete meses da nossa história — e que venham muitos capítulos lindos! 💗"
    }
  ]
};

const $ = (selector) => document.querySelector(selector);
const relationshipTime = $("#relationshipTime");
const relationshipSub = $("#relationshipSub");
const startDate = new Date(CONFIG.relationshipStart);

function updateCounter() {
  if (Number.isNaN(startDate.getTime())) {
    relationshipTime.textContent = "7 meses de amor";
    return;
  }
  const now = new Date();
  let months = (now.getFullYear() - startDate.getFullYear()) * 12 + now.getMonth() - startDate.getMonth();
  if (now.getDate() < startDate.getDate()) months--;
  months = Math.max(0, months);
  const anniversary = new Date(startDate);
  anniversary.setMonth(startDate.getMonth() + months);
  const days = Math.max(0, Math.floor((now - anniversary) / 86400000));
  relationshipTime.textContent = `${months} ${months === 1 ? "mês" : "meses"} de amor`;
  relationshipSub.textContent = days === 0 ? "Um dia especial pra guardar no coração. ♡" : `E mais ${days} ${days === 1 ? "dia" : "dias"} de história juntinhos.`;
}
updateCounter();

$("#songTitle").textContent = CONFIG.songTitle;
$("#musicLabel").textContent = "Clipe oficial";

let ambientContext = null;
let ambientNodes = [];
let ambientOn = false;
let ambientTimer = null;

function stopAmbient() {
  ambientOn = false;
  if (ambientTimer) {
    clearInterval(ambientTimer);
    ambientTimer = null;
  }
  ambientNodes.forEach((node) => {
    try { node.gain.gain.setTargetAtTime(0.0001, ambientContext.currentTime, 0.25); } catch (_) {}
    try { node.osc.stop(ambientContext.currentTime + 1); } catch (_) {}
  });
  ambientNodes = [];
  $("#musicLabel").textContent = "Ligar música suave";
}

function playAmbientNote(freq, delay = 0) {
  if (!ambientContext || !ambientOn) return;
  const osc = ambientContext.createOscillator();
  const gain = ambientContext.createGain();
  const filter = ambientContext.createBiquadFilter();
  osc.type = "sine";
  osc.frequency.value = freq;
  filter.type = "lowpass";
  filter.frequency.value = 650;
  gain.gain.setValueAtTime(0.0001, ambientContext.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(0.035, ambientContext.currentTime + delay + 1.5);
  gain.gain.setTargetAtTime(0.0001, ambientContext.currentTime + delay + 4.2, 1.2);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ambientContext.destination);
  osc.start(ambientContext.currentTime + delay);
  osc.stop(ambientContext.currentTime + delay + 8);
  ambientNodes.push({ osc, gain });
  osc.onended = () => { ambientNodes = ambientNodes.filter((item) => item.osc !== osc); };
}

function startAmbient() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    $("#musicLabel").textContent = "Som não compatível";
    return;
  }
  if (!ambientContext) ambientContext = new AudioContextClass();
  ambientContext.resume();
  ambientOn = true;
  $("#musicLabel").textContent = "Pausar música suave";
  const melody = [261.63, 329.63, 392.00, 329.63, 293.66, 349.23, 440.00, 349.23];
  let note = 0;
  const playPhrase = () => {
    if (!ambientOn) return;
    playAmbientNote(melody[note % melody.length]);
    if (note % 4 === 0) playAmbientNote(melody[(note + 2) % melody.length] / 2, 0.15);
    note++;
  };
  playPhrase();
  ambientTimer = setInterval(playPhrase, 2600);
}

$("#musicToggle").addEventListener("click", () => {
  if (ambientOn) stopAmbient();
  else startAmbient();
  $("#musica").scrollIntoView({ behavior: "smooth" });
});

let youtubePlayer = null;
window.onYouTubeIframeAPIReady = function () {
  if (!window.YT || !window.YT.Player) return;
  youtubePlayer = new YT.Player("youtubePlayer", {
    events: {
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.PLAYING && ambientOn) stopAmbient();
      }
    }
  });
};
const youtubeApi = document.createElement("script");
youtubeApi.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(youtubeApi);

$("#openSurprise").addEventListener("click", () => {
  $("#historia").scrollIntoView({ behavior: "smooth" });
  spawnHearts(12);
});

const photoImages = document.querySelectorAll("[data-photo]");
photoImages.forEach((img) => {
  const path = img.dataset.photo;
  img.src = path;
  img.onerror = () => {
    img.removeAttribute("src");
    img.closest(".photo-slot")?.classList.add("empty-photo");
  };
});

let questionIndex = 0;
let score = 0;
const questionText = $("#questionText");
const answersEl = $("#answers");
const feedback = $("#quizFeedback");
const nextButton = $("#nextQuestion");

function renderQuestion() {
  const q = CONFIG.quiz[questionIndex];
  $("#quizProgress").textContent = `PERGUNTA ${questionIndex + 1} DE ${CONFIG.quiz.length}`;
  $("#quizCount").textContent = "♡ ".repeat(questionIndex) + "♥ " + "♡ ".repeat(CONFIG.quiz.length - questionIndex - 1);
  questionText.textContent = q.question;
  answersEl.innerHTML = "";
  feedback.textContent = "";
  nextButton.hidden = true;
  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      [...answersEl.children].forEach((b) => { b.disabled = true; });
      if (index === q.correct) {
        button.classList.add("correct");
        feedback.textContent = q.message;
        score++;
      } else {
        button.classList.add("wrong");
        answersEl.children[q.correct]?.classList.add("correct");
        feedback.textContent = "O importante é que a gente continue descobrindo coisas lindas um sobre o outro. ♡";
      }
      nextButton.hidden = false;
      nextButton.textContent = questionIndex === CONFIG.quiz.length - 1 ? "Ver resultado ✨" : "Próxima pergunta →";
    });
    answersEl.appendChild(button);
  });
}
renderQuestion();

nextButton.addEventListener("click", () => {
  if (questionIndex < CONFIG.quiz.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    questionText.textContent = "Você terminou o quiz, meu amor! 💗";
    answersEl.innerHTML = "";
    feedback.textContent = `${score} de ${CONFIG.quiz.length} respostas certas — mas meu maior presente é ter você na minha vida.`;
    nextButton.hidden = true;
    $("#quizProgress").textContent = "QUIZ CONCLUÍDO";
    $("#quizCount").textContent = "♥ ♥ ♥";
    spawnHearts(16);
  }
});

$("#openLetter").addEventListener("click", () => {
  const content = $("#letterContent");
  content.hidden = !content.hidden;
  $("#openLetter").textContent = content.hidden ? "Abrir cartinha" : "Fechar cartinha";
  if (!content.hidden) spawnHearts(10);
});

$("#finalButton").addEventListener("click", () => {
  $("#finalMessage").hidden = false;
  $("#finalMessage").scrollIntoView({ behavior: "smooth", block: "center" });
  spawnHearts(22);
});

let loveClicks = 0;
$("#loveButton").addEventListener("click", () => {
  loveClicks++;
  $("#loveCount").textContent = `O universo recebeu mais ${loveClicks} ${loveClicks === 1 ? "declaração de amor" : "declarações de amor"}! ✨❤️`;
  spawnHearts(8);
});

function spawnHearts(amount = 8) {
  const layer = $("#hearts");
  const symbols = ["♡", "♥", "✦", "✨"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 20}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    layer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

const reasons = [
  "Porque teu jeitinho deixa meus dias mais especiais. 💗",
  "Porque conversar contigo pode melhorar qualquer dia.",
  "Porque tu merece receber carinho sem precisar pedir. 🌷",
  "Porque amo as pequenas coisas que fazem tu ser tu.",
  "Porque nossos 7 meses são uma lembrança linda pra mim.",
  "Porque quero continuar conhecendo cada detalhe teu.",
  "Porque tu faz parte de várias das minhas lembranças favoritas.",
  "Porque até uma mensagem simples tua pode me fazer sorrir. ♡",
  "Porque eu quero construir nossa história com respeito e carinho.",
  "Porque escolher cuidar do nosso amor é algo que importa."
];
const compliments = [
  "Teu sorriso tem um jeitinho especial de iluminar tudo. ✨",
  "Tua personalidade é uma das coisas que te tornam única.",
  "Tu merece ser tratada com carinho, respeito e sinceridade. 🤍",
  "Tem algo muito bonito no teu jeito de ser.",
  "Espero que tu nunca esqueça o quanto é especial pra mim. 🌙",
  "Tu não precisa ser perfeita pra ser importante e amada.",
  "Eu gosto de descobrir cada detalhe que faz de ti quem tu é. 💞",
  "Tu merece dias leves, sonhos bonitos e muita felicidade."
];
const coupons = [
  "VALE uma chamada só pra conversar e rir de qualquer coisa 📞",
  "VALE escolher o próximo filme ou vídeo que vamos ver 🎬",
  "VALE uma mensagem bem fofinha do Ravi 💌",
  "VALE uma playlist feita pensando em ti 🎶",
  "VALE uma conversa calma quando o dia estiver difícil 🤍",
  "VALE escolher nosso próximo joguinho juntos 🎮",
  "VALE um momento pra contar como foi teu dia, sem pressa 🌷"
];

function revealRandom(list, target) {
  const node = $(target);
  let index = Math.floor(Math.random() * list.length);
  if (list.length > 1 && node.dataset.lastIndex !== undefined && Number(node.dataset.lastIndex) === index) {
    index = (index + 1) % list.length;
  }
  node.dataset.lastIndex = String(index);
  node.textContent = list[index];
  node.classList.remove("text-pop");
  void node.offsetWidth;
  node.classList.add("text-pop");
}
$("#reasonButton").addEventListener("click", () => { revealRandom(reasons, "#reasonText"); spawnHearts(5); });
$("#complimentButton").addEventListener("click", () => { revealRandom(compliments, "#complimentText"); spawnHearts(5); });
$("#couponButton").addEventListener("click", () => { revealRandom(coupons, "#couponText"); spawnHearts(4); });

let heartsFound = 0;
const heartButtons = [...document.querySelectorAll(".collect-heart")];
function updateMission() {
  $("#missionProgress").textContent = `${heartsFound} de 7 corações encontrados`;
  $("#missionPrize").hidden = heartsFound !== 7;
  if (heartsFound === 7) spawnHearts(24);
}
heartButtons.forEach((button) => button.addEventListener("click", () => {
  if (button.classList.contains("found")) return;
  button.classList.add("found");
  button.textContent = "♥";
  heartsFound++;
  updateMission();
}));
$("#resetMission").addEventListener("click", () => {
  heartsFound = 0;
  heartButtons.forEach((button) => { button.classList.remove("found"); button.textContent = "♡"; });
  updateMission();
});

const promiseChecks = [...document.querySelectorAll(".promise-item input")];
function updatePromises() {
  const checked = promiseChecks.filter((input) => input.checked).length;
  $("#promiseNote").textContent = checked === 0
    ? "0 promessas marcadas — escolhe as que fazem sentido pra ti. ♡"
    : `${checked} de ${promiseChecks.length} promessas escolhidas. Que a gente construa tudo com carinho. 💗`;
}
promiseChecks.forEach((input) => input.addEventListener("change", updatePromises));

/*
 * CARTINHA: envia ao EmailJS e grava no Supabase.
 * Se um serviço falhar, tenta manter o outro funcionando.
 */
const girlfriendMessage = $("#girlfriendMessage");
const messageFeedback = $("#messageFeedback");
const sendLetterButton = $("#copyGirlfriendMessage");
const clearLetterButton = $("#clearGirlfriendMessage");

sendLetterButton.addEventListener("click", async () => {
  const message = girlfriendMessage.value.trim();

  if (!message) {
    messageFeedback.textContent = "Meu amor, escreve uma cartinha pra mim. Vou guardar cada palavrinha com carinho. 🥹❤️";
    girlfriendMessage.focus();
    return;
  }

  sendLetterButton.disabled = true;
  messageFeedback.textContent = "Preparando tua cartinha com todo o carinho do mundo... 💌✨";

  let emailSent = false;
  let savedToDatabase = false;

  try {
    if (window.emailjs) {
      try {
        await window.emailjs.send(
          "service_ykiix53",
          "template_poa1fzq",
          { message }
        );
        emailSent = true;
      } catch (error) {
        console.error("Erro no EmailJS:", error);
      }
    }

    if (window.supabase) {
      try {
        const db = window.supabase.createClient(
          "https://ektxoaljvogbeyyllwvw.supabase.co",
          "sb_publishable_JE4fy-T8wUDcmRUh0nO0Tw_Jum8bOaX"
        );

        const { error } = await db
          .from("respostas_cacau")
          .insert([{ cartinha: message, quiz_concluido: false }]);

        if (error) throw error;
        savedToDatabase = true;
      } catch (error) {
        console.error("Erro no Supabase:", error);
      }
    }

    if (emailSent && savedToDatabase) {
      messageFeedback.textContent = "Aaaah, tua cartinha chegou! Cada palavra tua deixa meu cantinho mais especial. Te amo, minha princesa! ❤️💌✨";
      girlfriendMessage.value = "";
    } else if (emailSent) {
      messageFeedback.textContent = "Tua cartinha foi recebida com muito carinho! Obrigado por deixar um pedacinho do teu coração aqui. ❤️🥹";
      girlfriendMessage.value = "";
    } else if (savedToDatabase) {
      messageFeedback.textContent = "Tua cartinha foi recebida com muito carinho! Obrigado por deixar um pedacinho do teu coração aqui. ❤️🥹";
      girlfriendMessage.value = "";
    } else {
      messageFeedback.textContent = "Meu amor, vamos tentar enviar tua cartinha mais uma vez? Quero muito guardar essas palavrinhas especiais. 💗💌";
    }
  } catch (error) {
    console.error("Erro inesperado ao enviar a cartinha:", error);
    messageFeedback.textContent = "Ocorreu um erro inesperado. Tenta novamente. 💗";
  } finally {
    sendLetterButton.disabled = false;
  }
});

clearLetterButton.addEventListener("click", () => {
  girlfriendMessage.value = "";
  messageFeedback.textContent = "Prontinho, meu amor! O espaço está esperando outra cartinha tua. 💕🌷";
  girlfriendMessage.focus();
});
