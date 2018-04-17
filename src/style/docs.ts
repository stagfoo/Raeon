import colors from 'style/colors';
import { coreGradients, cross } from 'style/gradient';
import { base, feedback } from 'style/buttons';

export function bodyStyles(sheet) {
  sheet.add('html,body', `
  margin:0;
  padding:0;
  background: #fff;
  font-family: 'Ubuntu', sans-serif;
  display: inline-block;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  font-size: 100%;
`)
}

export function docBannerStyles(sheet){
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

export function docTopMenu(sheet) {
  sheet.add('.menu-item', `${base()}`);
  sheet.add('.menu-item.red-orange:hover', `background: ${coreGradients.RO}`)
  sheet.add('.menu-item.blue-pink:hover', `background: ${coreGradients.BP}`)
  sheet.add('.menu-item.green-cyan:hover', `background:${coreGradients.GC}`)
  sheet.add('.menu-item.blue-cyan:hover', `background: ${coreGradients.BC}`)
  sheet.add('.menu-item.cyan-purple:hover', `background: ${coreGradients.PC}`)
  sheet.add(`.menu`, `
    display:block;
    margin-top: 100px;
  `);
}