# Nosso Cantinho — 7 meses 💗

Site romântico estático feito em HTML, CSS e JavaScript para Ravi e Cacauzinha.

## Personalizar antes de publicar

1. Abra `script.js` num editor de texto.
2. Troque `relationshipStart` pela data real em que vocês começaram a namorar, no formato `AAAA-MM-DD`.
3. A música está configurada para o clipe oficial de **“Imprevisto”, Yago Oproprio ft. Rô Rosa**, incorporado do YouTube. O vídeo não começa automaticamente; a pessoa pode apertar play no player ou abrir o clipe no YouTube.
4. Edite as perguntas dentro de `quiz` para incluir lembranças reais.
5. Em `index.html`, procure a cartinha e substitua as frases pelas suas próprias palavras.
6. As duas fotos enviadas já estão na pasta `assets`: `minha-foto-favorita.png` e `a-que-eu-amo.png`.

**Música:** o site incorpora o clipe oficial do YouTube (ID `EbVV9FDxM4c`); não baixa nem redistribui o áudio. O autoplay pode ser bloqueado pelo navegador, então a pessoa precisa apertar play.

## Publicar grátis no GitHub Pages

1. Entre em https://github.com e crie uma conta ou entre na sua.
2. Clique em **New repository**.
3. Dê um nome, por exemplo `nosso-cantinho`, marque **Public** e crie o repositório.
4. Dentro do repositório, clique em **Add file → Upload files** e envie `index.html`, `style.css`, `script.js` e o `README.md`. Se já personalizou, envie também a pasta `assets` com suas fotos e áudio.
5. Clique em **Commit changes**.
6. Abra **Settings → Pages**.
7. Em **Build and deployment**, selecione **Deploy from a branch**. Escolha a branch `main` e a pasta `/(root)` e clique em **Save**.
8. Aguarde alguns minutos. O endereço aparecerá nessa mesma página, normalmente no formato `https://SEU-USUARIO.github.io/nosso-cantinho/`.

## Testar no computador

Dê dois cliques em `index.html` para abrir no navegador. Para que fotos e música apareçam, confira se os arquivos estão na pasta `assets` e se os nomes correspondem aos caminhos configurados.


### Música
O clipe de “Imprevisto” está incorporado na própria página. O botão no topo liga/desliga uma ambientação instrumental suave criada pelo navegador; quando o clipe do YouTube começa, a ambientação para automaticamente. O navegador exige um clique do visitante para iniciar áudio, então a música suave não começa sozinha.


### Cartinha para o Ravi
A seção “Uma cartinha para o Ravi” permite escrever uma mensagem e copiar o texto para enviar. Ela ainda não envia respostas automaticamente para o Ravi; isso exige conectar um serviço de recebimento quando o painel secreto for feito.
