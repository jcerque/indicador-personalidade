# Publicar no GitHub Pages

Esta pasta (`webapp/`) é o app do respondente, pronto para hospedar. Ele já aponta para o backend no Supabase (São Paulo). Conteúdo da pasta:

- `index.html` (entrada)
- `config.js` (URL e chave pública do Supabase — seguras para o navegador)
- `data-questions.js`, `data-types.js`, `front.js`
- `.nojekyll` (faz o GitHub Pages servir os arquivos como estão)

## Passos (cerca de 5 minutos)

1. Em github.com, crie um repositório **público** (ex.: `indicador-personalidade-app`).
2. Suba todos os arquivos desta pasta `webapp/` para a raiz do repositório (botão "Add file" → "Upload files", arraste tudo, "Commit").
3. No repositório, vá em **Settings → Pages**.
4. Em "Build and deployment", Source = **Deploy from a branch**, Branch = **main** e pasta **/ (root)**. Salve.
5. Aguarde 1 a 2 minutos. O endereço público aparece no topo da página de Pages, no formato `https://SEU-USUARIO.github.io/indicador-personalidade-app/`.

Pronto: qualquer pessoa com o link abre no navegador. Os dados continuam protegidos no Supabase (o RLS bloqueia leitura direta; o front só tem a chave pública).

## Por que repositório público é seguro aqui

O front só contém a URL do projeto e a chave **publishable** do Supabase, ambas feitas para ficar no navegador. A chave de serviço, que dá acesso total, fica apenas na função do servidor (Edge Function), nunca neste repositório. O controle de acesso é feito no servidor.

## Painel do administrador

O arquivo `admin.html` é o painel restrito. Endereço: `https://SEU-USUARIO.github.io/REPO/admin.html`.

O acesso é por e-mail autorizado (já cadastrei `jcerqueira.sep76@london.edu` como admin). O login usa link mágico do Supabase. Para funcionar no endereço publicado, faça uma configuração única no Supabase:

1. Supabase → seu projeto `indicador-personalidade` → Authentication → URL Configuration.
2. Em **Site URL**, coloque `https://SEU-USUARIO.github.io/REPO/`.
3. Em **Redirect URLs**, adicione `https://SEU-USUARIO.github.io/REPO/admin.html`.
4. Salve.

Depois, no `admin.html`, informe seu e-mail, receba o link, clique e você entra. No painel há um botão para ativar o segundo fator (2FA por aplicativo autenticador); uma vez ativado, ele passa a ser exigido.

No painel você vê todos os respondentes, gera e imprime o relatório completo (botão abre em nova aba; use Imprimir → Salvar como PDF), marca o status de revisão e envio, corrige o emparelhamento dos casais e consulta a auditoria. O respondente nunca vê o relatório completo nem os dados de terceiros.

## Atualizações

Para atualizar, substitua os arquivos no repositório e o GitHub Pages republica sozinho. O backend (Supabase) já está no ar e não precisa de redeploy a cada mudança do front.
