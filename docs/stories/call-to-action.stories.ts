import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { toggle, exampleFrame } from '../.storybook/utils'
import { action } from '@storybook/addon-actions';
const html = require('nanohtml');

const themeOptions = {
    'dark': 'dark',
    'light': 'light'
}
const emphasisOptions = {
    'primary': 'primary',
    'secondary': 'secondary',
    'text': 'text'
}
const gradientOptions = {
    'poison': 'poison',
    'peach': 'peach',
    'apricot': 'apricot',
    'bubblegum': 'bubblegum',
    'sky': 'sky',
    'night-sky': 'night-sky',
    'toxic': 'toxic'
}

const buttonStories = storiesOf('Components', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add('Primary Button', () => {
    // Side toggles
    const toggles = {
        theme: select('theme', themeOptions, 'light'),
        label: text('Label text', 'Hello World'),
        color:select('color', gradientOptions, 'poison'),
        emphasis: select('emphasis', emphasisOptions, 'primary'),
    }
    return html`
    <div>
    ${exampleFrame({
        title: 'Button',
        tag: html`
        <r-button color="${toggles.color}">
            ${toggles.label}
        </r-button>
       `,
      cardClass: toggles.theme
    })}
    </div>
    `;
});
