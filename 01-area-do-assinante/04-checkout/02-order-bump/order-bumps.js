/* Order Bump — dados de exemplo compartilhados entre a lista (index.html) e o formulário (order-bump.html). Depende de ../../assets/app-shell.js */
(function () {
  /* ---------- Dados ---------- */
  var PRODUCTS = ['Preparatório Farmácia para Concursos e Residências', 'Teste', 'Direito Constitucional na Prática', 'Festival das Imparáveis', 'Treino Discursivas',
    'Direito Constitucional para Iniciantes', 'Gold Face', 'A Verdadeira Harmonia', 'Além do Óbvio', 'Presets - Posts Incríveis', 'Imagem de Influência',
    'Mentoria Imparável', 'Direitos e Garantias Fundamentais em Questões', 'Controle de Constitucionalidade na Prática', 'Mentoria Imparável + Bônus',
    'Turma Além do Óbvio + Bônus', 'TJCE DA APROVAÇÃO', 'Aprova Concursos', 'Oficial de Justiça - TJCE 2026', 'Blusa Aulão GCM', 'Gravação Aulão GCM', 'AULÃO GCM',
    'Aurora Proluno', 'Star', 'Galaxy', 'Universe', 'Curso Exemplo', 'IA para Iniciantes'];

  /* Preços cadastrados por produto (os que aparecem nos order bumps de exemplo) */
  var PRICES = {
    'Festival das Imparáveis': [600], 'Mentoria Imparável + Bônus': [25999], 'Aurora Proluno': [10], 'Aprova Concursos': [10],
    'Blusa Aulão GCM': [30], 'Gravação Aulão GCM': [49.9], 'Star': [10], 'Galaxy': [1], 'Curso Exemplo': [12000], 'Universe': [10], 'IA para Iniciantes': [60]
  };

  var COLORS = ['#eb7129', '#38A169', '#E53E3E', '#DD6B20', '#D69E2E', '#805AD5', '#3182CE', '#00B5D8', '#D53F8C', '#202123'];
  var TEXT_COLORS = ['#ffffff'].concat(COLORS.slice(1));

  function seed() {
    var n = 0;
    function bump(name, product, price, active) {
      return { id: 'b' + (++n), name: name, product: product, price: price, active: active, showOn: [],
        buttonText: '', buttonColor: COLORS[0], buttonTextColor: '#ffffff', title: '', desc: '' };
    }
    return [
      bump('Festival', 'Festival das Imparáveis', 600, true), bump('APROVA', 'Mentoria Imparável + Bônus', 25999, false),
      bump('order combo 2', 'Aurora Proluno', 10, true), bump('order combo', 'Aprova Concursos', 10, true),
      bump('Evento Aulão GCM - Blusa', 'Blusa Aulão GCM', 30, true), bump('Evento Aulão GCM - gravação', 'Gravação Aulão GCM', 49.9, true),
      bump('Teste Plano Giovanny', 'Star', 10, true), bump('Teste Cá', 'Galaxy', 1, true), bump('Teste Plano2', 'Curso Exemplo', 12000, true),
      bump('TESTE 2', 'Star', 10, true), bump('TESTE', 'Universe', 10, true), bump('Teste Plano', 'Galaxy', 1, true),
      bump('Teste 2', 'Aurora Proluno', 10, true), bump('2cartoes', 'IA para Iniciantes', 60, true), bump('Teste', 'Aurora Proluno', 10, true)
    ];
  }
  /* As alterações ficam no navegador de quem testa, para o fluxo lista → formulário → lista funcionar */
  var KEY = 'pl-order-bumps-dados';
  function load() {
    try { var raw = localStorage.getItem(KEY); if (raw) { var d = JSON.parse(raw); if (Array.isArray(d)) return d; } } catch (e) {}
    return seed();
  }
  function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function newId(list) { var max = 0; list.forEach(function (b) { var n = +String(b.id).slice(1); if (n > max) max = n; }); return 'b' + (max + 1); }
  function money(v) { return v == null || v === '' ? 'R$ --,--' : 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  var S = window.PLShell;
  window.OrderBumps = { icon: S.icon, esc: S.esc, norm: S.norm, plural: S.plural, toast: S.toast, flash: S.flash,
    PRODUCTS: PRODUCTS, PRICES: PRICES, COLORS: COLORS, TEXT_COLORS: TEXT_COLORS, load: load, save: save, newId: newId, money: money };
})();
