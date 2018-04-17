import Title from 'components/Title/Title';
import Image from 'components/Image/Image';

export default function Card(props, html): HTMLElement {
  return html`<div class="card">
  ${Image({src:props.image, width:'100%'}, html)}
  ${Title({text: props.title}, html)}
  <p>${props.text}</p>
  </div>`;
}
