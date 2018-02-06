import { getRenderer, Image } from 'soshi';

export default function Logo(props, html = getRenderer('dom')) : HTMLElement {
  return html`<div id="logo">
    ${Image(props, html)}
  </div>
  `;
}
