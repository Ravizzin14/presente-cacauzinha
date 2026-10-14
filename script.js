
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
      feedback.textContent = "Escreve tua cartinha primeiro, meu amor. 💗";
      messageBox.focus();
      return;
    }

    if (!window.emailjs || !window.supabase) {
      feedback.textContent =
        "Os serviços ainda não carregaram. Atualiza a página e tenta novamente. 💗";
      return;
    }

    sendButton.disabled = true;
    feedback.textContent = "Enviando tua cartinha... 💌";

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
          "Cartinha enviada por e-mail e salva no painel do Ravi! ❤️💌";
        messageBox.value = "";
      } else if (emailSent) {
        feedback.textContent =
          "O e-mail foi enviado, mas não conseguimos salvar no painel. ❤️";
        messageBox.value = "";
      } else if (savedToDatabase) {
        feedback.textContent =
          "A cartinha foi salva no painel, mas o e-mail falhou. 💗";
      } else {
        feedback.textContent =
          "O envio falhou. Tenta novamente e verifica o console do navegador. 💗";
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
    feedback.textContent = "Prontinho! Podes escrever outra cartinha. ♡";
    messageBox.focus();
  });
}
