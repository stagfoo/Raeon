const bel = require('bel');

import Fairybread from 'fairybread';
import RaeonComponents from 'components/soshi';
import {
  docBannerStyles,
  docTopMenu,
  bodyStyles
} from 'style/docs';
import { grid } from 'style/grid'
import { nav } from 'domain/router'

//Sheets
const gs = new Fairybread('global');
gs.ensure('fonts', 'https://fonts.googleapis.com/css?family=Quicksand|Ubuntu')
//add these styles
bodyStyles(gs);
docBannerStyles(gs);
docTopMenu(gs)
grid(gs);


//Render
gs.render('head');
export function home() {
  return bel`
  <div id="app">
    <div id="logo">
    ${RaeonComponents.r.image({
      src: 'logo.svg'
    })}
    ${RaeonComponents.r.menu({
      items: nav
    })}
    </div>
    <div class="container">
    <h1>Colors</h1>
    </div>
  </div>
  `
}

export function typo() {
  return bel`
  <div id="app">
    <div id="logo">
    ${RaeonComponents.r.image({
      src: 'logo.svg'
    })}
    ${RaeonComponents.r.menu({
      items: nav
    })}
    </div>
    <div class="container">
    <h1>Typography</h1>
    </div>
  </div>
  `
}