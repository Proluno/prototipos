/* Área do Assinante — moldura das telas: ícones, menu principal (gaveta no mobile) e toast.
   Uso: <body data-page="05-financeiro/01-dashboard/"> + <script src="../../assets/app-shell.js"></script> antes do script da tela. */
(function () {
  var SPRITE = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    dollar: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    chart: '<path d="M12 20V10M18 20V4M6 20v-4"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.2 7 22l5-3 5 3-1.2-8.8"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    message: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8z"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    more: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    package: '<path d="M16.5 9.4 7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
    swap: '<path d="M17 3l4 4-4 4M3 7h18M7 21l-4-4 4-4M21 17H3"/>',
    receipt: '<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 1 .7V2l-1 .7-3-2-3 2-3-2-3 2-3-2z"/><path d="M14.5 8H10a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3H9M12 6.5v1.5M12 14v1.5"/>',
    trending: '<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
    wallet: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    barcode: '<path d="M3 5v14M7 5v14M11 5v14M14 5v14M18 5v14M21 5v14"/>',
    pix: '<path d="m12 2.5 4.2 4.2-4.2 4.2-4.2-4.2zM12 13.1l4.2 4.2-4.2 4.2-4.2-4.2zM6.7 7.8l4.2 4.2-4.2 4.2L2.5 12zM17.3 7.8l4.2 4.2-4.2 4.2-4.2-4.2z"/>',
    pie: '<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
    bars: '<path d="M3 3v18h18"/><path d="M8 17V9M13 17V5M18 17v-6"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'
  };
  var sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sprite.setAttribute('width', '0'); sprite.setAttribute('height', '0'); sprite.setAttribute('aria-hidden', 'true'); sprite.style.position = 'absolute';
  sprite.innerHTML = Object.keys(SPRITE).map(function (k) { return '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + SPRITE[k] + '</symbol>'; }).join('');
  document.body.insertBefore(sprite, document.body.firstChild);

  function icon(name, cls, sw) {
    return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function norm(s) { return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim(); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }

  /* ---------- Moldura: menu principal, gaveta e cabeçalho ---------- */
  var ROOT = new URL('../', (document.currentScript && document.currentScript.src) || location.href).href;
  var HERE = document.body.getAttribute('data-page') || '';
  var NAV = [
    { label: 'Início', icon: 'home', href: '01-inicio/' },
    { label: 'Construa seu site', icon: 'layout', href: '02-construa-seu-site/' },
    { label: 'Produtos', icon: 'box', items: [['Meus Produtos', '03-produtos/01-meus-produtos/'], ['Biblioteca de vídeo', '03-produtos/02-biblioteca-de-video/'], ['Categorias', '03-produtos/03-categorias/']] },
    { label: 'Checkout', icon: 'card', items: [['Gestão de checkout', '04-checkout/01-gestao-de-checkout/'], ['Order Bump', '04-checkout/02-order-bump/']] },
    { label: 'Financeiro', icon: 'dollar', items: [['Dashboard', '05-financeiro/01-dashboard/'], ['Transações', '05-financeiro/02-transacoes/'], ['Compartilhamento de Receita', '05-financeiro/03-compartilhamento-de-receita/'], ['Extrato', '05-financeiro/04-extrato/'], ['Planos', '05-financeiro/05-planos/'], ['Dashboard assinaturas', '05-financeiro/06-dashboard-assinaturas/'], ['Notas Fiscais (Nfe.io)', '05-financeiro/07-notas-fiscais/']] },
    { label: 'Marketing', icon: 'megaphone', items: [['Cupons', '06-marketing/01-cupons/'], ['Blog', '06-marketing/02-blog/'], ['Promoções', '06-marketing/03-promocoes/'], ['Produtos p/ afiliação', '06-marketing/04-produtos-para-afiliacao/'], ['Afiliados', '06-marketing/05-afiliados/']] },
    { label: 'Usuários', icon: 'users', items: [['Usuários da conta', '07-usuarios/01-usuarios-da-conta/'], ['Base de alunos', '07-usuarios/02-base-de-alunos/'], ['Instrutores', '07-usuarios/03-instrutores/']] },
    { label: 'Configurações', icon: 'settings', items: [['Editar perfil', '08-configuracoes/01-editar-perfil/'], ['Dados bancários', '08-configuracoes/02-dados-bancarios/'], ['Notificações', '08-configuracoes/03-notificacoes/'], ['Integrações', '08-configuracoes/04-integracoes/']] }
  ];
  var TOOLS = [
    ['Pro Pulse', 'zap', '09-ferramentas/01-pro-pulse/'], ['Hub de questões', 'help', '09-ferramentas/02-hub-de-questoes/'],
    ['UTM Analytics', 'chart', '09-ferramentas/03-utm-analytics/'], ['Pro Membros', 'award', '09-ferramentas/04-pro-membros/'],
    ['Planejamentos', 'calendar', '09-ferramentas/05-planejamentos/'], ['Mentoreasy', 'message', '09-ferramentas/06-mentoreasy/'],
    ['Meu Plano', 'star', '09-ferramentas/07-meu-plano/']
  ];

  var navList = document.getElementById('appNavList');
  navList.innerHTML = NAV.map(function (n, i) {
    if (!n.items) return '<a class="pl-nav-item" href="' + ROOT + n.href + 'index.html">' + icon(n.icon, '', 1.8) + n.label + '</a>';
    var active = n.items.some(function (it) { return it[1] === HERE; });
    return '<div class="pl-nav-group' + (active ? ' is-open has-active' : '') + '">' +
      '<button class="pl-nav-item" type="button" aria-expanded="' + active + '" aria-controls="navg' + i + '">' + icon(n.icon, '', 1.8) + n.label + icon('chevron-down', 'pl-nav-item-chevron') + '</button>' +
      '<div class="pl-nav-group-items" id="navg' + i + '">' + n.items.map(function (it) {
        var on = it[1] === HERE;
        return '<a class="pl-nav-subitem' + (on ? ' is-active' : '') + '" href="' + ROOT + it[1] + 'index.html"' + (on ? ' aria-current="page"' : '') + '>' + it[0] + '</a>';
      }).join('') + '</div></div>';
  }).join('') + '<p class="pl-nav-label">Ferramentas</p>' + TOOLS.map(function (t) {
    return '<a class="pl-nav-item" href="' + ROOT + t[2] + 'index.html"><span class="pl-nav-tool-icon">' + icon(t[1]) + '</span>' + t[0] + '</a>';
  }).join('');
  navList.addEventListener('click', function (e) {
    var b = e.target.closest('button.pl-nav-item'); if (!b) return;
    var g = b.parentElement, open = !g.classList.contains('is-open');
    g.classList.toggle('is-open', open); b.setAttribute('aria-expanded', open);
  });

  var nav = document.getElementById('appNav'), navBackdrop = document.getElementById('navBackdrop'), navOpenBtn = document.getElementById('navOpen');
  function setNav(open) {
    nav.classList.toggle('is-open', open); navBackdrop.classList.toggle('is-open', open);
    navOpenBtn.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : '';
    if (open) nav.querySelector('.pl-drawer-close').focus(); else navOpenBtn.focus();
  }
  navOpenBtn.addEventListener('click', function () { setNav(true); });
  document.querySelectorAll('[data-nav-close]').forEach(function (el) { el.addEventListener('click', function () { setNav(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) setNav(false); });

  /* ---------- Toast (também depois de trocar de página) ---------- */
  var toasts = document.getElementById('toasts');
  if (!toasts) { toasts = document.createElement('div'); toasts.className = 'pl-toast-region'; toasts.id = 'toasts'; toasts.setAttribute('role', 'status'); toasts.setAttribute('aria-live', 'polite'); document.body.appendChild(toasts); }
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'pl-toast'; t.innerHTML = icon('check') + esc(msg); toasts.appendChild(t);
    setTimeout(function () { t.style.transition = 'opacity .2s'; t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 220); }, 2800);
  }
  function flash(msg) { try { sessionStorage.setItem('pl-toast', msg); } catch (e) {} }
  try { var pending = sessionStorage.getItem('pl-toast'); if (pending) { sessionStorage.removeItem('pl-toast'); toast(pending); } } catch (e) {}

  window.PLShell = { icon: icon, esc: esc, norm: norm, plural: plural, toast: toast, flash: flash };
})();
