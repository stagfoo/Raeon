import colors from 'style/colors';
import { cross } from 'style/gradient';
import Fairybread from 'fairybread';

//Sheets
const globalSheet = new Fairybread('global');
globalSheet.add('html,body', `
margin:0; padding:0;`)
globalSheet.add('body', `
  background-color: #fff;
`);
globalSheet.add('#logo', `
  text-align: center;
  background-color: ${colors.shades.blueD2};
  min-height: 400px;
  width: 100%;
`)
globalSheet.add('#logo img', `
  max-width: 400px;
  margin-top: 150px;
`)



//Render
globalSheet.render('head');