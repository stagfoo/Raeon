import { action } from '@storybook/addon-actions';
const html = require('nanohtml');

export function knobToggleAttr(tag, knob, attr) {
  if (knob) {
    tag.setAttribute(attr, true)
  } else {
    tag.removeAttribute(attr)
  }
}
export function bindEvent(tag, type){
  tag.addEventListener(type, (event) => action(type)(event));
}

export function toggle(check, attr) {
  return check ? attr : '';
}
export function exampleFrame({figma, title, tag, cardClass}){
  const codeExample = html`<div>${tag}</div>`.innerHTML;
  const codeBlock = html`<code>${codeExample}</code>`
  window['hljs'].highlightBlock(codeBlock);
  return html`
     <div>
  <header>
    <h1>${title}</h1>
    <!-- Add Description -->
  </header>
  <div class="card ${cardClass}">
      ${tag}
    </div>
  <div class="card code">
    ${codeBlock}
  </div>
  <div class="card">
  <iframe style="border: none;" width="800" height="450" src="${figma}" allowfullscreen></iframe>
  </div>
  `
}
