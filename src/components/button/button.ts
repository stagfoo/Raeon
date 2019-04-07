import { LitElement, html, property, customElement } from 'lit-element';

@customElement('r-button')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';
  renderStyles(){
    return html`
    <style>
      button {
        background: hotpink;
      }
    </style>
    `;

  }
  render() {
    return html`
      ${this.renderStyles()}
      <button>Hello, ${this.name}!</button>
    `;
  }
}
