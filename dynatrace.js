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

window.addEventListener('beforeunload', () => {
  action.leaveAction();
  session.end();
});

export { openKit, session };