import { createApp, Component } from 'vue';

export function mountComponent(rootComponent: Component, el = 'body') {
  const app = createApp(rootComponent);
  const dom = document.querySelector(el);
  if (!dom) throw new Error('dom element does no exit');
  const root = document.createElement('div');
  dom.appendChild(root);
  return {
    instance: app.mount(dom),
    unmount() {
      app.unmount();
      dom.removeChild(root);
    }
  };
}
