import { getRenderer } from 'soshi';

function MenuItem(html, link){
  return html`<a href="${link.href}">${link.text}</a>`;
}

export default function Menu(props, html = getRenderer('dom')) : HTMLElement {
  return html`<nav>${props.items.map(link => MenuItem(html, link)) }</nav>`;
}
