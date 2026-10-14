
/* Cartinha da Cacauzinha: envia diretamente ao Supabase */
const girlfriendMessage = $("#girlfriendMessage");
const messageFeedback = $("#messageFeedback");

$("#copyGirlfriendMessage").addEventListener("click", async () => {
  const message = girlfriendMessage.value.trim();
  const button = $("#copyGirlfriendMessage");

  if (!message) {
    messageFeedback.textContent =
      "Escreve uma cartinha primeiro, meu amor. 💗";
    girlfriendMessage.focus();
    return;
  }

  button.disabled = true;
  messageFeedback.textContent =
    "Enviando tua cartinha para o Ravi... 💌";

  try {
    if (!window.supabase) {
      throw new Error("A biblioteca do Supabase não carregou.");
    }

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

    if (error) {
      throw error;
    }

    messageFeedback.textContent =
      "Cartinha enviada com carinho! ❤️💌";

    girlfriendMessage.value = "";
  } catch (error) {
    console.error("Erro ao enviar cartinha:", error);

    messageFeedback.textContent =
      "Não conseguimos enviar agora. Confere a conexão e tenta novamente. 💗";
  } finally {
    button.disabled = false;
  }
});

/* Botão para limpar a cartinha */
$("#clearGirlfriendMessage").addEventListener("click", () => {
  girlfriendMessage.value = "";
  messageFeedback.textContent =
    "Prontinho, podes escrever outra cartinha. ♡";
  girlfriendMessage.focus();
});
