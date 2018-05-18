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

export const fadeGradients = {
  R: fade(colors.red),
  B: fade(colors.blue),
  G: fade(colors.green),
  P: fade(colors.pink),
  O: fade(colors.orangeL1),
  C: fade(colors.cyan),
};


export function backgroundGraident(type, colors){
  if(type === 'cross') {
    switch (colors) {
    case 'red-orange':
        return `background(${coreGradients.RO}`;
    case 'blue-pink':
        return `background(${coreGradients.BP}`;
    case 'green-cyan':
        return `background(${coreGradients.GC}`;
    case 'blue-cyan':
        return `background(${coreGradients.BC}`;
    case 'pink-cyan':
        return `background(${coreGradients.PC}`;
    }
  }
  if(type === 'fade'){
    switch (colors) {
    case 'red':
        return `background(${fadeGradients.R}`;
    case 'blue':
        return `background(${fadeGradients.B}`;
    case 'green':
        return `background(${fadeGradients.G}`;
    case 'cyan':
        return `background(${fadeGradients.C}`;
    case 'pink':
        return `background(${fadeGradients.P}`;
    }
  }
}

