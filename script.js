
/* Cartinha da Cacauzinha: EmailJS + Supabase */
const girlfriendMessage = $("#girlfriendMessage");
const messageFeedback = $("#messageFeedback");
const sendLetterButton = $("#copyGirlfriendMessage");
const clearLetterButton = $("#clearGirlfriendMessage");

sendLetterButton.addEventListener("click", async () => {
  const message = girlfriendMessage.value.trim();

  if (!message) {
    messageFeedback.textContent =
      "Escreve uma cartinha primeiro, meu amor. 💗";
    girlfriendMessage.focus();
    return;
  }

  if (!window.emailjs && !window.supabase) {
    messageFeedback.textContent =
      "Os serviços não carregaram. Atualiza a página e tenta novamente. 💗";
    return;
  }

  sendLetterButton.disabled = true;
  messageFeedback.textContent =
    "Enviando tua cartinha para o Ravi... 💌";

  try {
    let emailSent = false;
    let savedToDatabase = false;

    // Envia para o Gmail através do EmailJS
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

    // Guarda uma cópia no Supabase
    if (window.supabase) {
      try {
        const db = window.supabase.createClient(
          "https://ektxoaljvogbeyyllwvw.supabase.co",
          "sb_publishable_JE4fy-T8wUDcmRUh0nO0Tw_Jum8bOaX"
        );

        const { error } = await db
          .from("respostas_cacau")
          .insert([{
            cartinha: message,
            quiz_concluido: false
          }]);

        if (error) throw error;
        savedToDatabase = true;
      } catch (error) {
        console.error("Erro no Supabase:", error);
      }
    }

    if (emailSent && savedToDatabase) {
      messageFeedback.textContent =
        "Cartinha enviada por e-mail e guardada no painel! ❤️💌";
      girlfriendMessage.value = "";
    } else if (emailSent) {
      messageFeedback.textContent =
        "E-mail enviado para o Ravi! ❤️ A cópia no painel não foi guardada.";
      girlfriendMessage.value = "";
    } else if (savedToDatabase) {
      messageFeedback.textContent =
        "Cartinha guardada no painel! ❤️ O e-mail não foi enviado.";
      girlfriendMessage.value = "";
    } else {
      messageFeedback.textContent =
        "Não foi possível enviar. Confere o EmailJS e o Supabase. 💗";
    }
  } finally {
    sendLetterButton.disabled = false;
  }
});

clearLetterButton.addEventListener("click", () => {
  girlfriendMessage.value = "";
  messageFeedback.textContent =
    "Prontinho, podes escrever outra cartinha. ♡";
  girlfriendMessage.focus();
});
