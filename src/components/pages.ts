const bel = require('bel');

import Fairybread from 'fairybread';
import RaeonComponents from 'components/soshi';

import { grid } from 'style/grid'
import { nav } from 'domain/router'

//Sheets
const gs = new Fairybread('global');
gs.ensure('fonts', 'https://fonts.googleapis.com/css?family=Quicksand|Ubuntu')

//Render
gs.render('head');
export function home() {
  return bel`
  <div id="app">
    <div id="logo">
    ${RaeonComponents.r.image({
      src: 'logo.svg'
    })}

    <code>
    <pre>
    </pre></code>
  </div>
  `
}
