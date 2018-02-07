const page = require('page');
const morphdom = require('morphdom');
const app = document.getElementById('app');

import { home } from 'components/pages';
export const nav = [
  {
    text: 'Colors',
    href: '/',
    class: 'red-orange'
  },
  {
    text: 'Typography',
    href: '/typography',
    class: 'blue-pink'
  },
  {
    text: 'Actions',
    href: '/actions',
    class: 'green-cyan'
  },
  {
    text: 'Animation',
    href: '/animation',
    class: 'blue-cyan'
  },
  {
    text: 'Components',
    href: '/components',
    class: 'cyan-purple'
  }
]

page(nav[0].href, morphdom(app, home()));
page(nav[1].href, morphdom(app, home()));

