import { getRenderer } from 'soshi';

function MenuItem(html, link){
  return html`<a class="menu-item ${link.class}" href="${link.href}">${link.text}</a>`;
}

export default function Menu(props, html = getRenderer('dom')) : HTMLElement {
  return html`<nav class="menu" >${props.items.map(link => MenuItem(html, link)) }</nav>`;
}
