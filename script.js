
const $ = (selector) => document.querySelector(selector);

const messageBox = $("#girlfriendMessage");
const feedback = $("#messageFeedback");
const sendButton = $("#copyGirlfriendMessage");
const clearButton = $("#clearGirlfriendMessage");

const EMAIL_SERVICE = "service_ykiix53";
const EMAIL_TEMPLATE = "template_poa1fzq";
const SUPABASE_URL = "https://ektxoaljvogbeyyllwvw.supabase.co";
const SUPABASE_KEY = "sb_publishable_JE4fy-T8wUDcmRUh0nO0Tw_Jum8bOaX";

if (sendButton && messageBox && feedback) {
  sendButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const message = messageBox.value.trim();

    if (!message) {
      feedback.textContent =
        "Meu amor, escreve uma cartinha pra mim. Vou guardar cada palavrinha no coração. 🥹❤️";
      messageBox.focus();
      return;
    }

    if (!window.emailjs || !window.supabase) {
      feedback.textContent =
        "Meu amor, prepara tua cartinha e tenta mais uma vez. Nosso cantinho merece esse carinho. 💗";
      return;
    }

    sendButton.disabled = true;
    feedback.textContent =
      "Preparando tua cartinha com todo o carinho do mundo... 💌✨";

    let emailSent = false;
    let savedToDatabase = false;

    try {
      try {
        await window.emailjs.send(
          EMAIL_SERVICE,
          EMAIL_TEMPLATE,
          { message }
        );
        emailSent = true;
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
      }

      try {
        const db = window.supabase.createClient(
          SUPABASE_URL,
          SUPABASE_KEY
        );

        const { error } = await db
          .from("respostas_cacau")
          .insert([{ cartinha: message, quiz_concluido: false }]);

        if (error) throw error;
        savedToDatabase = true;
      } catch (error) {
        console.error("Erro ao salvar cartinha:", error);
      }

      if (emailSent && savedToDatabase) {
        feedback.textContent =
          "Aaaah, tua cartinha chegou! Cada palavra tua deixa meu cantinho mais especial. Te amo, minha princesa! ❤️💌✨";
        messageBox.value = "";
      } else if (emailSent || savedToDatabase) {
        feedback.textContent =
          "Tua cartinha foi recebida com muito carinho! Obrigado por deixar um pedacinho do teu coração aqui. ❤️🥹";
        messageBox.value = "";
      } else {
        feedback.textContent =
          "Meu amor, vamos tentar enviar tua cartinha mais uma vez? Quero muito guardar essas palavrinhas especiais. 💗💌";
      }
    } finally {
      sendButton.disabled = false;
    }
  });
}

if (clearButton && messageBox && feedback) {
  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    messageBox.value = "";
    feedback.textContent =
      "Prontinho, meu amor! O espaço está esperando outra cartinha tua. 💕🌷";
    messageBox.focus();
  });
}
