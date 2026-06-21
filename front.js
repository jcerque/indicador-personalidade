"use strict";
/* Indicador de Personalidade — front do respondente. Conversa com a Edge Function segura.
   O respondente vê: seu questionário, seu resumo, e o resumo do cônjuge. Nunca o relatório completo
   nem dados de terceiros. */

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const app = () => document.getElementById("app");
function show(html) { app().innerHTML = html; window.scrollTo(0, 0); }

async function api(action, payload = {}) {
  const res = await fetch(CONFIG.FN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "apikey": CONFIG.ANON_KEY, "Authorization": "Bearer " + CONFIG.ANON_KEY },
    body: JSON.stringify({ action, ...payload })
  });
  let data; try { data = await res.json(); } catch { data = { error: "resposta_invalida" }; }
  return { status: res.status, data };
}

const saveCode = (c) => { try { localStorage.setItem("ip_code", c); } catch {} };
const getCode = () => { try { return localStorage.getItem("ip_code") || ""; } catch { return ""; } };
const clearCode = () => { try { localStorage.removeItem("ip_code"); } catch {} };

let answers = {};
let access_code = "";

/* ---------- Boas-vindas ---------- */
function screenWelcome() {
  const saved = getCode();
  show(`
    <section class="card welcome">
      <div class="brand">Jornada Extraordinária</div>
      <h1>Indicador de Personalidade</h1>
      <p class="sub">Baseado no Myers-Briggs Type Indicator</p>
      <p>Suas respostas ajudam a entender como você prefere ver as coisas e tomar decisões. Não há respostas certas ou erradas. Conhecer suas preferências e as do seu cônjuge ajuda a entender pontos fortes e como vocês se complementam.</p>
      <p class="muted">São 93 questões rápidas, em 4 partes. Menos de 10 minutos.</p>
      <button class="btn primary" onclick="screenRegister()">Começar</button>
      <button class="btn ghost" onclick="screenLogin()">Já tenho um código de acesso</button>
      ${saved ? `<p class="muted small">Encontramos um código salvo neste dispositivo. <a href="#" onclick="resumeSaved();return false">Retomar</a></p>` : ""}
    </section>`);
}
async function resumeSaved() {
  const code = getCode(); if (!code) return screenWelcome();
  const { data } = await api("login", { access_code: code });
  if (data.ok) { access_code = code; routeAfterLogin(data); } else { clearCode(); screenWelcome(); }
}

/* ---------- Cadastro (gênero + consentimento obrigatórios) ---------- */
function screenRegister() {
  show(`
    <section class="card">
      <h2>Seus dados</h2>
      <label>Seu nome
        <input id="f_nome" placeholder="Seu nome completo">
      </label>
      <label>Gênero <span class="req">obrigatório</span>
        <select id="f_genero">
          <option value="">Selecione...</option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="outro">Outro</option>
          <option value="prefiro_nao_informar">Prefiro não informar</option>
        </select>
        <small>Usado apenas como critério de desempate no eixo Pensamento/Sentimento e para ajustar a linguagem do relatório.</small>
      </label>
      <label>Nome do seu cônjuge
        <input id="f_conj" placeholder="Nome do cônjuge">
      </label>
      <label>Código do casal <span class="req">obrigatório</span>
        <input id="f_cod" placeholder="Ex.: AB30072010" style="text-transform:uppercase">
        <small>Combinem um código entre vocês e usem o mesmo nos dois questionários. É com ele que pareamos as respostas do casal.</small>
      </label>
      <div class="consent">
        <label class="check"><input type="checkbox" id="f_consent">
          <span>Autorizo a plataforma a acessar e tratar minhas respostas e o relatório gerado, conforme a finalidade da Jornada Extraordinária e a LGPD. Sei que sem esta autorização não é possível gerar as informações.</span>
        </label>
      </div>
      <div id="reg_err" class="err"></div>
      <button class="btn primary" onclick="doRegister()">Continuar</button>
      <button class="btn ghost" onclick="screenWelcome()">Voltar</button>
    </section>`);
}
async function doRegister() {
  const nome = document.getElementById("f_nome").value.trim();
  const genero = document.getElementById("f_genero").value;
  const conjuge_nome = document.getElementById("f_conj").value.trim();
  const codigo_casal = document.getElementById("f_cod").value.trim();
  const consent = document.getElementById("f_consent").checked;
  const err = document.getElementById("reg_err");
  if (!nome || !genero || !codigo_casal) { err.textContent = "Preencha nome, gênero e código do casal."; return; }
  if (!consent) { err.textContent = "Sem a autorização não é possível gerar as informações necessárias."; return; }
  err.textContent = "Enviando...";
  const { data } = await api("register", { nome, genero, conjuge_nome, codigo_casal, consent });
  if (!data.ok) { err.textContent = mapErr(data); return; }
  access_code = data.access_code; saveCode(access_code);
  screenCode(access_code);
}
function screenCode(code) {
  show(`
    <section class="card">
      <div class="brand">Guarde seu código</div>
      <h2>Seu código de acesso</h2>
      <div class="codebox">${esc(code)}</div>
      <p>Anote este código. É com ele que você retorna depois para ver o seu resumo e o do seu cônjuge. Ele é pessoal e não deve ser compartilhado.</p>
      <button class="btn primary" onclick="startQuestionnaire()">Iniciar questionário</button>
    </section>`);
}

/* ---------- Login por código ---------- */
function screenLogin() {
  show(`
    <section class="card">
      <h2>Entrar com seu código</h2>
      <label>Código de acesso
        <input id="f_login" placeholder="Ex.: 6UA8C-EFPTW" style="text-transform:uppercase">
      </label>
      <div id="login_err" class="err"></div>
      <button class="btn primary" onclick="doLogin()">Entrar</button>
      <button class="btn ghost" onclick="screenWelcome()">Voltar</button>
    </section>`);
}
async function doLogin() {
  const code = document.getElementById("f_login").value.trim().toUpperCase();
  const err = document.getElementById("login_err");
  if (!code) { err.textContent = "Informe seu código."; return; }
  err.textContent = "Entrando...";
  const { data } = await api("login", { access_code: code });
  if (!data.ok) { err.textContent = "Código não encontrado."; return; }
  access_code = code; saveCode(code); routeAfterLogin(data);
}
function routeAfterLogin(data) {
  if (data.summary) screenSummary(data.summary);
  else { answers = {}; startQuestionnaire(); }
}

/* ---------- Questionário ---------- */
function startQuestionnaire() { answers = {}; screenPart(1); }
function partQuestions(p) { return QUESTIONS.filter(q => q.part === p); }
function answeredCount() { return Object.keys(answers).length; }
function screenPart(part) {
  const qs = partQuestions(part), total = QUESTIONS.length;
  const pct = Math.round(answeredCount() / total * 100);
  const items = qs.map(q => {
    const sel = answers[q.n];
    if (q.part === 2 || q.part === 4) {
      return `<div class="q wordpair" id="q${q.n}"><div class="qn">${q.n}</div>
        <div class="choices pair">
          <button class="choice ${sel === "a" ? "sel" : ""}" onclick="pick(${q.n},'a')">${esc(q.a)}</button>
          <button class="choice ${sel === "b" ? "sel" : ""}" onclick="pick(${q.n},'b')">${esc(q.b)}</button>
        </div></div>`;
    }
    return `<div class="q" id="q${q.n}"><div class="qtext"><span class="qn">${q.n}</span> ${esc(q.prompt)}</div>
      <div class="choices">
        <button class="choice ${sel === "a" ? "sel" : ""}" onclick="pick(${q.n},'a')"><b>a)</b> ${esc(q.a)}</button>
        <button class="choice ${sel === "b" ? "sel" : ""}" onclick="pick(${q.n},'b')"><b>b)</b> ${esc(q.b)}</button>
      </div></div>`;
  }).join("");
  show(`
    <div class="progress-wrap"><div class="progress-bar"><span style="width:${pct}%"></span></div>
      <div class="progress-txt">${answeredCount()} de ${total} respondidas</div></div>
    <section class="card">
      <div class="part-head"><span class="step">Parte ${part} de 4</span><h2>${esc(PART_INTRO[part])}</h2></div>
      <div class="qlist">${items}</div>
      <div id="part_err" class="err"></div>
      <div class="nav">
        ${part > 1 ? `<button class="btn ghost" onclick="screenPart(${part - 1})">Anterior</button>` : `<span></span>`}
        ${part < 4 ? `<button class="btn primary" onclick="nextPart(${part})">Próxima parte</button>`
                   : `<button class="btn primary" onclick="finish()">Ver meu resumo</button>`}
      </div>
    </section>`);
}
function pick(n, opt) {
  answers[n] = opt;
  const q = document.getElementById("q" + n);
  q.querySelectorAll(".choice").forEach((b, i) => b.classList.toggle("sel", (i === 0 && opt === "a") || (i === 1 && opt === "b")));
  const total = QUESTIONS.length, pct = Math.round(answeredCount() / total * 100);
  const bar = document.querySelector(".progress-bar span"); if (bar) bar.style.width = pct + "%";
  const txt = document.querySelector(".progress-txt"); if (txt) txt.textContent = `${answeredCount()} de ${total} respondidas`;
}
function partComplete(p) { return partQuestions(p).every(q => answers[q.n]); }
function nextPart(part) {
  if (!partComplete(part)) { document.getElementById("part_err").textContent = "Responda todas as questões desta parte."; return; }
  screenPart(part + 1);
}
async function finish() {
  if (!partComplete(4)) { document.getElementById("part_err").textContent = "Responda todas as questões desta parte."; return; }
  document.getElementById("part_err").textContent = "Calculando seu resultado...";
  const { data } = await api("submit", { access_code, answers });
  if (!data.ok) { document.getElementById("part_err").textContent = mapErr(data); return; }
  screenSummary(data.summary);
}

/* ---------- Resumo (2 páginas) ---------- */
function icpChart(axes) {
  const order = ["EI", "SN", "TF", "JP"];
  const maxScale = { EI: 21, SN: 26, TF: 24, JP: 22 };
  const CL = { 1: "LEVE", 2: "MODERADO", 3: "CLARO", 4: "MUITO CLARO" };
  return `<div class="icp">` + order.map(key => {
    const a = axes[key]; const pct = Math.round(a.winCount / maxScale[key] * 100);
    const wl = AXIS_LABELS[a.winner][0]; const lose = a.winner === a.x ? a.y : a.x;
    return `<div class="icp-row">
      <div class="icp-axis"><span class="pl">${a.winner}</span> <b>${wl}</b><div class="icp-opp">em vez de ${AXIS_LABELS[lose][0]} (${lose})</div></div>
      <div class="icp-barcell"><div class="icp-track"><div class="icp-fill" style="width:${pct}%"></div></div></div>
      <div class="icp-clar">${CL[a.band]}<div class="icp-score">pontuação ${a.winCount}</div></div>
    </div>`;
  }).join("") + `</div>`;
}
function eightPref(axes) {
  const rows = [["Onde você concentra sua atenção", "EI"], ["Como você capta informações", "SN"], ["Como você toma decisões", "TF"], ["Como você lida com o mundo exterior", "JP"]];
  return `<table class="pref-table">` + rows.map(([label, key]) => {
    const a = axes[key];
    return `<tr><td class="pref-dim">${label}</td>
      <td class="pref-cell ${a.winner === a.x ? "on" : ""}"><span class="letter">${a.x}</span> ${AXIS_LABELS[a.x][0]}</td>
      <td class="pref-cell ${a.winner === a.y ? "on" : ""}"><span class="letter">${a.y}</span> ${AXIS_LABELS[a.y][0]}</td></tr>`;
  }).join("") + `</table>`;
}
function screenSummary(s) {
  const t = TYPES[s.tipo];
  show(`
    <section class="card result">
      <div class="brand">Jornada Extraordinária</div>
      <p class="muted">Resumo de</p>
      <h2 class="rname">${esc(s.nome)}</h2>
      <div class="typebadge"><div class="type">${esc(s.tipo)}</div>
        <div class="apelido">${t ? esc(t.apelido) : ""}</div><div class="tituloT">${t ? esc(t.titulo) : ""}</div></div>
      <h3>Suas preferências</h3>
      ${eightPref(s.axes)}
      ${icpChart(s.axes)}
      <p class="legend">Clareza: LEVE, MODERADO, CLARO, MUITO CLARO. Identifica preferências, não habilidades.</p>
      <div class="nav">
        <button class="btn primary" onclick="loadSpouse()">Ver o resumo do meu cônjuge</button>
        <button class="btn ghost" onclick="screenWelcome()">Sair</button>
      </div>
      <p class="muted small">O relatório completo é preparado e revisado pela equipe da Jornada e enviado a você por outro canal.</p>
    </section>`);
}
async function loadSpouse() {
  const { data } = await api("spouse", { access_code });
  if (!data.ok) { alert(mapErr(data)); return; }
  if (!data.available) {
    const reasons = { sem_par: "Ainda não há um cônjuge pareado com o seu código.", conjuge_nao_respondeu: "Seu cônjuge ainda não respondeu o questionário.", conjuge_nao_concluiu: "Seu cônjuge ainda não concluiu o questionário.", sem_consentimento_conjuge: "O resumo do cônjuge ainda não está disponível." };
    show(`<section class="card"><h2>Resumo do cônjuge</h2><p>${reasons[data.reason] || "Ainda não disponível."}</p>
      <button class="btn ghost" onclick="resumeSaved()">Voltar ao meu resumo</button></section>`);
    return;
  }
  const s = data.summary, t = TYPES[s.tipo];
  show(`
    <section class="card result">
      <div class="brand">Jornada Extraordinária</div>
      <p class="muted">Resumo do seu cônjuge</p>
      <h2 class="rname">${esc(s.nome)}</h2>
      <div class="typebadge"><div class="type">${esc(s.tipo)}</div>
        <div class="apelido">${t ? esc(t.apelido) : ""}</div></div>
      ${eightPref(s.axes)}
      ${icpChart(s.axes)}
      <div class="nav"><button class="btn primary" onclick="resumeSaved()">Voltar ao meu resumo</button></div>
    </section>`);
}

function mapErr(d) {
  const m = {
    consentimento_necessario: "Sem a autorização não é possível gerar as informações.",
    ja_respondido: "Este questionário já foi respondido e não pode ser alterado.",
    codigo_invalido: "Código não encontrado.",
    respostas_incompletas: "Há questões não respondidas."
  };
  return m[d.error] || d.message || "Não foi possível concluir. Tente novamente.";
}

window.addEventListener("DOMContentLoaded", screenWelcome);
