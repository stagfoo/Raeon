const bel = require('bel');

import Fairybread from 'fairybread';
import RaeonComponents from 'components/soshi';
import {
  docBannerStyles,
  docTopMenu
} from 'style/docs';
import { nav } from 'domain/router'

//Sheets
const gs = new Fairybread('global');
gs.ensure('fonts', 'https://fonts.googleapis.com/css?family=Quicksand|Ubuntu')
//add these styles
docBannerStyles(gs);
docTopMenu(gs)



//Render
gs.render('head');
export function home() {
  console.log(RaeonComponents)
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

  </div>
  `
}