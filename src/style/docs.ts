import colors from 'style/colors';
import { cross } from 'style/gradient';
import { base, feedback } from 'style/buttons';
export function docBannerStyles(sheet){
  sheet.add('html,body', `
    margin:0;
    padding:0;
    background: #fff;
    font-family: 'Ubuntu', sans-serif;
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


export function docTopMenu(sheet) {
  sheet.add('.menu-item', `${base()}`);
  sheet.add('.menu-item.red-orange:hover', `background: ${cross(colors.red, colors.orangeL1)};`)
  sheet.add('.menu-item.blue-pink:hover', `background: ${cross(colors.blue, colors.pink)};`)
  sheet.add('.menu-item.green-cyan:hover', `background: ${cross(colors.green, colors.cyan)};`)
  sheet.add('.menu-item.blue-cyan:hover', `background: ${cross(colors.blue, colors.cyan)};`)
  sheet.add('.menu-item.cyan-purple:hover', `background: ${cross(colors.pink, colors.cyan)};`)

  sheet.add(`.menu`, `
    display:block;
    margin-top: 100px;
  `);
}