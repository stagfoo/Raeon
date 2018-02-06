const bel = require('bel');

import Fairybread from 'fairybread';
import RaeonComponents from 'components/soshi';
import {
  docBannerStyles
} from 'style/docs';

//Sheets
const globalSheet = new Fairybread('global');
//add these styles
docBannerStyles(globalSheet);




//Render
globalSheet.render('head');
export function home() {
  console.log(RaeonComponents)
  return bel`
  <div id="app">
    ${RaeonComponents.r.logo({
      src: 'logo.svg'
    })}
  </div>
  `
}