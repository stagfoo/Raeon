import colors from 'style/colors';
import { cross } from 'style/gradient';

export function docBannerStyles(sheet){
  sheet.add('html,body', `
    margin:0;
    padding:0;
    background: #fff;
  `)
  sheet.add('#logo', `
    text-align: center;
    background-color: ${colors.shades.blueD2};
    min-height: 400px;
    width: 100%;
  `)
  sheet.add('#logo img', `
    max-width: 400px;
    margin-top: 150px;
  `)
}