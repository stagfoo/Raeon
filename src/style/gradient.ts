import colors from 'style/colors';

export function cross(bottom, top){
  return `linear-gradient(30deg, ${bottom} -8%, ${top} 120%);`
}
export function fade(bottom){
  return `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${bottom} 100%)`
}

export const coreGradients = {
  RO: cross(colors.red, colors.orangeL1),
  BP: cross(colors.blue, colors.pink),
  GC: cross(colors.green, colors.cyan),
  BC: cross(colors.blue, colors.cyan),
  PC: cross(colors.pink, colors.cyan),
};

export function gradientSheet(sheet) {
  sheet.add('.gradient.cross.red-orange', `background: ${coreGradients.RO}`)
  sheet.add('.gradient.cross.blue-pink', `background: ${coreGradients.BP}`)
  sheet.add('.gradient.cross.green-cyan', `background:${coreGradients.GC}`)
  sheet.add('.gradient.cross.blue-cyan', `background: ${coreGradients.BC}`)
  sheet.add('.gradient.cross.pink-cyan', `background: ${coreGradients.PC}`)
  return sheet;
}