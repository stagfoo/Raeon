import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { toggle, exampleFrame } from '../.storybook/utils'
import { action } from '@storybook/addon-actions';
const html = require('nanohtml');

const themeOptions = {
    'ecosystem': 'ecosystem',
    'dark': 'dark',
    'project': 'project'
}
const emphasisOptions = {
    'primary': 'primary',
    'secondary': 'secondary',
    'text': 'text'
}

const buttonStories = storiesOf('Calls to Action', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add('Primary Button', () => {
    // Side toggles
    const toggles = {
        theme: select('theme', themeOptions, 'ecosystem'),
        label: text('Label text', 'Hello World'),
        icon: text('Icon', 'star'),
        disabled: toggle(boolean('disabled', false), 'disabled'),
        emphasis: select('emphasis', emphasisOptions, 'primary'),
        onclick: action('click'),
        onmouseover: action('mouseover'),
    }
    return html`
    <div>
    ${exampleFrame({
        tagName: 'raeon-button',
        title: 'Button with icon',
        tag: html`
        <r-button>
            ${toggles.label}
        </r-button>
       `,
      cardClass: toggles.theme
    })}
    </div>
    `;
});
