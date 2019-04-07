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

const componentStories = storiesOf('Components', module);
componentStories.addDecorator(withKnobs);
componentStories.add('Button', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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
componentStories.add('Icon Button', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',

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
componentStories.add('Picture Button', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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
componentStories.add('FAB Button', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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
componentStories.add('Card', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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
componentStories.add('Picture Card', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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
componentStories.add('More Menu', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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

componentStories.add('Chips', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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

componentStories.add('Picture Chips', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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

componentStories.add('Toggles', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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

componentStories.add('Inputs', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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

componentStories.add('Yaeba Stuff', () => {
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
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFpKGFJhA3XsT0GNMVzA0Ywww%2FRaeon%3Fnode-id%3D268%253A504',
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
