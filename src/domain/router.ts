const page = require('page');
const morphdom = require('morphdom');
const app = document.getElementById('app');

import { home } from 'components/pages';

page('/', morphdom(app, home()));
