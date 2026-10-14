
/* Cartinha da Cacauzinha: envia diretamente ao Supabase. */
const girlfriendMessage = $("#girlfriendMessage");
const messageFeedback = $("#messageFeedback");

$("#copyGirlfriendMessage").addEventListener("click", async () => {
  const message = girlfriendMessage.value.trim();

  if (!message) {
    messageFeedback.textContent = "Escreve uma cartinha primeiro, meu amor. 💗";
    girlfriendMessage.focus();
    return;
  }

  const button = $("#copyGirlfriendMessage");
  button.disabled = true;
  messageFeedback.textContent = "Enviando tua cartinha para o Ravi... 💌";

  try {
    if (!window.supabase) {
      throw new Error("O Supabase não foi carregado.");
    }

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

    messageFeedback.textContent =
      "Cartinha enviada com carinho! ❤️ O Ravi já pode vê-la no painel secreto. 💌";
  } catch (error) {
    console.error("Erro ao enviar cartinha:", error);
    messageFeedback.textContent =
      "Não conseguimos enviar agora. Tenta novamente daqui a pouco. 💗";
  } finally {
    button.disabled = false;
  }
});
