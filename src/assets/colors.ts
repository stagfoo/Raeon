import { colors } from './theme';


export function cross(bottom, top){
  return `linear-gradient(30deg, ${bottom} -8%, ${top} 120%);`
}
export function fade(bottom){
  return `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${bottom} 100%);`;
}
export function dropshadow(right, bottom, blur, opacity){
  return `${right}px ${bottom}px ${blur}px rgba(0,0,0,${opacity});`;
}

export const shadows = {
  'BOTTOM-RIGHT': dropshadow(8, 16, 20, 0.2),
  'TOP-RIGHT': dropshadow(8, -16, 20, 0.2),
  'TOP-LEFT': dropshadow(-8, -16, 20, 0.2),
  'BOTTOM-LEFT': dropshadow(-8, 16, 20, 0.2),
}

 export const coreGradients = {
  poison: cross(colors.poison[0], colors.poison[1]),
  peach: cross(colors.peach[0], colors.peach[1]),
  apricot: cross(colors.apricot[0], colors.apricot[1]),
  bubblegum: cross(colors.bubblegum[0], colors.bubblegum[1]),
  toxic: cross(colors.toxic[0], colors.toxic[1]),
  sky: cross(colors.sky[0], colors.sky[1]),
  "night-sky": cross(colors["night-sky"][0], colors["night-sky"][1]),
}
// export const coreGradients = {
//   RO: cross(colors.red, colors.orangeL1),
//   RY: cross(colors.redL1, colors.yellow),
//   RY1: cross(colors.redL1, colors.yellowL1),
//   BP: cross(colors.blue, colors.pink),
//   GC: cross(colors.green, colors.cyan),
//   BC: cross(colors.blue, colors.cyan),
//   PC: cross(colors.pink, colors.cyan),
//   PY: cross(colors.pink, colors.yellow),
//   DF: fade(colors.shades.greyD1),
//   LF: fade(colors.shades.pinkL1),
//   PF: fade(colors.pinkL2),
//   WF: fade('#ffffff')
// };
