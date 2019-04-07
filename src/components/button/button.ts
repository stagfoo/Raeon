import { LitElement, html, customElement } from 'lit-element';
import { coreGradients } from '../../assets/colors';
import { componentBase } from '../../assets/component-bases';
import { designUnit, timing } from '../../assets/sizing';
import { colors } from '../../assets/theme';


@customElement('r-button')
export class ElementsTag extends LitElement {
  disabled: boolean;
  color: string;

  static get properties() {
    return {
      disabled: { type: Boolean},
      color: { type: String, defaultValue: 'poison'}
    };
  }

  renderStyles(color){
    return html`
    <style>
      *, input, button {outline:none !important; }
      *:focus { outline: none !important; }
      button {
        ${componentBase.button};
        position:relative;
        border-radius: ${designUnit(3.5)}px;
        color: ${colors.white};
        background-image: ${coreGradients[color]};
        background-size: 100%;
        background-position: 0 0;
      }
      button:hover {
        transition: ${timing.normal} ease all;
        background-size: 200%;
        background-position: 100%;

      }
      button:active {
        transition: ${timing.fast} ease all;
        background-size: 800%;
        background-position: 0;
      }

    </style>
    `;

  }
  render() {
    return html`
      ${this.renderStyles(this.color)}
      <button><slot></slot></button>
    `;
  }
}
