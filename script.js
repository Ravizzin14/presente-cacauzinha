
/* CARTINHA DA CACAUZINHA — EMAILJS + SUPABASE */

const girlfriendMessage = document.querySelector("#girlfriendMessage");
const messageFeedback = document.querySelector("#messageFeedback");
const sendLetterButton = document.querySelector("#copyGirlfriendMessage");
const clearLetterButton = document.querySelector("#clearGirlfriendMessage");

if (
  girlfriendMessage &&
  messageFeedback &&
  sendLetterButton &&
  clearLetterButton
) {
  sendLetterButton.addEventListener("click", async () => {
    const message = girlfriendMessage.value.trim();

    if (!message) {
      messageFeedback.textContent =
        "Escreve tua cartinha primeiro. 💗";
      girlfriendMessage.focus();
      return;
    }

    sendLetterButton.disabled = true;
    messageFeedback.textContent = "Enviando tua cartinha... 💌";

    let emailSent = false;
    let savedToDatabase = false;

    try {
      // 1. Enviar por e-mail
      if (window.emailjs) {
        try {
          await window.emailjs.send(
            "service_ykiix53",
            "template_poa1fzq",
            { message: message }
          );
          emailSent = true;
        } catch (error) {
          console.error("Erro ao enviar e-mail:", error);
        }
      }

      // 2. Guardar no Supabase
      if (window.supabase) {
        try {
          const db = window.supabase.createClient(
            "https://ektxoaljvogbeyyllwvw.supabase.co",
            "sb_publishable_JE4fy-T8wUDcmRUh0nO0Tw_Jum8bOaX"
          );

          const { error } = await db
            .from("respostas_cacau")
            .insert([
              {
                cartinha: message,
                quiz_concluido: false
              }
            ]);

          if (error) throw error;
          savedToDatabase = true;
        } catch (error) {
          console.error("Erro ao guardar no painel:", error);
        }
      }

      if (emailSent && savedToDatabase) {
        messageFeedback.textContent =
          "Cartinha enviada por e-mail e guardada no painel! ❤️";
        girlfriendMessage.value = "";
      } else if (emailSent) {
        messageFeedback.textContent =
          "E-mail enviado! ❤️ Mas não foi possível guardar no painel.";
        girlfriendMessage.value = "";
      } else if (savedToDatabase) {
        messageFeedback.textContent =
          "Cartinha guardada no painel! ❤️ Mas o e-mail não foi enviado.";
        girlfriendMessage.value = "";
      } else {
        messageFeedback.textContent =
          "Não foi possível enviar. Verifica as configurações e tenta novamente. 💗";
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
      messageFeedback.textContent =
        "Ocorreu um erro. Tenta novamente. 💗";
    } finally {
      sendLetterButton.disabled = false;
    }
  });

  clearLetterButton.addEventListener("click", () => {
    girlfriendMessage.value = "";
    messageFeedback.textContent =
      "Prontinho! Podes escrever outra cartinha. ♡";
    girlfriendMessage.focus();
  });
}
