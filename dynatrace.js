import { OpenKitBuilder } from '@dynatrace/openkit-js';

const openKit = new OpenKitBuilder(
  'https://bf77899qux.bf.dynatrace.com/mbeacon',
  'eb2e0f6a-d073-4c00-8d1f-a29513bc2276',
  String(Date.now()) // ID único por sessão
).build();

const session = openKit.createSession();


// Regista a página atual
const pageName = document.title || window.location.pathname;
const action = session.enterAction(pageName);

// Rastrear botão "Criar Sala"
document.getElementById('btn-create')?.addEventListener('click', () => {
  const action = session.enterAction('Clique - Criar Sala');
  action.leaveAction();
});

// Rastrear botão "Entrar em Sala"
document.getElementById('btn-join')?.addEventListener('click', () => {
  const action = session.enterAction('Clique - Entrar em Sala');
  action.leaveAction();
});

// Rastrear abertura do FAQ
document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      const titulo = detail.querySelector('summary')?.textContent?.trim() || 'FAQ';
      const action = session.enterAction(`FAQ Aberto - ${titulo}`);
      action.leaveAction();
    }
  });
});

window.addEventListener('beforeunload', () => {
  action.leaveAction();
  session.end();
});

window.addEventListener('error', (e) => {
  const action = session.enterAction('Erro JS');
  action.reportError('JavaScript Error', e.error);
  action.leaveAction();
});

export { openKit, session };